import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const UserLocationMap = ({ lat, lng, name }) => {

if (!lat || !lng) {
return <p className="text-red-500 mt-3">Location not available</p>;
}

return (

<MapContainer
center={[lat, lng]}
zoom={15}
style={{ height: "300px", width: "100%" }}
className="rounded-lg mt-4"
>

<TileLayer
attribution="© OpenStreetMap"
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

<Marker position={[lat, lng]}>
<Popup>{name}'s Location</Popup>
</Marker>

</MapContainer>

);
};

export default UserLocationMap;