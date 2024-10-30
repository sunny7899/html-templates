let celsius=document.querySelector("#celsiusInput");
let fahrenheit=document.querySelector("#fahrenheitInput");
let kelvin=document.querySelector("#kelvinInput");
let btn = document.querySelector("#btn")
celsius.addEventListener("input",()=>{
    let cTemp =parseFloat(celsius.value);
    let fTemp=((9/5)*cTemp)+32;
    let kTemp= cTemp+273.15;
    fahrenheit.value=Math.round(fTemp);
    kelvin.value=Math.round(kTemp);
});
fahrenheit.addEventListener("input",()=>{
    let fTemp =parseFloat(fahrenheit.value);
    let cTemp=((5/9)*(fTemp-32));
    let kTemp= cTemp+273.15;
    celsius.value=Math.round(cTemp);
    kelvin.value=Math.round(kTemp);
});
kelvin.addEventListener("input",()=>{
    let kTemp =parseFloat(kelvin.value);
    let cTemp= kTemp -273.15;
    let fTemp=((9/5)*cTemp)+32;
    celsius.value=Math.round(cTemp);
    fahrenheit.value=Math.round(fTemp);
});
btn.addEventListener("click",()=>{
    celsius.value="";
    kelvin.value="";
    fahrenheit.value="";
})

