const numberIsBig = function(number) {
  if (number > 100) {
      return true;
  } else {
      return false;
  }
};

console.log(numberIsBig(150));
console.log(numberIsBig(50));
console.log(numberIsBig(0));
console.log(numberIsBig(999));

const numberIsBig = function(number) {
  return number > 100;
};

const getBouncerReaction = function(
  maxVisitors,
  currentVisitors,
  ageOfPotentialVisitor
) {
  if (ageOfPotentialVisitor < 18) {
      return "this is a club for adults";
  }

  if (currentVisitors >= maxVisitors) {
      return "it's too busy now, come back later";
  } else {
      return "come in";
  }
};

console.log(getBouncerReaction(2000, 0, 15)); // "this is a club for adults"
console.log(getBouncerReaction(2000, 1999, 50)); // "come in"
console.log(getBouncerReaction(2000, 2000, 40)); // "it's too busy now, come back later"
console.log(getBouncerReaction(2000, 2999, 30)); // "it's too busy now, come back later"

const getBouncerReaction = function(
  maxVisitors,
  currentVisitors,
  ageOfPotentialVisitor
) {
  if (ageOfPotentialVisitor < 18) return "this is a club for adults";
  if (currentVisitors >= maxVisitors)
      return "it's too busy now, come back later";
  return "come in";
};

const getBouncerReaction = function(
  maxVisitors,
  currentVisitors,
  ageOfPotentialVisitor
) {
  let response;
  if (ageOfPotentialVisitor < 18) {
      response = "this is a club for adults";
  } else if (currentVisitors >= maxVisitors) {
      response = "it's too busy now, come back later";
  } else {
      response = "come in";
  }
  return response;
};

const calculateAverage = function(
  number1,
  number2,
  number3,
  number4,
  number5
) {
  const total = number1 + number2 + number3 + number4 + number5;
  const average = total / 5;
  return average;
};

console.log(calculateAverage(1, 1, 1, 1, 1)); // 1
console.log(calculateAverage(1, 2, 3, 4, 5)); // 3
console.log(calculateAverage(-10000, 0, 0, 0, 5000)); // -1000

const calculateAverage = function(
  number1,
  number2,
  number3,
  number4,
  number5
) {
  const total = number1 + number2 + number3 + number4 + number5;
  const average = total / 5;
  const averageRounded = Math.round(average);
  return averageRounded;
};