import Vehicle from '../entities/Vehicle';
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<Vehicle>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  try {
    const vehicles = await request('/api/vehicles.json');

    // Run all promises in parallel
    const vehiclesWithDetails = await Promise.all(vehicles.map(async(vehicle) => {
      try {
        const details = await request(vehicle.apiUrl);
        return new Vehicle({
          ...vehicle,
          ...details,
        });
      } catch (err) {
        return null;
      }
    }));

    // Filters out vehicles with broken details or without price
    return vehiclesWithDetails.filter((vehicle) => !!vehicle && !!vehicle.price);
  } catch (error) {
    return Promise.reject(error);
  }
}
