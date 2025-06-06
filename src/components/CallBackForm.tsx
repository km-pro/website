import React, { useState } from 'react';

interface CallBackFormProps {
  onClose?: () => void;
}

const CallBackForm: React.FC<CallBackFormProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  const validateForm = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError('Пожалуйста, введите ваше имя');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!phone.trim()) {
      setPhoneError('Пожалуйста, введите ваш телефон');
      isValid = false;
    } else {
      setPhoneError('');
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setHasError(false);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', phone);

      const response = await fetch('/api/callback', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);

        setTimeout(() => {
          setName('');
          setPhone('');
          setIsSuccess(false);
          if (onClose) onClose();
        }, 2000);
      } else {
        setHasError(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setHasError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {isSuccess ? (
        <div className="text-center py-6">
          <div className="text-green-600 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-900">Спасибо за заявку!</h3>
          <p className="mt-2 text-gray-600">Мы свяжемся с вами в ближайшее время.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {hasError && (
            <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
              Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700 mb-1">
              Ваше имя <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                nameError ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Имя Фамилия"
            />
            {nameError && <p className="mt-1 text-sm text-red-500">{nameError}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-left text-sm font-medium text-gray-700 mb-1">
              Номер телефона <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                phoneError ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="+375 29 123-45-67"
            />
            {phoneError && <p className="mt-1 text-sm text-red-500">{phoneError}</p>}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CallBackForm;
