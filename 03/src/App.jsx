import React, { useState } from 'react';
import BookCard from './components/BookCard';

function App() {
 
  const [books, setBooks] = useState([
    { id: 1, titre: "Les Misérables", auteur: "Victor Hugo", estDisponible: true },
    { id: 2, titre: "1984", auteur: "George Orwell", estDisponible: false },
    { id: 3, titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", estDisponible: true },
    { id: 4, titre: "L'Étranger", auteur: "Albert Camus", estDisponible: true }
  ]);

  const [nouveauTitre, setNouveauTitre] = useState('');
  const [nouvelAuteur, setNouvelAuteur] = useState('');
  const handleToggleEmprunt = (bookId) => {
    setBooks(books.map(book => {
      if (book.id === bookId) {
        return { ...book, estDisponible: !book.estDisponible };
      }
      return book;
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    if (nouveauTitre.trim() === '' || nouvelAuteur.trim() === '') {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    const nouveauLivre = {
      id: Date.now(), // Génère un id unique basé sur le timestamp
      titre: nouveauTitre,
      auteur: nouvelAuteur,
      estDisponible: true // Disponible par défaut
    };

    setBooks([...books, nouveauLivre]);
    setNouveauTitre('');
    setNouvelAuteur('');
  };

 
  const livresDisponiblesCount = books.filter(book => book.estDisponible).length;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '800px', margin: '0 auto' }}>
      <h1>📚 Gestion de Bibliothèque</h1>
      
      <h3>Nombre total de livres disponibles : {livresDisponiblesCount}</h3>

      <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>Ajouter un nouveau livre</h3>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <input 
              type="text" 
              placeholder="Titre du livre" 
              value={nouveauTitre}
              onChange={(e) => setNouveauTitre(e.target.value)}
              style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input 
              type="text" 
              placeholder="Auteur du livre" 
              value={nouvelAuteur}
              onChange={(e) => setNouvelAuteur(e.target.value)}
              style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 15px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Ajouter le livre
          </button>
        </form>
      </div>

      <hr />

      <h2>Catalogue</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {books.map((book) => (
          <BookCard 
            key={book.id} 
            titre={book.titre} 
            auteur={book.auteur} 
            estDisponible={book.estDisponible}
            onClickEmprunt={() => handleToggleEmprunt(book.id)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;