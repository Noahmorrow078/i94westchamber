import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google-map-style-1">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.7437140629136!2d-93.55081638420958!3d45.19228395956655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b343c0d7769e07%3A0x2c915a02f598a4f4!2s21310%20John%20Milless%20Dr%20Suite%20C%2C%20Rogers%2C%20MN%2055374!5e0!3m2!1sen!2sus!4v1674852898246!5m2!1sen!2sus" width="100%" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    );
  }
}

export default GoogleMapStyle;