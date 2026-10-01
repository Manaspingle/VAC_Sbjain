const registrationForm = document.getElementById('registrationForm');
const formMessage = document.getElementById('formMessage');

registrationForm.addEventListener('submit', (event) => {
	event.preventDefault();
	event.stopPropagation();
	formMessage.classList.add('d-none');

	if (!registrationForm.checkValidity()) {
		registrationForm.classList.add('was-validated');
		return;
	}

	const firstName = registrationForm.elements.firstName.value.trim();
	formMessage.textContent = `Registration complete. Welcome, ${firstName}!`;
	formMessage.className = 'alert alert-success';
	registrationForm.reset();
	registrationForm.classList.remove('was-validated');
});
