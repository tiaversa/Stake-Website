function changeContainer(ward){
    takeShowOff();
    document.getElementById(ward).className = 'show';
}
function takeShowOff(){
    document.getElementsByClassName("card").classList.remove('show');

}


//add active class in selected tab
const list = document.querySelectorAll('.list');
const cardList = document.querySelectorAll('.card');
let dicList = {
    0: 'dahlem',
    1:'glienicke',
    2:'lankwitz',
}
function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => item.addEventListener('click', activeLink));