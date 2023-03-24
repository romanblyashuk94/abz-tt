import React, { FC, useState } from 'react';
import s from './App.module.scss';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { PageSection } from './components/PageSection/PageSection';
import { Users } from './components/Users/Users';

export const App:FC = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  return (
    <div className={s.app}>
      <Header />
      <main className={s.app__mainContent}>
        <HeroSection />
        <PageSection title="Working with GET request">
          <Users isFormSubmited={isSubmited} />
        </PageSection>
        <PageSection title="Working with POST request">
          <Form isSubmited={isSubmited} onSubmit={setIsSubmited} />
        </PageSection>
      </main>
    </div>
  );
};
