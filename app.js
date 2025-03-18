let URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json";

const dropdownSelects = document.querySelectorAll(".dropdown select");

for(let select of dropdownSelects) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText= currCode;
        newOption.value= currCode;
        
        if (select.name==="from" && currCode=="INR"){
            newOption.selected="INR";
        } else if (select.name==="to" && currCode=="USD"){
            newOption.selected="USD";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img= element.parentElement.querySelector("img");
    img.src= newSrc;
}