function circleAreaAndParameter(r){
    let calculatedArea = r * r * Math.PI;
    let calculatedParameter = (2 * r) * Math.PI;
    
    console.log(calculatedArea.toFixed(2));
    console.log(calculatedParameter.toFixed(2));
}

circleAreaAndParameter(4.5);