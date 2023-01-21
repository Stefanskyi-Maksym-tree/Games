// Hamburger

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.Header__List');
    const menuItem = document.querySelectorAll('.Header__Menu');
    const hamburger = document.querySelector('.Header__Hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('Header__HamburgerActive');
        menu.classList.toggle('Header__ListActive');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('Header__HamburgerActive');
            menu.classList.toggle('Header__ListActive');
        });
    });
});

// Carusel

$('.Comments__Carusel').slick({
    slidesToShow: 3,
    arrows: false,
    infinite: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/items/ArrowLeft.png" alt="prev"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="assets/items/ArrowRight.png" alt="next"></button>',
    responsive: [
        {
        breakpoint: 516,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            speed: 1000
            }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            speed: 1000
            }
        }
    ]
});


//modal window

$('.Sing_In_Btn').on('click', function(e) {
    $('.Overlay, .Overlay__Authorization'). fadeIn();
});

$('.Overlay__Close').on('click', function(e) {
    $('.Overlay, .Overlay__Authorization').fadeOut();
});

$('.Add_New_Game').on('click', function(e) {
    $('.OverlayGame, .OverlayGame__AddNewGame'). fadeIn();
});

$('.OverlayGame__Close').on('click', function(e) {
    $('.OverlayGame, .OverlayGame__AddNewGame').fadeOut();
});

//action

$('.Users__Admin').on('click', function(e) {
    $('.Users__MenuAdmin, .Users__Overlay'). fadeIn('slow');
});
$('.Users__Overlay').on('click', function(e) {
    $('.Users__MenuAdmin, .Users__Overlay').fadeOut();
});
$('.Users__Admin2').on('click', function(e) {
    $('.Users__MenuAdmin2, .Users__Overlay'). fadeIn();
});
$('.Users__Overlay').on('click', function(e) {
    $('.Users__MenuAdmin2, .Users__Overlay').fadeOut();
});
$('.Users__Moderator').on('click', function(e) {
    $('.Users__MenuModerator, .Users__Overlay'). fadeIn();
});
$('.Users__Overlay').on('click', function(e) {
    $('.Users__MenuModerator, .Users__Overlay').fadeOut();
});
$('.Users__User').on('click', function(e) {
    $('.Users__MenuUser, .Users__Overlay'). fadeIn();
});
$('.Users__Overlay').on('click', function(e) {
    $('.Users__MenuUser, .Users__Overlay').fadeOut();
});
$('.Users__User2').on('click', function(e) {
    $('.Users__MenuUser2, .Users__Overlay'). fadeIn();
});
$('.Users__Overlay').on('click', function(e) {
    $('.Users__MenuUser2, .Users__Overlay').fadeOut();
});



document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('footerForm');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
    }
});

// footer form

const inputFooter = document.getElementById('emailFooterForm');
const startFooter = document.getElementById('startFooterForm');
const userEmail = {
    email: {}
};

startFooter.onclick = function() {
    userEmail.email = inputFooter.value;
    console.log(inputFooter.value);
    inputFooter.value = ''; 
};



// update


$('form').submit(function(e) {
    e.preventDefault();
});


// explore device

let device = {
    phone: 'IPhone',
    modal: 'XS Max',
    version: 'iOS 16.1.1'
};

$('.Hero__ExploreDevise').on('click', function(e) {
    console.log(device);
});

// game dialog 

$('.Games__NameGames').on('click', function(e) {
    $('.OverlayDialog, .OverlayDialog__Dialog'). fadeIn();
});
$('.OverlayDialog__Close').on('click', function(e) {
    $('.OverlayDialog, .OverlayDialog__Dialog').fadeOut();
});

// sing in loggin and password

const login = document.getElementById("inputEmail");
const password = document.getElementById("inputPassword");
const singIn = document.getElementById("singInBtn");

singIn.onclick = function() {
    if (login.value === 'admin@ukr.net' && password.value === 'admin') {
        $('.Overlay__Authorization, .Overlay, .Sing_In_Btn').fadeOut();
        $('.Header__ImgUser'). fadeIn();
        $('.Add_New_Game'). fadeIn();
        console.log('done');
    } else {
        $('.Overlay__Authorization, .Overlay').fadeOut();
        console.log('error');
    }
    login.value = '';
    password.value = '';
};

// log out


$('.logOut').on('click', function(e) {
    $('.Header__ImgUser, .Header__menuSingInAdmin, .OverlayMenu'). fadeOut();
    $('.Sing_In_Btn'). fadeIn();
});

// menu admin

$('.Header__ImgUser').on('click', function(e) {
    $('.Header__menuSingInAdmin, .OverlayMenu'). fadeIn();
    
});

$('.Header__closeMenu, .OverlayMenu__Close').on('click', function(e) {
    $('.Header__menuSingInAdmin, .OverlayMenu'). fadeOut();
});


// pagination 
