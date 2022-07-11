import React from 'react';
import { render } from '@testing-library/react';
import VehicleCard from '..';

describe('<VehicleCard /> Tests', () => {
  it('Should show vehicle information', () => {
    const vehicle = {
      id: 'Vehicle name',
      price: '£30,000',
      description: 'Vehicle description',
      desktopImage: {
        url: 'image-url.jpeg'
      },
      mobileImage: {
        url: 'mobile-image-url.jpeg'
      },
      imageAlt: 'vehicle name'
    };
    const { queryByTestId } = render(<VehicleCard vehicle={vehicle} />);

    expect(queryByTestId('image').src).toContain('image-url.jpeg');
    expect(queryByTestId('name').textContent).toStrictEqual('Vehicle name');
    expect(queryByTestId('price').textContent).toContain('£30,000');
    expect(queryByTestId('description').textContent).toStrictEqual('Vehicle description');
  });
});
