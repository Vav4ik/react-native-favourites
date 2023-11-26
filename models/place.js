class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // {lat: 0.115565, lng: 141.1456465}
    this.id = Date.now().toString() + Math.random().toString()
  }
}
