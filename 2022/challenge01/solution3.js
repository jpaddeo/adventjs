wrapping = (gifts) => {
  const envolver = () => {
    const sobre = papel.repeat(palabra.length + extension);
    return `${sobre}\n*${palabra}*\n${sobre}`;
  };
  return gifts.map((gift) => envolver('*', gift, 2));
};
