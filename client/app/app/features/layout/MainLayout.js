import React, { Component, Fragment} from 'react';
import { Redirect, withRouter, } from "react-router";
import { Route, Switch } from 'react-router-dom';
import { CssBaseline, withStyles, } from '@material-ui/core';
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
        t: PropTypes.func.isRequired,
        i18n: PropTypes.shape({}).isRequired
    };

    handleLanguageChange = (language) => {
        const { i18n } = this.props;

        i18n.changeLanguage(language);
    };

    render() {
        const { classes, t, i18n } = this.props;

        return (
            <Fragment>
                <CssBaseline />
                <Header
                    handleLanguageChange={this.handleLanguageChange}
                    handleSearch={this.handleSearch}
                    t={t}
                    language={i18n.language}
                />
                <div className={classes.containers}>
                    <Switch>
                        <Route path={ROUTES.GUIDES} exact>
                            <GuidesContainer t={t} />
                        </Route>
                        <Route path={ROUTES.MAP} exact>
                            <MapContainer t={t} />
                        </Route>
                        <Redirect from={ROUTES.MAIN} to={ROUTES.GUIDES} />
                        <Route component={ErrorPage} />
                    </Switch>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(withTranslation()(withStyles(styles)(MainLayout)));
