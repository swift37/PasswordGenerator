const passwordInput = document.querySelector('.password-container input')
const lengthInput = document.querySelector('.range-container input')
const passwordIndicator = document.querySelector('.password-indicator')
const selectedLength = document.querySelector('.selected-length')
const copyBtn = document.querySelector('.copy-button')
const generateBtn = document.querySelector('.generate-button')
const options = document.querySelectorAll('.option input')

lengthInput.addEventListener('input', () => {
	selectedLength.textContent = lengthInput.value
	generatePassword()
})

copyBtn.addEventListener('click', () => {
	navigator.clipboard.writeText(passwordInput.value)
	copyBtn.classList.replace('fa-copy', 'fa-circle-check')
})

const createCharsString = () => {
	const chars = {
		lowercase: 'abcdefghijklmnopqrstuvwxyz',
		uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		numbers: '0123456789',
		symbols: '^!$%&|[](){}:;.,*+-#@<>~_/\\',
	}

	let charsString = ''
	options.forEach(option => {
		if (option.checked) charsString += chars[option.id]
	})

	return charsString
}

const updatePasswordIndicator = password => {
	let strength = 0
	if (password.match(/[a-z]+/)) strength += 1
	if (password.match(/[A-Z]+/)) strength += 1
	if (password.match(/[0-9]+/)) strength += 1
	if (password.match(/[$@#&!*^%|:;.,+\-<>~_/\\{}()[\]]+/)) strength += 1
	if (password.length >= 12) strength += 1
	if (password.length < 8) strength -= 2
	console.log(strength)
	strength < 2
		? (passwordIndicator.id = 'weak')
		: strength < 4
		? (passwordIndicator.id = 'medium')
		: (passwordIndicator.id = 'strong')
}

const generatePassword = () => {
	const charsString = createCharsString()
	let password = ''
	for (i = 0; i < lengthInput.value; i++)
		password += charsString[Math.floor(Math.random() * charsString.length)]

	passwordInput.value = password
	updatePasswordIndicator(password)
	copyBtn.classList.replace('fa-circle-check', 'fa-copy')
}

generatePassword()

generateBtn.addEventListener('click', generatePassword)

options.forEach(element => element.addEventListener('change', generatePassword))
