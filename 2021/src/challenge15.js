export default function checkSledJump(heights) {
  let result = true;
  const alturaParabola = heights.indexOf(Math.max(...heights));

  const menoresValores = heights.slice(alturaParabola + 1);
  const mayoresValores = heights.slice(0, alturaParabola);

  if (menoresValores.length < 1) result = false;

  let prevValue = -1;
  mayoresValores.forEach((element) => {
    if (element <= prevValue) result = false;
    prevValue = element;
  });

  prevValue = heights[alturaParabola];
  menoresValores.forEach((element) => {
    if (element >= prevValue) result = false;
    prevValue = element;
  });

  return result;
}
