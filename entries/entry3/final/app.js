// JavaScript to control fading effect based on scroll position
document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    // Adjust these values based on when you want the stains to appear and disappear
    if (scrollPosition > 80 && scrollPosition <= 1200) {
        document.getElementById('stain1').style.opacity = 1;
    } else {
        document.getElementById('stain1').style.opacity = 0;
    }

    if (scrollPosition > 200 && scrollPosition <= 600) {
        document.getElementById('stain2').style.opacity = 1;
    } else {
        document.getElementById('stain2').style.opacity = 0;
    }

    if (scrollPosition > 1600 && scrollPosition <= 2000) {
        document.getElementById('stain3').style.opacity = 1;
    } else {
        document.getElementById('stain3').style.opacity = 0;
    }

    if (scrollPosition > 2000 && scrollPosition <= 2400) {
        document.getElementById('stain4').style.opacity = 1;
    } else {
        document.getElementById('stain4').style.opacity = 0;
    }

    if (scrollPosition > 2400 && scrollPosition <= 2800) {
        document.getElementById('stain5').style.opacity = 1;
    } else {
        document.getElementById('stain5').style.opacity = 0;
    }

    if (scrollPosition > 2800) {
        document.getElementById('stain6').style.opacity = 1;
    } else {
        document.getElementById('stain6').style.opacity = 0;
    }

    // Add more conditions for additional stains as needed
});
