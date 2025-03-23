// Process Step 1: Check "Who are you?" answer.
function processStep1() {
  const nameInput = document.getElementById('nameInput').value.trim().toLowerCase();
  
  // Check for accepted answers ("your girlfriend" or "aisling")
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
    // For 90 or above, show fake multiple choice
    document.getElementById('ageChoice').style.display = 'block';
  } else if (age === 17) {
    // Valid age: move to final step.
    moveToFinalStep(age);
  }
}

// Handle Fake Multiple Choice for ages 90 or above.
function handleAgeChoice(choice) {
  if (choice === "yes") {
    document.getElementById('ageResponse').innerText = "Okay... if you say so, grandma. I guess I'll let you go to the next page. Don't fall over on the way there tho.";
    document.getElementById('nextButton90').style.display = 'block';
  } else if (choice === "no") {
    alert("Yeah, I didn't think so. I didn't buy nearly enough candles for that! Better try again.");
    document.getElementById('ageInput').value = "";
    // Hide the fake multiple choice again so she can reenter age.
    document.getElementById('ageChoice').style.display = 'none';
    document.getElementById('ageResponse').innerText = "";
    document.getElementById('agePrompt').innerText = "Aisling?! I heard it was your birthday??? Happy Birthday my Vampire Garfield twilight girlfriend!";
  }
}

// Move to final step (used for both valid age 17 and approved 90+).
function moveToFinalStep(age) {
  document.getElementById('step2').style.display = 'none';
  const message = `Wow, I can't believe you're already ${age} sweetie, but I'm so happy I got to spend these past few months with you! I'm so lucky to know the amazing, intelligent, hardworking, and extremely beautiful girl I'm privileged to call my girlfriend. I hope ${age} treats you well and that I'm there for your next birthday too!`;
  
  document.getElementById('celebrationMessage').innerText = message;
  document.getElementById('step3').style.display = 'block';

  // Trigger Confetti Animation and Play Birthday Horn Sound.
  startConfetti();
  document.getElementById('birthdayHorn').play();
}

// Simple Confetti Animation (a basic example; you can improve this as needed)
function startConfetti() {
  // Create a container for confetti pieces.
  const confettiContainer = document.createElement('div');
  confettiContainer.id = 'confettiContainer';
  document.body.appendChild(confettiContainer);

  // Create multiple confetti pieces.
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    // Randomize position and animation duration.
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = 2 + Math.random() * 3 + 's';
    confettiContainer.appendChild(confetti);
  }

  // Remove confetti after 5 seconds.
  setTimeout(() => {
    confettiContainer.remove();
  }, 5000);
}
