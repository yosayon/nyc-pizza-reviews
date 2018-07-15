import React from 'react';
import {render} from 'react-dom';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSortedRestaurants } from '../selectors/index'


export class MapContainer extends React.Component{
  render(){
    return (
      <div className='map-container'>
        <Map
          google={this.props.google}
          zoom={12}
          onReady={this.fetchRestaurantLocations}
          containerStyle={{
            height: '60vh',
            width: '60%',
            'marginTop': '20px',
            border: '5px solid white',
            display: 'flex'
          }}
          initialCenter={{
              lat: 40.783060,
              lng: -73.971249
            }}
          >
         <Marker />
       </Map>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    all: getSortedRestaurants(state),
  })
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer);
