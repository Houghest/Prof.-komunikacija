function num() {
    
    debugger;
 let number = document.getElementById('x').value;
 let sum =0;
    for(i=1;i<number; i*=10)

    {
        sum += parseInt(number /i) % 10 ;
 
    }
    document.getElementById('rez').innerHTML =sum;


    }
     
    
    
    
    
    
    
    
    