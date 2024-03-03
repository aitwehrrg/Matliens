document.getElementById("prompt").innerHTML = "Have you studied for MST?";

// document.getElementById("check").addEventListener("change", function () {
//     document.getElementById("output").innerHTML = this.checked
//         ? "Yes"
//         : "No";
// })

document.getElementById("check").onclick = function () {
    document.getElementById("output").innerHTML = this.checked
        ? "Good Job!"
        : "go kys";
}