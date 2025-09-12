
  window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 5) {
      navbar.classList.remove('transparent');
      navbar.classList.add('solid');
    } else {
      navbar.classList.add('transparent');
      navbar.classList.remove('solid');
    }
  });


   const buttons = document.querySelectorAll(".tekss");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;

      // Tutup semua materi lain
      document.querySelectorAll(".isi-teks").forEach(materi => {
        if (materi !== content) {
          materi.style.maxHeight = null;
          materi.classList.remove("open");
        }
      });

      // Toggle materi yang diklik
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.classList.remove("open");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add("open");
      }
    });
  });


    

