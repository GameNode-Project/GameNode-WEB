import { createCard } from '../components/card.js';

const mockVideogames = [
  { id: 1, title: 'The Legend of Zelda: BOTW', description: 'Explora Hyrule con libertad.', genre: 'Adventure', release_date: '2017-03-03', pegi_rating: 'PEGI 12', price: 59.99, url: 'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg', company_id: 1 },
  { id: 2, title: 'Elden Ring', description: 'Un mundo de fantasía oscura.', genre: 'RPG', release_date: '2022-02-25', pegi_rating: 'PEGI 16', price: 59.99, url: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg', company_id: 10 }
];

export async function loadVideogames() {
  const container = document.getElementById('grid-videogames');
  
  try {
    const data = mockVideogames; 

    container.innerHTML = data.map(vg => createCard(vg, 'videogame')).join('');
  } catch (error) {
    console.error("Error cargando videojuegos:", error);
    container.innerHTML = `<p class="text-red-500 font-ui text-sm">Error de conexión con la Base de Datos.</p>`;
  }
}