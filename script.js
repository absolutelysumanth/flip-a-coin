let rotationAngle = 0; // Tracks the cumulative rotation angle

document.getElementById("flipButton").addEventListener("click", function () {
  const coin = document.getElementById("coin");
  const result = document.getElementById("result");

  // Reset the result text
  result.textContent = "";

  // Determine if it's heads or tails
  const isHeads = Math.random() > 0.5;

  // Increment the rotation angle for each flip
  rotationAngle += 1800;

  // Add additional rotation based on result (0 for heads, 180 for tails)
  const additionalRotation = isHeads ? 0 : 180;

  // Apply the spin animation
  coin.style.transform = `rotateY(${rotationAngle + additionalRotation}deg)`;

  // Display the result after the animation
  setTimeout(() => {
    result.textContent = isHeads ? "Result: Heads!" : "Result: Tails!";
  }, 1000); // Match animation duration
});
