'use client';

import {motion} from 'framer-motion';
import Image from 'next/image';

type Campaign = {
  id: string;
  image: string;
  tags: string[];
  title: string;
  genre: string;
  duration: string;
  description: string;
};

export function CampaignCard({campaign}: {campaign: Campaign}) {
  return (
    <motion.article
      layout
      initial={{opacity: 0, scale: 0.96}}
      animate={{opacity: 1, scale: 1}}
      exit={{opacity: 0, scale: 0.96}}
      whileHover={{y: -8}}
      className="group clip-fantasy overflow-hidden border border-gold/25 bg-ember/80 shadow-glow"
    >
      <div className="relative h-48 overflow-hidden bg-ember">
        <Image
          src={campaign.image}
          alt=""
          fill
          loading="eager"
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/30 to-night/15" />
        <div className="absolute inset-0 map-texture opacity-35" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs uppercase text-parchment">
          <span>{campaign.genre}</span>
          <span>{campaign.duration}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading text-2xl text-bone">{campaign.title}</h3>
        <p className="mt-3 text-sm leading-6 text-ash">{campaign.description}</p>
      </div>
    </motion.article>
  );
}
