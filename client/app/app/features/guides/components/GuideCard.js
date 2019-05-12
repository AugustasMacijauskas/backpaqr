import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    withStyles,
    CardActions,
    Button,
} from '@material-ui/core';

const styles = () => ({
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
});

class GuideCard extends PureComponent {
    static propTypes = {
        classes: PropTypes.shape({}).isRequired,
        guide: PropTypes.shape({}).isRequired,
        handleClickOpen: PropTypes.func.isRequired,
        t: PropTypes.func.isRequired,
    };

    render() {
        const { classes, guide, handleClickOpen, t } = this.props;

        return (
            <Grid item key={guide.id} xs={12} sm={6} md={4} >
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={guide.photo}
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
                    <CardActions>
                        <Button
                            size="small"
                            variant="outlined"
                            color="primary"
                            onClick={() => handleClickOpen(guide.id)}>
                            { t('navigation.viewMap') }
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

export default withStyles(styles)(GuideCard);
