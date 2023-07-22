/* .service_search 를 클릭하면  #top_left_service_search_area 의 display가 block */
let service_search = document.querySelector('.service_search');

service_search.addEventListener('click',function() {
    let top_left_service_search_area = document.querySelector('#top_left_service_search_area');
    top_left_service_search_area.style.display = 'block';
})

/* #top_left_service_search_back 를 클릭하면 #top_left_service_search_area 의 display가 none */

let top_left_service_search_back = document.querySelector('#top_left_service_search_back');

top_left_service_search_back.addEventListener('click', function () {
    let top_left_service_search_area = document.querySelector('#top_left_service_search_area');
    top_left_service_search_area.style.display = 'none';
})