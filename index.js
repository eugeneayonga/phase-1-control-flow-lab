function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!"
  } else if (feet > 2000 && feet < 2500) {
    return "I will gladly take your thirty bucks."
  } else if (feet > 2500) {
    return 'No can do.'
  }
}


// TERNARY CHALLENGE
function ternaryCheckCity(city) {
  let result;

  city === "NYC" ? result = "Ok, sounds good." : result = "No go.";
  return result;
}


function switchOnCharmFromTip(tip) {

  if (tip === "generous") {
      return "Thank you so much.";
  } else if (tip === "not as generous") {
      return "Thank you.";
  } else {
      return "Bye.";
  }
}


// SWITCH CHALLENGE
/*
function switchOnCharmFromTip(tip) {
function switchOnCharmFromTip(tip) {

let result;

switch (switchOnCharmFromTip) {
    case "generous":
      result = "Thank you so much.";
      break;

    case "not as generous":
      result = "Thank you.";
      break;

    default:
      console.log("Bye.");
      break;
  }
}

console.log(switchOnCharmFromTip("generous"));
let result;

switch (switchOnCharmFromTip) {
    case "generous":
      result = "Thank you so much.";
      break;

    case "not as generous":
      result = "Thank you.";
      break;

    default:
      console.log("Bye.");
      break;
  }
}

console.log(switchOnCharmFromTip("generous"));
*/