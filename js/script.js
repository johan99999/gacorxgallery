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
document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    let formData = new FormData(document.getElementById('commissionForm'));

    fetch('send_order.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        // Handle the response from the server
        alert(result);
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });
});
