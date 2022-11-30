export default function canCarry(capacity, trip) {
  const recogidas = {};
  const entregas = {};
  trip.forEach((tripItem) => {
    recogidas[tripItem[1]] = tripItem[0];
    entregas[tripItem[2]] = tripItem[0];
  });
  let capacityTrip = 0;
  const maxPoint = Math.max(...Object.keys(entregas));
  for (let i = 0; i <= maxPoint; i++) {
    const recogida = recogidas[i];
    const entrega = entregas[i];
    if (recogida) {
      capacityTrip += recogida;
    }
    if (entrega) {
      capacityTrip -= entrega;
    }
    if (capacityTrip > capacity) return false;
  }
  return true;
}
