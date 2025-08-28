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


// call btn function section 

document.getElementById('ne-call-btn').addEventListener('click' , function(){
    // click and - coin 
    const title = document.getElementById('ne-title').innerText
    const callNumber = document.getElementById('ne-number').innerText
    const availableCoin = document.getElementById('available-coin')
    const availableCoinNumber = parseInt(document.getElementById('available-coin').innerText)
    const newAvailableCoin = availableCoinNumber - 20 ;
    const totalNewAvailableCoin = newAvailableCoin;
    if(availableCoinNumber < 20){
        alert("Minium 20 Coin Required For a Call")
        return;
    }
    alert('calling ' + title +" "+ callNumber)

    availableCoin.innerText = totalNewAvailableCoin ;

    // push in history 
    const callHistory = document.getElementById('call-history');
    
    const now = new Date();
    const date = now.toLocaleTimeString();

    const div = document.createElement('div');

    div.innerHTML = `
    <div class="h-[86px] bg-[#FAFAFA] w-[95%] mx-auto rounded-xl flex justify-between p-3 items-center">
                        <div>
                            <h1 class="font-semibold mb-1">${title}</h1>
                            <p class="text-[#5C5C5C] text-lg">${callNumber}</p>
                        </div>
                        <div>
                            <p class="font-semibold">${date}</p>
                        </div>
                    </div>
    `
    callHistory.appendChild(div) ;

})
document.getElementById('police-call-btn').addEventListener('click' , function(){
    // click and - coin 
    const availableCoin = document.getElementById('available-coin')
    const availableCoinNumber = parseInt(document.getElementById('available-coin').innerText)
    const newAvailableCoin = availableCoinNumber - 20 ;
    const totalNewAvailableCoin = newAvailableCoin;
    if(availableCoinNumber < 20){
        alert("Minium 20 Coin Required For a Call")
        return;
    }
    const title = document.getElementById('police-title').innerText
    const callNumber = document.getElementById('police-number').innerText
    alert('calling ' + title +" "+ callNumber)
    availableCoin.innerText = totalNewAvailableCoin ;

    // push in history 
    const callHistory = document.getElementById('call-history');
    const now = new Date();
    const date = now.toLocaleTimeString();

    const div = document.createElement('div');

    div.innerHTML = `
    <div class="h-[86px] bg-[#FAFAFA] w-[95%] mx-auto rounded-xl flex justify-between p-3 items-center">
                        <div>
                            <h1 class="font-semibold mb-1">${title}</h1>
                            <p class="text-[#5C5C5C] text-lg">${callNumber}</p>
                        </div>
                        <div>
                            <p class="font-semibold">${date}</p>
                        </div>
                    </div>
    `
    callHistory.appendChild(div) ;

})
document.getElementById('fire-call-btn').addEventListener('click' , function(){
    // click and - coin 
    const availableCoin = document.getElementById('available-coin')
    const availableCoinNumber = parseInt(document.getElementById('available-coin').innerText)
    const newAvailableCoin = availableCoinNumber - 20 ;
    const totalNewAvailableCoin = newAvailableCoin;
    if(availableCoinNumber < 20){
        alert("Minium 20 Coin Required For a Call")
        return;
    }
    const title = document.getElementById('fire-title').innerText
    const callNumber = document.getElementById('fire-number').innerText
    alert('calling ' + title +" "+ callNumber)    

    availableCoin.innerText = totalNewAvailableCoin ;

    // push in history 
    const callHistory = document.getElementById('call-history');
    const now = new Date();
    const date = now.toLocaleTimeString();

    const div = document.createElement('div');

    div.innerHTML = `
    <div class="h-[86px] bg-[#FAFAFA] w-[95%] mx-auto rounded-xl flex justify-between p-3 items-center">
                        <div>
                            <h1 class="font-semibold mb-1">${title}</h1>
                            <p class="text-[#5C5C5C] text-lg">${callNumber}</p>
                        </div>
                        <div>
                            <p class="font-semibold">${date}</p>
                        </div>
                    </div>
    `
    callHistory.appendChild(div) ;

})
document.getElementById('ambulance-call-btn').addEventListener('click' , function(){
    // click and - coin 
    const availableCoin = document.getElementById('available-coin')
    const availableCoinNumber = parseInt(document.getElementById('available-coin').innerText)
    const newAvailableCoin = availableCoinNumber - 20 ;
    const totalNewAvailableCoin = newAvailableCoin;
    if(availableCoinNumber < 20){
        alert("Minium 20 Coin Required For a Call")
        return;
    }
    const title = document.getElementById('ambulance-title').innerText
    const callNumber = document.getElementById('ambulance-number').innerText
    alert('calling ' + title +" "+ callNumber)
    availableCoin.innerText = totalNewAvailableCoin ;

    // push in history 
    const callHistory = document.getElementById('call-history');
    const now = new Date();
    const date = now.toLocaleTimeString();

    const div = document.createElement('div');

    div.innerHTML = `
    <div class="h-[86px] bg-[#FAFAFA] w-[95%] mx-auto rounded-xl flex justify-between p-3 items-center">
                        <div>
                            <h1 class="font-semibold mb-1">${title}</h1>
                            <p class="text-[#5C5C5C] text-lg">${callNumber}</p>
                        </div>
                        <div>
                            <p class="font-semibold">${date}</p>
                        </div>
                    </div>
    `
    callHistory.appendChild(div) ;

})
document.getElementById('w&c-call-btn').addEventListener('click' , function(){
    // click and - coin 
    const availableCoin = document.getElementById('available-coin')
    const availableCoinNumber = parseInt(document.getElementById('available-coin').innerText)
    const newAvailableCoin = availableCoinNumber - 20 ;
    const totalNewAvailableCoin = newAvailableCoin;
    if(availableCoinNumber < 20){
        alert("Minium 20 Coin Required For a Call")
        return;
    }
    const title = document.getElementById('w&c-title').innerText
    const callNumber = document.getElementById('w&c-number').innerText
    alert('calling ' + title +" "+ callNumber)
    availableCoin.innerText = totalNewAvailableCoin ;

    // push in history 
    const callHistory = document.getElementById('call-history');
    const now = new Date();
    const date = now.toLocaleTimeString();

    const div = document.createElement('div');

    div.innerHTML = `
    <div class="h-[86px] bg-[#FAFAFA] w-[95%] mx-auto rounded-xl flex justify-between p-3 items-center">
                        <div>
                            <h1 class="font-semibold mb-1">${title}</h1>
                            <p class="text-[#5C5C5C] text-lg">${callNumber}</p>
                        </div>
                        <div>
                            <p class="font-semibold">${date}</p>
                        </div>
                    </div>
    `
    callHistory.appendChild(div) ;

})
document.getElementById('dudok-call-btn').addEventListener('click' , function(){
    // click and - coin 
    const availableCoin = document.getElementById('available-coin')
    const availableCoinNumber = parseInt(document.getElementById('available-coin').innerText)
    const newAvailableCoin = availableCoinNumber - 20 ;
    const totalNewAvailableCoin = newAvailableCoin;
    if(availableCoinNumber < 20){
        alert("Minium 20 Coin Required For a Call")
        return;
    }
    const title = document.getElementById('ac-title').innerText
    const callNumber = document.getElementById('ac-number').innerText
    alert('calling ' + title +" "+ callNumber)
    availableCoin.innerText = totalNewAvailableCoin ;

    // push in history 
    const callHistory = document.getElementById('call-history');
    const now = new Date();
    const date = now.toLocaleTimeString();

    const div = document.createElement('div');

    div.innerHTML = `
    <div class="h-[86px] bg-[#FAFAFA] w-[95%] mx-auto rounded-xl flex justify-between p-3 items-center">
                        <div>
                            <h1 class="font-semibold mb-1">${title}</h1>
                            <p class="text-[#5C5C5C] text-lg">${callNumber}</p>
                        </div>
                        <div>
                            <p class="font-semibold">${date}</p>
                        </div>
                    </div>
    `
    callHistory.appendChild(div) ;

})
document.getElementById('electricity-call-btn').addEventListener('click' , function(){
    // click and - coin 
    const availableCoin = document.getElementById('available-coin')
    const availableCoinNumber = parseInt(document.getElementById('available-coin').innerText)
    const newAvailableCoin = availableCoinNumber - 20 ;
    const totalNewAvailableCoin = newAvailableCoin;
    if(availableCoinNumber < 20){
        alert("Minium 20 Coin Required For a Call")
        return;
    }
    const title = document.getElementById('Electricity-title').innerText
    const callNumber = document.getElementById('Electricity-number').innerText
    alert('calling ' + title +" "+ callNumber)
    availableCoin.innerText = totalNewAvailableCoin ;

    // push in history 
    const callHistory = document.getElementById('call-history');
    const now = new Date();
    const date = now.toLocaleTimeString();

    const div = document.createElement('div');

    div.innerHTML = `
    <div class="h-[86px] bg-[#FAFAFA] w-[95%] mx-auto rounded-xl flex justify-between p-3 items-center">
                        <div>
                            <h1 class="font-semibold mb-1">${title}</h1>
                            <p class="text-[#5C5C5C] text-lg">${callNumber}</p>
                        </div>
                        <div>
                            <p class="font-semibold">${date}</p>
                        </div>
                    </div>
    `
    callHistory.appendChild(div) ;

})
document.getElementById('brac-call-btn').addEventListener('click' , function(){
    // click and - coin 
    const availableCoin = document.getElementById('available-coin')
    const availableCoinNumber = parseInt(document.getElementById('available-coin').innerText)
    const newAvailableCoin = availableCoinNumber - 20 ;
    const totalNewAvailableCoin = newAvailableCoin;
    if(availableCoinNumber < 20){
        alert("Minium 20 Coin Required For a Call")
        return;
    }
    const title = document.getElementById('Brac-title').innerText
    const callNumber = document.getElementById('brac-number').innerText
    alert('calling ' + title +" "+ callNumber)
    availableCoin.innerText = totalNewAvailableCoin ;

    // push in history 
    const callHistory = document.getElementById('call-history');
    const now = new Date();
    const date = now.toLocaleTimeString();

    const div = document.createElement('div');

    div.innerHTML = `
    <div class="h-[86px] bg-[#FAFAFA] w-[95%] mx-auto rounded-xl flex justify-between p-3 items-center">
                        <div>
                            <h1 class="font-semibold mb-1">${title}</h1>
                            <p class="text-[#5C5C5C] text-lg">${callNumber}</p>
                        </div>
                        <div>
                            <p class="font-semibold">${date}</p>
                        </div>
                    </div>
    `
    callHistory.appendChild(div) ;

})
document.getElementById('railway-call-btn').addEventListener('click' , function(){
    // click and - coin 
    const availableCoin = document.getElementById('available-coin')
    const availableCoinNumber = parseInt(document.getElementById('available-coin').innerText)
    const newAvailableCoin = availableCoinNumber - 20 ;
    const totalNewAvailableCoin = newAvailableCoin;
    if(availableCoinNumber < 20){
        alert("Minium 20 Coin Required For a Call")
        return;
    }
    const title = document.getElementById('railway-title').innerText
    const callNumber = document.getElementById('railway-number').innerText
    alert('calling ' + title +" "+ callNumber)
    availableCoin.innerText = totalNewAvailableCoin ;

    // push in history 
    const callHistory = document.getElementById('call-history');
    const now = new Date();
    const date = now.toLocaleTimeString();

    const div = document.createElement('div');

    div.innerHTML = `
    <div class="h-[86px] bg-[#FAFAFA] w-[95%] mx-auto rounded-xl flex justify-between p-3 items-center">
                        <div>
                            <h1 class="font-semibold mb-1">${title}</h1>
                            <p class="text-[#5C5C5C] text-lg">${callNumber}</p>
                        </div>
                        <div>
                            <p class="font-semibold">${date}</p>
                        </div>
                    </div>
    `
    callHistory.appendChild(div) ;

})