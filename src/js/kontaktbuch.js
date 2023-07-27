const kontaktbuch = {
    eintraege: [],

    kontakteingabe() {
        const neuerEintrag = {
            firma: prompt('Firma:'),
            contact: prompt('Ansprechpartner:'),
            job: prompt('Tätigkeit:'),
            email: prompt('E-Mail:'),
            phone: parseInt(prompt('Telefonnummer:')),
            datum: new Date(prompt('Datum (jjjj-mm-tt):') + ' 00:00:00'),
            timestamp: Date.now() // für die Einzigartigkeit, um einen Array zu identifizieren
        };
        this.eintraege.push(neuerEintrag);
    },

    ///////////////////////////////////////
    // datumsortierung - compare function//
    ///////////////////////////////////////
    eintraegeSortieren() {
        this.eintraege.sort(function(eintrag_a, eintrag_b) {
            if(eintrag_a.datum > eintrag_b.datum) {
                return -1;
            } else if (eintrag_a.datum < eintrag_b.datum) {
                return 1;
            } else {
                return 0;
            }
        })
    },

    // DOM (document object model) fängt hier an
    htmlEintragErstellen(eintrag) {
        let listenpunkt = document.createElement('li');
        listenpunkt.classList.add('output-window');
        listenpunkt.setAttribute('data-timestamp', eintrag.timestamp);

        let datum = document.createElement('span');
        datum.setAttribute('class', 'datum');
        datum.textContent = eintrag.datum.toLocaleDateString('de-DE', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        });
        listenpunkt.insertAdjacentElement('afterbegin', datum);

        let firma = document.createElement('span');
        firma.setAttribute('class', 'firma');
        firma.textContent = eintrag.firma;
        datum.insertAdjacentElement('afterend', firma);

        let contact = document.createElement('span');
        contact.setAttribute('class', 'contact');
        contact.textContent = eintrag.contact;
        firma.insertAdjacentElement('afterend', contact);

        let phone = document.createElement('span');
        phone.setAttribute('class', 'phone');
        phone.textContent = eintrag.phone.toString();
        contact.insertAdjacentElement('afterend', phone);

        let email = document.createElement('span');
        email.setAttribute('class', 'email');
        email.textContent = eintrag.email;
        phone.insertAdjacentElement('afterend', email);

        let job = document.createElement('span');
        job.setAttribute('class', 'job');
        job.textContent = eintrag.job;
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
