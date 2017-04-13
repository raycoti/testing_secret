/*
 * Base Google Map example
 */
import React, {Component} from 'react';


import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';
/*const propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

const defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };*/
class SimpleMapPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('hey hey hey');
    return (
       <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
        bootstrapURLKeys={{key: 'AIzaSyB56ThlMMe0HgMLMSHcLEKacv-vRtGeYrQ'}} // set if you need stats etc ...
        >
        <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
        <MyGreatPlace {...{lat: 59.724465, lng: 30.080121}} text={'B'} /* road circle */ />
      </GoogleMap>
    );
  }
}

export default SimpleMapPage;
