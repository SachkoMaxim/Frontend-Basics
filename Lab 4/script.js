function toggleBackground(element, class1, class2) {
    if (element.classList.contains(class1)) {
        element.classList.remove(class1);
        element.classList.add(class2);
    } else {
        element.classList.remove(class2);
        element.classList.add(class1);
    }
}

const elem7 = document.getElementById('7');

elem7.addEventListener('click', function() {
    toggleBackground(this, 'row_style_1', 'row_style_2');
});

const secondElem = document.querySelector('ul li:nth-child(3)');

secondElem.addEventListener('click', function() {
    toggleBackground(this, 'row_style_2', 'row_style_1');
});
