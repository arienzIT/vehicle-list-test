import React, { useState } from 'react';
import VehicleDetailsModal from '../VehicleDetailsModal';
import './style.scss';

export default function VehicleCard ({ vehicle }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <article className="vehicle-card">
      <picture className="vehicle-card__image">
        <source media="(max-width: 800px)" srcSet={vehicle.mobileImage.url} />
        <img src={vehicle.desktopImage.url} alt={vehicle.imageAlt} data-testid="image" />
      </picture>
      <dl className="vehicle-card__content">
        <dt className="sr-only">Name</dt>
        <dd
          role="presentation"
          className="vehicle-card__title"
          data-testid="name"
          onClick={() => setShowModal(true)}
        >
          {vehicle.id}
        </dd>

        <dt className="sr-only">Price</dt>
        <dd className="vehicle-card__price" data-testid="price">
          From&nbsp;
          {vehicle.price}
        </dd>

        <dt className="sr-only">Description</dt>
        <dd className="vehicle-card__description" data-testid="description">{vehicle.description}</dd>
      </dl>
      {showModal && (
        <VehicleDetailsModal
          vehicle={vehicle}
          onClose={() => setShowModal(false)}
        />
      ) }
    </article>
  );
}
