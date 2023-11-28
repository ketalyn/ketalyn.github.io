const arr = [
    { title: "song1"},
    { title: "song2"},
    { title: "song3"},
    { title: "song4"},
    { title: "song5"}
];

function onClickHandler() {
    const ul = document.getElementsByTagName('ul')[0];
    const item = arr[Math.floor(Math.random() * arr.length)];
    ul.innerHTML = `
            ${item.title}
        `;
}

