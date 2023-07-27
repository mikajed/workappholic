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



///////////////////////////////////////
    /////// Einträge Cards Ausgabe ////////
    ///////////////////////////////////////
    // eintraegeAusgeben() {
    //     // konsole reinigen, wird nichts doppelt eingetragen, falls nötig
    //     console.clear();
    //     // callback funktion, wird an eine andere funktion übergeben und später
    //     // aufgerufen, sobald bestimmte bedingungen erfüllt sind oder ein
    //     // ereignis eingetreten ist.
    //     // forEach schleife, mit ihr kann man eine aktion für jedes element
    //     // des arrays ausführen
    //     this.eintraege.forEach(function(eintrag) {
    //         console.log(`Firma: ${eintrag.get('firma')}\n`
    //             + `Ansprechpartner: ${eintrag.get('contactperson')}\n`
    //             + `Tätigkeit: ${eintrag.get('job')}\n`
    //             + `E-Mail: ${eintrag.get('email')}\n`
    //             + `Telefonnummer: ${eintrag.get('phone')}\n`
    //             + `Datum: ${eintrag.get('datum').toLocaleDateString('de-DE', {
    //                 year: 'numeric',
    //                 month: '2-digit',
    //                 day: '2-digit'
    //             })}`);
    //     })
    // },