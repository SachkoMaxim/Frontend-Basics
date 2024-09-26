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
    
    document.getElementById("errorMessages").innerHTML = errorMessages.join("<br>");

    if (isValid) {
        let newWindow = window.open("", "", "width=400,height=300");

        newWindow.document.write(`
            <h2>Введена інформація</h2>
            <p><strong>ПІБ:</strong> ${name}</p>
            <p><strong>Варіант:</strong> ${variant}</p>
            <p><strong>Група:</strong> ${group}</p>
            <p><strong>Телефон:</strong> ${phone}</p>
            <p><strong>ID-картка:</strong> ${idCard}</p>
        `);
    }
});

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.remove('error');
        input.classList.remove('success');
    });

    input.addEventListener('input', () => {
        input.classList.remove('error');
        input.classList.remove('success');
    });
});
