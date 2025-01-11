## localStorage

Index js-ben küldött adatok a böngészőben így érhetők el:
``` javascript
console.log(localStorage['username'])
```

A localStorage adatai addig élnek, amíg a felhasználó manuálisan ki nem törli őket, vagy a weboldal kódja nem távolítja el azokat. A localStorage nem jár le automatikusan, így az adatok böngészőbezárás vagy gépújraindítás után is megmaradnak.

- Tartósság:

Az adatok tartósan tárolódnak a böngészőben, és csak akkor törlődnek, ha a felhasználó törli azokat (például a böngésző beállításaiban), vagy ha explicit törlődnek a kódból.

- Kapacitás:

A legtöbb modern böngészőben a localStorage kapacitása körülbelül 5-10 MB domainenként.

- Hozzáférhetőség:

A localStorage adatai csak azon a domainen (és azon a protokollon, például http vagy https) érhetők el, ahol tárolták őket.

Példa használatára:
``` javascript
// Adat tárolása
localStorage.setItem('username', 'JohnDoe');

// Adat lekérése
const userName = localStorage.getItem('username');
console.log(userName); // "JohnDoe"

// Adat törlése
localStorage.removeItem('username');

// Minden adat törlése a localStorage-ban
localStorage.clear();
```

## sessionStorage
Ha időkorlátot szeretnénk az adatokra (ilyenkor a sessionStorage vagy sütik lehetnek jobbak).

- Élettartam:

Az adatok addig élnek, amíg az adott böngészőfül nyitva van.
Ha a felhasználó frissíti az oldalt, az adatok megmaradnak.
Ha új fület nyit ugyanazon az oldalon, az új fülnek saját külön sessionStorage területe lesz, és nem osztozik az előző füllel.

- Kapacitás:

A sessionStorage kapacitása a legtöbb böngészőben ugyanaz, mint a localStorage-é (kb. 5-10 MB domainenként).

- Hozzáférhetőség:

Az adatok csak azon a domainen belül érhetők el, ahol tárolták őket, és csak az adott böngészőfülön belül.

példa használatra:
``` javascript
// Adat tárolása
sessionStorage.setItem('username', 'JohnDoe');

// Adat lekérése
const userName = sessionStorage.getItem('username');
console.log(userName); // "JohnDoe"

// Adat törlése
sessionStorage.removeItem('username');

// Minden adat törlése a sessionStorage-ban
sessionStorage.clear();
```