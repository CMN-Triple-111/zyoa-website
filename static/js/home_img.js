// This script handles the image rotation with fade-in and fade-out effects
  const imageSets = [
    ["assets/images/aa.jpg", "assets/images/bb.jpg", "assets/images/cc.jpg"],
    ["assets/images/dd.jpg", "assets/images/ee.jpg", "assets/images/ff.jpg"],
    ["assets/images/gg.jpg", "assets/images/hh.jpg", "assets/images/ii.jpg"],
    ["assets/images/jj.jpg", "assets/images/kk.jpg", "assets/images/ll.jpg"],
    ["assets/images/mm.jpg", "assets/images/nn.jpg", "assets/images/oo.jpg"],
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

