document.addEventListener('DOMContentLoaded', function () {
    const revealText = document.getElementById('reveal-text');
  
    function checkScroll() {
      const revealPosition = revealText.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (revealPosition < windowHeight / 1.2) {
        revealText.classList.add('revealed');
        typeText();
        window.removeEventListener('scroll', checkScroll);
      }
    }
  
    function typeText() {
      const textLines = revealText.innerText.split('\n');
      revealText.innerHTML = ''; // Clear existing text
  
      textLines.forEach((line, index) => {
        const lineElement = document.createElement('div');
        lineElement.classList.add('grow-shrink');
        setTimeout(() => {
          lineElement.textContent = line;
          revealText.appendChild(lineElement);
          lineElement.classList.add('grow');
          setTimeout(() => {
            lineElement.classList.remove('grow');
            lineElement.classList.add('shrink');
          }, 800); // Adjust the delay for shrinking
        }, index * 1200); // Adjust the delay between lines
      });
    }
  
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on page load
  });
  