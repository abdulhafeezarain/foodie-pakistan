
document.addEventListener("DOMContentLoaded", function () {
    console.log("Foodies Pakistan Website Loaded");
});

function orderFood(item) {
    alert("Your order for " + item + " has been placed successfully!");
}

// Search Menu
// function searchFood() {
//     let input = document.getElementById("search").value.toLowerCase();
//     let items = document.querySelectorAll(".food-item");

//     items.forEach(function (item) {
//         let name = item.innerText.toLowerCase();

//         if (name.includes(input)) {
//             item.style.display = "block";
//         } else {
//             item.style.display = "none";
//         }
//     });
// }

function sendMessage() {
    alert("Your message has been sent successfully!");
}