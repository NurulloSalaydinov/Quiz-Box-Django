const headerBtn = document.querySelector('.complete_btn'),
headerModal = document.querySelector('.header_modal'),
beginTest = document.querySelector('.begin_test'),
notification = document.querySelector('.notification'),
application = document.querySelector('.application'),
modalClose = document.querySelectorAll('.modal_close');

headerBtn.addEventListener('click', function(e){
    headerModal.classList.add('active');
    e.preventDefault();
});
for (let i = 0; i < modalClose.length; i++) {    
    modalClose[i].addEventListener('click', function(){
        headerModal.classList.remove('active');
        notification.classList.remove('active');
    });
}
application.addEventListener('submit', function(e){
    e.preventDefault();
    notification.classList.toggle('active');
    headerModal.classList.remove('active');
});