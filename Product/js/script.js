const playBtn = document.getElementById("play");
const overlay = document.querySelector(".overlay1");
const video = document.getElementById("video");
const videoContainer = document.querySelector("section.video");
playBtn.addEventListener("click", function () {
  if (video.paused) {
    playBtn.style.visibility = "hidden";
    overlay.style.visibility = "hidden";
    video.play();
  } else if (video.play) {
    videoContainer.addEventListener("click", function () {
      video.pause();
    });
  }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
var date = new Date();
var span = document.getElementById("fullyear");
span.innerHTML = date.getFullYear();
