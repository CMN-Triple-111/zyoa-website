// This script handles the image rotation with fade-in and fade-out effects
  const imageSets = [
    ["/build/assets/images/aa.jpg", "/build/assets/images/bb.jpg", "/build/assets/images/cc.jpg"],
    ["/build/assets/images/dd.jpg", "/build/assets/images/ee.jpg", "/build/assets/images/ff.jpg"],
    ["/build/assets/images/gg.jpg", "/build/assets/images/hh.jpg", "/build/assets/images/ii.jpg"],
    ["/build/assets/images/jj.jpg", "/build/assets/images/kk.jpg", "/build/assets/images/ll.jpg"],
    ["/build/assets/images/mm.jpg", "/build/assets/images/nn.jpg", "/build/assets/images/oo.jpg"],
    // Add more sets as needed
  ];

  let currentSet = 0;
  const imgElements = [
    document.getElementById('img1'),
    document.getElementById('img2'),
    document.getElementById('img3')
  ];

  function updateImages() {
    // Fade out
    imgElements.forEach(img => img.classList.add('fade-out'));

    setTimeout(() => {
      // Update src after fade-out
      const [newSrc1, newSrc2, newSrc3] = imageSets[currentSet];
      imgElements[0].src = newSrc1;
      imgElements[1].src = newSrc2;
      imgElements[2].src = newSrc3;

      // Fade in
      imgElements.forEach(img => img.classList.remove('fade-out'));

      currentSet = (currentSet + 1) % imageSets.length;
    }, 1000); // Match with CSS transition duration
  }

  setInterval(updateImages, 10000); // Change every 10 seconds

