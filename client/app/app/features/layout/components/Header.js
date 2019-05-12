import React, { Component, Fragment, } from 'react';
import { connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
    CssBaseline, AppBar, Toolbar, Button, withStyles, InputBase,
} from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

import { ROUTES } from 'constants';
import { BackpaqrLogo } from 'styles/images';
import { filterGuidesAction, } from '../../guides/actions';

// Styles
const styles = (theme) => ({
    appBar: {
        position: 'fixed',
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
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: '#E7E8F0',
    },
});

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #202020;
`;

class Header extends Component {
    static propTypes = {
        classes: PropTypes.shape({}).isRequired,
        handleLanguageChange: PropTypes.func.isRequired,
        value: PropTypes.string,
        t: PropTypes.func.isRequired,
    };

    state = {
        filters: '',
    };

    componentDidUpdate(prevProps) {
        if (prevProps.language !== this.props.language) {
            this.setState({
                filters: '',
            }, () => this.props.filterGuides(this.state.filters.toLowerCase()));
        }
    }

    handleSearch = (search) => {
        this.setState({
            filters: search.target.value,
        }, () => this.props.filterGuides(this.state.filters.toLowerCase()));
    };

    render() {
        const { classes, handleLanguageChange, t } = this.props;

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
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder={`${t('navigation.search')}…`}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                value={this.state.filters}
                                onChange={this.handleSearch}
                            />
                        </div>
                        <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            className={classes.navigationButton}
                            onClick={() => handleLanguageChange('en')}
                        >
                            { t('languages.en') }
                        </Button>
                        <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            className={classes.navigationButton}
                            onClick={() => handleLanguageChange('lt')}
                        >
                            { t('languages.lt') }
                        </Button>
                        <Button className={classes.navigationButton}>
                            <StyledNavLink to={ROUTES.GUIDES}>
                                { t('navigation.guides') }
                            </StyledNavLink>
                        </Button>
                        <Button className={classes.navigationButton}>
                            <StyledNavLink to={ROUTES.MAP}>
                                { t('navigation.map') }
                            </StyledNavLink>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Fragment>
        );
    }
}

const mapActionsToProps = {
    filterGuides: filterGuidesAction,
};

const mapStateToProps = () => ({

});

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Header));
