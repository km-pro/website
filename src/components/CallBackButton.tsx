import React, { useState } from 'react';
import CallBackModal from './CallBackModal';

interface CallBackButtonProps {
  className?: string;
}

const CallBackButton: React.FC<CallBackButtonProps> = ({ className = '' }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className={`px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
      >
        Заказать звонок
      </button>
      <CallBackModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default CallBackButton;
