const imie = document.getElementById('imie');
    const nazwisko = document.getElementById('nazwisko');
    const pelnoletni = document.getElementById('pelnoletni');
    const kolor = document.getElementById('kolor');
    const wynik = document.getElementById('wynik');
    const czyscBtn = document.getElementById('czyscBtn');
    const wyslijBtn = document.getElementById('wyslijBtn');

    wyslijBtn.addEventListener('click', function () {
      const i = imie.value;
      const n = nazwisko.value;
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
    });

    czyscBtn.addEventListener('click', function () {
      imie.value = '';
      nazwisko.value = '';
      pelnoletni.checked = false;
      kolor.value = '#ffffff';
      wynik.textContent = '';
      wynik.style.backgroundColor = 'transparent';
    });