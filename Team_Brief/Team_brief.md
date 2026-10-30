Zadania dla grupy:

KUBEG:
* Szkielet HTML
* CSS
* Filtorwanie
* Counters
* walidacja formularza i error handlere

SZCZERBA:
* Obiekty/kolekcja zgloszen
* Dodawanie rekordów i usuwanie
* Counters (KUBEG: ZROBI PO HTML ; SZCZERBA JS)

MATIUS:
* Testy
* Import/export do JSON

Wytyczne:
ZAKAZ SPAMOWANIA IF-AMI i CASE-AMI
Modularna budowa plików

!!! import/export w osobnym pliku JS !!!

Brache:

KUBEG:
app/HTML/KUBEG
app/JS/KUBEG

Szczerbartek:
app/JS/SZCZERBA
(inne nazwyac podobnie tylko zmieniac app/(zmiana)/SZCZERBA)

MATIUS
app/import/MATIUS
app/test/MATIUS

Struktury danych/Plików

struktura zgloszen:
id : numer
tytul : string
opis : string 
status : string
priorytet : string 

Struktura zgloszenia:

<li> <div> id: (id z js) | tutuł : | krótki opis : | status (droplist) | priority (droplist) | usun (button) </div> </li>