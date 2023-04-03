const blueBtn = document.getElementById('blue-btn');
const greenBtn = document.getElementById('green-btn');
const redBtn = document.getElementById('red-btn');
const yellowBtn = document.getElementById('yellow-btn');
const notificationContainer = document.getElementById('notification-container');

const showNotification = (color) => {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.style.backgroundColor = color;
    notificationContainer.appendChild(notification);
      setTimeout(() => {
          notificationContainer.removeChild(notification);
        }, 1000);
      };

      blueBtn.addEventListener('click', () => {
        showNotification('RoyalBlue');
      });

      greenBtn.addEventListener('click', () => {
        showNotification('green');
      });

      redBtn.addEventListener('click', () => {
        showNotification('red');
      });

      yellowBtn.addEventListener('click', () => {
        showNotification('yellow');
      });
       