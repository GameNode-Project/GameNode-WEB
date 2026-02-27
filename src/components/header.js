export function renderHeader() {
  const headerContainer = document.getElementById('header-container');

  headerContainer.innerHTML = `
    <nav class="flex gap-8 text-2xl font-ui uppercase">
      <a href="#section-videogames" class="text-(--green-neon) hover:opacity-80 transition-opacity">Videojuegos</a>
      <a href="#section-consoles" class="text-(--green-neon) hover:opacity-80 transition-opacity">Consolas</a>
      <a href="#section-companies" class="text-(--green-neon) hover:opacity-80 transition-opacity">Compañías</a>
    </nav>
    
    <div class="flex items-center gap-4 w-full md:w-auto">
    </div>
  `;
} 