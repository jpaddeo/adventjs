export default function createXmasTree(height) {
  const columnas = height * 2 - 1;
  const middle = Math.floor(columnas / 2);

  const troncoArr = new Array(columnas).fill('_');
  troncoArr[(columnas - 1) / 2] = '#';
  const tronco = troncoArr.join('') + '\n' + troncoArr.join('');

  let arbol = '';
  const arbolFilaArr = new Array(columnas).fill('_');
  for (let f = 1; f <= height; f++) {
    arbolFilaArr[middle] = '*';
    for (let c = middle; c < columnas; c++) {
      arbolFilaArr[height - f] = '*';
    }
    for (let c = 0; c < middle; c++) {
      arbolFilaArr[middle - 1 + f] = '*';
    }
    arbol += arbolFilaArr.join('') + '\n';
  }
  arbol += tronco;
  return arbol;
}
