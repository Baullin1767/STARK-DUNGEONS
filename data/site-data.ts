export type Locale = 'ru' | 'en';

export type SiteData = ReturnType<typeof getSiteData>;

const sharedCampaigns = [
  {
    id: 'lantern',
    image: 'linear-gradient(135deg, rgba(200,155,60,.28), rgba(36,26,18,.9)), radial-gradient(circle at 35% 30%, rgba(255,201,91,.32), transparent 24%)',
    tags: ['oneShot', 'beginner', 'mystery']
  },
  {
    id: 'forest',
    image: 'linear-gradient(135deg, rgba(124,58,237,.28), rgba(10,9,16,.92)), radial-gradient(circle at 68% 28%, rgba(232,214,176,.22), transparent 24%)',
    tags: ['campaign', 'darkFantasy', 'mystery']
  },
  {
    id: 'dragon',
    image: 'linear-gradient(135deg, rgba(139,46,46,.38), rgba(10,9,16,.92)), radial-gradient(circle at 44% 36%, rgba(200,155,60,.28), transparent 26%)',
    tags: ['campaign', 'darkFantasy']
  },
  {
    id: 'clockwork',
    image: 'linear-gradient(135deg, rgba(200,155,60,.22), rgba(21,17,29,.94)), repeating-linear-gradient(45deg, rgba(232,214,176,.08) 0 1px, transparent 1px 10px)',
    tags: ['campaign', 'mystery']
  },
  {
    id: 'oracle',
    image: 'linear-gradient(135deg, rgba(232,214,176,.18), rgba(10,9,16,.94)), radial-gradient(circle at 50% 30%, rgba(124,58,237,.32), transparent 25%)',
    tags: ['oneShot', 'mystery', 'darkFantasy']
  },
  {
    id: 'coast',
    image: 'linear-gradient(135deg, rgba(139,46,46,.3), rgba(36,26,18,.9)), radial-gradient(circle at 72% 24%, rgba(200,155,60,.26), transparent 24%)',
    tags: ['campaign', 'beginner']
  }
];

