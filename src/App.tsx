/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StrictMode } from 'react';
import { Hero } from './components/Hero';
import { MetaAds } from './components/MetaAds';
import { CRM } from './components/CRM';
import { GoogleAds } from './components/GoogleAds';
import { Keywords } from './components/Keywords';
import { GMN } from './components/GMN';
import { Projections } from './components/Projections';
import { NextSteps } from './components/NextSteps';
import { SocialMedia } from './components/SocialMedia';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-white selection:bg-brand-coral selection:text-brand-white">
      <Hero />
      <MetaAds />
      <CRM />
      <GoogleAds />
      <Keywords />
      <Projections />
      <GMN />
      <NextSteps />
      <SocialMedia />
    </div>
  );
}

