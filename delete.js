var checker = setInterval(function () {

    if (document.querySelector('.adblock-notif') != null) {
        element = document.querySelector('.adblock-notif');
        element.parentNode.removeChild(element);

        clearInterval(checker);
    }
}, 250);