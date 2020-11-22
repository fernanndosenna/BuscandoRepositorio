var ul = document.getElementById('u')

function buscar(){
    return new Promise(function(resolve, reject){
        var input = document.getElementById('in').value
        
       var xhr = new XMLHttpRequest();
    
       xhr.open('GET',`https://api.github.com/users/${input}/repos`)
       xhr.send(null);

       xhr.onreadystatechange = function(){

        if(xhr.readyState === 4){
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));  
                       
            }else{
                reject('Error na requisição')

            }
        }
       }

    }).then((response)=>{
    
        for(var prop in response){
            var itemText =document.createTextNode(response[prop].name) 
            console.log(itemText)
            var li = document.createElement('li');
            li.appendChild(itemText);
            ul.appendChild(li);
          }
    }).catch((error)=>{
        console.warn('Error na requisiçao' + error)
    })
}












