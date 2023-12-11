import { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../constants/colors";

const PlaceDetails = ({ route }) => {
  const selectePlaceId = route.params.placeId;

  useEffect(() => {
    //use selectedLaceId to fetch data for a single place
  }, [selectePlaceId]);

  const showOnMapHandler = () => {};

  return (
    <ScrollView>
      <Image style={styles.image} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>ADDRESS</Text>
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
