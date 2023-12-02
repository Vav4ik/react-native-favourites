import { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { useNavigation } from "@react-navigation/native";

import { Colors } from "../../constants/colors";
import OutlinedButton from "../../UI/OutlinedButton";
import { getMapPreview } from "../../utils/location";

const LocationPicker = () => {
  const navigation = useNavigation();

  const [pickedLocation, setPickedLocation] = useState();

  const [locationPermissionInfo, requestPermission] =
    useForegroundPermissions();

  const verifyPermissions = async () => {
    if (locationPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const PermissionResponse = await requestPermission();
      //returns true or false if we got the permisssion or not
      return PermissionResponse.granted;
    }
    if (locationPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission!",
        "You need to grant location permissions to use this app."
      );
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;

    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const pickOnMapHandler = () => {
    navigation.navigate("Map");
  };

  let locationPreview = <Text>No location picked yet...</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
        }}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
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
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default LocationPicker;
