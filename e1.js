function LongestWord(sen) { 
var s=sen.split(" ");
var c;
var a=0;
for(i=0;i<s.length;i++)
{
   if(s[i].length>a){ a=s[i].length; c=s[i];}
}

  return c; 
         
}
LongestWord(readline());                            
