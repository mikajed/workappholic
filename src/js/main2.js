function onPageLoad() {
    kontaktbuch.laden();
    kontaktbuch.eintraegeAnzeigen();
}

window.addEventListener('load', onPageLoad);

eingabeformular.anzeigen();
eingabeformular.absenden();