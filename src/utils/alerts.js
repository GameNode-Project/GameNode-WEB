import Swal from 'sweetalert2';

// 1. TEMA BASE
const CyberAlert = Swal.mixin({
  background: '#0a0a0a', 
  color: '#39ff14',      
  buttonsStyling: false, 
  customClass: {
    popup: 'border border-[#39ff14] shadow-[0_0_15px_rgba(57,255,20,0.2)] font-ui rounded-none',
    title: 'font-title uppercase tracking-widest text-xl',
    htmlContainer: 'text-gray-400 text-sm font-ui',
    
    confirmButton: 'bg-[#39ff14] text-black font-bold px-6 py-2 ml-2 hover:shadow-[0_0_10px_rgba(57,255,20,0.8)] transition-all uppercase tracking-wider',
    cancelButton: 'bg-transparent text-gray-400 border border-gray-600 px-6 py-2 mr-2 hover:text-white hover:border-white transition-all uppercase tracking-wider',
  }
});

// 2. FUNCIONES EXPORTABLES 

// Alerta de Éxito 
export const showSuccess = (title, message) => {
  return CyberAlert.fire({
    icon: 'success',
    title: title,
    text: message,
    iconColor: '#39ff14',
  });
};

// Alerta de Error
export const showError = (title, message) => {
  return CyberAlert.fire({
    icon: 'error',
    title: title,
    text: message,
    iconColor: '#ff003c', 
    customClass: {
      ...CyberAlert.customClass,
      popup: 'border border-[#ff003c] shadow-[0_0_15px_rgba(255,0,60,0.2)] font-ui rounded-none',
      confirmButton: 'bg-[#ff003c] text-white font-bold px-6 py-2 ml-2 hover:shadow-[0_0_10px_rgba(255,0,60,0.8)] transition-all uppercase tracking-wider',
    }
  });
};

// Alerta de Confirmación de Borrado 
export const showConfirmDelete = async (itemName) => {
  const result = await CyberAlert.fire({
    icon: 'warning',
    title: '¿Eliminar Registro?',
    html: `Vas a eliminar <b class="text-[#39ff14]">${itemName}</b>.<br/>Esta acción desencadenará un borrado en cascada en la base de datos.`,
    showCancelButton: true,
    confirmButtonText: 'Sí, ejecutar',
    cancelButtonText: 'Abortar',
    iconColor: '#ffea00', 
    customClass: {
      ...CyberAlert.customClass,
      popup: 'border border-[#ffea00] shadow-[0_0_15px_rgba(255,234,0,0.2)] font-ui rounded-none',
      confirmButton: 'bg-[#ffea00] text-black font-bold px-6 py-2 ml-6 hover:shadow-[0_0_10px_rgba(255,234,0,0.8)] transition-all uppercase tracking-wider',
    }
  });
  
  return result.isConfirmed; 
};

// Toast --> Notificación pequeña flotante para cambios menores.
export const showToast = (message) => {
  Swal.fire({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#0a0a0a',
    color: '#39ff14',
    icon: 'success',
    title: message,
    customClass: {
      popup: 'border border-[#39ff14] font-ui rounded-none',
    }
  });
};

// Alerta de Demo
export const showGuestAlert = () => {
  Swal.fire({
    icon: 'info',
    title: 'Modo Demo',
    html: 'Esta es una versión de demostración segura.<br><br>La función para <b>crear, editar o eliminar</b> datos está deshabilitada, pero puedes explorar la interfaz libremente.',
    confirmButtonColor: '#3b82f6', 
    confirmButtonText: 'Entendido'
  });
};