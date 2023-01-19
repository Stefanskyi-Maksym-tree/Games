$('.Sing_In_Btn').on('click', function(e) {
    $('.Overlay, .Overlay_Authorization'). fadeIn();
});

$('.Overlay__Close').on('click', function(e) {
    $('.Overlay, .Overlay_Authorization').fadeOut();
});

$('.Add_New_Game').on('click', function(e) {
    $('.OverlayGame, .OverlayGame__AddNewGame'). fadeIn();
});

$('.OverlayGame__Close').on('click', function(e) {
    $('.OverlayGame, .OverlayGame__AddNewGame').fadeOut();
});

