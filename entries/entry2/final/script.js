document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("gridContainer");

    // Replace these image URLs and text with your own
    const images = [
        { url: "image1.jpg", text: "Caption 1" },
        { url: "image2.jpg", text: "Caption 2" },
        { url: "image3.jpg", text: "Caption 3" },
        // Add more images as needed
    ];

    images.forEach((image) => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.style.backgroundImage = `url(${image.url})`;

        const overlayText = document.createElement("div");
        overlayText.classList.add("overlay-text");
        overlayText.innerText = image.text;

        gridItem.appendChild(overlayText);
        gridContainer.appendChild(gridItem);
    });
});