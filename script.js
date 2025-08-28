// Copy Btn Click Count section 

function copyCounter ( number , title) {
    
    const copyNumber = document.getElementById(number).innerText
    const copyNTitle = document.getElementById(title).innerText
    alert("Copy -" + copyNTitle + "- number - " + copyNumber);
    const copyContainer = document.getElementById('copy-container')
    const copyContainerNumber = parseInt(document.getElementById('copy-container').innerText)

    const newCopyContainer = copyContainerNumber + 1 ;

    copyContainer.innerText = newCopyContainer
}

document.getElementById('ne-copy-btn').addEventListener('click' , function(){
    copyCounter('ne-number' , 'ne-title');
})
document.getElementById('police-copy-btn').addEventListener('click' , function(){
    copyCounter('police-number' , 'police-title');
})
document.getElementById('fire-btn').addEventListener('click' , function(){
    copyCounter('fire-number' , 'fire-title');
})
document.getElementById('ambulance-copy-btn').addEventListener('click' , function(){
    copyCounter('ambulance-number' , 'ambulance-title');
})
document.getElementById('w&c-copy-btn').addEventListener('click' , function(){
    copyCounter('w&c-number' , 'w&c-title');
})
document.getElementById('ac-copy-btn').addEventListener('click' , function(){
    copyCounter('ac-number' , 'ac-title');
})
document.getElementById('Electricity-copy-btn').addEventListener('click' , function(){
    copyCounter( 'Electricity-number' , 'Electricity-title');
})
document.getElementById('brac-copy-btn').addEventListener('click' , function(){
    copyCounter('brac-number' , 'Brac-title');
})
document.getElementById('railway-copy-btn').addEventListener('click' , function(){
    copyCounter('railway-number' , 'railway-title');
})

// heart btn click section 


function heartCounter() {
    const heartContainer = document.getElementById('heart-container');
    const heartContainerNumber = parseInt(document.getElementById('heart-container').innerText);

    const newHeartContainer = heartContainerNumber + 1 ;

    heartContainer.innerText = newHeartContainer
}


document.getElementById('ne-heard').addEventListener('click' , function(){
    heartCounter();
})
document.getElementById('police-heard').addEventListener('click' , function(){
    heartCounter();
})
document.getElementById('fire-heard').addEventListener('click' , function(){
    heartCounter();
})
document.getElementById('ambulance-heard').addEventListener('click' , function(){
    heartCounter();
})
document.getElementById('w&c-heard').addEventListener('click' , function(){
    heartCounter();
})
document.getElementById('dudok-heard').addEventListener('click' , function(){
    heartCounter();
})
document.getElementById('electricity-herad').addEventListener('click' , function(){
    heartCounter();
})
document.getElementById('brac-heard').addEventListener('click' , function(){
    heartCounter();
})
document.getElementById('railway-heard').addEventListener('click' , function(){
    heartCounter();
})

