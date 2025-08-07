function summerReading (pageCount, pagesPerHour, daysCount){
    let totalHours = pageCount / pagesPerHour;
    let hoursPerDay = totalHours / daysCount;

    console.log(hoursPerDay);
}

summerReading (212, 20, 2);