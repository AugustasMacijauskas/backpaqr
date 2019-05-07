import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import {
    Card,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Typography,
    withStyles,
} from '@material-ui/core';
import { withTranslation } from 'react-i18next';

import { getListOfGuidesAction } from './actions';
import { Guide1, Guide2, Guide3, Guide4, Guide5, Guide6, Guide7 } from 'styles/images';

// List to map guides so that they could be accessed randomly
const guidesPhotos = {
    guide1: Guide1,
    guide2: Guide2,
    guide3: Guide3,
    guide4: Guide4,
    guide5: Guide5,
    guide6: Guide6,
    guide7: Guide7,
};

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
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '86.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});

class GuidesContainer extends PureComponent {
    componentDidMount() {
        const { getListOfGuides } = this.props;

        getListOfGuides();
    }

    render() {
        const { classes, guides, t } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
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
                                <Grid item key={guide.id} xs={12} sm={6} md={4} >
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={guidesPhotos[`guide${Math.floor(Math.random() * 7) + 1}`]}
                                            title={guide.name}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {guide.name}
                                            </Typography>
                                            <Typography>
                                                { t(`cities.${guide.city.replace(/\s/g,'')}`) }
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </main>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Backpaqr
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        { t('navigation.viewMap') }
                    </Typography>
                </footer>
                {/* End footer */}
            </React.Fragment>
        );
    }
}

GuidesContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapActionsToProps = {
    getListOfGuides: getListOfGuidesAction,
};

const mapStateToProps = (state) => ({
    guides: state.guides.guides
});

export default withTranslation()(connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(GuidesContainer)));
