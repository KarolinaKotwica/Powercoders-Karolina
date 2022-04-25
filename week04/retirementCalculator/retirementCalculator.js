let retirementCalculator = (birhtdayYear, retireInWhatAge) => {
    let date = new Date();
    let year = date.getFullYear();
    
    // my age -> current year - my birthday date
    let myAge = year - birhtdayYear;
    
    // how many years left to retirement
    let howManyYearsLeft = retireInWhatAge - myAge;
    let retireIn = year + howManyYearsLeft;
    
    console.log(`It's ${year}, so you can retire in ${retireIn}. You have left ${howManyYearsLeft} years.`);
  }
  
retirementCalculator(1993, 65);