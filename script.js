function showForm() {
  document.getElementById('start').style.display = 'none';
  document.getElementById('form').style.display = 'block';
}

function submitForm() {
  let name = document.getElementById('name').value;
  let place = document.getElementById('place').value;
  let time = document.getElementById('time').value;

  if (name && place && time) {
    document.getElementById('form').style.display = 'none';
    document.getElementById('celebration').style.display = 'block';
    document.getElementById('message').innerText = `${name}, it's a date! See you at ${place} at ${time} ❤️`;
  } else {
    alert("Please fill in all fields!");
  }
}
