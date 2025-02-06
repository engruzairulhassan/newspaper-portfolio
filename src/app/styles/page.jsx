import React, { useState } from 'react';
import App from '../components/App';
import themes from './styles/themes';

const Page = () => {
  const [theme, setTheme] = useState('default');

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return <App theme={theme} changeTheme={changeTheme} />;
};

export default Page;