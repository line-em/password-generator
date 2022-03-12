// Document & Variables

let pwBox1 = document.getElementById("pw-element-1");
let pwBox2 = document.getElementById("pw-element-2");
let pwBox3 = document.getElementById("pw-element-3");
let pwBox4 = document.getElementById("pw-element-4");

const password = {
	abcUppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	abcLowercase: "abcdefghijklmnopqrstuvwxyz",
	symbols: `~!@#$%^&*()_+-=[]\{}|;:'",/<>?`,
	numbers: "0123456789"
};

const passwordAllSymbols =
	password.abcUppercase + password.abcLowercase + password.symbols + password.numbers;

// Clipboard
function copyPassword(box) {
	var copyText = box.value;
	navigator.clipboard.writeText(copyText).then(() => {
		alert("Copied to clipboard!");
	});
}

// functions
function getLength() {
	return document.querySelector("input").valueAsNumber;
}

function generatePassword(length) {
	pwBox1.value = randomPassword(length);
	pwBox2.value = randomPassword(length);
	pwBox3.value = randomPassword(length);
	pwBox4.value = randomPassword(length);
}

function randomPassword(length) {
	let result = "";
	if (isNaN(length)) {
		length = 10;
	}
	for (i = 0; i < length; i++) {
		result += passwordAllSymbols[Math.floor(Math.random() * passwordAllSymbols.length)];
	}

	return result;
}
