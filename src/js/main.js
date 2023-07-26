let firma, contactperson, job, email, phone, datum;

const kontakteingabe = function() {
    firma = prompt('Firma:');
    contactperson = prompt('Ansprechpartner:');
    job = prompt('Tätigkeit:');
    email = prompt('E-Mail:');
    phone = parseInt(prompt('Telefonnummer:'));
    datum = prompt('Datum (jjjj-mm-tt):');
}

const eintragAusgeben = function(firma, contactperson, job, email, phone, datum) {
    console.log(`Firma: ${firma}
Ansprechpartner: ${contactperson}
Tätigkeit: ${job}
E-Mail: ${email}
Telefonnummer: ${phone}
Datum: ${datum}`);
}

const eintragHinzufuegen = function() {
    kontakteingabe();
    eintragAusgeben(firma, contactperson, job, email, phone, datum);
}

eintragHinzufuegen();
eintragHinzufuegen();
eintragHinzufuegen();