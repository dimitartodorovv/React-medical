
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {GOOGLE_MAP} from "../config/mapKey"

function MapContainer (props) {

    console.log(props.loc);
    const mapStyles = {        
        height: "50vh",
        width: "100%",
        borderRadius: "12px"
    };
      
    const defaultCenter = {
        lat: 42.7250 , lng: 25.4833039
    }
    
    return (
        <LoadScript
          googleMapsApiKey={`${GOOGLE_MAP.apiKey}`}>
           <GoogleMap
             mapContainerStyle={mapStyles}
             zoom={6}
             center={defaultCenter}
           >
           <Marker position={props.loc}/>
           </GoogleMap>
        </LoadScript>
     )

}   

export default MapContainer;