// Altere plantaPrecisaDeAgua para usar a sintaxe de arrow function

// const plantaPrecisaDeAgua = function(dia) {
//     if (dia === 'Quarta-feira') {
//       return true;
//     } else {
//       return false;
//     }
//   };
  
  const plantaPrecisaDeAgua = dia => {
    if (dia === 'Quarta-feira') {
      return true;
    } else {
      return false;
    }
  }
  console.log(plantaPrecisaDeAgua('Quarta-feira'))