const formSearch = document.querySelector('#search');
formSearch.addEventListener('submit', getSearch);

function getSearch(event) {
    event.preventDefault();
    let palabra = event.target.word.value;
    if (palabra !== "") {
        window.location.href = 'index.html?nombre=' + palabra;
    } else {
        window.location.href = 'index.html';
    }
}
