import React from 'react';
import Modal from './Modal';
import CallBackForm from './CallBackForm';

interface CallBackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallBackModal: React.FC<CallBackModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Заказать звонок">
      <CallBackForm onClose={onClose} />
    </Modal>
  );
};

export default CallBackModal;
