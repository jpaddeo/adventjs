function countHours(year, holidays) {
  return holidays.reduce((hsExtras, mesDia) => {
    if (![0, 6].includes(new Date(`${year}/${mesDia}`).getDay())) {
      hsExtras += 2;
    }
    return hsExtras;
  }, 0);
}
