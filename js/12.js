const articulosVendidos = [5, 10, 15]
const precios = [2.5, 1.75, 5]
const ventasTotales = calcularVentasTotales(articulosVendidos, precios);
document.write("Las ventas totales son: " + ventasTotales.toFixed(2) + "€");
  

function calcularVentasTotales(articulosVendidos, precios) {
    if (articulosVendidos.length !== precios.length) {
      alert("Los arrays tienen diferentes longitudes");
      return;
    }
  
    let ventasTotales = 0;
  
    for (let i = 0; i < articulosVendidos.length; i++) {
      ventasTotales += articulosVendidos[i] * precios[i];
    }
    return ventasTotales;
  }