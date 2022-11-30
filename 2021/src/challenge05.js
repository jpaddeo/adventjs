export default function daysToXmas(date) {
  const unDia = 1000 * 60 * 60 * 24;
  return Math.ceil((new Date('Dec 25, 2021') - date) / unDia);
}
