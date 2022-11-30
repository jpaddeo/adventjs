export const countPackages = (carriers, carrierID) => {
  let totalPackages = 0;
  carriers.forEach((carrier) => {
    if (carrier[0] === carrierID) {
      totalPackages += carrier[1];
      carrier[2].forEach((subCarrier) => {
        totalPackages += countPackages(carriers, subCarrier);
      });
    }
  });
  return totalPackages;
};
