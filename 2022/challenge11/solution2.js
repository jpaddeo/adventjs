function getCompleted(part, total) {
  const getTimeInHours = (t) => {
    const a = t.split(':');
    return +a[0] * 3600 + +a[1] * 60 + +a[2];
  };
  const getGcd = (n, d) => (d ? getGcd(d, n % d) : n);

  let pT = Math.abs(getTimeInHours(part));
  let tT = Math.abs(getTimeInHours(total));
  const gcd = getGcd(pT, tT);
  pT /= gcd;
  tT /= gcd;
  return `${pT}/${tT}`;
}
