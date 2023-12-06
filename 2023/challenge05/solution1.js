function cyberReindeer(road, time) {
  const S = {
    SANTA: 'S',
    B_CERRADA: '|',
    B_ABIERTA: '*',
    PUNTO: '.'
  }
  let lastChar = S.PUNTO

  const movements = [road]
  for (let ut = 1; ut < time; ut++) {
    if(ut === 5) road = road.replaceAll(S.B_CERRADA, S.B_ABIERTA)   
    
    const matches = road.match(/S[\*\.]/g)

    if(matches) {
      road = road.replace(matches[0], lastChar + S.SANTA)
      lastChar = matches[0][1]
    }

    movements.push(road)
  }
  return movements
}
