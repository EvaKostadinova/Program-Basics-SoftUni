function fishTank(lengthInCentemeters, widthInCentemeters, highInCentemeters, percent){
    let aquariumVolume = lengthInCentemeters * widthInCentemeters * highInCentemeters;
    let volumeInLeters = aquariumVolume * 0.001;
    let occupiedSpace = percent / 100;
    let litersNeeded = volumeInLeters * (1-occupiedSpace);

    console.log(litersNeeded);
}

fishTank(105, 77, 89, 18.5);