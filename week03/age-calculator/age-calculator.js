let ageCalculator = (futureYear) => {
    let birthYear = 1993;
    let ageBeforeBirthday = futureYear - birthYear;
    let ageAfterBirthday = ageBeforeBirthday - 1;
    console.log(`I will be either ${ageAfterBirthday} or ${ageBeforeBirthday} in ${futureYear}`);
}

ageCalculator(2023);