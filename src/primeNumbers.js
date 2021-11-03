function findPrime(...numbers) {
    let isPrime 
    for (let i = 0; i < numbers.length; i++) {
        
        isPrime = 0;
        for(let a =1; a<=numbers[i]; a++) 
		{			
			if((numbers[i]%a)==0) 
			{
				isPrime++;				
			}
		}
		if(isPrime == 2 )
		{ 
			console.log(`${numbers[i]} is a prime number.`);

		}
        else {
            console.log(`${numbers[i]} is not a prime number.`)
        }
    }

}

findPrime(2,3,4,5,6,7,8,9,10,11,12);