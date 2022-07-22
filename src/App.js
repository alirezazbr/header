import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { CssBaseline, Box } from '@mui/material';

import AppRoutes from './routes';
import i18nInstance from './i18n';

const App = () => {
  return (
    <I18nextProvider i18n={i18nInstance}>
      <CssBaseline />
      <Box component="main">
        <AppRoutes />
      </Box>
    </I18nextProvider>
  )
}

export default App;
