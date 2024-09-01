document.querySelectorAll('.gallery img').forEach(function(img) {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

document.addEventListener('keydown', function(event) {
    if (event.key === "PrintScreen") {
        // Hide content or show a black overlay
        document.body.style.visibility = 'hidden';
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key == "PrintScreen") {
        navigator.clipboard.writeText('');
        alert('Screenshots are disabled.');
    }
});

document.addEventListener('fullscreenchange', function() {
    if (document.fullscreenElement) {
        alert('Screenshots and screen recordings are not allowed.');
    }
});
