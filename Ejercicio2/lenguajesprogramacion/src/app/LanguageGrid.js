'use client'; 

import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';

const LanguageGrid = () => {
    const [languages, setLanguages] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
  
    useEffect(() => {
      const fetchLanguages = async () => {
        const response = await fetch('/lenguajes.json');
        const data = await response.json();
        setLanguages(data);
      };
  
      fetchLanguages();
    }, []);
  
    const handleModalOpen = (language) => {
      setSelectedLanguage(language);
      setShowModal(true);
    };
  
    const handleModalClose = () => {
      setShowModal(false);
      setSelectedLanguage(null);
    };
  
    return (
      <div className="language-grid">
        {languages.map((language) => (
          <div key={language.id} className="language-item" onClick={() => handleModalOpen(language)}>
            <img
              src={language.image}
              alt={language.name}
              style={{
                maxWidth: `${language.maxWidth}px`,
                maxHeight: `${language.maxHeight}px`,
                objectFit: 'contain'
              }}
            />
            <h3>{language.name}</h3>
          </div>
        ))}
        {showModal && selectedLanguage && (
          <Modal onClose={handleModalClose}>
            <h2>{selectedLanguage.name}</h2>
            <p>{selectedLanguage.description}</p>
            <img
              src={selectedLanguage.image}
              alt={selectedLanguage.name}
              style={{
                maxWidth: `${selectedLanguage.maxWidth}px`,
                maxHeight: `${selectedLanguage.maxHeight}px`,
                objectFit: 'contain'
              }}
            />
          </Modal>
        )}
      </div>
    );
  };
  
  export default LanguageGrid;
