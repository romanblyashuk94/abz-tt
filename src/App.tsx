import React, { FC } from 'react';
import s from './App.module.scss';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { PageSection } from './components/PageSection/PageSection';
import { Users } from './components/Users/Users';

export const App:FC = () => {
  return (
    <div className={s.app}>
      <Header />
      <main className={s.app__mainContent}>
        <HeroSection />
        <PageSection title="Working with GET request">
          <Users />
        </PageSection>
        <PageSection title="Working with POST request">
        </PageSection>
      </main>
    </div>
  );
};
