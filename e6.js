function LetterCapitalize(str) { 

    var s = str.split(" ");
    var s2="";
    for (i=0;i<s.length;i++)
    {
       s2=s2+s[i].charAt(0).toUpperCase();
       s2=s2+s[i].substring(1,s[i].length)+" ";
    }
    
      // code goes here  
      return s2; 
             
    }
       
    // keep this function call here 
    LetterCapitalize(readline());                            
    
    
      