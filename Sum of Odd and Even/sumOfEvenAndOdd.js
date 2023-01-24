function fact(n){
		
	if(n===0)
    	return 1 ;
    
    if(n < 0) 
	  return("Error");
		
	 let i = n;
	 let fact = 1;
	 
	 while(n / i != n) {
		fact = fact * i;
		i--;
	}
			
	return fact ;

}
