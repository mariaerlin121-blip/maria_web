const contactButton = document.getElementById('contactButton');

if (contactButton) {
  contactButton.addEventListener('click', () => {
    window.location.href = 'mailto:maria@example.com?subject=Permintaan%20Portofolio&body=Halo%20Maria%2C%0A%0ASaya%20tertarik%20untuk%20membahas%20proyek%20portofolio.';
  });
}
