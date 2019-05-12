import React, { PureComponent, } from 'react';
import * as PropTypes from "prop-types";
import { Map, Marker, GoogleApiWrapper, } from 'google-maps-react';
import moment from 'moment';

import { GOOGLE_API } from 'constants';
import { MapManIcon } from 'styles/images';
import { LoadingContainer } from './LoadingContainer';

export class GuideMap extends PureComponent {
    static propTypes = {
        guide: PropTypes.shape({}),
        t: PropTypes.func.isRequired,
        google: PropTypes.shape({}).isRequired,
    };

    render() {
        const { guide, t, google } = this.props;

        if (guide === null) {
            return null;
        }

        return (
            <Map
                google={google}
                initialCenter={{
                    lat: guide.locations[0].latitude,
                    lng: guide.locations[0].longitude
                }}
                center={{
                    lat: guide.locations[0].latitude,
                    lng: guide.locations[0].longitude
                }}
                zoom={10}
            >
                <Marker
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
                {
                    guide.locations.splice(1).map(location => {
                        return (
                            <Marker
                                key={`marker-${location.id}`}
                                name={guide.name}
                                title={`${guide.name}${t('misc.markerTitlePrevious')}, ${moment(guide.created_at).format("YYYY-MM-DD, HH:mm")}`}
                                position={{
                                    lat: location.latitude,
                                    lng: location.longitude
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
})(GuideMap);