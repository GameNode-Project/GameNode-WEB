import { showError } from "../utils/alerts";

export async function renderDetail(type, id) {

  const mainContainer = document.getElementById('main-container');

  mainContainer.innerHTML = `
    <div class="flex flex-col items-center justify-center py-20 gap-4">
      <div class="w-12 h-12 border-4 border-[#3a3a3a] border-t-(--green-neon) rounded-full animate-spin"></div>
      <p class="text-xs font-ui text-(--green-neon) animate-pulse tracking-widest uppercase">Cargando archivo...</p>
    </div>
  `;

  try {

    let endpoint = `${type}`;

    if (type === 'videogame') endpoint = 'videogames';
    else if (type === 'console') endpoint = 'consoles';
    // TODO Añadir endpoints para y company

    const API_URL = import.meta.env.VITE_API_URL;
    const response = await fetch(`${API_URL}/${endpoint}/${id}`);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const jsonResult = await response.json();

    const item = jsonResult.data ? jsonResult.data : jsonResult; 

    // Diseño vidual dependiendo del tipo de producto
    let contentHTML = '';

    if (type === 'videogame') {
      
      contentHTML = `
        <div class="flex flex-col md:flex-row gap-8 bg-black/40 border border-card-color p-8 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <div class="w-full md:w-1/3">
                <img src="${item.url}" alt="${item.title}" class="w-full rounded-lg shadow-[0_0_15px_rgba(57,255,20,0.2)] border border-(--green-neon)/50 object-cover" />
            </div>
            
            <div class="flex-1 text-gray-300 font-ui flex flex-col justify-between">
                <div>
                    <h1 class="text-4xl font-title text-(--green-neon) uppercase mb-2 tracking-widest drop-shadow-[0_0_8px_rgba(57,255,20,0.6)]">${item.title}</h1>
                    <p class="text-sm text-gray-400 mb-6 uppercase tracking-wider">Desarrollado por: <span class="text-white">${item.company_name || 'ID ' + item.company_id}</span></p>
                    
                    <p class="mb-8 text-lg leading-relaxed text-gray-300">${item.description}</p>
                </div>

                <div class="grid grid-cols-2 gap-4 bg-black/60 p-6 rounded border border-card-color text-sm">
                    <p><span class="text-(--green-neon) block mb-1 uppercase text-[10px] tracking-widest">Género</span> ${item.genre}</p>
                    <p><span class="text-(--green-neon) block mb-1 uppercase text-[10px] tracking-widest">Lanzamiento</span> ${item.release_date.split('T')[0]}</p>
                    <p><span class="text-(--green-neon) block mb-1 uppercase text-[10px] tracking-widest">Clasificación</span> <span class="bg-red-500/20 text-red-400 px-2 py-1 rounded border border-red-500/50">${item.pegi_rating}</span></p>
                    <p><span class="text-(--green-neon) block mb-1 uppercase text-[10px] tracking-widest">Precio Oficial</span> <span class="text-[#ffea00] text-lg">${item.price} €</span></p>
                </div>
            </div>
        </div>
      `;

    }

    else if (type === 'console') {
      contentHTML = `
        <div class="flex flex-col md:flex-row gap-8 bg-black/40 border border-card-color p-8 rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <div class="w-full md:w-1/3 flex items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-(--green-neon)/30">
                <img src="${item.url}" alt="${item.name}" class="w-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
            </div>
            
            <div class="flex-1 text-gray-300 font-ui flex flex-col justify-between">
                <div>
                    <h1 class="text-4xl font-title text-(--green-neon) uppercase mb-2 tracking-widest drop-shadow-[0_0_8px_rgba(57,255,20,0.6)]">${item.name}</h1>
                    <p class="text-sm text-gray-400 mb-6 uppercase tracking-wider">Fabricado por: <span class="text-white">${item.company_name || 'ID ' + item.company_id}</span></p>
                    
                    <p class="mb-8 text-lg leading-relaxed text-gray-300">${item.description}</p>
                </div>

                <div class="grid grid-cols-2 gap-4 bg-black/60 p-6 rounded border border-card-color text-sm">
                    <p><span class="text-(--green-neon) block mb-1 uppercase text-[10px] tracking-widest">Lanzamiento</span> ${item.release_date.split('T')[0]}</p>
                    <p><span class="text-(--green-neon) block mb-1 uppercase text-[10px] tracking-widest">Estado</span> <span class="text-white">Sistema en Catálogo</span></p>
                </div>
            </div>
        </div>
      `;
    }
     // TODO Añadir diseños para y company

    // Renderizamos el contenido en el contenedor principal
    mainContainer.innerHTML = `
        <div class="animate-[fadeIn_0.3s_ease-out] max-w-6xl mx-auto pt-4 pb-20">
            <button id="back-btn" class="mb-8 text-xs font-ui text-gray-400 hover:text-(--green-neon) transition-colors flex items-center gap-2 uppercase tracking-widest border border-transparent hover:border-(--green-neon)/30 px-4 py-2 rounded">
                ← Volver
            </button>
            ${contentHTML}
        </div>
    `;
 
    document.getElementById('back-btn').addEventListener('click', async () => {
        const { renderHome } = await import('./home.js');
        renderHome();
    });

  } catch (error) {
  
    console.log(error);
    showError("Error al cargar el detalle. Inténtalo de nuevo más tarde.");

    setTimeout(async () => {
      const { renderHome } = await import('./home.js');
      renderHome();
    }, 2000);
  
  }
}