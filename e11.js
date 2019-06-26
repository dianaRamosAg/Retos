function KaprekarsConstant(num) { 

    let n = num.toString();
    let count = 0;
    
    while (n !== '6174') {
        let n1 = n.split('');
        let z = 4 - n1.length;
        if (z !== 0) {
            for (let i = 0; i < z; i++) {
                n1.push('0');
            }
        }
        n1 = n1.sort();
        let n2 = [];
        for (let i = n1.length - 1; i >= 0; i--) {
            n2.push(n1[i]);
        }
        n = Math.abs(parseInt(n1.join('')) - parseInt(n2.join(''))).toString();
        count++;
    }
    
    return count;
           
  }
     
  // keep this function call here 
  KaprekarsConstant(readline());