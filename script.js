const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100);
});

// For Pop-Up on clicking Form Button

function msgSent(){
    Swal.fire({
        title: 'Success',
        text: 'Message Sent Successfully !!',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
}

// For Hamburger menu to x

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick=() => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll=() => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}