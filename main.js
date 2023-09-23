let form = document.forms[0];
let fo = document.querySelector(".num")

window.onload = function () {
    fo.focus();
    fo.click();
}

form.onsubmit = year;
form.onclick = year;

function year(event) {
    event.preventDefault();
    let theAge = document.querySelector("[name=num]").value;

    if (theAge < 0) {
        let positive = "+Number !"

        document.querySelector(".year").textContent = `${positive}`;    
        document.querySelector(".month").textContent = `${positive}`;    
        document.querySelector(".week").textContent = `${positive}`;    
        document.querySelector(".day").textContent = `${positive}`;    
        document.querySelector(".hour").textContent = `${positive}`;    
        document.querySelector(".minute").textContent = `${positive}`;    
        document.querySelector(".second").textContent = `${positive}`;
    } else if (theAge < 201) {
        document.querySelector(".year").textContent = `${theAge * 1}`;    
        document.querySelector(".month").textContent = `${theAge * 12}`;    
        document.querySelector(".week").textContent = `${theAge * 12 * 4}`;    
        document.querySelector(".day").textContent = `${theAge * 12 * 4 * 7}`;    
        document.querySelector(".hour").textContent = `${theAge * 12 * 4 * 7 * 24}`;    
        document.querySelector(".minute").textContent = `${theAge * 12 * 4 * 7 * 24 * 60}`;    
        document.querySelector(".second").textContent = `${theAge * 12 * 4 * 7 * 24 * 60 * 60}`;  
    } else {
        let lie = "lier :(";

        document.querySelector(".year").textContent = `${lie}`;    
        document.querySelector(".month").textContent = `${lie}`;    
        document.querySelector(".week").textContent = `${lie}`;    
        document.querySelector(".day").textContent = `${lie}`;    
        document.querySelector(".hour").textContent = `${lie}`;    
        document.querySelector(".minute").textContent = `${lie}`;    
        document.querySelector(".second").textContent = `${lie}`;
    }
}

