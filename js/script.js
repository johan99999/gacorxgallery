document.querySelectorAll('.gallery img').forEach(function(img) {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
