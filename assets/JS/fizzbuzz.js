document.addEventListener("DOMContentLoaded", function() {
    let div = document.getElementById("fizzbuzz");

    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            div.innerHTML += `<p class="fizzbuzz"> ${i}>FIZZBUZZ</p>`;
        } else if (i % 2 === 0) {
            div.innerHTML += `<p class="fizz"> ${i}>FIZZ</p>`;
        } else {
            div.innerHTML += `<p class="buzz"> ${i}>BUZZ</p>`;
        }
    }
});