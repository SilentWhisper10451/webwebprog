const correctUser1 = "Eddha";
        const correctPass1 = "ILYSM"; 
        const correctUser2 = "JoshBayot";
        const correctPass2 = "SiKenPud";

        const form = document.querySelector('form');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        form.addEventListener('submit', function(event) {
            if (
                (usernameInput.value === correctUser1 && passwordInput.value === correctPass1) || 
                (usernameInput.value === correctUser2 && passwordInput.value === correctPass2)
            ) {
                usernameInput.setCustomValidity('');
                passwordInput.setCustomValidity('');
            } else {
                event.preventDefault();
                alert("Invalid username or password");
                usernameInput.setCustomValidity("Wrong username");
                passwordInput.setCustomValidity("Wrong password");
                usernameInput.reportValidity();
            }
        });

        usernameInput.addEventListener('input', function() {
            usernameInput.setCustomValidity('');
        });

        passwordInput.addEventListener('input', function() {
            passwordInput.setCustomValidity('');
        });

        document.getElementById('show-password').addEventListener('change', function() {
            var passwordInput = document.getElementById('password');
            if (this.checked) {
                passwordInput.type = 'text';
            } else {
                passwordInput.type = 'password';
            }
        });


        let timeout;

        function setIdle() {
            document.body.classList.remove('active');
            document.body.classList.add('idle');
        }

        function resetIdle() {
            clearTimeout(timeout);
            document.body.classList.remove('idle');
            document.body.classList.add('active');
            timeout = setTimeout(setIdle, 30000); 
        }


        window.addEventListener('mousemove', resetIdle);
        window.addEventListener('keypress', resetIdle);
        window.addEventListener('click', resetIdle);
        window.addEventListener('scroll', resetIdle);
