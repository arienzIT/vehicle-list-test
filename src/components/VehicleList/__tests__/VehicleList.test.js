import React from 'react';
import { render } from '@testing-library/react';
import VehicleList from '..';
import useData from '../useData';
import Vehicle from '../../../entities/Vehicle';

jest.mock('../useData');

describe('<VehicleList /> Tests', () => {
  it('Should show loading state if it not falsy', () => {
    useData.mockReturnValue([true, 'An error occurred', 'results']);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId('loading')).not.toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).toBeNull();
  });

  it('Should show error if it is not falsy and loading is finished', () => {
    useData.mockReturnValue([false, 'An error occurred', 'results']);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).not.toBeNull();
    expect(queryByTestId('results')).toBeNull();
  });

  it('Should show results if loading successfully finished', () => {
    const vehicle = new Vehicle({
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
    });
    useData.mockReturnValue([false, false, [vehicle]]);
    const { queryByTestId } = render(<VehicleList />);

    expect(queryByTestId('loading')).toBeNull();
    expect(queryByTestId('error')).toBeNull();
    expect(queryByTestId('results')).not.toBeNull();
  });
});
