/* 트라이앵글 버튼 요소 가져오기 */
var triangle_button = document.getElementById("header_searchbox_image_triangle");
/* 숨겨진 블록 가져오기 */
var hidden_block = document.getElementById("search_hidden");
/* 동작할 함수 만들기 */
function show_hidden_block() {
    if (hidden_block.style.display === "flex") {
        hidden_block.style.display = "none";
    } else {
        hidden_block.style.display = "flex";
    }

}
/* 트라이앵글 버튼에 클릭 이벤트 추가 */
triangle_button.addEventListener("click", show_hidden_block);

/* top_left_button 에 상수 설정 */
const top_left_button = document.querySelector('.top_left_button');
const top_left_button_menu = document.querySelector('#top_left_button_menu')
const text_box_under_mail = document.querySelector('.text_box_under_mail');
const text_box_under_cafe = document.querySelector('.text_box_under_cafe');
const search_N_logo = document.querySelector('.search_N_logo');

top_left_button.addEventListener('click', () => {
    top_left_button.classList.toggle('focus');
    top_left_button.focus();

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
    if (!top_left_button.contains(event.target) && !top_left_button_menu.contains(event.target)) {
        top_left_button_menu.classList.remove('show');
        text_box_under_mail.style.zIndex = '200';
        text_box_under_cafe.style.zIndex = '200';
        search_N_logo.style.zIndex = '200';
        top_left_button_menu.style.zIndex = '0';
    }
});
