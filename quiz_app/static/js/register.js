const application = document.querySelector('.application'),
headerModal = document.querySelector('.header_modal'),
modalClose = document.querySelector('.modal_close');

application.addEventListener('submit', function(e){
    headerModal.classList.add('active');
    e.preventDefault();
});
modalClose.addEventListener('click', function(){
    headerModal.classList.remove('active');
});