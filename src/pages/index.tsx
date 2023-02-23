import { Inter } from '@next/font/google';

import { BringYourIdeas } from '../components/BringYourIdeas';
import { CreateAndEnhanceApps } from '../components/CreateAndEnhanceApps';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { TechPeopleSolveTech } from '../components/TechPeopleSolveTech';
import { WhatWeProvide } from '../components/WhatWeProvide';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
});
export default function IndexPage() {
  return (
    <div className="mx-auto  antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />
      <Hero />
      <div
        className={`relative  flex min-h-screen bg-[#F0F2F5] ${inter.className} items-center`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-6">
          <WhatWeProvide />
          <div className="col-span-2 flex flex-col gap-6">
            <CreateAndEnhanceApps />
            <TechPeopleSolveTech />
            <BringYourIdeas />
          </div>
        </div>
      </div>
      {/* <VerticalFeatures />
      <Footer /> */}
    </div>
  );
}
