//////switch ////////

let translateDayOfWeek = () => {
    let date = new Date();
    let day = date.getDay();
    
    switch(day) {
      case 1:
        console.log("Montag");
        break;
      case 2:
        console.log("Dienstag");
        break;
      case 3:
        console.log("Mittwoch");
        break;
      case 4:
        console.log("Donnerstag");
        break;
      case 5:
        console.log("Freitag");
        break;
      case 6:
        console.log("Samstag");
        break;
      case 7:
        console.log("Sonntag");
        break;
    }
}


////// if ////////


// let translateDayOfWeek = () => {
//     let date = new Date();
//     let day = date.getDay();

//     if (day === 1) {
//       console.log("Montag");
//     } else if ( day === 2 ) {
//       console.log("Dienstag");
//     } else if ( day === 3 ) {
//       console.log("Mittwoch");
//     } else if ( day === 4 ) {
//       console.log("Donnerstag");
//     } else if ( day === 5 ) {
//       console.log("Freitag");
//     } else if ( day === 6 ) {
//       console.log("Samstag");
//     } else if ( day === 7 ) {
//       console.log("Sonntag");
//     }
// }

translateDayOfWeek();