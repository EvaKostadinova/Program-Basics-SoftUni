function concatenateData(firstName, LastName, age, town){
    let text = "You are " + firstName + " " + LastName + ", a " + age + "-years old person from " + town + "."; 
    console.log(text);
}

concatenateData("Maria", "Ivanova", "20", "Sofia");

function concatenateData(firstName, LastName, age, town){
    let text = `You are ${firstName} ${LastName}, a ${age}-years old person from ${town}.`
    console.log(text);
}

concatenateData("Eva", "Kostadinova", 20, "Dupnitsa");