// DOM & Variables
const generatePasswordButton = document.getElementById("generate-password");

const pwBox1 = document.getElementById("pw-element-1");
const copyBox1 = document.getElementById("pw-copy-1");
const pwBox2 = document.getElementById("pw-element-2");
const copyBox2 = document.getElementById("pw-copy-2");
const pwBox3 = document.getElementById("pw-element-3");
const copyBox3 = document.getElementById("pw-copy-3");
const pwBox4 = document.getElementById("pw-element-4");
const copyBox4 = document.getElementById("pw-copy-4");

const copyInfo = document.getElementById("copy-info");

// Elements
let checkedElements = {
	lowercase: "abcdefghijklmnopqrstuvwxyz"
};

// Checkboxes
const checkboxAbcUpper = document.getElementById("AbcUpper");
const checkboxSymbols = document.getElementById("Symbols");
const checkboxNumbers = document.getElementById("Numbers");

// Clipboard Function
function copyPassword(box) {
	let copyText = box.value;
	if (pwBox1.value === "") {
		copyInfo.textContent = "❌ Please generate your passwords";
		copyInfo.style.cssText =
			"background-color:var(--melon); color:var(--spacecadet); font-size:1.2rem; border-radius:1rem";
	} else {
		navigator.clipboard.writeText(copyText).then(() => {
			copyInfo.textContent = "Password copied! 🥳";
			copyInfo.style.cssText =
				"background-color:var(--transparency); color:var(--spacecadet); font-size:1.2rem; border-radius:1rem";
		});
	}
}

// Password Generator Functions
function getLength() {
	return document.getElementById("userLength").valueAsNumber;
}

function getPasswordCharacters() {
	checkboxAbcUpper.checked === true
		? (checkedElements["uppercase"] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
		: (checkedElements["uppercase"] = "");

	checkboxSymbols.checked === true
		? (checkedElements["symbols"] = `~!@#$%^&*()_+-=[]\{}|;:'",/<>?`)
		: (checkedElements["symbols"] = "");

	checkboxNumbers.checked === true
		? (checkedElements["numbers"] = "0123456789")
		: (checkedElements["numbers"] = "");
}

function generatePassword(length) {
	pwBox1.value = randomPassword(length);
	pwBox2.value = randomPassword(length);
	pwBox3.value = randomPassword(length);
	pwBox4.value = randomPassword(length);
}

function randomPassword(length) {
	let result = "";
	let elements = Object.values(checkedElements).join("");
	if (isNaN(length)) {
		length = 15;
	}
	for (i = 0; i < length; i++) {
		result += elements[Math.floor(Math.random() * elements.length)];
	}
	return result;
}

// Event Listeners

generatePasswordButton.addEventListener("click", function () {
	getPasswordCharacters();
	generatePassword(getLength());
});

copyBox1.addEventListener("click", function () {
	copyPassword(pwBox1);
});

copyBox2.addEventListener("click", function () {
	copyPassword(pwBox2);
});

copyBox3.addEventListener("click", function () {
	copyPassword(pwBox3);
});

copyBox4.addEventListener("click", function () {
	copyPassword(pwBox4);
});

// // CHANGE

// const password = {
// 	abcUppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
// 	abcLowercase: "abcdefghijklmnopqrstuvwxyz",
// 	symbols: `~!@#$%^&*()_+-=[]\{}|;:'",/<>?`,
// 	numbers: "0123456789"
// };

// //TO

// const passwordAbcUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const passwordAbcLowercase = "abcdefghijklmnopqrstuvwxyz";
// const passwordSymbols = `~!@#$%^&*()_+-=[]\{}|;:'",/<>?`;
// const passwordNumbers = "0123456789";

// let passwordElements = "";

// // THEN:

// const buttonAbcUppercase = document.getElementById("abc-uppercase");

// function getPasswordElements() {
// 	if (buttonAbcUppercase === "checked") {
// 		passwordElements += passwordAbcUppercase;
// 	}
// 	if (buttonAbcLowercase === "checked") {
// 		passwordElements += passwordAbcLowercase;
// 	} //ETC

// 	return
