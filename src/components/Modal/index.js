import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

import './style.scss';

export default function Modal ({ children, onClose }) {
  const contentRef = useRef();

  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [contentRef]);

  return (
    <div className="modal">
      <motion.div
        ref={contentRef}
        role="dialog"
        className="modal__content"
        aria-labelledby="vehicle-details-title"
        aria-modal
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
