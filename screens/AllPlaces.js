import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import PlacesList from "../components/places/PlacesList";

const AllPlaces = ({ route }) => {
  const [loadedPLaces, setLoadedPLaces] = useState([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPLaces((currentPlaces) => [
        ...currentPlaces,
        route.params.place,
      ]);
    }
  }, [isFocused, route]);

  return <PlacesList places={loadedPLaces} />;
};

export default AllPlaces;
