//navegador white/black

$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
});

//alteração de idioma
$('[lang="pt"]').hide();

$('#switch-lang').click(function () {
  $('[lang="en"]').toggle();
  $('[lang="pt"]').toggle();
});

$('[lang="pt"]').hide();

$('#switch-lang2').click(function () {
  $('[lang="pt"]').toggle();
  $('[lang="en"]').toggle();
});

//movimento do background
$(document).ready(function () {
  var mouseX, mouseY;
  var ww = $(window).width();
  var wh = $(window).height();
  var traX, traY;
  $(document).mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = (4 * mouseX) / 570 + 40;
    traY = (4 * mouseY) / 570 + 50;
    console.log(traX);
    $('.title').css({
      'background-position': traX + '%' + traY + '%',
    });
  });
});

//hide/show
jQuery(document).ready(function () {
  jQuery('#hist').on('click', function (event) {
    jQuery('.history').toggle('show');
  });
});

jQuery(document).ready(function () {
  jQuery('#jogo2').on('click', function (event) {
    jQuery('.gg2').toggle('show');
  });
});

jQuery(document).ready(function () {
  jQuery('#sob').on('click', function (event) {
    jQuery('.sobre').toggle('show');
  });
});

jQuery(document).ready(function () {
  jQuery('#begin').on('click', function (event) {
    jQuery('.newind').toggle('show');
  });
});

jQuery(document).ready(function () {
  jQuery('#hist2').on('click', function (event) {
    jQuery('.history2').toggle('show');
  });
});

jQuery(document).ready(function () {
  jQuery('#jogo3').on('click', function (event) {
    jQuery('.gg2').toggle('show');
  });
});

jQuery(document).ready(function () {
  jQuery('#sob2').on('click', function (event) {
    jQuery('.sobre').toggle('show');
  });
});

jQuery(document).ready(function () {
  jQuery('#begin2').on('click', function (event) {
    jQuery('.newind2').toggle('show');
  });
});

//movimento das imagens

$(document).ready(function ($) {
  $('#showcase2').mousemove(function (e) {
    var mouseX = e.pageX - $('#showcase2').offset().left;
    var mouseY = e.pageY - $('#showcase2').offset().top;
    var totalX = $('#showcase2').width();
    var totalY = $('#showcase2').height();
    var centerX = totalX / 4;
    var centerY = totalY / 4;
    var shiftX = centerX - mouseX;
    var shiftY = centerY - mouseY;

    var startX = $('#showcase2').width() / 4 - $('#image1').width() / 2;
    var startY = $('#showcase2').height() / 3 - $('#image1').height() / 2;

    $('#image1').css('z-index');
    $('#image1').css({
      left: startX + shiftX / 20 + 'px',
      top: startY + shiftY / 20 + 'px',
    });
  });
});

$(document).ready(function ($) {
  $('#showcase').mousemove(function (e) {
    var mouseX = e.pageX - $('#showcase').offset().left;
    var mouseY = e.pageY - $('#showcase').offset().top;
    var totalX = $('#showcase').width();
    var totalY = $('#showcase').height();
    var centerX = totalX / 4;
    var centerY = totalY / 4;
    var shiftX = centerX - mouseX;
    var shiftY = centerY - mouseY;

    var startX = $('#showcase').width() / 6 - $('#image2').width() / 2;
    var startY = $('#showcase').height() / 2 - $('#image2').height() / 2;

    $('#image2').css('z-index');
    $('#image2').css({
      left: startX + shiftX / 20 + 'px',
      top: startY + shiftY / 20 + 'px',
    });
    $('#image3').css({
      left: startX + shiftX / 20 + 'px',
      top: startY + shiftY / 10 + 'px',
    });
  });
});

$(document).ready(function ($) {
  $('#showcase3').mousemove(function (e) {
    var mouseX = e.pageX - $('#showcase3').offset().left;
    var mouseY = e.pageY - $('#showcase3').offset().top;
    var totalX = $('#showcase3').width();
    var totalY = $('#showcase3').height();
    var centerX = totalX / 4;
    var centerY = totalY / 4;
    var shiftX = centerX - mouseX;
    var shiftY = centerY - mouseY;

    var startX = $('#showcase3').width() / 6 - $('#image4').width() / 2;
    var startY = $('#showcase3').height() / 2 - $('#image4').height() / 2;

    $('#image4').css('z-index');
    $('#image4').css({
      left: startX + shiftX / 20 + 'px',
      top: startY + shiftY / 20 + 'px',
    });
  });
});

$(document).ready(function ($) {
  $('#showcase4').mousemove(function (e) {
    var mouseX = e.pageX - $('#showcase4').offset().left;
    var mouseY = e.pageY - $('#showcase4').offset().top;
    var totalX = $('#showcase4').width();
    var totalY = $('#showcase4').height();
    var centerX = totalX / 4;
    var centerY = totalY / 4;
    var shiftX = centerX - mouseX;
    var shiftY = centerY - mouseY;

    var startX = $('#showcase4').width() / 4 - $('#image5').width() / 2;
    var startY = $('#showcase4').height() / 3 - $('#image5').height() / 2;

    $('#image5').css('z-index');
    $('#image5').css({
      left: startX + shiftX / 20 + 'px',
      top: startY + shiftY / 20 + 'px',
    });
  });
});

$(document).ready(function ($) {
  $('#showcase5').mousemove(function (e) {
    var mouseX = e.pageX - $('#showcase5').offset().left;
    var mouseY = e.pageY - $('#showcase5').offset().top;
    var totalX = $('#showcase5').width();
    var totalY = $('#showcase5').height();
    var centerX = totalX / 4;
    var centerY = totalY / 4;
    var shiftX = centerX - mouseX;
    var shiftY = centerY - mouseY;

    var startX = $('#showcase5').width() / 6 - $('#image6').width() / 2;
    var startY = $('#showcase5').height() / 2 - $('#image6').height() / 2;

    $('#image6').css('z-index');
    $('#image6').css({
      left: startX + shiftX / 20 + 'px',
      top: startY + shiftY / 20 + 'px',
    });
    $('#image7').css({
      left: startX + shiftX / 20 + 'px',
      top: startY + shiftY / 10 + 'px',
    });
  });
});

$(document).ready(function ($) {
  $('#showcase6').mousemove(function (e) {
    var mouseX = e.pageX - $('#showcase6').offset().left;
    var mouseY = e.pageY - $('#showcase6').offset().top;
    var totalX = $('#showcase6').width();
    var totalY = $('#showcase6').height();
    var centerX = totalX / 4;
    var centerY = totalY / 4;
    var shiftX = centerX - mouseX;
    var shiftY = centerY - mouseY;

    var startX = $('#showcase6').width() / 6 - $('#image4').width() / 2;
    var startY = $('#showcase6').height() / 2 - $('#image4').height() / 2;

    $('#image8').css('z-index');
    $('#image8').css({
      left: startX + shiftX / 20 + 'px',
      top: startY + shiftY / 20 + 'px',
    });
  });
});
