const isPrime = (n) =>{
    let i=2;
    let ans = true;

    while(i <= n/2){
       
        if( n%i === 0){
            return !ans;
        }
            i = i++;
       
    }
    return ans

}

console.log("hi");
