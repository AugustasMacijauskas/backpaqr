import React, { Component, Fragment} from 'react';
import { Redirect, } from "react-router";
import { Route, Switch } from 'react-router-dom';
import {
    CssBaseline, withStyles,
} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import { withTranslation } from "react-i18next";

import { ROUTES } from 'constants';
import { Header } from './components';
import { GuidesContainer } from 'features/guides';
import { MapContainer } from 'features/map';
import { ErrorPage } from 'features/error';

// Styles
const styles = () => ({
    containers: {
        paddingTop: '4.2%',
    }
});

class MainLayout extends Component {
    static propTypes = {
        classes: PropTypes.shape({}).isRequired,
    };

    handleLanguageChange = (language) => {
        const { i18n } = this.props;

        i18n.changeLanguage(language);
    };

    render() {
        const { classes, t } = this.props;

        return (
            <Fragment>
                <CssBaseline />
                <Header
                    handleLanguageChange={this.handleLanguageChange}
                    t={t}
                />
                <div className={classes.containers}>
                    <Switch>
                            <Route path={ROUTES.GUIDES} exact component={GuidesContainer} />
                            <Route path={ROUTES.MAP} exact component={MapContainer} />
                            <Redirect from={ROUTES.MAIN} to={ROUTES.GUIDES} />
                            <Route component={ErrorPage} />
                    </Switch>
                </div>
            </Fragment>
        );
    }
}

export default withTranslation()(withStyles(styles)(MainLayout));
