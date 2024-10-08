const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-pane');

document.getElementById("menu-toggle").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
});

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        const activeTab = document.querySelector('.tab.active');
        const activeTabContent = document.querySelector('.tab-pane.active');

        activeTab.classList.remove('active');
        activeTabContent.classList.remove('active');

        tab.classList.add('active');
        tabContent[index].classList.add('active');
    });
});


document.querySelectorAll('a[data-scroll]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = -150; // Adjust this value as needed
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset + offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        document.querySelector("header").classList.remove("open");
    });
});


// Cache DOM elements
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const iframe = document.getElementById('video-iframe');
const closePopupButton = document.getElementById('close-popup');

// Event delegation for video links
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('video-link')) {
        e.preventDefault();
        const videoId = e.target.getAttribute('data-video');
        iframe.src = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0&controls=1`;
        overlay.style.display = 'block';
        popup.style.display = 'block';
    }
});

// Close modal function
function closeModal() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
    iframe.src = ''; // Clear the src attribute to stop video
}

// Event listeners for closing the modal
closePopupButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);