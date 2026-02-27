export function renderAside() {
  const asideContainer = document.getElementById('aside-container');

  asideContainer.innerHTML = `
    <div class="mb-12">
      <img src="/src/assets/logo-gamenode.png" alt="GameNode Logo" class="w-24 h-24 mb-2 mx-auto">
      <h1 class="text-2xl font-bold text-center text-(--green-neon) tracking-wide">GameNode</h1>
    </div>

    <nav class="flex-1 space-y-10">
      <section>
        <p class="text-[10px] text-(--green-neon) uppercase tracking-widest mb-4 border-b border-card-color pb-1 shadow-[0_1px_2px_rgba(57,255,20,0.2)]">Sistemas</p>
          <ul id="aside-console-list" class="space-y-4 text-sm font-ui">
          </ul>
      </section>
    </nav>
  `;
}