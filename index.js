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
                
                
                images[index].classList.add('active');
                
                foundVisible = true; 
            }
        });
    }
    
    window.addEventListener('scroll', checkVisibility);

    checkVisibility();
});