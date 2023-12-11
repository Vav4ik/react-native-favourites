import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

import PlacesList from "../components/places/PlacesList";
import { fetchPlaces } from "../utils/database";

const AllPlaces = ({ route }) => {
  const [loadedPLaces, setLoadedPLaces] = useState([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    const loadPlaces = async () => {
      if (isFocused) {
        const fetchedPlaces = await fetchPlaces();
        setLoadedPLaces(fetchedPlaces); 
      }
    };
    loadPlaces();
  }, [isFocused]);

  return <PlacesList places={loadedPLaces} />;
};

export default AllPlaces;
