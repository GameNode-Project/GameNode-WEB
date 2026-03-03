import { createCard } from '../components/card.js';
import { showError } from '../utils/alerts.js';

export async function loadConsoles() {
  const container = document.getElementById('grid-consoles');
  
// Mostramos estado de carga
  container.innerHTML = `
    <div class="col-span-full flex flex-col items-center justify-center py-12 gap-4">
      <div class="w-12 h-12 border-4 border-[#3a3a3a] border-t-(--green-neon) rounded-full animate-spin drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]"></div>
      <p class="text-xs font-ui text-(--green-neon) animate-pulse tracking-widest uppercase opacity-80">Extrayendo datos...</p>
    </div>
  `;

  try {
    const API_URL = import.meta.env.VITE_API_URL;
    const response = await fetch(`${API_URL}/consoles`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResult = await response.json();

    const consoles = jsonResult.data;

    if(!consoles || consoles.length === 0) {
      container.innerHTML = `<p class="text-sm font-ui text-gray-500">No hay consolas registradas todavia.</p>`;
      return;
    }

    container.innerHTML = consoles.map(console => createCard(console, 'console')).join('');

  } catch (error) {
    console.error("Error cargando consolas: ", error);
    container.innerHTML = `<p class="text-red-500 font-ui text-sm">Error de conexión con el servidor.</p>`;
  }
}