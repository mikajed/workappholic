let firma, contactperson, job, email, phone, datum;

function kontakteingabe() {
    firma = prompt('Firma:');
    contactperson = prompt('Ansprechpartner:');
    job = prompt('Tätigkeit:');
    email = prompt('E-Mail:');
    phone = parseInt(prompt('Telefonnummer:'));
    datum = prompt('Datum (jjjj-mm-tt):');
}

function eintragAusgeben(firma, contactperson, job, email, phone, datum) {
    console.log(`Firma: ${firma}\n`
        + `Ansprechpartner: ${contactperson}\n`
        + `Tätigkeit: ${job}\n`
        + `E-Mail: ${email}\n`
        + `Telefonnummer: ${phone}\n`
        + `Datum: ${datum}`);
}

function eintragHinzufuegen() {
    kontakteingabe();
    eintragAusgeben(firma, contactperson, job, email, phone, datum);
}

eintragHinzufuegen();
eintragHinzufuegen();