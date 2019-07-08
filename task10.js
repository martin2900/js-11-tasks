let duplicateLetter = (string) => {

 if (!string.match(/^[a-zA-Z]+$/gi)) {
  console.log('does not match');
 }

 if(typeof(string) !== 'string') {
  return 'Please return a string'
 }

  string = string.toLowerCase()

 string = string.split(' ').join('');

 let noDuplicates = [...new Set(string)];


 return noDuplicates.join('')

}

console.log(duplicateLetter("FoxfoXtAg"));