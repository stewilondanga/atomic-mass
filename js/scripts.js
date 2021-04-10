var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

var lanthanide = document.getElementsByClassName("lanthanide");
var actinide = document.getElementsByClassName("actinide");

document.getElementById("laGroup").onmouseover = function () { mouseOver(lanthanide) };
document.getElementById("laGroup").onmouseout = function () { mouseOut(lanthanide) };

document.getElementById("acGroup").onmouseover = function () { mouseOver(actinide) };
document.getElementById("acGroup").onmouseout = function () { mouseOut(actinide) };


function mouseOver(group) {
    for (var i = 0; i < 16; i++) {
        group[i].style.boxShadow = "0 0 1em 0 white";
    }
}

function mouseOut(group) {
    for (var j = 0; j < 16; j++) {
        group[j].removeAttribute("style");
    }
}

var infoBox = document.getElementById("pt-info");
var infoBoxAtomNum = infoBox.getElementsByClassName("atom-num").item(0).innerHTML;
var infoBoxSymbol = infoBox.getElementsByClassName("element").item(0).innerHTML;
var infoBoxName = infoBox.getElementsByClassName("name").item(0).innerHTML;
var infoBoxAtomMass = infoBox.getElementsByClassName("atom-mass").item(0).innerHTML;

var elements = document.getElementsByClassName("table-element");
elements = Array.from(elements);

elements.forEach(function (element) {
    element.addEventListener("mouseover", function () {
        var elementFamily = this.classList[1];
        var elementAtomNum = this.getElementsByClassName("atom-num").item(0).innerHTML;
        var elementSymbol = this.getElementsByClassName("element").item(0).innerHTML;
        var elementName = this.getElementsByClassName("name").item(0).innerHTML;
        var elementAtomMass = this.getElementsByClassName("atom-mass").item(0).innerHTML;

        infoBox.getElementsByClassName("atom-num").item(0).innerHTML = elementAtomNum;
        infoBox.getElementsByClassName("element").item(0).innerHTML = elementSymbol;
        infoBox.getElementsByClassName("name").item(0).innerHTML = elementName;
        infoBox.getElementsByClassName("atom-mass").item(0).innerHTML = elementAtomMass;

        if (elementFamily === "alka-metal") {
            infoBox.style.borderColor = "#ff2550";
            infoBox.getElementsByClassName("element-family").item(0).innerHTML = "Alkaline Metal";
            infoBox.getElementsByClassName("element-family").item(0).style.color = "#ff2550";
        } else if (elementFamily === "alka-earth") {
            infoBox.style.borderColor = "#ff7f50";
            infoBox.getElementsByClassName("element-family").item(0).innerHTML = "Alkaline Earth";
            infoBox.getElementsByClassName("element-family").item(0).style.color = "#ff7f50";
        } else if (elementFamily === "trans-metal") {
            infoBox.style.borderColor = "#fafa41";
            infoBox.getElementsByClassName("element-family").item(0).innerHTML = "Transition Metal";
            infoBox.getElementsByClassName("element-family").item(0).style.color = "#fafa41";
        } else if (elementFamily === "basic-metal") {
            infoBox.style.borderColor = "#00ff7f";
            infoBox.getElementsByClassName("element-family").item(0).innerHTML = "Basic Metal";
            infoBox.getElementsByClassName("element-family").item(0).style.color = "#00ff7f";
        } else if (elementFamily === "metalloid") {
            infoBox.style.borderColor = "#87ceeb";
            infoBox.getElementsByClassName("element-family").item(0).innerHTML = "Metalloid";
            infoBox.getElementsByClassName("element-family").item(0).style.color = "#87ceeb";
        } else if (elementFamily === "nonmetal") {
            infoBox.style.borderColor = "#168bff";
            infoBox.getElementsByClassName("element-family").item(0).innerHTML = "Nonmetal";
            infoBox.getElementsByClassName("element-family").item(0).style.color = "#168bff";
        } else if (elementFamily === "halogen") {
            infoBox.style.borderColor = "#ee82ee";
            infoBox.getElementsByClassName("element-family").item(0).innerHTML = "Halogen";
            infoBox.getElementsByClassName("element-family").item(0).style.color = "#ee82ee";
        } else if (elementFamily === "noble-gas") {
            infoBox.style.borderColor = "#c042ff";
            infoBox.getElementsByClassName("element-family").item(0).innerHTML = "Noble Gas";
            infoBox.getElementsByClassName("element-family").item(0).style.color = "#c042ff";
        } else if (elementFamily === "lanthanide") {
            infoBox.style.borderColor = "#ffa7b5";
            infoBox.getElementsByClassName("element-family").item(0).innerHTML = "Lanthanide";
            infoBox.getElementsByClassName("element-family").item(0).style.color = "#ffa7b5";
        } else if (elementFamily === "actinide") {
            infoBox.style.borderColor = "#ff69b4";
            infoBox.getElementsByClassName("element-family").item(0).innerHTML = "Actinide";
            infoBox.getElementsByClassName("element-family").item(0).style.color = "#ff69b4";
        } else {
            infoBox.style.borderColor = "black";
            infoBox.getElementsByClassName("element-family").item(0).innerHTML = "";
            infoBox.getElementsByClassName("element-family").item(0).style.color = "black";
        }
    });
});

elements.forEach(function (element) {
    element.addEventListener("mouseout", function () {

        infoBox.style.borderColor = "black";

        infoBox.getElementsByClassName("atom-num").item(0).innerHTML = infoBoxAtomNum;
        infoBox.getElementsByClassName("element").item(0).innerHTML = infoBoxSymbol;
        infoBox.getElementsByClassName("name").item(0).innerHTML = infoBoxName;
        infoBox.getElementsByClassName("atom-mass").item(0).innerHTML = infoBoxAtomMass;

        infoBox.getElementsByClassName("element-family").item(0).innerHTML = "";
        infoBox.getElementsByClassName("element-family").item(0).style.color = "black";
    });
});
