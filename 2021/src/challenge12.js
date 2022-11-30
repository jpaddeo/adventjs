export default function getMinJump(obstacles) {
  const maxV = Math.max(...obstacles);
  const noVisitados = Array.from({ length: maxV })
    .fill(0)
    .reduce((acc, _, index) => {
      if (!obstacles.includes(index + 1)) acc.push(index + 1);
      return acc;
    }, []);
  for (let i = 0; i < noVisitados.length; i++) {
    const candidatos = [];
    for (let j = 0; j <= maxV; j += noVisitados[i]) {
      candidatos.push(j);
    }
    if (candidatos.every((item) => !obstacles.includes(item))) {
      return noVisitados[i];
    }
  }
}
