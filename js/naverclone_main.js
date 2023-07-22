/* 전역변수를 선언하면 메모리에 계속 남아있기때문에 최대한 함수안에서 변수를 선언해 메모리효율을 늘리도록 하자 */

/* 트라이앵글 버튼 요소 가져오기 */
const triangle_button = document.getElementById("header_searchbox_image_triangle");
/* 동작할 함수 만들기 */
function show_hidden_block() {
    /* 숨겨진 블록 가져오기 */
    const hidden_block = document.getElementById("search_hidden");
    if (hidden_block.style.display === "flex") {
        hidden_block.style.display = "none";
    } else {
        hidden_block.style.display = "flex";
    }
}
/* 트라이앵글 버튼에 클릭 이벤트 추가 */
triangle_button.addEventListener("click", show_hidden_block);


const top_left_button = document.querySelector('.top_left_button');

top_left_button.addEventListener('click', () => {
    const top_left_button_menu = document.querySelector('#top_left_button_menu')
    const text_box_under_mail = document.querySelector('.text_box_under_mail');
    const text_box_under_cafe = document.querySelector('.text_box_under_cafe');
    const search_N_logo = document.querySelector('.search_N_logo');
    top_left_button.classList.toggle('focus');
    top_left_button.focus();
    
    /* 클릭하면 top_left_button_iframe 의 top_left_service_search_area.style.display = 'none'; 처리 */
    /* 클릭하면 top_left_button_menu_body.classList.remove('display') */
    let top_left_button_iframe = document.querySelector('#top_left_button_iframe');
    let top_left_button_iframe_document = top_left_button_iframe.contentDocument;
    let top_left_service_search_area = top_left_button_iframe_document.querySelector('#top_left_service_search_area');
    top_left_service_search_area.style.display = 'none';
    let top_left_button_menu_body = top_left_button_iframe_document.querySelector('#top_left_button_menu_body');
    top_left_button_menu_body.classList.remove('display');

    if (top_left_button_menu.classList.contains('show')) {
        top_left_button_menu.classList.remove('show');
        text_box_under_mail.style.zIndex = '200';
        text_box_under_cafe.style.zIndex = '200';
        search_N_logo.style.zIndex = '200';
        top_left_button_menu.style.zIndex = '0';
    } else {
        top_left_button_menu.classList.add('show');
        text_box_under_mail.style.zIndex = '0';
        text_box_under_cafe.style.zIndex = '0';
        search_N_logo.style.zIndex = '0';
        top_left_button_menu.style.zIndex = '100';
    }
});

document.addEventListener('click', (event) => {
    const top_left_button_menu = document.querySelector('#top_left_button_menu')
    const text_box_under_mail = document.querySelector('.text_box_under_mail');
    const text_box_under_cafe = document.querySelector('.text_box_under_cafe');
    const search_N_logo = document.querySelector('.search_N_logo');
    if (!top_left_button.contains(event.target) && !top_left_button_menu.contains(event.target)) {
        top_left_button_menu.classList.remove('show');
        text_box_under_mail.style.zIndex = '200';
        text_box_under_cafe.style.zIndex = '200';
        search_N_logo.style.zIndex = '200';
        top_left_button_menu.style.zIndex = '0';
    }
});