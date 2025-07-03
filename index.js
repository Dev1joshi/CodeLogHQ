document.getElementById("add-progress").addEventListener("click", function () {
  const progress = prompt("What did you learn today?");
  if (progress) {
    document.getElementById("today-summary").value = progress;
  }
});
