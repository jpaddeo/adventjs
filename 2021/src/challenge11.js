export default function shouldBuyFidelity(times) {
  const FIDELITY_AMOUNT = 250;
  const ENTRANCE_AMOUNT = 12;
  const FIDELITY_FEE_AMOUNT = 0.75;
  const NOT_FIDELITY_AMOUNT = times * ENTRANCE_AMOUNT;
  const iterat = Array(times).fill(12);
  let fidelityValue = FIDELITY_AMOUNT;
  for (let i = 1; i <= iterat.length; i++) {
    fidelityValue += ENTRANCE_AMOUNT * FIDELITY_FEE_AMOUNT ** i;
  }
  return NOT_FIDELITY_AMOUNT > fidelityValue;
}
