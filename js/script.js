const sendBtnElem = document.getElementById("send-btn");
console.log(sendBtnElem);

sendBtnElem.addEventListener("click", function() {
    
    const userImputElem = document.getElementById ("username");
        const userValue = userImputElem.value;
            console.log(userValue, typeof userValue);

    const numberImputElem = document.getElementById ("km");
        const numberValue = parseInt(numberImputElem.value);
            console.log(numberValue, typeof numberValue);

    const ageImputElem = document.getElementById("eta");
        const ageValue = ageImputElem.value
            console.log(ageValue, typeof ageValue);


    let priceKm = numberValue * 0.21
        console.log(priceKm, typeof priceKm);

    let randomNumCarrozza = Math.floor((Math.random() * 10) + 1);
        console.log(randomNumCarrozza, typeof randomNumCarrozza);

    let randomCodeCP = Math.floor((Math.random() * 99999) + 1);
        console.log(randomCodeCP, typeof randomCodeCP);

    if (isNaN(userValue) && !/\d/.test(userValue) && (!isNaN(numberValue) && numberValue > 0)) {

        document.getElementById("usernameDisplay").innerHTML = `${userValue}`;
        document.getElementById("carrozza").innerHTML = `${randomNumCarrozza}`;
        document.getElementById("codeInternal").innerHTML = `${randomCodeCP}`;
        
        if (ageValue === ("minorenne")) {

            document.getElementById("offertaBiglietto").innerHTML = `Biglietto Giovane`
            
            let discountedPriceUnder18 = priceKm * 0.80; 

            document.getElementById("prezzo").innerHTML = `<del>€ ${priceKm.toFixed(2)}</del> € ${discountedPriceUnder18.toFixed(2)}`

        } else if (ageValue === ("over65")) {

            document.getElementById("offertaBiglietto").innerHTML = `Biglietto Senior`
            
            let discountedPriceOver65 = priceKm * 0.60; 
            
            document.getElementById("prezzo").innerHTML = `<del>€ ${priceKm.toFixed(2)}</del> € ${discountedPriceOver65.toFixed(2)}`
        
        } else {

            document.getElementById("offertaBiglietto").innerHTML = `Biglietto Standard`
            document.getElementById("prezzo").innerHTML = `€ ${priceKm.toFixed(2)}`
        }

    } else {

        document.getElementById("usernameDisplay").innerHTML = `-`;
        document.getElementById("offertaBiglietto").innerHTML = `-`;
        document.getElementById("carrozza").innerHTML = `-`;
        document.getElementById("codeInternal").innerHTML = `-`;
        document.getElementById("prezzo").innerHTML = `-`;

        alert(`Errore nella compilazione :

            - Conrollare Nome e Cogmone inseriti correttamente.
            - Controllare i km inseriti correttamente.`)
    }
})