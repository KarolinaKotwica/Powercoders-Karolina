function helloWorld(language = 'en') {
  if (language === 'en') {
    console.log('Hello World');
  } else if (language === 'de') {
    console.log('Hallo Welt');
  } else if (language === 'pl') {
    console.log('Witaj świecie')
  } else {
    console.log('Unknown language. Choose: en / de / pl');
  }
}

//(e.g. "es", "de", "en")
helloWorld('se');