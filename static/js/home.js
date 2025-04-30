 const items = document.querySelectorAll('.scroll-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add delay based on index (staggered reveal)
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 5000); // 200ms delay between each item
      }
    });
  }, {
    threshold: 0.1,
  });

  items.forEach(item => observer.observe(item));



