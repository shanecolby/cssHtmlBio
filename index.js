// const viewResumeBtn = document.getElementById("viewResume-btn")

// viewResumeBtn.addEventListener("click", function () {

// })

document.getElementById("viewResume-btn").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "block";
})

document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
})