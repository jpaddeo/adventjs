function drawGift(size, symbol) {
    if(size === 1) return '#\n'
  
    const filas = []
    const ultimoIndex = size * 2 - 2
    filas[0] = '#'.repeat(size).padStart(ultimoIndex + 1)
    filas[size -1 ] = `${'#'.repeat(size)}${symbol.repeat(size-2)}#` 
    filas[ultimoIndex] = '#'.repeat(size)
    
    for(let fila = 1; fila <= size -2; fila++) {
      let filaDraft = `#${symbol.repeat(size - 2)}#${symbol.repeat(fila - 1)}#`
      filas[fila] = filaDraft.padStart(ultimoIndex + 1)
      filas[ultimoIndex - fila] = filaDraft
    }
    return filas.join('\n').concat('\n')
}