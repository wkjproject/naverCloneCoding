/* .aside_t_allservice_txt 를 클릭하면  #aside_t_r_box__ 의 display가 block */
let aside_t_allservice_txt = document.querySelector('.aside_t_allservice_txt');

aside_t_allservice_txt.addEventListener('click',function() {
    let aside_t_r_box__ = document.querySelector('#aside_t_r_box__');
    aside_t_r_box__.style.display = 'block';
    let aside_box = document.querySelector('#aside_box');
    aside_box.classList.add('display')
})

/* #aisde_t_r_img_search__ 를 클릭하면 #aside_t_r_box__ 의 display가 none */

let aisde_t_r_img_search__ = document.querySelector('#aisde_t_r_img_search__');

aisde_t_r_img_search__.addEventListener('click', function () {
    let aside_t_r_box__ = document.querySelector('#aside_t_r_box__');
    aside_t_r_box__.style.display = 'none';
    let aside_box = document.querySelector('#aside_box');
    aside_box.classList.remove('display')
})

/* #aisde_t_r_input_search__ 으로 텍스트를 입력받아 
.aside_t_r_content_tit 의 텍스트 컨텐츠 중에서 일치하는 단어를 찾음
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


const aisde_t_r_input_search__ = document.querySelector('#aisde_t_r_input_search__');
const aisde_t_r_service_list = document.querySelectorAll('.aisde_t_r_service_list');

aisde_t_r_input_search__.addEventListener('input', function () {
    const search_text = aisde_t_r_input_search__.value.trim().toLowerCase();
    const aisde_t_r_box_tit = document.querySelectorAll('.aisde_t_r_box_tit');

    /* 검색어를 입력하면 aisde_t_r_box_tit display none */
    aisde_t_r_box_tit.forEach(a => {
        a.style.display = 'none';
    });

    aisde_t_r_service_list.forEach(e => {
        const content_text = e.querySelector('.aside_t_r_content_tit');
        const aside_t_r_content_tit = content_text.textContent.trim().toLowerCase();
        const hangle_content_title_jamo = _separate(aside_t_r_content_tit);
        const search_text_jamo = _separate(search_text);

        if (progress_search(hangle_content_title_jamo, search_text_jamo)) {
            e.style.display = 'flex';
        } else {
            e.style.display = 'none';
        }
    });
});