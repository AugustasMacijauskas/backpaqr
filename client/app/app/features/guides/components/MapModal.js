import React from 'react';
import * as PropTypes from 'prop-types';
import { withStyles, Dialog, IconButton, Typography, AppBar, Toolbar, Slide } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import GuideMap from './GuideMap';

const styles = {
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
    },
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class MapModal extends React.Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        handleClose: PropTypes.func.isRequired,
        currentGuide: PropTypes.shape({}),
        t: PropTypes.func.isRequired,
    };

    render() {
        const { classes, open, handleClose, currentGuide, t } = this.props;

        return (
            <div>
                <Dialog
                    fullScreen
                    TransitionComponent={Transition}
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton color="inherit" onClick={handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" className={classes.flex}>
                                { `${t('navigation.guideLocationInformation')}:
                                ${currentGuide ? currentGuide.name : ''},
                                ${currentGuide ? t(`cities.${currentGuide.city.replace(/\s/g,'')}`) : ''}`}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <GuideMap guide={currentGuide} t={t} />
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(MapModal);