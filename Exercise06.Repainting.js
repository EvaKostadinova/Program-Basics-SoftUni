// Предпазен найлон - 1.50 лв. за кв. метър
// Боя - 14.50 лв. за литър
// Разредител за боя - 5.00 лв. за литър

function repainting (nilon, paint, liquid, workersHoursToBeDone){
    let nilonPrice = (nilon + 2) * 1.50;
    let paintPrice = (paint * 1.10) * 14.50;
    let liquidPrice = liquid * 5;

    let materialsSum = nilonPrice + paintPrice + liquidPrice + 0.4;

    let workersSUm = (0.30 * materialsSum) * workersHoursToBeDone;

    let totalSum = materialsSum + workersSUm;

    console.log(totalSum);
}

repainting (5, 10, 10, 1);