import { openModal } from '../components/modal.js';
import { showConfirmDelete, showToast } from '../utils/alerts.js';

import { loadVideogames } from '../api/videogames.js';
import { loadConsoles } from '../api/consoles.js';
import { loadCompanies } from '../api/companies.js';

export function renderHome() {
  const mainContent = document.getElementById('main-container');

  // Inyectamos las secciones (Estructura base)
  mainContent.innerHTML = `
    <section id="section-videogames" class="mb-20 pt-10">
      <div class="flex justify-between items-end border-b border-card-color mb-6 pb-2">
        <h2 class="text-2xl font-title text-(--green-neon) uppercase tracking-widest drop-shadow-[0_0_2px_rgba(57,255,20,0.8)]">Videojuegos</h2>
        <button id="add-videogame-btn" class="text-xs font-ui text-(--green-neon) hover:text-white transition-colors border border-green-neon px-3 py-1 bg-green-neon/10 hover:bg-green-neon/30">+ Añadir</button>
      </div>
      <div id="grid-videogames" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"></div>
    </section>

    <section id="section-consoles" class="mb-20 pt-10">
      <div class="flex justify-between items-end border-b border-card-color mb-6 pb-2">
        <h2 class="text-2xl font-title text-(--green-neon) uppercase tracking-widest drop-shadow-[0_0_2px_rgba(57,255,20,0.8)]">Consolas</h2>
        <button id="add-console-btn" class="text-xs font-ui text-(--green-neon) hover:text-white transition-colors border border-green-neon px-3 py-1 bg-green-neon/10 hover:bg-green-neon/30">+ Añadir</button>
      </div>
      <div id="grid-consoles" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"></div>
    </section>

    <section id="section-companies" class="mb-20 pt-10">
      <div class="flex justify-between items-end border-b border-card-color mb-6 pb-2">
        <h2 class="text-2xl font-title text-(--green-neon) uppercase tracking-widest drop-shadow-[0_0_2px_rgba(57,255,20,0.8)]">Compañías</h2>
        <button id="add-company-btn" class="text-xs font-ui text-(--green-neon) hover:text-white transition-colors border border-green-neon px-3 py-1 bg-green-neon/10 hover:bg-green-neon/30">+ Añadir</button>
      </div>
      <div id="grid-companies" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"></div>
    </section>
  `;

  loadVideogames();
  loadConsoles();
  loadCompanies();

  document.getElementById('add-videogame-btn').addEventListener('click', () => openModal('videogame'));
  document.getElementById('add-console-btn').addEventListener('click', () => openModal('console'));
  document.getElementById('add-company-btn').addEventListener('click', () => openModal('company'));

  mainContent.addEventListener('click', async (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;

    const action = btn.getAttribute('data-action'); 
    const type = btn.getAttribute('data-type');     
    const id = parseInt(btn.getAttribute('data-id')); 

    if (action === 'edit') {
      openModal(type, { id });
    } else if (action === 'delete') {
      const isConfirmed = await showConfirmDelete(`Registro #${id}`);
      if (isConfirmed) {
        // Aquí irá el fetch DELETE 
        showToast(`Registro ID:${id} eliminado de la base de datos.`);
      }
    }
  });
}