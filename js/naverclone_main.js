/* 전역변수를 선언하면 메모리에 계속 남아있기때문에 최대한 함수안에서 변수를 선언해 메모리효율을 늘리도록 하자 */

/* 트라이앵글 버튼 요소 가져오기 */
const triangle_button = document.getElementById("main_t_m_ico_triangle__");
/* 동작할 함수 만들기 */
function show_hidden_block() {
    /* 숨겨진 블록 가져오기 */
    const hidden_block = document.getElementById("main_t_m_hid_box_triangle__");
    if (hidden_block.style.display === "flex") {
        hidden_block.style.display = "none";
    } else {
        hidden_block.style.display = "flex";
    }
}
/* 트라이앵글 버튼에 클릭 이벤트 추가 */
triangle_button.addEventListener("click", show_hidden_block);


const main_t_l_btn = document.querySelector('.main_t_l_btn');

main_t_l_btn.addEventListener('click', () => {
    const aside_t_l_box = document.querySelector('#aside_t_l_box')
    const main_t_m_btn_mail = document.querySelector('#main_t_m_btn_mail');
    const main_t_m_btn_cafe = document.querySelector('#main_t_m_btn_cafe');
    const search_N_logo = document.querySelector('#main_t_m_ico_nlogo__');
    main_t_l_btn.classList.toggle('focus');
    main_t_l_btn.focus();

    /* 클릭하면 aside_t_l_box_box 의 aside_t_r_box__.style.display = 'none'; 처리 */
    /* 클릭하면 aside_box.classList.remove('display') */
    let aside_t_l_box_box = document.querySelector('#aside_t_l_box_box');
    let top_left_button_iframe_document = aside_t_l_box_box.contentDocument;
    let aside_t_r_box__ = top_left_button_iframe_document.querySelector('#aside_t_r_box__');
    aside_t_r_box__.style.display = 'none';
    let aside_box = top_left_button_iframe_document.querySelector('#aside_box');
    aside_box.classList.remove('display');

    if (aside_t_l_box.classList.contains('show')) {
        aside_t_l_box.classList.remove('show');
        main_t_m_btn_mail.style.zIndex = '200';
        main_t_m_btn_cafe.style.zIndex = '200';
        search_N_logo.style.zIndex = '200';
        aside_t_l_box.style.zIndex = '0';
    } else {
        aside_t_l_box.classList.add('show');
        main_t_m_btn_mail.style.zIndex = '0';
        main_t_m_btn_cafe.style.zIndex = '0';
        search_N_logo.style.zIndex = '0';
        aside_t_l_box.style.zIndex = '100';
    }
});



/* #main_t_m_btn_etc 을 클릭하면 .main_t_m_box_nav_box 에 text_box_under_menu_area_show class 를 추가하고
 #main_t_m_hid_box 의 display를 block으로 바꿈. 재클릭하면 class 제거하고 display none으로 바꿈*/
const main_t_m_btn_etc = document.querySelector('#main_t_m_btn_etc');

main_t_m_btn_etc.addEventListener('click', function (event) {
    const main_t_m_box_nav_box = document.querySelector('.main_t_m_box_nav_box');
    const main_t_m_hid_box = document.querySelector('#main_t_m_hid_box');
    if (main_t_m_btn_etc.style.backgroundImage == '' || main_t_m_btn_etc.style.backgroundImage == 'url("../image/header_hotkey_allservice.png")') {
        main_t_m_btn_etc.style.backgroundImage = 'url("../image/header_hotkey_allservice_x.png';
        main_t_m_box_nav_box.classList.add('text_box_under_menu_area_show');
        main_t_m_hid_box.style.display = 'block';
    } else {
        main_t_m_btn_etc.style.backgroundImage = 'url("../image/header_hotkey_allservice.png")';
        main_t_m_box_nav_box.classList.remove('text_box_under_menu_area_show');
        main_t_m_hid_box.style.display = 'none';
    }

});


document.addEventListener('click', function(event) {
    /* top_left_button과 aside_t_l_box 바깥 영역을 클릭하면 top_left_button_menu의 show class를 제거함  */
    const aside_t_l_box = document.querySelector('#aside_t_l_box');
    const main_t_m_btn_mail = document.querySelector('#main_t_m_btn_mail');
    const main_t_m_btn_cafe = document.querySelector('#main_t_m_btn_cafe');
    const search_N_logo = document.querySelector('#main_t_m_ico_nlogo__');
    if (event.target !== main_t_l_btn && event.target !==aside_t_l_box) {
        aside_t_l_box.classList.remove('show');
        main_t_m_btn_mail.style.zIndex = '200';
        main_t_m_btn_cafe.style.zIndex = '200';
        search_N_logo.style.zIndex = '200';
        aside_t_l_box.style.zIndex = '0';
    }

    /* top_left_button과 aside_t_l_box 바깥 영역을 클릭하면 top_left_button_menu의 show class를 제거함  */
    const main_t_m_btn_etc = document.querySelector('#main_t_m_btn_etc');
    const main_t_m_box_nav_box = document.querySelector('.main_t_m_box_nav_box');
    const main_t_m_hid_box = document.querySelector('#main_t_m_hid_box');

    if (event.target !== main_t_m_btn_etc && event.target !== main_t_m_hid_box) {
        main_t_m_btn_etc.style.backgroundImage = 'url("../image/header_hotkey_allservice.png")';
        main_t_m_box_nav_box.classList.remove('text_box_under_menu_area_show');
        main_t_m_hid_box.style.display = 'none';
    }

    /* triangle_button과 main_t_m_hid_box_triangle 바깥 영역을 클릭하면 search_hidden_block의 display를 none  */
    const main_t_m_hid_box_triangle = document.querySelector('.main_t_m_hid_box_triangle');
    if (event.target !== triangle_button && event.target !== main_t_m_hid_box_triangle) {
        main_t_m_hid_box_triangle.style.display = 'none';
    }
});

