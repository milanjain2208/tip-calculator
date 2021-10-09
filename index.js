window.onload = function() {
    const amount = document.querySelector("#input-amount")
    const noOfPeople = document.querySelector("#no-of-people")
    const totalDisplay = document.querySelector(".total-display")
    const tips = document.querySelectorAll(".tip")
    const tipAmountDisplay = document.querySelector(".tip-amount-display")
    const customtip = document.querySelector("#custom-tip")
    let amountVal = 0
    let noOfPeopleVal = 0
    let totalDisplayVal = 0
    amount.addEventListener('input', event => {
        amountVal = event.target.value
        if(isNaN(amountVal) || amountVal=="") {
            document.querySelector(".number-error").classList.remove("hide")
            totalDisplay.textContent = "$0.00"
        }
        else {
            document.querySelector(".number-error").classList.add("hide")
            amountVal = parseFloat(amountVal)
            if(!isNaN(noOfPeopleVal) && noOfPeopleVal!="0" && noOfPeopleVal!="") {
                totalDisplayVal = amountVal/noOfPeopleVal
                totalDisplay.textContent = "$" + parseFloat(totalDisplayVal).toFixed(2)
            }
        }
        tipAmountDisplay.textContent="$0.00"
        customtip.textContent=""
    })
    noOfPeople.addEventListener('input', event => {
        noOfPeopleVal = event.target.value
        noOfPeopleError = document.querySelector(".no-of-people-error")
        if(isNaN(noOfPeopleVal)) {
            noOfPeopleError.classList.remove("hide")
            noOfPeopleError.textContent = "Enter a number"
            totalDisplay.textContent = "$0.00"
        }
        else if(noOfPeopleVal=="0" || noOfPeopleVal=="") {
            noOfPeopleError.classList.remove("hide")
            noOfPeopleError.textContent = "Can't be zero"
            totalDisplay.textContent = "$0.00"
        }
        else {
            noOfPeopleError.classList.add("hide")
            noOfPeopleVal = parseInt(noOfPeopleVal)
            if(!isNaN(amountVal) && amountVal!="0" && amountVal!="") {
                totalDisplayVal = amountVal/noOfPeopleVal
                totalDisplay.textContent = "$" + parseFloat(totalDisplayVal).toFixed(2)
            }
        }
        tipAmountDisplay.textContent="$0.00"
        customtip.textContent=""
    })
    tips.forEach(tip => tip.addEventListener('click', event => {
        // tipAmountDisplay.textContent = "$"+parseFloat(eval(tip))
        let tipVal = tip.textContent
        tipVal = tipVal.slice(0,-1)
        tipAmountDisplay.textContent="$"+parseFloat(tipVal*totalDisplayVal/100).toFixed(2)
        totalDisplay.textContent = "$"+parseFloat(totalDisplayVal+(tipVal*totalDisplayVal/100)).toFixed(2)
    }))
    customtip.addEventListener('input', event => {
        let tipVal = event.target.value
        console.log(tipVal)
        tipAmountDisplay.textContent="$"+parseFloat(tipVal*totalDisplayVal/100).toFixed(2)
        totalDisplay.textContent = "$"+parseFloat(totalDisplayVal+(tipVal*totalDisplayVal/100)).toFixed(2)
    })
}