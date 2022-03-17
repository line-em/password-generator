// DOM & Variables
let generatePasswordButton = document.getElementById("generate-password");

let pwBox1 = document.getElementById("pw-element-1");
let copyBox1 = document.getElementById("pw-copy-1");
let pwBox2 = document.getElementById("pw-element-2");
let copyBox2 = document.getElementById("pw-copy-2");
let pwBox3 = document.getElementById("pw-element-3");
let copyBox3 = document.getElementById("pw-copy-3");
let pwBox4 = document.getElementById("pw-element-4");
let copyBox4 = document.getElementById("pw-copy-4");

let copyInfo = document.getElementById("copy-info");

const password = {
	abcUppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	abcLowercase: "abcdefghijklmnopqrstuvwxyz",
	symbols: `~!@#$%^&*()_+-=[]\{}|;:'",/<>?`,
	numbers: "0123456789"
};

const passwordAllSymbols =
	password.abcUppercase + password.abcLowercase + password.symbols + password.numbers;

// Clipboard Function
function copyPassword(box) {
	var copyText = box.value;
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

// Event Listeners

generatePasswordButton.addEventListener("click", function () {
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
// }
