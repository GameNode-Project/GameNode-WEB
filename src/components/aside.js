export function renderAside() {
  const asideContainer = document.getElementById('aside-container');

  asideContainer.innerHTML = `
    <div class="mb-12">
      <h1 class="text-xl font-title text-green-neon uppercase">
        GameNode
      </h1>
    </div>

    <nav class="flex-1 space-y-10">
      <section>
        <p class="text-[10px] text-(--green-neon) uppercase tracking-widest mb-4 border-b border-card-color pb-1">Sistemas</p>
          <ul id="aside-console-list" class="space-y-4 text-sm font-ui">
              <li class="opacity-50">Cargando sistemas...</li>
          </ul>
      </section>
    </nav>
  `;
}