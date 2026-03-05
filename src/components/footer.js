export function renderFooter() {
  const footerContainer = document.getElementById('footer-container');

  footerContainer.innerHTML = `
    <div class="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      
      <div class="flex flex-col gap-2">
        <h2 class="text-xl font-title text-(--green-neon) uppercase tracking-widest drop-shadow-[0_0_5px_rgba(0,255,0,0.5)]">
          GameNode
        </h2>
        <p class="text-xs opacity-70 max-w-xs font-ui text-gray-400">
          Página interactiva y API RESTful para la gestión de un foro relacionado con la industria de los videojuegos.
        </p>
      </div>

      <div class="flex flex-col items-start md:items-end gap-1 text-[10px] font-ui opacity-60 text-white">
        <p class="tracking-widest uppercase">Stack: Vanilla JS | Vite | Tailwind</p>
        <p>&copy; 2026 GameNode</p>
      </div>

    </div>
  `;
}