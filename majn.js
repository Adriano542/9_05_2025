const imie = document.getElementById('imie');
    const nazwisko = document.getElementById('nazwisko');
    const pelnoletni = document.getElementById('pelnoletni');
    const kolor = document.getElementById('kolor');
    const wynik = document.getElementById('wynik');
    const czyscBtn = document.getElementById('czyscBtn');

    function aktualizujWynik() {
      const i = imie.value.trim();
      const n = nazwisko.value.trim();
      const czyPelnoletni = pelnoletni.checked;
      const kolorTla = kolor.value;

      if (i || n) {
        const status = czyPelnoletni ? 'pełnoletni/a' : 'niepełnoletni/a';
        wynik.textContent = `Cześć ${i} ${n}, jesteś ${status}.`;
        wynik.style.backgroundColor = kolorTla;
      } else {
        wynik.textContent = '';
        wynik.style.backgroundColor = 'transparent';
      }
    }

    // Nasłuchiwanie zmian
    imie.addEventListener('input', aktualizujWynik);
    nazwisko.addEventListener('input', aktualizujWynik);
    pelnoletni.addEventListener('change', aktualizujWynik);
    kolor.addEventListener('input', aktualizujWynik);

    // Przycisk "Czyść"
    czyscBtn.addEventListener('click', function () {
      imie.value = '';
      nazwisko.value = '';
      pelnoletni.checked = false;
      kolor.value = '#ffffff';
      wynik.textContent = '';
      wynik.style.backgroundColor = 'transparent';
    });