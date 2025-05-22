document.getElementById('logout-button').addEventListener('click', function(event) {
    event.preventDefault();
    const confirmation = confirm("Are you sure you want to log out?");
    if (confirmation) {
        window.location.href = 'index.html';
    }
});


  const characters = document.querySelectorAll('.character');
  const container = document.getElementById('characters-container');

  let inactivityTimeout;
  let moveInterval;

  function resetInactivityTimer() {
    clearTimeout(inactivityTimeout);
    clearInterval(moveInterval);

    characters.forEach(char => {
      char.style.transition = '';
    });

    inactivityTimeout = setTimeout(triggerCharacterMovement, 10000); 
  }

  function triggerCharacterMovement() {
    moveInterval = setInterval(() => {
      characters.forEach(char => {
        const maxWidth = window.innerWidth - 50; 
        const maxHeight = window.innerHeight - 50;
        const randomX = Math.random() * maxWidth;
        const randomY = Math.random() * maxHeight;
        char.style.transition = 'all 0.5s ease';
        char.style.transform = `translate(${randomX}px, ${randomY}px)`;
      });
    }, 1000);
  }

  ['mousemove', 'keydown', 'mousedown', 'touchstart'].forEach(evt => {
    document.addEventListener(evt, resetInactivityTimer);
  });

  resetInactivityTimer();