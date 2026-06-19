import Image from 'next/image';

export function PortraitFrame() {
  return (
    <div className="relative mx-auto max-w-[430px]">
      <div className="absolute -inset-5 rounded-full bg-arcane/20 blur-3xl" />
      <div className="absolute -inset-3 clip-fantasy border border-gold/35" />
      <div className="relative clip-fantasy overflow-hidden border border-gold/45 bg-night shadow-arcane">
        <Image
          src="/images/alexander.jpg"
          alt="Alexandr Starkov"
          width={1024}
          height={1536}
          className="aspect-[4/5] w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="rune-divider mb-4" />
          <p className="font-heading text-2xl text-bone">Alexandr Starkov</p>
        </div>
      </div>
      <div className="absolute -right-2 top-10 h-24 w-24 rounded-full border border-arcane/40 bg-radial-rune blur-[1px]" />
    </div>
  );
}
