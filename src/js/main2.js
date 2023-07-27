const kontaktbuch = {

    eintraege: [],

    kontakteingabe() {
        // Das Map-Objekt enthält Schlüssel-Wert-Paare und merkt sich die ursprüngliche Reihenfolge 
        // der Schlüssel bei der Einfügung. Jeder Wert (sowohl Objekte als auch primitive Werte) kann 
        // als Schlüssel oder Wert verwendet werden.
        let neuerEintrag = new Map();
        neuerEintrag.set('firma', prompt('Firma:'));
        neuerEintrag.set('contact', prompt('Ansprechpartner:'));
        neuerEintrag.set('job', prompt('Tätigkeit:'));
        neuerEintrag.set('email', prompt('E-Mail:'));
        neuerEintrag.set('phone', parseInt(prompt('Telefonnummer:')));
        neuerEintrag.set('datum', new Date(prompt('Datum (jjjj-mm-tt):') + ' 00:00:00'));
        neuerEintrag.set('timestamp', Date.now()); // für die einzigartigkeit um einen array zu identifizieren
        this.eintraege.push(neuerEintrag);
    },

    ///////////////////////////////////////
    // datumsortierung - compare function//
    ///////////////////////////////////////
    eintraegeSortieren() {
        this.eintraege.sort(function(eintrag_a, eintrag_b) {
            if(eintrag_a.get('datum') > eintrag_b.get('datum')) {
                return -1;
            } else if (eintrag_a.get('datum') < eintrag_b.get('datum')) {
                return 1;
            } else {
                return 0;
            }
        })
    },

    htmlEintragErstellen(eintrag) {
        let listenpunkt = document.createElement('li');
        listenpunkt.classList.add('output-window');
        listenpunkt.setAttribute('data-timestamp', eintrag.get('timestamp'));

        let datum = document.createElement('span');
        datum.setAttribute('class', 'datum');
        datum.textContent = eintrag.get('datum').toLocaleDateString('de-DE', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        listenpunkt.insertAdjacentElement('afterbegin', datum);

        let firma = document.createElement('span');
        firma.setAttribute('class', 'firma');
        firma.textContent = eintrag.get('firma');
        datum.insertAdjacentElement('afterend', firma);

        let contact = document.createElement('span');
        contact.setAttribute('class', 'contact');
        contact.textContent = eintrag.get('contact');
        firma.insertAdjacentElement('afterend', contact);

        let phone = document.createElement('span');
        phone.setAttribute('class', 'phone');
        phone.textContent = eintrag.get('phone').toString();
        contact.insertAdjacentElement('afterend', phone);

        let email = document.createElement('span');
        email.setAttribute('class', 'email');
        email.textContent = eintrag.get('email');
        phone.insertAdjacentElement('afterend', email);

        let job = document.createElement('span');
        job.setAttribute('class', 'job');
        job.textContent = eintrag.get('job');
        email.insertAdjacentElement('afterend', job);

        let button = document.createElement('button');
        button.setAttribute('class', 'trash');
        job.insertAdjacentElement('afterend', button);

        let icon = document.createElement('i');
        icon.setAttribute('class', 'fas fa-trash');
        button.insertAdjacentElement('afterbegin', icon);

        return listenpunkt;
    },

    eintraegeAnzeigen() {
        // checken ob <ul> bereits da ist
            // wenn ja dann löschen
        document.querySelectorAll('.monats-wrapper ul').forEach(function(eintragsliste) {
            eintragsliste.remove();
        });

        let eintragsliste = document.createElement('ul');
        for (let eintrag of this.eintraege) {
            eintragsliste.insertAdjacentElement('beforeend', this.htmlEintragErstellen(eintrag));
        }
        document.querySelector('.monats-wrapper').insertAdjacentElement('afterbegin', eintragsliste);
    },

    eintragHinzufuegen() {
        let weitererEintrag = true;
        while(weitererEintrag) {
            this.kontakteingabe();
            // methodenaufrufe anpassen
            this.eintraegeSortieren();
            this.eintraegeAnzeigen();
            weitererEintrag = confirm('Weiteren Eintrag hinzufügen?');
        }
        // confirm zeigt einen dialog mit einer optionalen nachricht
        // und wartet bis der user zusagt oder nicht.
    }
}

kontaktbuch.eintragHinzufuegen();
console.log(kontaktbuch);