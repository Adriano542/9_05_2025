document.getElementById("kolor").addEventListener("input", function () {
      const wybranyKolor = this.value;
      document.getElementById("formularzContainer").style.backgroundColor = wybranyKolor;
    });