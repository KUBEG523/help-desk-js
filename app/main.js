const lista = document.getElementById("list-zgloszenia");

let zgloszenia = [];
let tablicaID = 1;
let aktywneLiczba = 0;

// obiektówka do utworzenia droplisty Status
let statusOpcje = [
    { value: "new", tekst: "Nowe"},
    { value: "doing", tekst: "W trakcie"},
    { value: "done", tekst: "Zrobione"}
]

//sprawdzenie liczby zgłoszeń
function liczbaZgloszen()
{
    let liczba = document.querySelectorAll("#list-zgloszenia li").length;
    document.getElementById("all_ctr-zgloszenia-js").textContent = liczba;
    document.getElementById("active_ctr-zgloszenia-js").textContent = aktywneLiczba;

    if(liczba == 0)
    {
        const tekst = document.createElement("li");
        tekst.textContent = "Lista jest obecnie pusta".
        lista.appendChild(tekst);
    }
}
// usunięcie zgłoszenia
function usunZgloszenie(event)
{
    const element = event.currentTarget.closest('li');
    if(element)
    {
        let index = zgloszenia.indexOf(element) - 1;
        zgloszenia.splice(index, 1);
        element.remove();
    }

    liczbaZgloszen();
}

function zmianaStatusu(event)
{
    zgloszenia.status = event.target.value;
    if(event.target.value == "new" || event.target.value == "doing")
    {
        aktywneLiczba = document.querySelectorAll("#list-zgloszenia li").length;
    }
    else
    {
        aktywneLiczba = document.querySelectorAll("#list-zgloszenia li").length - 1;
    }
    liczbaZgloszen();
    return aktywneLiczba;
}
// dodawanie zgłoszenia
document.getElementById("form-zgloszenia-JS").addEventListener("submit", function(event)
{
    event.preventDefault();
    let zgloszenie = 
    {
        id: tablicaID,
        tytul: document.getElementById("form-title").value.trim(),
        opis: document.getElementById("form-description").value.trim(),
        priorytet: document.getElementById("form-priority").value,
        status: "new"
    };

    const noweZgloszenie = document.createElement('li');
    noweZgloszenie.textContent = zgloszenie.id + ". " + zgloszenie.tytul + ": " + zgloszenie.opis + " | " + zgloszenie.priorytet + " ";

    const status = document.createElement ("select");
    status.id = "selectStatus"
    status.addEventListener('change', zmianaStatusu)
    statusOpcje.forEach(opcja => {
        const opcje = document.createElement("option");
    opcje.value = opcja.value;
    opcje.text = opcja.tekst;

    status.appendChild(opcje);
    });

    const btnDelete = document.createElement("button");
    btnDelete.type = 'button';
    btnDelete.textContent = "Usuń";
    btnDelete.addEventListener('click', usunZgloszenie);

    noweZgloszenie.appendChild(status);
    noweZgloszenie.appendChild(btnDelete);
    lista.appendChild(noweZgloszenie); 

    tablicaID++;
    zgloszenia.push(zgloszenie);
    liczbaZgloszen();
    document.getElementById("form-title").value = '';
    document.getElementById("form-description").value = '';
});
