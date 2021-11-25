const campoRequerido = (valor)=> {
  if (valor.trim().length > 0) {
    
   // valor.className = "form-control is-valid";
    return true;
  } else {
    
  //  valor.className = "form-control is-invalid";
    return false;
  }
}

//valida numeros entero y decimales del 0 al 5000
const rangoNumero = (valor)=> {
  // validar con expresion regular
 
  let patron = /^(?:0*(?:[0-9]|[1-9][0-9][0-9]?|[1-4][0-9][0-9][0-9])(?:[.][0-9])?|5000(?:[.]0)?)$/;
  if (patron.test(valor)) {
   // valor.className = "form-control is-valid";
    return true;
  } else {
   // valor.className = "form-control is-invalid";
    return false;
  }
}

export {campoRequerido, rangoNumero}