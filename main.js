const passwordInput = document.querySelector('.password-container input')
const lengthInput = document.querySelector('.range-container input')
const selectedLength = document.querySelector('.selected-length')
const copyBtn = document.querySelector('.copy-button')
const generateBtn = document.querySelector('.generate-button')

lengthInput.addEventListener('input', () => {
	selectedLength.textContent = lengthInput.value
	generatePassword()
})

copyBtn.addEventListener('click', () => {
	navigator.clipboard.writeText(passwordInput.value)
	copyBtn.classList.replace('fa-copy', 'fa-circle-check')
})

const generatePassword = () => {
	const allCharacter =
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^!$%&|[](){}:;.,*+-#@<>~'
	let password = ''
	for (i = 0; i < lengthInput.value; i++)
		password += allCharacter[Math.floor(Math.random() * allCharacter.length)]

	passwordInput.value = password
	copyBtn.classList.replace('fa-circle-check', 'fa-copy')
}

generatePassword()

generateBtn.addEventListener('click', generatePassword)
