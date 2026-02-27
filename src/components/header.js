export function renderHeader() {
  const headerContainer = document.getElementById('header-container');

  headerContainer.innerHTML = `
    <nav class="flex gap-8 text-sm font-ui uppercase">
      <a href="#" class="text-(--green-neon) border-b border-green-neon pb-1 hover:opacity-80 transition-opacity">Inicio</a>
      <a href="#" class="text-(--green-neon) hover:opacity-80 transition-opacity">Videojuegos</a>
      <a href="#" class="text-(--green-neon) hover:opacity-80 transition-opacity">Consolas</a>
      <a href="#" class="text-(--green-neon) hover:opacity-80 transition-opacity">Compañías</a>
    </nav>
    
    <div class="flex items-center gap-4 w-full md:w-auto">
    </div>
  `;
} 