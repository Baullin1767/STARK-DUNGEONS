'use client';

import {useState} from 'react';
import {motion} from 'framer-motion';
import {Dices} from 'lucide-react';
import type {SiteData} from '@/data/site-data';
import {MagicButton} from '@/components/magic-button';

export function DiceRoller({data}: {data: SiteData}) {
  const [roll, setRoll] = useState(100);
  const [spinning, setSpinning] = useState(false);

  const message = data.dice.messages[roll - 1];

  function rollDice() {
    setSpinning(true);
    window.setTimeout(() => {
      setRoll(Math.floor(Math.random() * 100) + 1);
      setSpinning(false);
    }, 520);
  }

  return (
    <div className="clip-fantasy gold-border relative overflow-hidden bg-night/70 p-8 text-center shadow-arcane">
      <div className="fog-layer" />
      <div className="relative z-10">
        <h2 className="font-heading text-4xl text-bone">{data.dice.title}</h2>
        <motion.div
          animate={spinning ? {rotate: 360, scale: [1, 1.12, 1]} : {rotate: 0, scale: 1}}
          transition={{duration: 0.5}}
          className="mx-auto my-8 flex h-32 w-32 flex-col items-center justify-center clip-fantasy border border-gold/50 bg-ember font-black text-gold shadow-glow"
        >
          <span className="text-xs uppercase tracking-[0.28em] text-parchment/70">d100</span>
          <span className="mt-1 text-6xl leading-none">{roll}</span>
        </motion.div>
        <p className="mx-auto mb-6 min-h-12 max-w-xl text-lg text-parchment">{message}</p>
        <MagicButton onClick={rollDice}>
          <Dices className="h-4 w-4" aria-hidden />
          {data.dice.button}
        </MagicButton>
      </div>
    </div>
  );
}
