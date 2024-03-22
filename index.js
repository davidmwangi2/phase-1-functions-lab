// write your code here


function distanceFromHqInBlocks(distance) {
    if (distance >= 42) {
        return distance - 42;
    } else {
        return 42 - distance;
    }
}


function distanceFromHqInFeet(distance) {
    if (distance >= 42) {
        return (distance - 42) * 264;
    } else {
        return (42 - distance) * 264;
    }
}


function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    if (start < 0 ||destination < 0) {
        return 'invald location';
    }
    const distanceinfeet =distanceTravelledInFeet(start, destination);
    if (distanceinfeet <= 400) {
        return 0;
    } else if (distanceinfeet <= 2000) {
        return (distanceinfeet-400) * 0.02;
    } else if (distanceinfeet <= 2500) {
        return 25;
    } else {
        return'cannot travel that far';
    }
}




