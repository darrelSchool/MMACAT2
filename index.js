const video = document.getElementById("wildlifeVideo");
const container = document.getElementById("videoContainer");
const button = document.getElementById("toggleBtn");

// Logic: If playing -> hide it. If not playing (paused/stopped/hidden) -> show & play.
button.addEventListener("click", () => {
  if (!video.paused && container.style.display !== "none") {
    // If it is currently visible and playing, pause and hide it
    video.pause();
    container.style.display = "none";
    button.textContent = "Show & Play Video";
  } else {
    // If it's hidden or paused, bring it back, play it
    container.style.display = "block";
    video.play().catch((error) => {
      console.log(
        "Autoplay context restriction caught: User interaction sufficed.",
        error,
      );
    });
    button.textContent = "Hide Video";
  }
});

// Sync button text if a user uses native HTML5 controls instead of our button
video.addEventListener("play", () => {
  if (container.style.display !== "none") {
    button.textContent = "Hide Video";
  }
});

video.addEventListener("pause", () => {
  if (container.style.display !== "none") {
    button.textContent = "Play Video";
  }
});
