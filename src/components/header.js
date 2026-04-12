import { openModal } from './modal.js';

export function renderHeader() {
  const headerContainer = document.getElementById('header-container');

  headerContainer.innerHTML = `
    <div class="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      
      <a href="#" class="flex flex-col items-center justify-center gap-1 hover:drop-shadow-[0_0_8px_rgba(57,255,20,0.8)] transition-all">
        <img src="/logo-gamenode.png" alt="GameNode Logo" class="w-10 h-10 object-contain">
        <h1 class="text-sm font-bold text-center text-(--green-neon) tracking-widest font-title uppercase">GameNode</h1>
      </a>

      <nav class="flex gap-8 text-lg font-ui uppercase">
        <a href="#section-videogames" class="text-(--green-neon) hover:opacity-80 hover:drop-shadow-[0_0_5px_rgba(57,255,20,0.8)] transition-all">Videojuegos</a>
        <a href="#section-consoles" class="text-(--green-neon) hover:opacity-80 hover:drop-shadow-[0_0_5px_rgba(57,255,20,0.8)] transition-all">Consolas</a>
        <a href="#section-companies" class="text-(--green-neon) hover:opacity-80 hover:drop-shadow-[0_0_5px_rgba(57,255,20,0.8)] transition-all">Compañías</a>
      </nav>
      
      <div class="flex items-center gap-4">
        <button id="btn-about-us" class="text-xs font-ui text-(--green-neon) uppercase tracking-widest hover:text-black transition-all border border-green-neon px-4 py-2 bg-green-neon/5 hover:bg-(--green-neon) shadow-[0_0_5px_rgba(57,255,20,0.2)] hover:shadow-[0_0_15px_rgba(57,255,20,0.6)]">
          About Us
        </button>
      </div>

    </div>
  `;

  document.getElementById('btn-about-us').addEventListener('click', () => {
    openModal('about');
  });
}