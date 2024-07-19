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
$container.append($h2, $h3, $pet, $wand);

///YEAR THREE///

const $ul = $("<ul>").attr("trunk", "storage");
const $item1 = $("<li>").text("butter beer");
const $item2 = $("<li>").text("invisibility cloak").addClass("secret");
const $item3 = $("<li>").text("magic map").addClass("secret");
const $item4 = $("<li>").text("time turner").addClass("secret");
const $item5 = $("<li>").text("leash").addClass("wolf");
const $item6 = $("<li>").text("bertie bott's every flavor beans");
$ul.append($item1, $item2, $item3, $item4, $item5, $item6);
$container.append($ul);
