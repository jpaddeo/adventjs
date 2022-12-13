function countTime(leds) {
  const offLeds = leds
    .join('')
    .split('1')
    .map((led) => led.length);
  offLeds[0] += offLeds.at(-1);
  const sortLeds = offLeds.sort((a, b) => b - a);
  return sortLeds[0] * 7;
}
