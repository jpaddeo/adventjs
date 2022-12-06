function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const calculate = (maxCities, giftsCities, maxGifts, total = 0) => {
    if (maxCities === 0 || giftsCities.length === 0) return total;

    const totslDesdeInicio = calculate(
      maxCities - 1,
      giftsCities.slice(1),
      maxGifts,
      total + giftsCities[0]
    );

    const totalDesdeSegundo = calculate(
      maxCities,
      giftsCities.slice(1),
      maxGifts,
      total
    );

    return totslDesdeInicio > totalDesdeSegundo && totslDesdeInicio <= maxGifts
      ? totslDesdeInicio
      : totalDesdeSegundo;
  };

  return calculate(maxCities, giftsCities, maxGifts);
}
