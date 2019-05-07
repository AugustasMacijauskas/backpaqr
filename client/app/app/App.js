import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import localization from 'core/localization';
import { history } from 'core';
import { MainLayout } from 'features/layout'
import store from './store';

const App = () => (
    <Provider store={store}>
        <I18nextProvider i18n={localization}>
            <Router history={history}>
                <MainLayout />
            </Router>
        </I18nextProvider>
    </Provider>
);

export default App;