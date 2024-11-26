document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');
    const images = document.querySelectorAll('.image-container img');

    function checkVisibility() {
        let foundVisible = false;

        accordionItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

            if (isVisible && !foundVisible) {
                
                images.forEach(img => img.classList.remove('active'));
                accordionItems.forEach(item => {
                    item.classList.remove('active');
                    item.classList.add('inactive'); 
                });
                
                images[index].classList.add('active');
                accordionItems[index].classList.add('active');
                accordionItems[index].classList.remove('inactive'); 

                foundVisible = true;
            }
        });
        
        
        accordionItems.forEach(item => {
            if (!item.classList.contains('active')) {
                item.classList.add('inactive');
            }
        });
        
        
        if (!foundVisible) {
            accordionItems.forEach(item => item.classList.add('inactive'));
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});