const form = document.getElementById('formularz');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const kolor = document.getElementById('kolor').value;

            document.body.style.backgroundColor = kolor;
        });