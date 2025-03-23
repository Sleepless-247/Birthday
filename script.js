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

// Handles Yes/No choice for age confirmation
function handleAgeChoice(choice) {
  if (choice === 'yes') {
    document.getElementById('topMessage').innerHTML = 
      "<p>Okay... if you say so grandma. I guess I'll let you go to the next page. Don't fall over on the way there tho.</p>";

    document.getElementById('ageChoice').style.display = 'none'; // Hide Yes/No buttons
    document.getElementById('nextButton').style.display = 'block'; // Show Next button
  } else {
    document.getElementById('topMessage').innerHTML = 
      "<p>Yeah, I didn't think so. I didn't buy nearly enough candles for that! Better try again.</p>";

    document.getElementById('ageChoice').style.display = 'none'; // Hide Yes/No buttons
    document.getElementById('retryButton').style.display = 'block'; // Show Retry button
  }
}

// Resets age input so they can try again
function retryAge() {
  document.getElementById('ageInput').value = ''; // Clear the input
  document.getElementById('topMessage').innerHTML = ''; // Clear message
  document.getElementById('ageChoice').style.display = 'none'; // Hide Yes/No buttons
  document.getElementById('retryButton').style.display = 'none'; // Hide Retry button
  document.getElementById('nextButton').style.display = 'none'; // Hide Next button if visible
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

// When the Next Page button is clicked after a "Yes" in the 90+ case.
function goToNextStep() {
  // This will call moveToFinalStep with age 90.
  moveToFinalStep(90);
}

// Simple Confetti Animation (a basic example; you can improve this as needed)
function startConfetti() {
  // Create a container for confetti and hearts.
  const confettiContainer = document.createElement('div');
  confettiContainer.id = 'confettiContainer';
  document.body.appendChild(confettiContainer);

  // Create multiple confetti pieces and hearts.
  for (let i = 0; i < 50; i++) {
    createConfettiPiece(confettiContainer, "confetti"); // Normal confetti
    createConfettiPiece(confettiContainer, "heart"); // Hearts
  }

  // Remove confetti after 5 seconds.
  setTimeout(() => {
    confettiContainer.remove();
  }, 5000);
}

// Function to create confetti or hearts
function createConfettiPiece(container, type) {
  const piece = document.createElement('div');
  piece.classList.add(type);

  // Randomize position and animation duration.
  piece.style.left = Math.random() * 100 + 'vw';
  piece.style.animationDuration = 2 + Math.random() * 3 + 's';

  container.appendChild(piece);
}
