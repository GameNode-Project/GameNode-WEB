import { showSuccess } from "../utils/alerts";

const formTemplates = {
  company: `
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-2 md:col-span-1"><label class="text-xs text-(--green-neon)">Nombre</label><input type="text" id="name" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></div>
      <div class="col-span-2 md:col-span-1"><label class="text-xs text-(--green-neon)">País</label><input type="text" id="country" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></div>
      <div class="col-span-2 md:col-span-1"><label class="text-xs text-(--green-neon)">Año Fundación</label><input type="number" id="year_founded" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></div>
      <div class="col-span-2 md:col-span-1"><label class="text-xs text-(--green-neon)">Sitio Web</label><input type="url" id="website" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></div>
      <div class="col-span-2"><label class="text-xs text-(--green-neon)">URL del Logo</label><input type="url" id="logo" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></div>
      <div class="col-span-2"><label class="text-xs text-(--green-neon)">Descripción</label><textarea id="description" rows="3" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></textarea></div>
    </div>
  `,
  console: `
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-2 md:col-span-1"><label class="text-xs text-(--green-neon)">Nombre de Consola</label><input type="text" id="name" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></div>
      <div class="col-span-2 md:col-span-1"><label class="text-xs text-(--green-neon)">Fecha de Lanzamiento</label><input type="date" id="release_date" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></div>
      <div class="col-span-2"><label class="text-xs text-(--green-neon)">Compañía (ID)</label><input type="number" id="company_id" placeholder="Ej: 1 para Nintendo" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></div>
      <div class="col-span-2"><label class="text-xs text-(--green-neon)">URL de Imagen</label><input type="url" id="url" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></div>
      <div class="col-span-2"><label class="text-xs text-(--green-neon)">Descripción</label><textarea id="description" rows="3" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></textarea></div>
    </div>
  `,
  videogame: `
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-2 md:col-span-1"><label class="text-xs text-(--green-neon)">Título</label><input type="text" id="title" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></div>
      <div class="col-span-2 md:col-span-1"><label class="text-xs text-(--green-neon)">Género</label><input type="text" id="genre" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></div>
      <div class="col-span-2 md:col-span-1"><label class="text-xs text-(--green-neon)">Fecha de Lanzamiento</label><input type="date" id="release_date" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></div>
      <div class="col-span-2 md:col-span-1"><label class="text-xs text-(--green-neon)">PEGI Rating</label><input type="text" id="pegi_rating" placeholder="PEGI 18" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></div>
      <div class="col-span-2 md:col-span-1"><label class="text-xs text-(--green-neon)">Precio (€)</label><input type="number" step="0.01" id="price" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></div>
      <div class="col-span-2 md:col-span-1"><label class="text-xs text-(--green-neon)">Compañía (ID)</label><input type="number" id="company_id" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></div>
      <div class="col-span-2"><label class="text-xs text-(--green-neon)">URL de Portada</label><input type="url" id="url" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></div>
      <div class="col-span-2"><label class="text-xs text-(--green-neon)">Descripción</label><textarea id="description" rows="2" required class="w-full bg-black/50 border border-card-color text-white p-2 rounded focus:border-(--green-neon) outline-none"></textarea></div>
    </div>
  `
};

export function openModal(type) {
  const modalRoot = document.getElementById('modal-root');
  
  const titles = {
    company: 'Añadir Nueva Compañía',
    console: 'Añadir Nueva Consola',
    videogame: 'Añadir Nuevo Videojuego'
  };

  modalRoot.innerHTML = `
    <div id="modal-backdrop" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      
      <div class="bg-gray-900 border border-(--green-neon) shadow-[0_0_15px_rgba(57,255,20,0.3)] rounded-lg w-full max-w-2xl overflow-hidden font-ui animate-[fadeIn_0.2s_ease-out]">
        
        <div class="flex justify-between items-center p-4 border-b border-card-color bg-black/50">
          <h2 class="text-xl text-(--green-neon) font-title tracking-wide uppercase">${titles[type]}</h2>
          <button id="close-modal-btn" class="text-gray-400 hover:text-white text-2xl leading-none">&times;</button>
        </div>

        <form id="dynamic-form" class="p-6">
          ${formTemplates[type]}
          
          <div class="mt-8 flex justify-end gap-4">
            <button type="button" id="cancel-modal-btn" class="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">Cancelar</button>
            <button type="submit" class="px-6 py-2 text-sm bg-(--green-neon) text-black font-bold rounded hover:shadow-[0_0_10px_rgba(57,255,20,0.8)] transition-all">Guardar Datos</button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.getElementById('close-modal-btn').addEventListener('click', closeModal);
  document.getElementById('cancel-modal-btn').addEventListener('click', closeModal);
  
  document.getElementById('modal-backdrop').addEventListener('click', (e) => {
    if (e.target.id === 'modal-backdrop') closeModal();
  });

  document.getElementById('dynamic-form').addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal();
    
    showSuccess(
      'Datos Guardados',
      `El registro de tipo [${type.toUpperCase()}] ha sido guardado.`
    )
    
  });
}

export function closeModal() {
  const modalRoot = document.getElementById('modal-root');
  modalRoot.innerHTML = ''; 
}