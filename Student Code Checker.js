// This is a sample program I made for grading students based on their score and giving them a final results message based on their input. Version 1.5

//This gets the average of all of the scores in the class
function getAverage(scores) 
{
  let sum = 0;

  for (const score of scores) 
  {
    sum += score;
  }

  return sum / scores.length;
}

//This function assigns a grade based on the predetermined brackets
function getGrade(score) 
{
  if (score === 100) 
  {
    return "A++";
  } 
  else if (score >= 90) 
  {
    return "A";
  } 
  else if (score >= 80) 
  {
    return "B";
  } 
  else if (score >= 70) 
  {
    return "C";
  } 
  else if (score >= 60) 
  {
    return "D";
  } 
  else 
  {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}


//This will check if they got a grade higher than F and change the result accordingly
function studentMsg(totalScores, studentScore) {
  let classAverage = getAverage(totalScores);
  let grade = getGrade(studentScore);
  let result = ""
  if (grade != "F")
  {
    result = "passed";
  }
  else
  {
    result = "failed";
  }
  let endResult = "Class average: " + String(classAverage) + ". Your grade: " + grade + ". You " + result + " the course."
  return(endResult)
}


//This sets up a variable for the user to input their score and a boolean to check if their input is valid
let inputScore;
let valid = false;

//Welcome Message
console.log("Welcome to the Student Grade program. Here you can find out the class average & the grade you obtained based on your score.")

//In case the user types non numeric characters or values bigger than 100 this segment will repeat
while (!valid) {
    let userInput = prompt("Please input your score to find out your grade (/100):");
    inputScore = Number(userInput);

    if (!Number.isInteger(inputScore)) {
        alert("Error. Your score must be an integer number.");
        continue;
    }
    if (inputScore > 100) {
        alert("Error. Score can't be higher than 100.");
        continue;
    }
    valid = true;
}

//This section will output the class average and what the student's grade will be based on their score. 
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], inputScore));



