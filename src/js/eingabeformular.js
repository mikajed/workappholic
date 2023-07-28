const eingabeformular = {

    formular: null,

    formulardatenHolen(e) {
        return {
            firma: e.target.elements.firma.value,
            contact: e.target.elements.ansprechpartner.value,
            job: e.target.elements.taetigkeit.value,
            email: e.target.elements.email.value,
            phone: e.target.elements.telefon.value,
            datum: e.target.elements.date.value
        };
    },

    absenden() {
        if (!this.formular.hasAttribute('data-event-listener-attached')) {
            this.formular.addEventListener('submit', e => {
                e.preventDefault();
                let formulardaten = this.formulardatenHolen(e);
                kontaktbuch.eintragHinzufuegen(formulardaten);
                this.formular.reset();
            });
            this.formular.setAttribute('data-event-listener-attached', 'true');
        }
    },
    
    htmlErstellen() {
        let eingabeformular = document.createElement('section');
        eingabeformular.setAttribute('id', 'main-input');
        eingabeformular.innerHTML = `
        <div class="eingabe-window">
        <form action="#" class="main-form" id="eingabeformular" method="get">
            <div class="form-left">
                <input type="text" id="firma" name="firma" placeholder="Firma" required>
                <input type="text" id="ansprechpartner" name="ansprechpartner" placeholder="Ansprechpartner" required>
                <input type="text" id="taetigkeit" name="taetigkeit" placeholder="Tätigkeit" required>
            </div>
            <div class="form-right">
                <input type="email" id="email" name="email" placeholder="E-Mail" required>
                <input type="tel" id="telefon" name="telefon" placeholder="Telefon" required>
                <!-- <input type="text" id="date" name="date" placeholder="Datum" required> -->
                <input type="date" id="date" name="date" placeholder="Datum" required>
                <!-- <input type="submit" id="btn-submit" value="HINZUFÜGEN"> -->
                <button class="btn-main" type="submit" form="eingabeformular">HINZUFÜGEN</button>
            </div>
        </form>
    </div>`;

    this.formular = eingabeformular.querySelector('form');

    this.absenden(this.formular);

    return eingabeformular;
    },

    anzeigen() {
        document.querySelector('.navbar').insertAdjacentElement('afterend', this.htmlErstellen());
    }
}