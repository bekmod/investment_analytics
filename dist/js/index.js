const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-pane');

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