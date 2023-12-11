import PlaceForm from "../components/places/PlaceForm";
import { insertPlace } from "../utils/database";

const AddPlace = ({ navigation }) => {
  const createPlaceHandler = async (place) => {
    try {
      await insertPlace(place);
      navigation.navigate("AllPlaces");
    } catch (error) {
      console.log("Problem saving a new place", error);
    }
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
