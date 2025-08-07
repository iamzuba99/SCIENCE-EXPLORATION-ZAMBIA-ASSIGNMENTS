// This simple pogram converts temp from Degrees to Farenheit and vice versa



function tempConverter(temp, unit ){
    if(unit == "C"){
        tempFarenheit = (temp*1.8) + 32;
        return tempFarenheit;
        console.log(tempFarenheit + " F");

    } else if(unit == "F") {
        tempCelsius = (temp-32) * 5/9;
        return tempCelsius;
        console.log(tempCelsius + " C");
    } else{
        console.log("Enter correct unit symbol. Use 'C' for celsius and 'F' for farenheit");
    }

}
    
tempConverter(45,C);
