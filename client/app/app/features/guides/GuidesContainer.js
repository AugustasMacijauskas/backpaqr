import React, { PureComponent, Fragment, } from 'react';
import { connect } from "react-redux";
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    CssBaseline,
    Grid,
    Typography,
    withStyles,
} from '@material-ui/core';

import { MapModal, GuideCard } from './components';
import { getListOfGuidesAction, getGuideAction, } from './actions';

const styles = theme => ({
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});

class GuidesContainer extends PureComponent {
    static propTypes = {
        classes: PropTypes.shape({}).isRequired,
        guides: PropTypes.array.isRequired,
        t: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const { getListOfGuides } = this.props;

        getListOfGuides();
    }

    state = {
        mapOpen: false,
        currentGuideID: null,
    };

    handleClickOpen = (guideID) => {
        this.setState({
            mapOpen: true,
            currentGuideID: guideID,
        }, () => this.props.getGuide(this.state.currentGuideID));
    };

    handleClose = () => {
        this.setState({
            mapOpen: false,
            currentGuideID: null,
        });
    };

    render() {
        const { mapOpen } = this.state;
        const { classes, guides, currentGuide, t } = this.props;

        return (
            <Fragment>
                <CssBaseline />
                <MapModal
                    open={mapOpen}
                    handleClose={this.handleClose}
                    currentGuide={currentGuide}
                    t={t}
                />
                <main>
                    {/* Hero unit */}
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                { t('guides.header').toUpperCase() }
                            </Typography>
                            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                { t('guides.subheader') }
                            </Typography>
                        </div>
                    </div>
                    <div className={classNames(classes.layout, classes.cardGrid)}>
                        {/* End hero unit */}
                        <Grid container spacing={40}>
                            {guides.map(guide => (
                                <GuideCard
                                    key={guide.id}
                                    guide={guide}
                                    handleClickOpen={this.handleClickOpen}
                                    t={t}
                                />
                            ))}
                        </Grid>
                    </div>
                </main>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom >
                        Backpaqr
                    </Typography>
                </footer>
                {/* End footer */}
            </Fragment>
        );
    }
}

const mapActionsToProps = {
    getListOfGuides: getListOfGuidesAction,
    getGuide: getGuideAction,
};

const mapStateToProps = (state) => ({
    guides: state.guides.filteredGuides,
    currentGuide: state.guides.currentGuide,
});

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(GuidesContainer));
