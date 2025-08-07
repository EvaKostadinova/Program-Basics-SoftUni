// Градуси	Време
// 26.00 - 35.00	Hot
// 20.1 - 25.9	Warm
// 15.00 - 20.00	Mild
// 12.00 - 14.9	Cool
// 5.00 - 11.9	Cold
// Ако се въведат градуси, различни от посочените в таблицата, да се отпечата "unknown".

function weatherForecast(temperature){
    if (temperature >= 26.00 && temperature <= 35.00) {
        console.log("Hot");
        
    }else if (temperature >= 20.1 && temperature <= 25.9){
        console.log("Warm");
        
    }else if (temperature >= 15.00 && temperature <= 20.00){
        console.log("Mild");
        
    }else if (temperature >= 12.00 && temperature <= 14.9){
        console.log("Cool");
        
    }else if (temperature >= 5.00 && temperature <= 11.9){
        console.log("Cold");

    }else{
        console.log("unknown");
    }
}

weatherForecast(25);