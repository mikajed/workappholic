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
    console.log(`Firma: ${firma}
Ansprechpartner: ${contactperson}
Tätigkeit: ${job}
E-Mail: ${email}
Telefonnummer: ${phone}
Datum: ${datum}`);
}

function eintragHinzufuegen() {
    kontakteingabe();
    eintragAusgeben(firma, contactperson, job, email, phone, datum);
}

eintragHinzufuegen();
eintragHinzufuegen();