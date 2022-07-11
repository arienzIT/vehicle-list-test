import React from 'react';
import Modal from '../Modal';
import './style.scss';

export default function VehicleDetailsModal ({ vehicle, onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2>
        Vehicle
        {' '}
        {vehicle.id}
        {' '}
        details
      </h2>
    </Modal>
  );
}
