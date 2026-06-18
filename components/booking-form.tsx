'use client';

import {FormEvent, useState} from 'react';
import type {SiteData} from '@/data/site-data';
import {MagicButton} from '@/components/magic-button';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

export function BookingForm({data}: {data: SiteData}) {
  const [status, setStatus] = useState<SubmitStatus>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: formData.get('name'),
          telegram: formData.get('telegram'),
          about: formData.get('about'),
          website: formData.get('website')
        })
      });

      if (!response.ok) {
        throw new Error(`Booking request failed: ${response.status}`);
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-ash">
          <span>{data.booking.fields.name}</span>
          <input
            required
            name="name"
            autoComplete="name"
            maxLength={80}
            className="gold-border min-h-12 bg-night/65 px-4 text-bone outline-none transition focus:border-gold"
          />
        </label>
        <label className="grid gap-2 text-sm text-ash">
          <span>{data.booking.fields.telegram}</span>
          <input
            required
            name="telegram"
            autoComplete="off"
            maxLength={80}
            placeholder="@username"
            className="gold-border min-h-12 bg-night/65 px-4 text-bone outline-none transition focus:border-gold"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm text-ash">
        <span>{data.booking.fields.about}</span>
        <textarea
          required
          name="about"
          rows={5}
          maxLength={1000}
          className="gold-border bg-night/65 p-4 text-bone outline-none transition focus:border-gold"
        />
      </label>

      <label className="hidden" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <MagicButton type="submit" disabled={status === 'sending'} aria-disabled={status === 'sending'}>
          {status === 'sending' ? data.booking.sending : data.booking.submit}
        </MagicButton>
        <div aria-live="polite">
          {status === 'success' && <p className="text-sm font-semibold text-gold">{data.booking.success}</p>}
          {status === 'error' && <p className="text-sm font-semibold text-red-300">{data.booking.error}</p>}
        </div>
      </div>
    </form>
  );
}
