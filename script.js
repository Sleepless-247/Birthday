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
  } else if (age > 17 && age <= 90) {
    alert("WRONG! TOO OLD!");
  } else if (age > 90) {
    alert("GOSH DAMN YOU'RE OLD!");
  } else if (age === 17) {
    // Valid age: move to step 3.
    document.getElementById('step2').style.display = 'none';
    
    // Update the celebratory message.
    const message = `Wow, I can't believe you're already ${age} sweetie, but I'm so happy I got to spend these past few months with you! I'm so lucky to know the amazing, intelligent, hardworking, and extremely beautiful girl I'm privileged to call my girlfriend. I hope ${age} treats you well and that I'm there for your next birthday too!`;
    document.getElementById('celebrationMessage').innerText = message;
    
    document.getElementById('step3').style.display = 'block';
  }
}
