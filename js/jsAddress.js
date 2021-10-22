function changeContainer(ward){
    takeShowOff();
    document.getElementById(ward).className = 'show';
}
function takeShowOff(){
    document.getElementsByClassName("card").classList.remove('show');

}