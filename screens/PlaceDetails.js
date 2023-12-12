import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../constants/colors";
import { fetchPlaceDetails } from "../utils/database";

const PlaceDetails = ({ navigation, route }) => {
  const selectePlaceId = route.params.placeId;

  const [place, setPlace] = useState();

  useEffect(() => {
    const loadPlaceData = async () => {
      const selectedPlace = await fetchPlaceDetails(selectePlaceId);
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      setPlace(selectedPlace);
      navigation.setOptions({
        title: selectedPlace.title,
      });
    };
    if (selectePlaceId) {
      loadPlaceData();
    }
  }, [selectePlaceId]);

  const showOnMapHandler = () => {
    if (place) {
      navigation.navigate("Map", {
        initialLat: place.location.lat,
        initialLng: place.location.lng,
      });
    }
  };

  if (!place) {
    return (
      <View style={styles.fallback}>
        <Text style={styles.fallbackText}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>{place.address}</Text>
        </View>
        <OutlinedButton
          buttonText="View on Map"
          icon="map"
          onPress={showOnMapHandler}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    color: Colors.primary50,
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  addressText: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default PlaceDetails;
