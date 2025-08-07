// 1.	x – височината на къщата – реално число в интервала [2.0...100.0]
// 2.	y – дължината на страничната стена – реално число в интервала [2.0...100.0]
// 3.	h – височината на триъгълната стена на прокрива – реално число в интервала [2.0...100.0]

// СТЕНИ
// Страничната стена е с площ – 6*10 = 60;
// Прозорецът е с площ = 1.5*1.5 = 2.25;
// Двете страници са общо – 2*60 - 2*2.25 = 115.5;
// Задната стена – 6*6 = 36; Вход: 1.2*2 = 2.4
// Общо предна и задна – 2*36 - 2.4 = 69.6
// ОБЩА ПЛОЩ: 115.5 + 69.6 = 185.1 м2
// Зелена боя = 185.1 / 3.4 = 54.44 литра
// ПОКРИВ
// Двата правоъгълника на покрива – 2 * (6*10) = 120
// Двата триъгълниците – 2 * (6*5.2 / 2) = 2 * 15.6 = 31.2
// ОБЩА ПЛОЩ: 120 + 31.2 = 151.2 м2
// Червена боя = 151.2 / 4.3 = 35.16 литра

function housePainting (xHighHouse, yLenghtSideWall, hHighTriangleWall){
    let sideWallArea = xHighHouse * yLenghtSideWall;
    let windowArea = 1.5 * 1.5;
    let twoSides = 2 * sideWallArea - 2 * windowArea;
    let backWall = xHighHouse * xHighHouse;
    let entrance = 1.2 * 2;
    let totalFrontAndBAck = 2 * backWall - entrance;

    let totalAreaWalls = twoSides + totalFrontAndBAck;

    let greenPaintNeeded = totalAreaWalls / 3.4;

    let roofRectangles = 2 * (xHighHouse * yLenghtSideWall);
    let roofTriangles = 2 * (xHighHouse * hHighTriangleWall/2);

    let totalAreaRoof = roofRectangles + roofTriangles;

    let redPaintNeeded = totalAreaRoof / 4.3;

    console.log(greenPaintNeeded.toFixed(2));
    console.log(redPaintNeeded.toFixed(2));
}

housePainting (10.25, 15.45, 8.88);