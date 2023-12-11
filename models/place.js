export class Place {
  constructor(id, title, imageUri, location) {
    this.id = id;
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }; // {lat: 0.115565, lng: 141.1456465}
    // this.id = Date.now().toString() + Math.random().toString();
  }
}
