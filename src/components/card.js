export function createCard(item, type) {

  const imageSrc = type === 'company' ? item.logo : item.url;
  const mainTitle = type === 'videogame' ? item.title : item.name;

  let badgesHTML = '';
  if (type === 'videogame') {
    badgesHTML += `<span class="px-2 py-1 border border-card-color rounded bg-black/50">${item.genre}</span>`;
    badgesHTML += `<span class="px-2 py-1 border border-card-color rounded bg-black/50 text-[#ffea00]">${item.price} €</span>`;
    badgesHTML += `<span class="px-2 py-1 border border-card-color rounded bg-black/50 text-red-400">${item.pegi_rating}</span>`;
  } else if (type === 'console') {
    badgesHTML += `<span class="px-2 py-1 border border-card-color rounded bg-black/50">Lanzamiento: ${new Date(item.release_date).getFullYear()}</span>`;
  } else if (type === 'company') {
    badgesHTML += `<span class="px-2 py-1 border border-card-color rounded bg-black/50">${item.country}</span>`;
    badgesHTML += `<span class="px-2 py-1 border border-card-color rounded bg-black/50">Est. ${item.year_founded}</span>`;
  }

  return `
    <div class="group relative bg-black/40 border border-card-color hover:border-(--green-neon) rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_0_15px_rgba(57,255,20,0.2)] h-full">
      
      <div class="h-48 w-full bg-gray-900 relative p-4 flex justify-center items-center border-b border-card-color">
         <img src="${imageSrc}" alt="${mainTitle}" class="max-w-full max-h-full object-contain filter group-hover:brightness-125 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
         
         <div class="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button data-action="edit" data-type="${type}" data-id="${item.id}" class="bg-gray-900/90 p-2 rounded text-blue-400 hover:text-white border border-blue-500/50 hover:border-blue-400 hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all" title="Editar">
               <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            </button>
            <button data-action="delete" data-type="${type}" data-id="${item.id}" class="bg-gray-900/90 p-2 rounded text-red-500 hover:text-white border border-red-500/50 hover:border-red-500 hover:shadow-[0_0_10px_rgba(255,0,0,0.8)] transition-all" title="Eliminar">
               <svg class="w-4 h-4 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
            </button>
         </div>
      </div>

      <div class="p-4 flex-1 flex flex-col font-ui">
         <h3 class="text-lg font-title text-(--green-neon) uppercase tracking-wide truncate" title="${mainTitle}">${mainTitle}</h3>
         
         <div class="flex flex-wrap gap-2 mt-2 mb-3 text-[10px] uppercase tracking-wider text-gray-400">
            ${badgesHTML}
         </div>
         
         <p class="text-xs text-gray-500 line-clamp-3 flex-1 mb-2">${item.description}</p>
      </div>
    </div>
  `;
}