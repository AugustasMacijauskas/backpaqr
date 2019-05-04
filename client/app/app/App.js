import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { history } from 'core';
import { MainLayout } from 'features/layout'
import store from './store';

const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <MainLayout />
        </Router>
    </Provider>
);

export default App;