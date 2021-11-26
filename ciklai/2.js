function num() {
    
    debugger;
    let y = document.getElementById('y').value;
    let x = document.getElementById('x').value;
    let kartai = parseInt(x) + parseInt(y * 4);
    for(let i=parseInt(x);i<kartai; i += parseInt(y))
    {
        document.getElementById('rez').innerHTML += i + ' ' + i ** 3 + '<br>';
    }
 


    }
     
    
    
    
    
    
    
    
    