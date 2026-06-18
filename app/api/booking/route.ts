import {NextResponse} from 'next/server';

export const runtime = 'nodejs';

const MAX_NAME_LENGTH = 80;
const MAX_TELEGRAM_LENGTH = 80;
const MAX_ABOUT_LENGTH = 1000;

function readText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram booking integration is not configured.');
    return NextResponse.json({error: 'Service is not configured'}, {status: 503});
  }

  let body: Record<string, unknown>;

  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({error: 'Invalid request body'}, {status: 400});
  }

  if (readText(body.website, 100)) {
    return NextResponse.json({ok: true});
  }

  const name = readText(body.name, MAX_NAME_LENGTH);
  const telegram = readText(body.telegram, MAX_TELEGRAM_LENGTH);
  const about = readText(body.about, MAX_ABOUT_LENGTH);

  if (!name || !telegram || !about) {
    return NextResponse.json({error: 'All fields are required'}, {status: 400});
  }

  const message = [
    '🎲 Новая заявка со STARK DUNGEONS',
    '',
    `Имя: ${name}`,
    `Telegram: ${telegram}`,
    '',
    'О себе:',
    about
  ].join('\n');

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        disable_web_page_preview: true
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000)
    });

    if (!telegramResponse.ok) {
      const telegramError = await telegramResponse.text();
      console.error('Telegram API error:', telegramResponse.status, telegramError);
      return NextResponse.json({error: 'Failed to deliver booking'}, {status: 502});
    }

    return NextResponse.json({ok: true});
  } catch (error) {
    console.error('Telegram request failed:', error);
    return NextResponse.json({error: 'Failed to deliver booking'}, {status: 502});
  }
}
