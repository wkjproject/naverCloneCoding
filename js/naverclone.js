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