// Process Step 1: Check "Who are you?" answer.
function processStep1() {
  const nameInput = document.getElementById('nameInput').value.trim().toLowerCase();
  
  if (nameInput === "your girlfriend" || nameInput === "aisling") {
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
  } else {
    alert("Sorry, this isn't for you.");
  }
}

// Process Step 2: Check the age input.
function processStep2() {
  const age = parseInt(document.getElementById('ageInput').value, 10);

  if (isNaN(age)) {
    alert("Please enter a valid number for your age.");
    return;
  }

  if (age < 17) {
    alert("WRONG! TOO YOUNG!");
  } else if (age > 17 && age < 90) {
    alert("WRONG! TOO OLD!");
  } else if (age >= 90) {
    document.getElementById('agePrompt').innerText = "GOSH DAMN YOU'RE OLD!";
    document.getElementById('ageButtons').style.display = 'block';
    return;
  } else if (age === 17) {
    moveToFinalStep(age);
  }
}

// Handle Fake Multiple Choice for 90+ age
function handleAgeChoice(choice) {
  if (choice === "yes") {
    document.getElementById('ageResponse').innerText = "Okay... if you say so, grandma. I guess I'll let you go to the next page. Don't fall over on the way there tho.";
    document.getElementById('nextButton90').style.display = 'block';
  } else {
    alert("Yeah, I didn't think so. I didn't buy nearly enough candles for that! Better try again.");
    document.getElementById('ageInput').value = "";
  }
}

// Move to final step
function moveToFinalStep(age) {
  document.getElementById('step2').style.display = 'none';
  const message = `Wow, I can't believe you're already ${age} sweetie, but I'm so happy I got to spend these past few months with you! I'm so lucky to know the amazing, intelligent, hardworking, and extremely beautiful girl I'm privileged to call my girlfriend. I hope ${age} treats you well and that I'm there for your next birthday too!`;
  
  document.getElementById('celebrationMessage').innerText = message;
  document.getElementById('step3').style.display = 'block';

  // Trigger Confetti & Sound
  startConfetti();
  document.getElementById('birthdayHorn').play();
}

// Confetti Animation
function startConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  document.body.appendChild(confetti);
  setTimeout(() => {
    confetti.remove();
  }, 5000);
}
