import { createCard } from '../components/card.js';
import { showError } from '../utils/alerts.js';


export async function loadVideogames() {
  const container = document.getElementById('grid-videogames');
  
  // Mostramos estado de carga
  container.innerHTML = `<p class="text-sm font-ui text-gray-500 animate-pulse">Conectando con la base de datos...</p>`;  
  
  try {

    const API_URL = import.meta.env.VITE_API_URL;
    const response = await fetch(`${API_URL}/videogames`);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const jsonResult = await response.json();

    const videogames = jsonResult.data;

    if (!videogames || videogames.length === 0) {
      container.innerHTML = `<p class="text-sm font-ui text-gray-500">No hay videojuegos registrados aún.</p>`;
      return;
    }

    container.innerHTML = videogames.map(videogame => createCard(videogame, 'videogame')).join('');

  } catch (error) {
    console.error("Error cargando videojuegos:", error);
    container.innerHTML = `<p class="text-red-500 font-ui text-sm">Error de conexión a la API</p>`;
  }
}