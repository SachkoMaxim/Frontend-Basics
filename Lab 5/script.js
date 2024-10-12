document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const variant = document.getElementById("variant").value;
    const group = document.getElementById("group").value;
    const phone = document.getElementById("phone").value;
    const idCard = document.getElementById("idCard").value;
    
    const nameRegex = /^[\p{L}][\p{L} '-]+ [\p{L}]\. [\p{L}]\.$/u;
    const variantRegex = /^\d{1,3}$/;
    const groupRegex = /^[\p{L}]{2}-\d{2}$/u;
    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    const idCardRegex = /^[\p{L}]{2} №\d{6}$/u;

    
    let isValid = true;
    const errorMessages = [];
    
    if (!nameRegex.test(name)) {
        isValid = false;
        document.getElementById("name").classList.add("error");
        errorMessages.push("Неправильно введено ПІБ.");
    } else {
        document.getElementById("name").classList.remove("error");
        document.getElementById("name").classList.add("success");
    }

    if (!variantRegex.test(variant)) {
        isValid = false;
        document.getElementById("variant").classList.add("error");
        errorMessages.push("Неправилно введено варіант.");
    } else {
        document.getElementById("variant").classList.remove("error");
        document.getElementById("variant").classList.add("success");
    }

    if (!groupRegex.test(group)) {
        isValid = false;
        document.getElementById("group").classList.add("error");
        errorMessages.push("Неправилно введено групу.");
    } else {
        document.getElementById("group").classList.remove("error");
        document.getElementById("group").classList.add("success");
    }

    if (!phoneRegex.test(phone)) {
        isValid = false;
        document.getElementById("phone").classList.add("error");
        errorMessages.push("Неправилно введено телефон.");
    } else {
        document.getElementById("phone").classList.remove("error");
        document.getElementById("phone").classList.add("success");
    }

    if (!idCardRegex.test(idCard)) {
        isValid = false;
        document.getElementById("idCard").classList.add("error");
        errorMessages.push("Неправилно введено ID-карту.");
    } else {
        document.getElementById("idCard").classList.remove("error");
        document.getElementById("idCard").classList.add("success");
    }
    
    document.getElementById("bottomErrorMessages").innerHTML = errorMessages.join("<br>");

    setTimeout(() => {
        document.getElementById("bottomErrorMessages").innerHTML = "";
    }, 5000);

    if (isValid) {
        showModal(`
            <p><strong>ПІБ:</strong> ${name}</p>
            <p><strong>Варіант:</strong> ${variant}</p>
            <p><strong>Група:</strong> ${group}</p>
            <p><strong>Телефон:</strong> ${phone}</p>
            <p><strong>ID-картка:</strong> ${idCard}</p>
    `   );
    }
});

const modal = document.getElementById('draggableModal');
const header = document.getElementById('modalHeader');
const closeButton = document.querySelector('.close-btn');

function showModal(content) {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = content;
    modal.style.display = 'block';
    modal.style.top = '10px';
    modal.style.left = '10px';
}

closeButton.onclick = function() {
    modal.style.display = 'none';
};

closeButton.ontouchstart = function() {
    modal.style.display = 'none';
};

header.onmousedown = function(event) {
    event.preventDefault();
    startDrag(event.clientX, event.clientY);

    document.onmousemove = function(event) {
        onDrag(event.pageX, event.pageY);
    };

    document.onmouseup = function() {
        endDrag();
    };
};

header.ontouchstart = function(event) {
    event.preventDefault();
    const touch = event.touches[0];
    startDrag(touch.clientX, touch.clientY);

    document.ontouchmove = function(event) {
        const touch = event.touches[0];
        onDrag(touch.pageX, touch.pageY);
    };

    document.ontouchend = function() {
        endDrag();
    };
};

header.ondragstart = function() {
    return false;
};

function startDrag(clientX, clientY) {
    let shiftX = clientX - modal.getBoundingClientRect().left;
    let shiftY = clientY - modal.getBoundingClientRect().top;

    modal.dataset.shiftX = shiftX;
    modal.dataset.shiftY = shiftY;
}

function onDrag(pageX, pageY) {
    let shiftX = parseFloat(modal.dataset.shiftX);
    let shiftY = parseFloat(modal.dataset.shiftY);

    modal.style.left = pageX - shiftX + 'px';
    modal.style.top = pageY - shiftY + 'px';
}

function endDrag() {
    document.onmousemove = null;
    document.onmouseup = null;
    document.ontouchmove = null;
    document.ontouchend = null;
}

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.remove('error');
        input.classList.remove('success');
        document.getElementById("bottomErrorMessages").innerHTML = "";
    });

    input.addEventListener('input', () => {
        input.classList.remove('error');
        input.classList.remove('success');
        document.getElementById("bottomErrorMessages").innerHTML = "";
    });
});

const table = document.querySelector('#colorTable tbody');
const colorPalette = document.getElementById('colorPalette');
const colorPicker = document.getElementById('pickerColor');

let counter = 1;
const rows = 6;
const cols = 6;

for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
        const cell = document.createElement('td');
        cell.textContent = counter;
        row.appendChild(cell);
        counter++;
    }
    table.appendChild(row);
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function applyRectangleColor(startCell) {
    const selectedColor = getRandomColor();
    const startRow = startCell.parentElement.rowIndex;
    const startCol = startCell.cellIndex;

    for (let i = startRow; i < rows; i++) {
        for (let j = startCol; j < cols; j++) {
            table.rows[i].cells[j].style.backgroundColor = selectedColor;
        }
    }
}

const specialCell = table.rows[0].cells[3];
let clickTimeout;
let isDoubleClick = false;

specialCell.addEventListener('mouseover', () => {
    specialCell.style.backgroundColor = getRandomColor();
});
  
specialCell.addEventListener('click', function () {
    clickTimeout = setTimeout(() => {
      if (!isDoubleClick) { 
        console.log("Single Click Fire");
        colorPicker.click(); 
      }
      isDoubleClick = false;
    }, 250);
});
  
specialCell.addEventListener('dblclick', function () {
    clearTimeout(clickTimeout);
    isDoubleClick = true;
  
    applyRectangleColor(specialCell);
});

colorPicker.addEventListener('input', (e) => {
    specialCell.style.backgroundColor = e.target.value;
});
