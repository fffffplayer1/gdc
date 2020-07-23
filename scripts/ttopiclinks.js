elems = document.getElementsByClassName('lia-link-navigation lia-custom-event');
for (elem of elems) {
    link =  elem.getAttribute('href').split('/').splice(-1)[0];
    elem.setAttribute('href', link);
}
