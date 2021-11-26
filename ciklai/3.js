function num() {
    
    debugger;
 let y=document.getElementById('y').value;
 let ats=1;
    for(let i=1;i<=y; i ++ )
    {
        document.getElementById('rez').innerHTML += i;
        if (i!=y)document.getElementById('rez').innerHTML += '*';
        ats *= i;
    }
    document.getElementById('rez').innerHTML += '=' +ats;


    }
     
    
    
    
    
    
    
    
    