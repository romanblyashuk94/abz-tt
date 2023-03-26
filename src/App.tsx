import React, { FC, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { PageSection } from './components/PageSection/PageSection';
import { Users } from './components/Users/Users';
import s from './App.module.scss';
import { theme } from './assets/style_utils/muiConfig/muiConfig';

export const App:FC = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div className={s.app}>
        <Header />
        <main className={s.app__mainContent}>
          <HeroSection />
          <PageSection title="Working with GET request" id="users">
            <Users isFormSubmited={isSubmited} />
          </PageSection>
          <PageSection title={isSubmited ? 'User successfully registered' : 'Working with POST request'} id="form">
            <Form isSubmited={isSubmited} setIsSubmited={setIsSubmited} />
          </PageSection>
        </main>
      </div>
      <ToastContainer />
    </ThemeProvider>
  );
};
