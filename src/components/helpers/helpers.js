const campoRequerido = (valor) => {
  if (valor.trim().length > 0) {
    return true;
  } else {
    return false;
  }
};

//valida numeros entero y decimales del 0 al 5000
const rangoNumero = (valor) => {
  // validar con expresion regular

  let patron =
    /^(?:0*(?:[0-9]|[1-9][0-9][0-9]?|[1-4][0-9][0-9][0-9])(?:[.][0-9])?|5000(?:[.]0)?)$/;
  if (patron.test(valor)) {
    return true;
  } else {
    return false;
  }
};

export { campoRequerido, rangoNumero };
