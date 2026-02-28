import { openModal } from './modal.js';

export function renderHeader() {
  const headerContainer = document.getElementById('header-container');

  headerContainer.innerHTML = `
    <nav class="flex gap-8 text-2xl font-ui uppercase">
      <a href="#section-videogames" class="text-(--green-neon) hover:opacity-80 transition-opacity">Videojuegos</a>
      <a href="#section-consoles" class="text-(--green-neon) hover:opacity-80 transition-opacity">Consolas</a>
      <a href="#section-companies" class="text-(--green-neon) hover:opacity-80 transition-opacity">Compañías</a>
    </nav>
    
    <div class="flex items-center gap-4 w-full md:w-auto">
      <button id="btn-about-us" class="text-xs font-ui text-(--green-neon) uppercase tracking-widest
      hover:text-black transition-all border border-green-neon px-4 py-2 bg-green-neon/5 hover:bg-(--green-neon) shadow-[0_0_5px_rgba(57,255,20,0.2)] hover:shadow-[0_0_15px_rgba(57,255,20,0.6)]
      ">
        About Us
      </button>
    </div>
  `;

  document.getElementById('btn-about-us').addEventListener('click', () => {
    openModal('about');
  });
} 