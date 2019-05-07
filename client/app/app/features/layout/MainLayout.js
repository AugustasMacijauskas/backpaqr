import React, { Component, Fragment} from 'react';
import { Redirect, } from "react-router";
import { NavLink, Route, Switch } from 'react-router-dom';
import {
    CssBaseline, AppBar, Toolbar, Button, withStyles
} from '@material-ui/core';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import { withTranslation } from "react-i18next";

import { ROUTES } from 'constants';
import { GuidesContainer } from 'features/guides';
import { MapContainer } from 'features/map';
import { ErrorPage } from 'features/error';
import { BackpaqrLogo } from 'styles/images';

// Styles
const styles = () => ({
    appBar: {
        position: 'relative ',
    },
    toolbarTitle: {
        flex: 1,
    },
    navigationButton: {
        marginRight: '10px',
    },
    image: {
        width: '50px',
        height: '31',
        marginTop: '0.7%',
        marginBottom: '0.5%'
    }
});

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #202020;
`;

class MainLayout extends Component {
    render() {
        const { classes, t } = this.props;

        return (
            <Fragment>
                <CssBaseline />
                <AppBar position="static" color="default" className={classes.appBar}>
                    <Toolbar>
                        <div className={classes.toolbarTitle}>
                            <img
                                src={BackpaqrLogo}
                                alt="Backpaqr logo"
                                className={classes.image}
                            />
                        </div>
                        <Button className={classes.navigationButton} >
                            <StyledNavLink to={ROUTES.GUIDES}>
                                { t('navigation.guides') }
                            </StyledNavLink>
                        </Button>
                        <Button className={classes.navigationButton} >
                            <StyledNavLink to={ROUTES.MAP}>
                                { t('navigation.map') }
                            </StyledNavLink>
                        </Button>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route path={ROUTES.GUIDES} exact component={GuidesContainer} />
                    <Route path={ROUTES.MAP} exact component={MapContainer} />
                    <Redirect from={ROUTES.MAIN} to={ROUTES.GUIDES} />
                    <Route component={ErrorPage} />
                </Switch>
            </Fragment>
        );
    }
}

MainLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withTranslation()(withStyles(styles)(MainLayout));
