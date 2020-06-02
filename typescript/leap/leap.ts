//Based on yep`s Solution

const evenlyDivisible = (number: number, divisor: number) => number % divisor === 0

function isLeapYear(year: number) {
  if (evenlyDivisible(year, 400)) return true
  if (evenlyDivisible(year, 100)) return false
  if (evenlyDivisible(year, 4)) return true
  return false
}

export default isLeapYear