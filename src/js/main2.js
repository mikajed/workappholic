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
    eintragAusgeben() {
        console.log(`Firma: ${this.neuerEintrag.firma}
Ansprechpartner: ${this.neuerEintrag.contactperson}
Tätigkeit: ${this.neuerEintrag.job}
E-Mail: ${this.neuerEintrag.email}
Telefonnummer: ${this.neuerEintrag.phone}
Datum: ${this.neuerEintrag.datum}`);
    },
    eintragHinzufuegen() {
        this.kontakteingabe();
        // this.eintragAusgeben();
    }
}

kontaktbuch.eintragHinzufuegen();
// kontaktbuch.eintragHinzufuegen();
console.log(kontaktbuch);