'use client';

import {useMemo, useState} from 'react';
import {motion} from 'framer-motion';
import {Dices} from 'lucide-react';
import type {SiteData} from '@/data/site-data';
import {MagicButton} from '@/components/magic-button';

export function DiceRoller({data}: {data: SiteData}) {
  const [roll, setRoll] = useState(20);
  const [spinning, setSpinning] = useState(false);

  const message = useMemo(() => {
    if (roll === 20) return data.dice.natural20;
    if (roll === 1) return data.dice.natural1;
    return data.dice.messages[roll % data.dice.messages.length];
  }, [data.dice, roll]);

  function rollDice() {
    setSpinning(true);
    window.setTimeout(() => {
      setRoll(Math.floor(Math.random() * 20) + 1);
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
          className="mx-auto my-8 grid h-32 w-32 place-items-center clip-fantasy border border-gold/50 bg-ember text-6xl font-black text-gold shadow-glow"
        >
          {roll}
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
