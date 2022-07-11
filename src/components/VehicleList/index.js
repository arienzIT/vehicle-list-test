import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import useData from './useData';
import VehicleCard from '../VehicleCard';
import './style.scss';

const STAGGER = 0.5;
const duration = 0.5;

export default function VehicleList() {
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <ul className="vehicle-list">
      {vehicles.map((vehicle, index) => (
        <motion.li
          key={vehicle.id}
          className="vehicle-list__item"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration,
            delay: index * STAGGER
          }}
        >
          <VehicleCard vehicle={vehicle} />
        </motion.li>
      ))}
    </ul>
  );
}
