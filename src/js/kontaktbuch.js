const kontaktbuch = {
    eintraege: [],

    kontakteingabe(formulardaten) {
        console.log('formulardaten.datum:', formulardaten.datum);
        console.log('Type of date input:', typeof formulardaten.datum);
    
        const completeDate = formulardaten.datum + 'T00:00:00.000Z';
    
        const neuerEintrag = {
            firma: formulardaten.firma,
            contact: formulardaten.contact,
            job: formulardaten.job,
            email: formulardaten.email,
            phone: parseInt(formulardaten.phone),
            datum: new Date(completeDate),
            timestamp: Date.now()
        };
        this.eintraege.push(neuerEintrag);
    },
    
    
    
    eintragEntfernen(timestamp) {
        for (let i = this.eintraege.length - 1; i >= 0; i--) {
            if (this.eintraege[i].timestamp === parseInt(timestamp)) {
                this.eintraege.splice(i, 1);
                this.eintraegeAnzeigen();
                this.speichern();
                return;
            }
        }
    },
    

    // datumsortierung - compare function
    eintraegeSortieren() {
        this.eintraege.sort(function (eintrag_a, eintrag_b) {
            if (eintrag_a.datum > eintrag_b.datum) {
                return -1;
            } else if (eintrag_a.datum < eintrag_b.datum) {
                return 1;
            } else {
                return 0;
            }
        })
    },

    htmlEintragErstellen(eintrag) {
        if (!(eintrag.datum instanceof Date)) {
            console.log("Invalid date detected:", eintrag.datum);
            return null;
        }
    
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
        phone.textContent = eintrag.phone || '';
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
    
        this.eintragEntfernenEvent(listenpunkt);
    
        return listenpunkt;
    },
    

    eintragEntfernenEvent(listenpunkt) {
        listenpunkt.querySelector('.trash').addEventListener('click', (e) => {
            let timestamp = e.target.parentElement.getAttribute('data-timestamp');
            this.eintragEntfernen(timestamp);
        });
    },

    eintraegeAnzeigen() {
        console.log('Entries before displaying:', this.eintraege);
    
        document.querySelectorAll('.monats-wrapper ul').forEach(function (eintragsliste) {
            eintragsliste.remove();
        });
    
        let eintragsliste = document.createElement('ul');
        for (let eintrag of this.eintraege) {
            const htmlEintrag = this.htmlEintragErstellen(eintrag);
            if (htmlEintrag !== null) {
                eintragsliste.insertAdjacentElement('beforeend', htmlEintrag);
            }
        }
        document.querySelector('.monats-wrapper').insertAdjacentElement('afterbegin', eintragsliste);
    
        console.log('Entries after displaying:', this.eintraege);
    },
    
    

    speichern() {
        console.log('Saving to Local Storage:', this.eintraege);
        localStorage.setItem('eintraege', JSON.stringify(this.eintraege));
    },    

    laden() {
        const eintraegeFromStorage = localStorage.getItem('eintraege');
        console.log('Loading from Local Storage:', eintraegeFromStorage);
        if (eintraegeFromStorage) {
            this.eintraege = JSON.parse(eintraegeFromStorage, (key, value) => {
                if (key === 'datum') {
                    return new Date(value);
                }
                return value;
            });
        }
    },
    

    eintragHinzufuegen(formulardaten) {
        this.kontakteingabe(formulardaten);
        this.eintraegeSortieren();
        this.eintraegeAnzeigen();
        this.speichern();
    }
}
