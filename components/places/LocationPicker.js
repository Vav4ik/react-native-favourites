import { StyleSheet, View } from "react-native";

import OutlinedButton from "../../UI/OutlinedButton";
import { Colors } from "../../constants/colors";

const LocationPicker = () => {
  const getLocationHandler = () => {};

  const pickOnMapHandler = () => {};

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton
          buttonText="Locate User"
          icon="location"
          onPress={getLocationHandler}
        />
        <OutlinedButton
          buttonText="Pick on a map"
          icon="map"
          onPress={pickOnMapHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default LocationPicker;
