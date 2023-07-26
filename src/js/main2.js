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
    eintraegeAusgeben() {
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
        this.kontakteingabe();
        this.eintraegeAusgeben();
    }
}

kontaktbuch.eintragHinzufuegen();
// kontaktbuch.eintragHinzufuegen();
console.log(kontaktbuch);