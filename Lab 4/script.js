function toggleBackground(element, class1, class2) {
    if (element.classList.contains(class1)) {
        element.classList.remove(class1);
        element.classList.add(class2);
    } else {
        element.classList.remove(class2);
        element.classList.add(class1);
    }
}

const elem7 = document.getElementById('e7');

elem7.addEventListener('touchstart', function() {
    this.style.textDecoration = 'underline';
});

elem7.addEventListener('touchend', function() {
    this.style.textDecoration = 'none';
});

elem7.addEventListener('click', function() {
    toggleBackground(this, 'row_style_1', 'row_style_2');
});

const secondElem = document.querySelector('ul li:nth-child(3)');

secondElem.addEventListener('click', function() {
    toggleBackground(this, 'row_style_2', 'row_style_1');
});

document.getElementById('addImage').addEventListener('click', function() {
    const imgElement = document.getElementById('image_change');
    if (!imgElement) {
        const link = document.createElement('a');
        link.id = 'link_change';
        link.href = "https://www.0312.ua/";
        link.target = "_blank";
        
        const newImg = document.createElement('img');
        newImg.id = 'image_change';
        newImg.src = './images/Uzhgorod.jpg';
        newImg.width = 600;
        newImg.alt = "Йой, щось пішло не так...";

        link.appendChild(newImg);
        document.body.insertBefore(link, document.querySelector('div'));
    }
});

document.getElementById('increaseImage').addEventListener('click', function() {
    const imgElement = document.getElementById('image_change');
    if (imgElement) {
        imgElement.width += 50;
    }
});

document.getElementById('decreaseImage').addEventListener('click', function() {
    const imgElement = document.getElementById('image_change');
    if (imgElement && imgElement.width > 50) {
        imgElement.width -= 50;
    }
});

document.getElementById('removeImage').addEventListener('click', function() {
    const imgElement = document.getElementById('image_change');
    const linkElement = document.getElementById('link_change');
    if (imgElement) {
        linkElement.remove();
    }
});

window.onload = function() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    
    function hideMessage() {
        welcomeMessage.classList.remove('show');
    }

    welcomeMessage.classList.add('show');
    
    setTimeout(hideMessage, 5000);
    
    document.addEventListener('click', hideMessage);
    document.addEventListener('scroll', hideMessage);
    document.addEventListener('keypress', hideMessage);
    document.addEventListener('touchstart', hideMessage);
};
