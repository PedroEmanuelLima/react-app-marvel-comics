import React, { useState } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, InfoWindow, GoogleMap, Marker } from 'react-google-maps';
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import { Form, FormGroup, Input, Label } from 'reactstrap';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);
Geocode.enableDebug();

export const MapComponent = (props) => {

    const [state, setState] = useState({
        address: '',
        city: '',
        state: '',
        mapPosition: {
            lat: props.center.lat,
            lng: props.center.lng
        },
        markerPosition: {
            lat: props.center.lat,
            lng: props.center.lng
        }
    })

    const shouldComponentUpdate = (nextProps, nextState) => {
        if (
            state.markerPosition.lat !== props.center.lat ||
            state.address !== nextState.address ||
            state.city !== nextState.city ||
            state.state !== nextState.state
        ) {
            return true
        } else if (props.center.lat === nextProps.center.lat) {
            return false
        }
    };

    const getCity = (addressArray) => {
        let city = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
                city = addressArray[i].long_name;
                return city;
            }
        }
    };

    const getState = (addressArray) => {
        let state = '';
        for (let i = 0; i < addressArray.length; i++) {
            for (let i = 0; i < addressArray.length; i++) {
                if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
                    state = addressArray[i].long_name;
                    return state;
                }
            }
        }
    };

    const onChange = (event) => {
        setState({ [event.target.name]: event.target.value });
    };

    const onInfoWindowClose = (event) => {

    };

    const onMarkerDragEnd = (event) => {
        let newLat = event.latLng.lat(),
            newLng = event.latLng.lng();

        Geocode.fromLatLng(newLat, newLng).then(
            response => {
                const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = getCity(addressArray),
                    state = getState(addressArray);
                setState({
                    address: (address) ? address : '',
                    city: (city) ? city : '',
                    state: (state) ? state : '',
                    markerPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                    mapPosition: {
                        lat: newLat,
                        lng: newLng
                    },
                })
            },
            error => {
                console.error(error);
            }
        );
    };

    const onPlaceSelected = (place) => {
        const address = place.formatted_address,
            addressArray = place.address_components,
            city = getCity(addressArray),
            state = getState(addressArray),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();
        // Set these values in the state.
        setState({
            address: (address) ? address : '',
            city: (city) ? city : '',
            state: (state) ? state : '',
            markerPosition: {
                lat: latValue,
                lng: lngValue
            },
            mapPosition: {
                lat: latValue,
                lng: lngValue
            },
        })
    };

    const AsyncMap = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            <InfoWindow
                onClose={onInfoWindowClose}
                position={{ lat: (state.markerPosition.lat + 0.0018), lng: state.markerPosition.lng }}
            >
                <div>
                    <span style={{ padding: 0, margin: 0 }}>{state.address}</span>
                </div>
            </InfoWindow>
            {props.isMarkerShown && <Marker
                google={props.google}
                name={'Dolores park'}
                draggable={true}
                onDragEnd={onMarkerDragEnd}
                position={{ lat: state.markerPosition.lat, lng: state.markerPosition.lng }} />
            }

            <Autocomplete
                apiKey={process.env.REACT_APP_GOOGLE_KEY}
                style={{
                    width: '100%',
                    height: '40px',
                    paddingLeft: '16px',
                    marginTop: '2px',
                    marginBottom: '500px'
                }}
                onPlaceSelected={onPlaceSelected}
            />
        </GoogleMap>
    ))


    return (
        <>
            {
                props.center.lat === undefined
                    ? <div style={{ height: props.height }} />
                    : <div>
                        <Form>
                            <div className="border p-3 mb-4 rounded">
                                <h3 className="mb-4">Personal Data</h3>

                                <div className="row">
                                    
                                    <div className="col">
                                        <FormGroup className="form-floating mb-3">
                                            <Input id="city" className="form-control" type="text" name="city" onChange={onChange} readOnly="readOnly" value={state.city} placeholder="City"/>
                                            <Label for="city">City</Label>
                                        </FormGroup>
                                    </div>

                                    <div className="col">
                                        <FormGroup className="form-floating mb-3">
                                            <Input type="text" className="form-control" name="state" id="state" onChange={onChange} readOnly="readOnly" value={state.state} placeholder="State" />
                                            <Label for="state">State</Label>
                                        </FormGroup>
                                    </div>
                                    
                                    <div className="col">
                                        <FormGroup className="form-floating mb-3">
                                            <Input type="text" className="form-control" name="address" id="address" onChange={onChange} readOnly="readOnly" value={state.address} placeholder="Address" />
                                            <Label for="address">Address</Label>
                                        </FormGroup>
                                    </div>
                                </div>
                            </div>
                        </Form>

                        <AsyncMap
                            isMarkerShown={false}
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&libraries=geometry,drawing,places`}
                            loadingElement={
                                <div style={{ height: `100%` }} />
                            }
                            containerElement={
                                <div style={{ height: `400px` }} />
                            }
                            mapElement={
                                <div style={{ height: `100%` }} />
                            }
                        />
                    </div>
            }
        </>
    );
}