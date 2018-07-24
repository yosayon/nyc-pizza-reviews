import React from 'react';
import {render} from 'react-dom';
import {GoogleApiWrapper, Map, Marker, InfoWindow} from 'google-maps-react'
import {GoogleApiKey} from '../googleApi'
import redMarker from '../pictures/redMarker.png'
import blueMarker from '../pictures/blueMarker.png'
import yellowMarker from '../pictures/yellowMarker.png'


export class MapContainer extends React.Component{
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
    })
  }
};

  render(){
    const displayMarker = this.props.restaurants.map((restaurant) => {
      if(restaurant.rating <= 6){
          return (<Marker
            key={restaurant.id}
            position={{lat: restaurant.lat, lng: restaurant.lng}}
            name={restaurant.name}
            rating={restaurant.rating}
            onClick={this.onMarkerClick}
            icon={yellowMarker}
            />)}
      else if(restaurant.rating > 8){
        return (<Marker
          key={restaurant.id}
          position={{lat: restaurant.lat, lng: restaurant.lng}}
          name={restaurant.name}
          rating={restaurant.rating}
          onClick={this.onMarkerClick}
          icon={redMarker}
          />)}
      else if(6 < restaurant.rating < 8 ){
        return (<Marker
          key={restaurant.id}
          position={{lat: restaurant.lat, lng: restaurant.lng}}
          name={restaurant.name}
          rating={restaurant.rating}
          onClick={this.onMarkerClick}
          icon={blueMarker}
          />)}
        }
      )

    return (

        <Map
          google={this.props.google}
          zoom={10}
          onReady={this.fetchRestaurantLocations}
          containerStyle={{
            height: '60vh',
            width: '60%',
            'marginTop': '30px',
            'marginLeft': '19%',
            'marginRight': 'auto',
            'alignSelf': 'center',
            border: '5px solid white',
            display: 'flex',
            position: 'absolute'
          }}
          initialCenter={{
              lat: 40.783060,
              lng: -73.971249
            }}
          >
         {displayMarker}
         <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
          <div className='marker-content'>
            <span> {this.state.selectedPlace.name} - {this.state.selectedPlace.rating}</span>
          </div>
        </InfoWindow>
       </Map>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: GoogleApiKey
})(MapContainer);
