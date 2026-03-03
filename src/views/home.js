import { openModal } from '../components/modal.js';
import { showConfirmDelete, showToast, showError } from '../utils/alerts.js';

import { loadVideogames } from '../api/videogames.js';
import { loadConsoles } from '../api/consoles.js';
import { loadCompanies } from '../api/companies.js';

import { renderDetail } from './detail.js';

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

    let endpoint = `${type}`;
    if (type === 'videogame') endpoint = 'videogames';
    else if (type === 'console') endpoint = 'consoles';
    // TODO - Añadir casos para 'company' 



    const API_URL = import.meta.env.VITE_API_URL;

    if (action === 'view') {
      renderDetail(type, id);
      return;
    }

    if (action === 'edit') {
      
      try {

        const response = await fetch(`${API_URL}/${endpoint}/${id}`);
        
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const jsonResult = await response.json();

        const data = jsonResult.data;

        openModal(type, data);

      } catch (error) {
        console.error("Error al cargar datos para edición:", error);
        showError("No se pudieron cargar los datos para editar. Inténtalo de nuevo.");
      }
    
    }

    if (action === 'delete') {
      
      const isConfirmed = await showConfirmDelete(`Registro #${id}`);
      
      if (isConfirmed) {
        
        try {

          const respone = await fetch(`${API_URL}/${endpoint}/${id}`, {
            method: 'DELETE'
          });

          if (!respone.ok) throw new Error(`HTTP error! status: ${respone.status}`);

          showToast("Registro eliminado exitosamente.");

          document.dispatchEvent(new CustomEvent('reload-data', { detail: type }));

        } catch (error) {
          console.error("Error al eliminar registro:", error);
          showError("No se pudo eliminar el registro. Inténtalo de nuevo.");        
        }
        
      }
    }
  });

  document.addEventListener('reload-data', (e) => {
    const typeAffected = e.detail;
    if (typeAffected === 'videogame') loadVideogames();
    // TODO Añadir casos para 'console' y 'company'
  });

}