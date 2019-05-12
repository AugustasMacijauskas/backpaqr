import React, { PureComponent, } from 'react';
import * as PropTypes from "prop-types";
import { Map, Marker, GoogleApiWrapper, } from 'google-maps-react';
import moment from 'moment/moment';

import { GOOGLE_API } from 'constants';
import { MapManIcon } from 'styles/images';
import { LoadingContainer } from './LoadingContainer';

export class MapWrapper extends PureComponent {
    static propTypes = {
        guidesWithLocations: PropTypes.array.isRequired,
    };

    render() {
        const { guidesWithLocations, t } = this.props;

        return (
            <Map
                google={this.props.google}
                initialCenter={{
                    lat: 54.6872,
                    lng: 25.2797
                }}
                zoom={7}
            >
                {
                    guidesWithLocations.map(guide => {
                        return (
                            <Marker
                                key={`marker-${guide.id}`}
                                name={guide.name}
                                title={`${guide.name}${t('misc.markerTitle')}, ${moment(guide.locations[0].created_at).format("YYYY-MM-DD, HH:mm")}`}
                                position={{
                                    lat: guide.locations[0].latitude,
                                    lng: guide.locations[0].longitude
                                }}
                                icon={{
                                    url: MapManIcon,
                                }}
                            >
                            </Marker>
                        )
                    })
                }
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (GOOGLE_API.KEY),
    LoadingContainer: LoadingContainer
})(MapWrapper);