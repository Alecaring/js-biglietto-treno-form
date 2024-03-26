const sendBtnElem = document.getElementById("send-btn");
console.log(sendBtnElem);

sendBtnElem.addEventListener("click", function() {
    
    const userImputElem = document.getElementById ("name");
    
    const userValue = userImputElem.value;
    console.log(userValue, typeof userValue);

    const numberImputElem = document.getElementById ("km");
    
    const numberValue = parseInt(numberImputElem.value);
    console.log(numberValue, typeof numberValue);
})