
//const YEAR = 3    // not
//const YEAR = 4    // is
// const YEAR = 5   // not
//const YEAR = 40   // is
//const YEAR = 100  // not
//const YEAR = 200  // not
//const YEAR = 400  // is
//const YEAR = 1900 // not
//const YEAR = 2000 // is
//const YEAR = 2100 // not
//const YEAR = 2400 // is

if (YEAR % 4 == 0 && !(YEAR % 100 == 0) || YEAR % 400 == 0)
  console.log(`${YEAR} is a leap year`)
else
  console.log(`${YEAR} is NOT a leap year`)