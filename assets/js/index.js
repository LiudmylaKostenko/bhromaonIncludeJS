
let inputSearch = document.getElementById('search__input-js');
let searchBtn = document.getElementById('searchBtn-js');


searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(document.getElementsByClassName('input_search_class')[0]);
    let alertBlock = document.getElementsByClassName('input_search_class')[0];
    if (alertBlock !== undefined) {
        alertBlock.remove();
    }

    let searchResult = document.createElement('div');
    searchResult.classList.add('input_search_class');
    searchBtn.after(searchResult);
    let searchText = inputSearch.value;
    searchResult.innerHTML = 'По запросу ' + '<br />' + '<strong>' + '\"' + searchText + '\" ' + '<br />' + ' ничего не найдено!';
    // setTimeout(() => searchResult.style.display = 'none' /*remove*() */ , 5000);
    setTimeout(() => inputSearch.value = "", 5000);

})
