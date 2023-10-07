setTimeout(function () {
    var logoutMessageElement = document.getElementById('logoutMessage');
    if (logoutMessageElement) {
        logoutMessageElement.style.display = 'none';
    }
}, 2000);


setTimeout(function () {
    var errorMessageElement = document.getElementById('errorMessage');
    if (errorMessageElement) {
        errorMessageElement.style.display = 'none';
    }
}, 3000); 