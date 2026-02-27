import { openModal } from '../components/modal.js';

export function renderHome() {
  const mainContainer = document.getElementById('main-container');

  mainContainer.innerHTML = `
    
    <section id="section-videogames" class="mb-20 pt-10">
      <div class="flex justify-between items-end border-b border-card-color mb-6 pb-2">
        <h2 class="text-2xl font-title text-(--green-neon) uppercase tracking-widest drop-shadow-[0_0_2px_rgba(57,255,20,0.8)]">Videojuegos</h2>
        <button id="add-videogame-btn" class="text-xs font-ui text-(--green-neon) hover:text-white transition-colors border border-green-neon px-3 py-1 bg-green-neon/10 hover:bg-green-neon/30">+ Añadir</button>
      </div>
      <div id="grid-videogames" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      </div>
    </section>

    <section id="section-consoles" class="mb-20 pt-10">
      <div class="flex justify-between items-end border-b border-card-color mb-6 pb-2">
        <h2 class="text-2xl font-title text-(--green-neon) uppercase tracking-widest drop-shadow-[0_0_2px_rgba(57,255,20,0.8)]">Consolas</h2>
        <button id="add-console-btn" class="text-xs font-ui text-(--green-neon) hover:text-white transition-colors border border-green-neon px-3 py-1 bg-green-neon/10 hover:bg-green-neon/30">+ Añadir</button>
      </div>
      <div id="grid-consoles" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      </div>
    </section>

    <section id="section-companies" class="mb-20 pt-10">
      <div class="flex justify-between items-end border-b border-card-color mb-6 pb-2">
        <h2 class="text-2xl font-title text-(--green-neon) uppercase tracking-widest drop-shadow-[0_0_2px_rgba(57,255,20,0.8)]">Compañías</h2>
        <button id="add-company-btn" class="text-xs font-ui text-(--green-neon) hover:text-white transition-colors border border-green-neon px-3 py-1 bg-green-neon/10 hover:bg-green-neon/30">+ Añadir</button>
      </div>
      <div id="grid-companies" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      </div>
    </section>

  `;

  document.getElementById('add-videogame-btn').addEventListener('click', () => openModal('videogame'));
  document.getElementById('add-console-btn').addEventListener('click', () => openModal('console'));
  document.getElementById('add-company-btn').addEventListener('click', () => openModal('company'));

}