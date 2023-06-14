import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  Autocomplete,
} from "@react-google-maps/api";
import { Coords } from "google-map-react";
import { memo, useState } from "react";

const libraries: (
  | "places"
  | "drawing"
  | "geometry"
  | "localContext"
  | "visualization"
)[] = ["places"];

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    libraries: libraries,
    // Normally this would be an environment variable
    googleMapsApiKey: "AIzaSyCHTa4fNI0YbOfI1MyjFvQpwIr7xC7LpCk",
  });

  const [mapCenter, setMapCenter] = useState<Coords>({
    lat: 0,
    lng: 0,
  });

  const [markerPosition, setMarkerPosition] = useState<Coords | null>(null);

  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  const [zoom, setZoom] = useState<number>(1);

  const [address, setAddress] = useState<string>("Selected Address");

  const handleAutocompleteLoad = (
    autocomplete: google.maps.places.Autocomplete
  ) => {
    setAutocomplete(autocomplete);
  };

  const handlePlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();

      if (place.formatted_address) setAddress(place.formatted_address);

      if (place.geometry) {
        const location = place.geometry.location;

        if (!location) return;

        setMapCenter({ lat: location?.lat(), lng: location?.lng() });
        setZoom(13);
        setMarkerPosition({ lat: location?.lat(), lng: location?.lng() });
      }
    }
  };

  return isLoaded ? (
    <div className="flex flex-col gap-5 items-center justify-center">
      <div>
        <Autocomplete
          onLoad={handleAutocompleteLoad}
          onPlaceChanged={handlePlaceChanged}
        >
          <input
            className="h-[40px] w-[600px] p-5 border-green border-solid border-2 rounded-3xl"
            type="text"
            placeholder="Enter an address"
          />
        </Autocomplete>
      </div>

      <GoogleMap
        mapContainerStyle={{
          width: "600px",
          height: "300px",
        }}
        center={mapCenter}
        zoom={zoom}
      >
        {markerPosition && <MarkerF position={markerPosition} />}
        <></>
      </GoogleMap>

      <input
        className="h-[40px] w-[600px] p-5 border-green border-solid border-2 rounded-3xl bg-gray-100"
        type="text"
        value={address}
        readOnly
      />
    </div>
  ) : (
    <></>
  );
};

export default memo(Maps);
