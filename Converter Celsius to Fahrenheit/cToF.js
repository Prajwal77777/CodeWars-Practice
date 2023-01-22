function Fahrenheit_to_Celsius(start , end , step){
    for (let i = start; i <= end; i += step){
        let celsius = (i - 32) * (5 / 9);
        console.log(`${i} ${celsius.toFixed(0)}`);
    }
}

Fahrenheit_to_Celsius(29 , 221 , 55);
