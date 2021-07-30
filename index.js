
document.getElementById("viewResume-btn").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "block";
})

document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
})

document.getElementById("text-box").addEventListener("keyup", function (event) {
  let userName = event.target.value
  console.log(userName)
})