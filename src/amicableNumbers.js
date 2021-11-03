function amicableNumbers(n1,n2) {

    let n1Sum=0;
    let n2Sum=0;
    for(let i=1;i<n1;i++){

        if(n1%i==0)

        n1Sum +=i;
    }
    for(let i=1;i<n2;i++){

        if(n2%i==0)

        n2Sum +=i;
        }

        if(n1==n2Sum && n2==n1Sum) 
        { 
           console.log(`${n1},${n2} are Amicable numbers.`)
        }
        else {
            console.log(`${n1},${n2} are not Amicable numbers.`)
        }

}


amicableNumbers(220,284)