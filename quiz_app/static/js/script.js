const btn = document.querySelectorAll('.btn'),
headerBtn = document.querySelector('.header_btn'),
chooseBtn = document.querySelector('.child_result_btn'),
headerModal = document.querySelector('.header_modal'),
notification1 = document.querySelector('.notification1'),
notification2 = document.querySelector('.notification2'),
notification3 = document.querySelector('.notification3'),
contactForm = document.querySelector('.contact_form'),
ntcBox = document.querySelectorAll('.ntc_box.enabled'),
modalClose = document.querySelectorAll('.modal_close');

headerBtn.addEventListener('click', function(e){
    headerModal.classList.add('active');
    e.preventDefault();
});
for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', function(){
        headerModal.classList.remove('active');
        notification1.classList.remove('active');
        notification2.classList.remove('active');
        notification3.classList.remove('active');
    });
}
chooseBtn.addEventListener('click', function(e){
    notification1.classList.add('active');
    e.preventDefault();
});
for (let i = 0; i < ntcBox.length; i++) {
    ntcBox[i].addEventListener('click', function(){
        notification2.classList.add('active');
        notification1.classList.remove('active');
    });
}
contactForm.addEventListener('submit', function(e){
    notification3.classList.add('active');
    e.preventDefault();
});