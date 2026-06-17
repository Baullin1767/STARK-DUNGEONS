'use client';

import {useState} from 'react';
import type {SiteData} from '@/data/site-data';
import {MagicButton} from '@/components/magic-button';

export function BookingForm({data}: {data: SiteData}) {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {data.booking.fields.slice(0, 6).map((field, index) => (
          <label key={field} className="grid gap-2 text-sm text-ash">
            <span>{field}</span>
            <input
              required={index < 2}
              type={field.toLowerCase().includes('email') ? 'email' : 'text'}
              className="gold-border min-h-12 bg-night/65 px-4 text-bone outline-none transition focus:border-gold"
            />
          </label>
        ))}
      </div>
      <label className="grid gap-2 text-sm text-ash">
        <span>{data.booking.fields[6]}</span>
        <textarea required rows={5} className="gold-border bg-night/65 p-4 text-bone outline-none transition focus:border-gold" />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <MagicButton>{data.booking.submit}</MagicButton>
        {sent && <p className="text-sm font-semibold text-gold">{data.booking.success}</p>}
      </div>
    </form>
  );
}
