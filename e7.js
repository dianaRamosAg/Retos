function SimpleSymbols(str) { 

    var s = '=' + str + '=';
    for (i = 1; i<s.length - 1; i++) {
        if (s[i].match(/[a-z]/i) !== null && (s[i-1] !== '+'
        || s[i+1] !== '+')) {
            return  false;
        }
    }
    return true; 
           
  }
     
  // keep this function call here 
  SimpleSymbols(readline());