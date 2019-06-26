function TimeConvert(num) { 

    // code goes here  
  var n2;
  var n=num/60+" ";
  var s= n.split(".");
  n2=(num)-s[0]*60;
  
    return s[0]+":"+n2; 
           
  }
     
  // keep this function call here 
  TimeConvert(readline());       