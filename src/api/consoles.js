import { createCard } from '../components/card.js';

const mockConsoles = [
  { id: 1, name: 'PlayStation 5', description: 'Potencia bruta con carga ultrarrápida SSD.', release_date: '2020-11-12', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png/1200px-PlayStation_5_and_DualSense_with_transparent_background.png', company_id: 2 }
];

export async function loadConsoles() {
  const container = document.getElementById('grid-consoles');
  try {
    const data = mockConsoles; // FUTURO FETCH AQUI
    container.innerHTML = data.map(c => createCard(c, 'console')).join('');
  } catch (error) {
    container.innerHTML = `<p class="text-red-500 font-ui text-sm">Error al cargar consolas.</p>`;
  }
}