document.addEventListener('DOMContentLoaded', () => {

    // --- IMPORTANT: SET YOUR PASSWORD HERE ---
    const correctPassword = 'SimranKaAashiq'; 
    // -----------------------------------------

    const passwordInput = document.getElementById('password-input');
    const mainContent = document.getElementById('main-content');
    const passwordOverlay = document.getElementById('password-overlay');
    const errorMessage = document.getElementById('error-message');

    // Function to check password
    window.checkPassword = () => {
        if (passwordInput.value === correctPassword) {
            passwordOverlay.style.display = 'none';
            mainContent.style.display = 'block';
        } else {
            errorMessage.textContent = 'ACCESS DENIED';
            passwordInput.value = '';
        }
    };
    
    // Allow pressing Enter to submit password
    passwordInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            checkPassword();
        }
    });

    // Kink Index Button Logic
    const allStatusGroups = document.querySelectorAll('.status-buttons');
    allStatusGroups.forEach(group => {
        const buttons = group.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // First, remove 'active' class from all buttons in the same group
                buttons.forEach(btn => btn.classList.remove('active'));
                // Then, add 'active' class to the clicked button
                button.classList.add('active');
            });
        });
    });
});
