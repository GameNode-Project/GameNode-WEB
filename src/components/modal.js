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
  `,
  about: `
    <div class="flex flex-col gap-4 text-gray-300 text-sm leading-relaxed font-ui p-2">
        <p>GameNode es un foro en el que podrás encontrar información sobre videojuegos, consolas y compañías del sector. Además, permite añadir nuevos elementos al catálogo.</p>
        <p>Desarrollado como proyecto para la 2ª Evaluación. Tecnologías: <span class="text-white">Vanilla JS, Vite, Tailwind CSS, Express, Node.js y MariaDB.</span></p>
        
        <div class="mt-6 flex justify-center">
            <a href="https://github.com/GameNode-Project" target="_blank" class="flex items-center gap-3 px-6 py-2 border border-(--green-neon) text-(--green-neon) hover:bg-(--green-neon) hover:text-black hover:shadow-[0_0_15px_rgba(57,255,20,0.8)] transition-all font-bold uppercase tracking-widest">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                Código en GitHub
            </a>
        </div>
    </div>
  `
};

export function openModal(type) {
  const modalRoot = document.getElementById('modal-root');
  
  const titles = {
    company: 'Añadir Nueva Compañía',
    console: 'Añadir Nueva Consola',
    videogame: 'Añadir Nuevo Videojuego',
    about: 'About Us'
  };

  // Para el modal "About Us", solo mostramos un botón de cerrar, no de guardar
  const actionButtons = type === 'about' 
    ? `<div class="mt-8 flex justify-end gap-4"><button type="button" id="cancel-modal-btn" class="px-6 py-2 text-sm text-gray-400 hover:text-white border border-gray-600 hover:border-white transition-all uppercase tracking-widest">Cerrar</button></div>`
    : `<div class="mt-8 flex justify-end gap-4 border-t border-card-color pt-4">
         <button type="button" id="cancel-modal-btn" class="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">Cancelar</button>
         <button type="submit" class="px-6 py-2 text-sm bg-(--green-neon) text-black font-bold rounded hover:shadow-[0_0_10px_rgba(57,255,20,0.8)] transition-all uppercase tracking-widest">Guardar Datos</button>
       </div>`;

  modalRoot.innerHTML = `
    <div id="modal-backdrop" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      
      <div class="bg-gray-900 border border-(--green-neon) shadow-[0_0_15px_rgba(57,255,20,0.3)] rounded-lg w-full max-w-2xl overflow-hidden font-ui animate-[fadeIn_0.2s_ease-out]">
        
        <div class="flex justify-between items-center p-4 border-b border-card-color bg-black/50">
          <h2 class="text-xl text-(--green-neon) font-title tracking-wide uppercase">${titles[type]}</h2>
          <button id="close-modal-btn" class="text-gray-400 hover:text-white text-2xl leading-none">&times;</button>
        </div>

        <form id="dynamic-form" class="p-6">
          ${formTemplates[type]}
          
          ${actionButtons}
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