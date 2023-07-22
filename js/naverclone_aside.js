/* .service_search 를 클릭하면  #top_left_service_search_area 의 display가 block */
let service_search = document.querySelector('.service_search');

service_search.addEventListener('click',function() {
    let top_left_service_search_area = document.querySelector('#top_left_service_search_area');
    top_left_service_search_area.style.display = 'block';
    let top_left_button_menu_body = document.querySelector('#top_left_button_menu_body');
    top_left_button_menu_body.classList.add('display')
})

/* #top_left_service_search_back 를 클릭하면 #top_left_service_search_area 의 display가 none */

let top_left_service_search_back = document.querySelector('#top_left_service_search_back');

top_left_service_search_back.addEventListener('click', function () {
    let top_left_service_search_area = document.querySelector('#top_left_service_search_area');
    top_left_service_search_area.style.display = 'none';
    let top_left_button_menu_body = document.querySelector('#top_left_button_menu_body');
    top_left_button_menu_body.classList.remove('display')
})

/* #top_left_service_search_input 으로 텍스트를 입력받아 
.hangle_content_title 의 텍스트 컨텐츠 중에서 일치하는 단어를 찾음
일치하지 않는 top_left_service_li를 전체 다 가림 */

// 자음 모음 분리 함수
function _separate(text) {
    const cho = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
    const jung = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ";
    const jong = "Xㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ";

    const result = [];
    for (let char of text) {
        if (char.match(/[가-힣]/)) {
            /* 유니코드 한글 공식 (초성 인덱스 * 21 + 중성 인덱스) * 28 + 종성 인덱스 + 44032 */
            const code = char.charCodeAt(0) - 44032; // 첫번째 문자를 유니코드 값으로 변환한뒤 44032를 빼줌
            const jong_idx = code % 28; // 44032뺀 값에서 28로 나눈 나머지가 종성
            const jung_idx = ((code - jong_idx) / 28) % 21; // 44032뺀 값에서 종성을빼고 28로 나눈 뒤 초성을 제거하기위해 21로 나눈 나머지값이 중성
            const cho_idx = (((code - jong_idx) / 28) - jung_idx) / 21; // 44032뺀 값에서 종성을빼고 28로 나눈 뒤 중성값을 빼고 21로 나누면 초성

            result.push(cho[cho_idx], jung[jung_idx]);
            if (jung_idx !== 0) {
                result.push(jong[jong_idx]);
            }
        } else {
            result.push(char);
        }
    }
    return result.join('');
}

// 앞자리부터 비교검색
function progress_search(target,query) {
    for (let i = 0; i < query.length; i++) {
        if (target[i] !== query[i]) {
            return false;
        }
    }
    return true;
}

console.log(progress_search('검색어','겅삭아'));
const top_left_service_search_input = document.querySelector('#top_left_service_search_input');
const top_left_service_li = document.querySelectorAll('.top_left_service_li');

top_left_service_search_input.addEventListener('input', function () {
    const search_text = top_left_service_search_input.value.trim().toLowerCase();
    const hangle_title_area = document.querySelectorAll('.hangle_title_area');

    /* 검색어를 입력하면 hangle_title_area display none */
    hangle_title_area.forEach(a => {
        a.style.display = 'none';
    });

    top_left_service_li.forEach(e => {
        const content_text = e.querySelector('.hangle_content_title');
        const hangle_content_title = content_text.textContent.trim().toLowerCase();
        const hangle_content_title_jamo = _separate(hangle_content_title);
        const search_text_jamo = _separate(search_text);

        if (progress_search(hangle_content_title_jamo, search_text_jamo)) {
            e.style.display = 'flex';
        } else {
            e.style.display = 'none';
        }
    });
});