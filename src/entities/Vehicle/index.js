/**
 * Vehicle entity
 * @property {string} id - ID of the vehicle
 * @property {string} apiUrl - API URL for price, description & other details
 * @property {string} description - Description
 * @property {string} price - Price
 * @property {Array.<vehicleMedia>} media - Array of vehicle images
 */
export default class Vehicle {
  constructor(data) {
    this.id = data.id;
    this.apiUrl = data.apiUrl;
    this.media = data.media;
    this.price = data.price;
    this.description = data.description;
  }

  /**
  * Mobile media object
  * @returns {vehicleMedia}
  */
  get mobileImage() {
    return this.media[1];
  }

  /**
  * Desktop media object
  * @returns {vehicleMedia}
  */
  get desktopImage() {
    return this.media[0];
  }

  /**
  * Compute vehicle alt tag for image
  * @returns {string}
  */
  get imageAlt() {
    return `${this.media[0].name} ${this.id}`;
  }
}
