var checker = setInterval(function () {
    console.log("checked")

    if (document.querySelector('.adblock-notif') != null) {
        element = document.querySelector('.adblock-notif');
        element.parentNode.removeChild(element);

        console.log("deleted")

        clearInterval(checker);
    }
}, 250);