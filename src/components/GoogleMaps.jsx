import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

export class MapContainer extends Component{
  constructor(props){
    super(props);

    this.state = {
      stores: [
        {
          coords: {lat:-33.8717, lng:151.2067},
          name: "V's Toy - QVB",
          location: "455 George St, Sydney NSW 2000",
          directionURL: "https://www.google.com/maps/place/455+George+St,+Sydney+NSW+2000/@-33.8721094,151.2045493,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12ae3e8d0f5583:0xd8cb208eb31f2b0d!8m2!3d-33.8721139!4d151.206738"
        },
        {
          coords: {lat:-33.8597, lng:151.2082},
          name: "V's Toy - The Rocks",
          location: "80 George St, The Rocks NSW 2000",
          directionURL: "https://www.google.com/maps/place/80+George+St,+The+Rocks+NSW+2000/@-33.857201,151.2066144,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12ae5d3ff9500b:0xaeebeb77916477b2!8m2!3d-33.8572055!4d151.2088031"
        }
      ],
      selectedPlace: {},
      activeMarker:{},
      showingInfoWindow: false,
    };
  }

  handleClick = (props, marker, event) => {
    // tested, all the above three parameters are inbuilt properties of Marker event handler
    console.log('props:', props);
    console.log('marker:', marker);
    console.log('event:', event);

    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }


  render(){

    const mapStyles = {
      width: "22em",
      height: "20em",
      border: "orangered dashed",
    };

    return(
      <Map
        google = {this.props.google}
        zoom = {13}
        style = {mapStyles}
        initialCenter = {{lat: -33.8660, lng: 151.2056}}
      >

        {
          this.state.stores.map((store, index) => {
            return(
                <Marker key={index} id={index} position={store.coords}
                  onClick={this.handleClick}
                  name={store.name}
                  directionURL={store.directionURL}
                  location={store.location}
                />
            )
          })
        }

        <InfoWindow
          marker = {this.state.activeMarker}
          visible = {this.state.showingInfoWindow}>
          <div>
            <h5 className="info-window"><i>{this.state.selectedPlace.name}</i></h5>
            <p>{this.state.selectedPlace.location}</p>
            <a href={this.state.selectedPlace.directionURL} target="_blank">
              How to get here?
            </a>
          </div>
        </InfoWindow>
      </Map>
    );
  }


}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBXG0-gC8Yje8zYu6RJlMYVT6oX5TeEjLA'
})(MapContainer);

// <InfoWindow onClose={this.onInfoWindowClose}>
//   <div>
//     <h1>hello!</h1>
//   </div>
// </InfoWindow>
