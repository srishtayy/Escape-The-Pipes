// creating some variables
let subsubsubmaj = document.querySelector('#Subsubsubmaj');
let subsubmaj = document.querySelector('#Subsubmaj')
let submaj = document.querySelector('#Submaj');
let up = false;
let score = 0;


const myfunction = () => {

    let x = -(((Math.random()) * 310) + 160);
    subsubmaj.style.top = x + "px";

    score++;
}
subsubmaj.addEventListener('animationiteration', myfunction);
const move_down = () => {
    if (up == false) {
        subsubsubmaj.style.top = (gettopvalue() + 2) + "px";
    }
    if (gettopvalue() > 540 || (gettopvalue() < 60) || ((getleftvalue() < 23) && (getleftvalue() > -80) && (getbirdtop() < whitetopvalue())) || ((getbirdtop() > (whitetopvalue() + 127) && (getleftvalue() < 23) && (getleftvalue() > -80)))) {
        if (score >= 1) {

            alert("Well Played !! Your Score: " + score);

            document.location.reload();
            subsubsubmaj.style.top = 103 + "px";

        } else {



            alert("Oopsie Better luck next time. Your Score: " + score);

            document.location.reload();
            subsubsubmaj.style.top = 103 + "px";

        }
        score = 0;
    }
}
const gettopvalue = () => {
    let tops = parseInt(window.getComputedStyle(subsubsubmaj).getPropertyValue("top"));
    return tops;
}
const getleftvalue = () => {
    let left = parseInt(window.getComputedStyle(submaj).getPropertyValue("left"));
    return left;


}
const getbirdtop = () => {
    let btop = (560 - gettopvalue());
    btop = -(btop);
    return btop;
}
const whitetopvalue = () => {
    let w = parseInt(window.getComputedStyle(subsubmaj).getPropertyValue("top"));
    return w;
}
const exec = () => {

    move_down();

}

setInterval(exec, 10);

function move_up() {

    up = true;
    let cnt_of_up_moves = 0;
    const up_interval = setInterval(function() {
        let tops = parseInt(window.getComputedStyle(subsubsubmaj).getPropertyValue("top"));


        if ((tops > 3) && (cnt_of_up_moves < 17)) {
            subsubsubmaj.style.top = (tops - 5) + "px";
        }
        if (cnt_of_up_moves > 30) {
            clearInterval(up_interval);
            up = false;
            cnt_of_up_moves = 0;
        }
        cnt_of_up_moves++;


    }, 10);

}