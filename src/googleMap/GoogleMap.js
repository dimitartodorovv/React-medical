
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {GOOGLE_MAP} from "../config/mapKey"

function MapContainer (props) {

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
           {props.loc ? <Marker position={props.loc}/> : null}
           </GoogleMap>
        </LoadScript>
     )

}   

export default MapContainer;