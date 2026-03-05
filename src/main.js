// Importamos los estilos globales.
import './style.css'

// Importamos los componentes.
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderHome } from './views/home.js';

// Iniciamos la aplicación.
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  
  renderHome();
});
