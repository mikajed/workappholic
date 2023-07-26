const kontaktbuch = {

    eintraege: [],

    kontakteingabe() {
        this.eintraege.push({
           firma: prompt('Firma:'),
           contactperson: prompt('Ansprechpartner:'),
           job: prompt('Tätigkeit:'),
           email: prompt('E-Mail:'),
           phone: parseInt(prompt('Telefonnummer:')),
           datum: prompt('Datum (jjjj-mm-tt):'), 
        });
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

    ///////////////////////////////////////
    /////// Einträge Cards Ausgabe ////////
    ///////////////////////////////////////
    eintraegeAusgeben() {
        // konsole reinigen, wird nichts doppelt eingetragen, falls nötig
        console.clear();
        // callback funktion, wird an eine andere funktion übergeben und später
        // aufgerufen, sobald bestimmte bedingungen erfüllt sind oder ein
        // ereignis eingetreten ist.
        // forEach schleife, mit ihr kann man eine aktion für jedes element
        // des arrays ausführen
        this.eintraege.forEach(function(eintrag) {
            console.log(`Firma: ${eintrag.firma}\n`
                + `Ansprechpartner: ${eintrag.contactperson}\n`
                + `Tätigkeit: ${eintrag.job}\n`
                + `E-Mail: ${eintrag.email}\n`
                + `Telefonnummer: ${eintrag.phone}\n`
                + `Datum: ${eintrag.datum}`);
        })
    },
    eintragHinzufuegen() {
        let weitererEintrag = true;
        while(weitererEintrag) {
            this.kontakteingabe();
            this.eintraegeSortieren();
            this.eintraegeAusgeben();
            weitererEintrag = confirm('Weiteren Eintrag hinzufügen?');
        }
        // confirm zeigt einen dialog mit einer optionalen nachricht
        // und wartet bis der user zusagt oder nicht.
    }
}

kontaktbuch.eintragHinzufuegen();
kontaktbuch.eintragHinzufuegen();
console.log(kontaktbuch);