export function getSiteData(locale: Locale) {
  const ru = locale === 'ru';

  return {
    locale,
    altLocale: ru ? 'en' : 'ru',
    altHref: ru ? '/en' : '/',
    nav: ru
      ? ['О мастере', 'Приключения', 'Форматы игр', 'Отзывы', 'Стоимость', 'Контакты']
      : ['About', 'Campaigns', 'Formats', 'Reviews', 'Pricing', 'Contact'],
    navIds: ['about', 'campaigns', 'formats', 'reviews', 'pricing', 'contact'],
    cta: ru ? 'Записаться' : 'Book a Session',
    hero: {
      title: ru ? 'Ваши решения создают легенду' : 'Your choices create the legend',
      subtitle: ru
        ? 'Погрузитесь в историю, где каждое решение имеет значение. Авторские кампании, атмосферные приключения и незабываемые персонажи для новичков и опытных игроков.'
        : 'Step into a story where every choice matters. Custom campaigns, cinematic adventures and unforgettable characters for both beginners and experienced players.',
      primary: ru ? 'Начать приключение' : 'Begin Adventure',
      secondary: ru ? 'Смотреть кампании' : 'Explore Campaigns'
    },
    profile: {
      title: 'Alexander Starkov',
      role: ru ? 'Dungeon Master и рассказчик' : 'Dungeon Master & Storyteller',
      intro: ru
        ? 'Провожу кампании и ваншоты, в которых решения игроков действительно меняют мир. Люблю сочетать атмосферный отыгрыш, моральные выборы, исследования и тактические сражения.'
        : 'I run campaigns and one-shots where player decisions genuinely shape the world. My games combine roleplay, exploration, meaningful choices and tactical combat.',
      specTitle: ru ? 'Специализация' : 'Specialization',
      specs: ru
        ? ['Кинематографичные истории', 'Тактические сражения', 'Глубокий отыгрыш персонажей', 'Кампании с последствиями выбора']
        : ['Cinematic storytelling', 'Tactical encounters', 'Character-driven adventures', 'Choice-driven campaigns'],
      stats: ru
        ? ['Онлайн и офлайн', 'RU / EN', 'Ваншоты и кампании', 'Тёмное фэнтези, мистика, драма']
        : ['Online and offline', 'RU / EN', 'One-shots and campaigns', 'Dark fantasy, mystery, drama']
    },
    servicesTitle: ru ? 'Форматы игр' : 'Game Formats',
    services: ru
      ? [
          ['Ваншот для новичков', 'Мягкое введение в D&D с готовыми героями, ясными правилами и ярким финалом.', '3-4 часа', '3-5 игроков'],
          ['Авторская кампания', 'Долгая история с личными арками, последствиями решений и живым миром.', '8+ сессий', '4-6 игроков'],
          ['Онлайн игра', 'Атмосферная сессия в Discord и виртуальном столе с картами и музыкой.', '3 часа', '3-6 игроков'],
          ['Корпоративное мероприятие', 'Командное приключение для события, тимбилдинга или творческого вечера.', '2-4 часа', '5-8 игроков'],
          ['Частная группа', 'Игра под ваш жанр, темп и опыт участников.', 'Гибко', '2-6 игроков'],
          ['Подарочный сертификат', 'Персональный квест в подарок другу, паре или компании.', 'На выбор', '2-6 игроков']
        ]
      : [
          ['Beginner One-Shot', 'A friendly D&D introduction with ready heroes, clear rules and a memorable finale.', '3-4 hours', '3-5 players'],
          ['Custom Campaign', 'A long-form story with personal arcs, choice consequences and a living world.', '8+ sessions', '4-6 players'],
          ['Online Adventure', 'An atmospheric Discord and virtual tabletop session with maps and music.', '3 hours', '3-6 players'],
          ['Corporate Event', 'A collaborative adventure for events, team building or creative evenings.', '2-4 hours', '5-8 players'],
          ['Private Group', 'A game shaped around your genre, pace and player experience.', 'Flexible', '2-6 players'],
          ['Gift Session', 'A personal quest as a gift for a friend, couple or group.', 'Custom', '2-6 players']
        ],
    serviceCta: ru ? 'Выбрать формат' : 'Choose Format',
    campaignsTitle: ru ? 'Портфолио приключений' : 'Campaign Portfolio',
    filters: ru
      ? [
          ['all', 'Все'],
          ['oneShot', 'Ваншоты'],
          ['campaign', 'Кампании'],
          ['beginner', 'Новички'],
          ['darkFantasy', 'Тёмное фэнтези'],
          ['mystery', 'Детектив']
        ]
      : [
          ['all', 'All'],
          ['oneShot', 'One-Shots'],
          ['campaign', 'Campaigns'],
          ['beginner', 'Beginner'],
          ['darkFantasy', 'Dark Fantasy'],
          ['mystery', 'Mystery']
        ],
    campaigns: sharedCampaigns.map((campaign, index) => {
      const copy = ru
        ? [
            ['Таверна Чёрного Фонаря', 'Мистика / 1-4 уровни', 'Один вечер', 'Ночь в таверне, где каждый гость скрывает долг перед мёртвым трактирщиком.'],
            ['Проклятие Лунного Леса', 'Тёмное фэнтези / 3-6 уровни', '4-6 сессий', 'Древний лес просыпается, а луна выбирает новых охотников и жертв.'],
            ['Пепел Короля Драконов', 'Эпик / 5-10 уровни', '8+ сессий', 'Королевство стоит на пепле драконьей династии, и трон снова зовёт огонь.'],
            ['Заводной Город', 'Детектив / 2-5 уровни', '3-5 сессий', 'Город механизмов повторяет один день, пока герои не найдут сломанное сердце машины.'],
            ['Гробница Безмолвного Оракула', 'Мистика / 4-7 уровни', '2-3 сессии', 'В подземном храме ответы звучат только тем, кто готов заплатить воспоминаниями.'],
            ['Багровый Берег', 'Море / 3-8 уровни', '6+ сессий', 'Пираты, культы и штормы сходятся там, где море окрашивается красным.']
          ]
        : [
            ['The Black Lantern Tavern', 'Mystery / Levels 1-4', 'One evening', 'A night in a tavern where every guest owes a debt to the dead innkeeper.'],
            ['Curse of the Moonlit Forest', 'Dark Fantasy / Levels 3-6', '4-6 sessions', 'An ancient forest awakens while the moon chooses new hunters and prey.'],
            ['Ashes of the Dragon King', 'Epic / Levels 5-10', '8+ sessions', 'A kingdom stands on the ashes of a dragon dynasty, and the throne calls for fire again.'],
            ['The Clockwork City', 'Mystery / Levels 2-5', '3-5 sessions', 'A city of mechanisms repeats one day until the heroes find the machine heart.'],
            ['Tomb of the Silent Oracle', 'Mystery / Levels 4-7', '2-3 sessions', 'In an underground temple, answers speak only to those willing to pay in memories.'],
            ['The Crimson Coast', 'Sea / Levels 3-8', '6+ sessions', 'Pirates, cults and storms converge where the sea turns red.']
          ];

      return {
        ...campaign,
        title: copy[index][0],
        genre: copy[index][1],
        duration: copy[index][2],
        description: copy[index][3]
      };
    }),
    timelineTitle: ru ? 'Как проходит сессия' : 'Session Experience',
    timeline: ru
      ? ['Подготовка персонажей', 'Начало приключения', 'Исследование мира', 'Сражения и испытания', 'Кульминация', 'Последствия выбора']
      : ['Character Creation', 'Adventure Begins', 'Exploration', 'Encounters', 'Climax', 'Consequences'],
    dice: {
      title: ru ? 'Кубик судьбы' : 'Dice of Fate',
      button: ru ? 'Бросить кубик судьбы' : 'Roll the Dice of Fate',
      natural20: ru ? 'Натуральная двадцатка. Боги благосклонны.' : 'Natural 20. The gods are smiling upon you.',
      natural1: ru ? 'Натуральная единица. Судьба приготовила испытание.' : 'Natural 1. Fate has prepared a challenge.',
      messages: ru
        ? ['В таверне кто-то уже ждёт вас.', 'Древняя карта раскрыла новый путь.', 'NPC запомнит этот выбор.', 'В темноте шевельнулась легенда.']
        : ['Someone is already waiting in the tavern.', 'An ancient map reveals a new path.', 'An NPC will remember this choice.', 'A legend stirs in the dark.']
    },
    galleryTitle: ru ? 'Галерея миров' : 'World Gallery',
    gallery: ru
      ? ['Боевые карты', 'Таверны', 'Подземелья', 'Леса', 'Боссы', 'Моменты персонажей']
      : ['Battle Maps', 'Taverns', 'Dungeons', 'Forests', 'Boss Encounters', 'Character Moments'],
    reviewsTitle: ru ? 'Отзывы игроков' : 'Player Reviews',
    reviews: ru
      ? [
          ['Мария', 'Играла впервые и ни разу не почувствовала себя потерянной. Атмосфера была как в хорошем сериале.'],
          ['Илья', 'NPC живые, бои напряжённые, а последствия решений догоняли нас через несколько сессий.'],
          ['Анна', 'Лучшее корпоративное приключение: все включились, смеялись и спорили как настоящая партия.']
        ]
      : [
          ['Maria', 'It was my first game and I never felt lost. The atmosphere felt like a great series.'],
          ['Ilya', 'The NPCs felt alive, combat was tense, and our choices caught up with us sessions later.'],
          ['Anna', 'The best corporate adventure: everyone joined in, laughed and argued like a real party.']
        ],
    pricingTitle: ru ? 'Стоимость' : 'Pricing',
    pricing: ru
      ? [
          ['Первая Квестовая Ночь', 'Знакомство с игрой, готовые персонажи, один завершённый сюжет.', 'от 8 000 ₽'],
          ['Героическая Компания', 'Серия сессий, личные арки, карты, музыка и подготовка между играми.', 'от 18 000 ₽'],
          ['Легендарная Кампания', 'Долгий сезон с миром, фракциями, последствиями и индивидуальными материалами.', 'по запросу']
        ]
      : [
          ['First Quest', 'Game introduction, ready characters and one complete story.', 'from $120'],
          ['Heroic Party', 'A session arc with personal stories, maps, music and prep between games.', 'from $280'],
          ['Legendary Campaign', 'A long season with worldbuilding, factions, consequences and custom materials.', 'custom']
        ],
    faqTitle: 'FAQ',
    faq: ru
      ? [
          ['Нужен ли опыт игры?', 'Нет. Я объясню правила через действие и помогу создать героя.'],
          ['Можно ли играть онлайн?', 'Да. Провожу игры в Discord и на виртуальных столах.'],
          ['Сколько длится сессия?', 'Обычно 3-4 часа, но формат можно адаптировать под группу.'],
          ['Сколько игроков может участвовать?', 'Оптимально 3-6 игроков, для событий можно больше.']
        ]
      : [
          ['Do I need previous experience?', 'No. I teach the rules through play and help with character creation.'],
          ['Can we play online?', 'Yes. I run sessions in Discord and virtual tabletops.'],
          ['How long is a session?', 'Usually 3-4 hours, but the format can fit the group.'],
          ['How many players can join?', 'The sweet spot is 3-6 players, with larger event formats available.']
        ],
    booking: {
      title: ru ? 'Готовы начать приключение?' : 'Ready to begin your adventure?',
      subtitle: ru
        ? 'Расскажите о своей группе, желаемом формате и любимом жанре приключений.'
        : 'Tell me about your group, preferred format and favorite adventure style.',
      fields: ru
        ? ['Имя', 'Email', 'Telegram / Discord', 'Количество игроков', 'Формат', 'Опыт', 'Сообщение']
        : ['Name', 'Email', 'Telegram / Discord', 'Player Count', 'Preferred Format', 'Experience Level', 'Message'],
      submit: ru ? 'Отправить вестника' : 'Send Messenger',
      success: ru ? 'Ваш вестник отправлен. Скоро я свяжусь с вами.' : 'Your messenger has been sent. I will contact you soon.'
    },
    footer: ru ? 'Ваши решения создают легенду.' : 'Your choices create the legend.'
  };
}
