import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from 'constants';
import { GuidesContainer } from 'features/guides';
import { MapContainer } from 'features/map';
import { ErrorPage } from 'features/error';

class MainLayout extends Component {
    render() {
        return (
            <Switch>
                <Route path={ROUTES.GUIDES} exact component={GuidesContainer} />
                <Route path={ROUTES.MAP} exact component={MapContainer} />
                <Route exact component={ErrorPage} />
            </Switch>
        );
    }
}

export default MainLayout;
