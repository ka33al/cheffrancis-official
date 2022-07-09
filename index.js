let cards = document.querySelectorAll('.recipe-list li')

    
function liveSearch() {
    let search_query = document.getElementById("searchbox").value;
    let not_found= document.getElementById("not-found")
    let items_found = 0;
    
    //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    for (var i = 0; i < cards.length; i++) {
        if(cards[i].textContent.toLowerCase()
                .includes(search_query.toLowerCase())) {
            cards[i].classList.remove("is-hidden");
            items_found++;
        } else {
            cards[i].classList.add("is-hidden");
        }
    }
    if(items_found > 0){
        not_found.classList.add("is-hidden")

    }
    else{
        not_found.classList.remove("is-hidden")
    }
}

//A little delay
let typingTimer;               
let typeInterval = 500;  
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(liveSearch, typeInterval);
});