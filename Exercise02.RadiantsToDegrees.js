// градус = радиан * 180 / π. Числото π в JavaScript програми е достъпно чрез Math.PI.
function radiansToDegrees (radians){
    let degrees = radians * 180/Math.PI;

    console.log(degrees);
}

radiansToDegrees(3.1416);