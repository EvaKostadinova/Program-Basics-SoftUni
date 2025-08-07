function trainingLab(widthInMeters, highInMeters){
    // Преобразуваме метри в сантиметри
    let widthinCentemeters = widthInMeters * 100;
    let highInCentemeters = highInMeters * 100;

    //Място за бюро от двете страни, изваждаме 100 см. за коридора
    let usableWidht = highInCentemeters - 100;

    // Колко бюра се побират в ширината (всяко е 70 см.)
    let deskPerRow = Math.floor(usableWidht/70);

    // Колко реда по дължина (всяко място е 120 см.)
    let rows = Math.floor(widthinCentemeters/120);

    //Общо места (изваждаме 3 за катедра и вход)
    let totalSeats = (deskPerRow * rows);
    totalSeats -= 3;

    console.log(totalSeats);
}

trainingLab(15, 8.9);