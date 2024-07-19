// if (typeof jQuery == "undefined") {
//   console.log("oops! I still have to link my jQuery properly!");
// } else {
//   console.log("I did it! I linked jQuery and this js file!");
// }

///YEAR ONE///

const $container = $("#container");
const $h1 = $("<h1>");
$h1.text("Hogwarts");
$container.append($h1);

///YEAR TWO///

const $h2 = $("<h2>").text("MackWick");
const $h3 = $("<h3>").text("House: Ravenclaw");
const $pet = $("<h4>").text("Pet: Loki").addClass("wolf");
const $wand = $("<h4>").text("Wand: Willow with mermaid hair core");
$container.append($h2);
$container.append($h3);
$container.append($pet);
$container.append($wand);
