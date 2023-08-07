console.log("Your index.js file is loaded correctly");

const resumeBtn = document.getElementById('resumeButtonId');

resumeBtn.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#D795FF";
  });
resumeBtn.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "#42c978";
  });