function AlphabetSoup(str) { 

    // code goes here  
    var s= str.split("").sort().join("")
    return s; 
           
  }
     
  // keep this function call here 
  AlphabetSoup(readline());