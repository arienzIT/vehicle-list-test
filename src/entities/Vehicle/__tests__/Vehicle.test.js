import Vehicle from '../index';

describe('Vehicle entity', () => {
  let vehicle;
  let data;
  beforeEach(() => {
    data = {
      id: 'vehicle-id',
      apiUrl: '/vehicle-id.json',
      media: [
        {
          name: 'image name',
          url: 'image-url'
        },
        {
          name: 'image name',
          url: 'image-url'
        }
      ],
      description: 'vehicle description',
      price: '£30,000'
    };
    vehicle = new Vehicle(data);
  });

  it('Should create a vehicle instance with initial data', () => {
    expect(vehicle.id).toStrictEqual(data.id);
    expect(vehicle.apiUrl).toStrictEqual(data.apiUrl);
    expect(vehicle.media).toStrictEqual(data.media);
    expect(vehicle.description).toStrictEqual(data.description);
    expect(vehicle.price).toStrictEqual(data.price);
  });

  it('Should return mobile image', () => {
    expect(vehicle.mobileImage.url).toStrictEqual(data.media[1].url);
    expect(vehicle.mobileImage.name).toStrictEqual(data.media[1].name);
  });

  it('Should return desktop image', () => {
    expect(vehicle.desktopImage.url).toStrictEqual(data.media[0].url);
    expect(vehicle.desktopImage.name).toStrictEqual(data.media[0].name);
  });

  it('Should compute image alt tag', () => {
    expect(vehicle.imageAlt).toStrictEqual('image name vehicle-id');
  });
});
