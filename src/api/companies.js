import { createCard } from '../components/card.js';

const mockCompanies = [
  { id: 1, name: 'Nintendo', description: 'Gigante japonés del entretenimiento familiar.', country: 'Japón', year_founded: 1889, website: 'https://www.nintendo.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1920px-Nintendo.svg.png' }
];

export async function loadCompanies() {
  const container = document.getElementById('grid-companies');
  try {
    const data = mockCompanies; // FUTURO FETCH AQUI
    container.innerHTML = data.map(cp => createCard(cp, 'company')).join('');
  } catch (error) {
    container.innerHTML = `<p class="text-red-500 font-ui text-sm">Error al cargar compañías.</p>`;
  }
}