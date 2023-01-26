function prime(s , e){
    let count = 0;	
   /* Write your code here
    No need to specify return type 
    Input and output already taken care of, you have to just return the output variable */
    for (let i = s; i <= e; i++){
        for (let j = 2; j < i; j++){
            if (j % i === 0) {
                count++;
                return i;
            }
        }
    }
    return count;
}
