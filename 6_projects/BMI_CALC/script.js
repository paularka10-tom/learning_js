const a = document.querySelector('form')
// this usecase provides empty value
    // const he = parseInt(document.querySelector('#height').value);

a.addEventListener('submit',function(e){
    e.preventDefault();

    const he = parseInt(document.querySelector('#height').value);
    const we = parseInt(document.querySelector('#weight').value);
    const results = (document.querySelector('#results'));
    if(he === '' || he<0 || isNaN(he)){
        results.innerHTML=`PROVIDE HEIGHT PLEASE.`;
    }
    else if(we === '' || we<0 || isNaN(we)){
        results.innerHTML=`PROVIDE WEIGHR PLEASE.`;
    }
    else{
        const bmi = (we / ((he*he)/10000)).toFixed(2);
        results.innerHTML =`BMI: ${bmi}` 
    }

});