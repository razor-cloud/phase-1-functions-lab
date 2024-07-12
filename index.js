// Code your solution here
function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * 264;
}

function calculateFare(start, end) {
  const distanceInFeet = distanceTravelledInFeet(start, end);
  if (distanceInFeet > 2500) {
    return 'cannot travel that far';
  }
  let fare = 0;
  if (distanceInFeet > 2000) {
    fare = 25; 
  } else if (distanceInFeet > 400) {
    fare = (distanceInFeet - 400) * 0.02; 
  }
  return fare;
}

function calculatesFarePrice(start, end) {
  const distanceInFeet = Math.abs(end - start) * 264; // Convert blocks to feet
  if (distanceInFeet > 2500) {
    return 'cannot travel that far';
  }
  let fare = 0;
  if (distanceInFeet > 2000) {
    fare = 25; // Flat fare for distances over 2000 feet
  } else if (distanceInFeet > 400) {
    fare = (distanceInFeet - 400) * 0.02; // 2 cents per foot for distances between 400 and 2000 feet
  }
  return fare;
}