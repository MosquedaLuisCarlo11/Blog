// Options 
document.querySelector('.options-btn').addEventListener('click', function (e) {
  e.stopPropagation();
  const dropdown = document.querySelector('.options-dropdown');
  dropdown.classList.toggle('open');
});

document.addEventListener('click', function () {
  const dropdown = document.querySelector('.options-dropdown');
  if (dropdown.classList.contains('open')) {
      dropdown.classList.remove('open');
  }
});

// Dark and Light mode
const button = document.getElementById('theme-toggle');
const body = document.body;

button.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  const isDarkMode = body.classList.contains('dark-mode');
  button.textContent = isDarkMode ? '☀️' : '🌙';
});

// Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('show');
  });

  document.addEventListener('click', (event) => {
      if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
          navMenu.classList.remove('show');
      }
  });
});

// Animation text - Typed.js
const options = {
  strings: [
      'where your vibe becomes your tribe',
      'for all Ensign Students',
      'for all those who want to growth',
      'LDS member'
  ], 
  typeSpeed: 60, 
  backSpeed: 40,
  backDelay: 1000,
  loop: true 
};

const typed = new Typed('.typing-effect', options);

// Scroll Text Animation
document.addEventListener('DOMContentLoaded', () => {
    const textElements = document.querySelectorAll('.scroll-text');
    const secondaryText = document.querySelector('.scroll-text-secondary');
  
    if (!textElements.length) {
      console.error("No elements found with class '.scroll-text'.");
      return;
    }
  
    textElements.forEach((textElement, index) => {
      const text = textElement.dataset.text;
      const textArray = text.split('');
  
      textElement.innerHTML = textArray
        .map(letter => `<span>${letter === ' ' ? '&nbsp;' : letter}</span>`)
        .join('');
  
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              console.log("The element is visible, starting the animation...");
              const letters = entry.target.querySelectorAll('span');
              letters.forEach((span, letterIndex) => {
                setTimeout(() => {
                  span.classList.add('visible');
                }, letterIndex * 50);
              });
  
              if (index === textElements.length - 1 && secondaryText) {
                setTimeout(() => {
                  secondaryText.classList.add('visible');
                }, letters.length * 50 + 300);
              }
  
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
  
      observer.observe(textElement);
    });
  });

// Experience
document.addEventListener("DOMContentLoaded", () => {
  const textOptions = document.querySelectorAll(".text-container div");
  const descriptions = document.querySelectorAll(".description-item");

  textOptions.forEach((textOption) => {
      textOption.addEventListener("click", () => {
          const id = textOption.getAttribute("data-id");

          textOptions.forEach((text) => text.classList.remove("active"));
          descriptions.forEach((desc) => desc.classList.remove("active"));

          textOption.classList.add("active");
          const matchingDescription = document.querySelector(`.description-item[data-id="${id}"]`);
          if (matchingDescription) {
              matchingDescription.classList.add("active");
          }
      });
  });
});

// Footer
    document.addEventListener('DOMContentLoaded', () => {
        const copyButtons = document.querySelectorAll('.copy-number');

        copyButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const number = e.target.getAttribute('data-number');
                
                navigator.clipboard.writeText(number).then(() => {
                    const notification = document.getElementById('notification');
                    notification.textContent = "Número copiado al portapapeles";
                    notification.classList.add('show');

                    setTimeout(() => {
                        notification.classList.remove('show');
                    }, 2000);
                }).catch(err => {
                    console.error('Error al copiar al portapapeles: ', err);
                });
            });
        });
    });


const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        document.body.style.backgroundColor = link.getAttribute('data-color');
    });

    link.addEventListener('mouseout', () => {
        document.body.style.backgroundColor = '';
    });
});
