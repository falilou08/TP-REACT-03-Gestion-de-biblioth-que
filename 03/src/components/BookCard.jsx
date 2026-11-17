import React from 'react';

function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h3>{titre}</h3>
      <p>Auteur : {auteur}</p>
      <p>Statut : {estDisponible ? 'Disponible' : 'Emprunté'}</p>
      <button onClick={onClickEmprunt}>
        {estDisponible ? 'Emprunter' : 'Rendre'}
      </button>
    </div>
  );
}

export default BookCard;