import React, { PureComponent, } from 'react';
import { connect} from 'react-redux';
import * as PropTypes from "prop-types";

import { MapWrapper } from './components';
import { getListOfGuidesWithLocationsAction } from './actions';

export class MapContainer extends PureComponent {
    static propTypes = {
        guidesWithLocations: PropTypes.array.isRequired,
        t: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const { getListOfGuidesWithLocations } = this.props;

        getListOfGuidesWithLocations(1);
    }

    render() {
        const { guidesWithLocations, t } = this.props;

        return (
            <MapWrapper
                guidesWithLocations={guidesWithLocations}
                t={t}
            />
        );
    }
}

const mapActionsToProps = {
    getListOfGuidesWithLocations: getListOfGuidesWithLocationsAction,
};

const mapStateToProps = (state) => ({
    guidesWithLocations: state.map.guidesWithLocations,
});

export default connect(mapStateToProps, mapActionsToProps)(MapContainer);