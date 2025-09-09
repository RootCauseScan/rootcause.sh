import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustStrip } from '../components/sections/TrustStrip';
import { KeyStats } from '../components/sections/KeyStats';
import { Features } from '../components/sections/Features';
import { Installation } from '../components/sections/Installation';
import { Timeline } from '../components/sections/Timeline';
import { CTA } from '../components/sections/CTA';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TrustStrip />
      <KeyStats />
      <Features />
      <Installation />
      <Timeline />
      <CTA />
    </div>
  );
};