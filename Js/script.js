const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        const submitBtn = document.getElementById('submitBtn');
        const spinner = document.getElementById('submitSpinner');
        const submitText = document.getElementById('submitText');
        const alertBox = document.getElementById('alertSuccess');

        // Affiche le spinner et désactive le bouton
        spinner.classList.remove('d-none');
        submitText.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;

        // Simule un envoi (2 secondes)
        setTimeout(function () {
            spinner.classList.add('d-none');
            submitText.textContent = 'Envoyer';
            submitBtn.disabled = false;

            alertBox.classList.remove('d-none');
            alertBox.classList.add('show');

            form.reset();
            form.classList.remove('was-validated');
        }, 2000);
    });
}

const imageModal = document.getElementById('imageModal');

if (imageModal) {
    imageModal.addEventListener('show.bs.modal', function (event) {
        const triggerImg = event.relatedTarget;
        const imgSrc = triggerImg.getAttribute('data-img');
        document.getElementById('modalImage').src = imgSrc;
    });
}