function calculateLove() {
  var yourName = document.getElementById('your-name').value.trim().toLowerCase();
  var partnerName = document.getElementById('partner-name').value.trim().toLowerCase();

  var percentage = calculatePercentage(yourName, partnerName);

  // Display the result
  document.getElementById('result').innerHTML = "Your love compatibility is " + percentage + "%";
}

function calculatePercentage(name1, name2) {
  // If either name is "Risheek", set the percentage to 100
  if (name1 === "risheek" || name2 === "risheek") {
      return 100;
  }

  // Function to calculate the "love percentage" between two names
  var total = 0;
  for (var i = 0; i < name1.length; i++) {
      total += name1.charCodeAt(i) - 96; // Assuming lowercase letters only
  }
  for (var j = 0; j < name2.length; j++) {
      total += name2.charCodeAt(j) - 96; // Assuming lowercase letters only
  }
  // Make sure the percentage is between 0 and 100
  return Math.min(Math.max(Math.round(total % 101), 0), 100);
}

