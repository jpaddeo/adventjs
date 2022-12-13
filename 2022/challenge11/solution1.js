function getCompleted(part, total) {
  const getTimeInHours = (t) => {
    const hours = parseInt(t);
    const minutes = Number(t.substring(3, 5));
    const seconds = Number(t.substring(6, 8));
    return hours * 3600 + minutes * 60 + seconds;
  };
  const getGcd = (n, d) => (d ? getGcd(d, n % d) : n);

  let pT = Math.abs(getTimeInHours(part));
  let tT = Math.abs(getTimeInHours(total));
  const gcd = getGcd(pT, tT);
  pT /= gcd;
  tT /= gcd;
  return `${pT}/${tT}`;
}
