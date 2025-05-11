 
fetch('https://coffee.alexflipnote.dev/random.json')
.then((res) => res.json())
.then((date) => {

    let continer = document.getElementById("continer");
        let imgAPI = document.createElement('img');
        
        imgAPI.src = date.file
        continer.innerText = " " 
        continer.appendChild(imgAPI)
    });
    


