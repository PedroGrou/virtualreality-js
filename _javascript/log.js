//criar o registo
var name1 = document.getElementById('name1');
var pw = document.getElementById('pw');


function store() {

  if (name1.value == '') {
    alert('Preencha os campos obrigatórios.')
  } else {
    localStorage.setItem('name1', name1.value);
    localStorage.setItem('pw', pw.value);
    alert('Está Registado.');
  }
}

//fazer check dos dados e o login
function check() {


  var storedName = localStorage.getItem('name1');
  var storedPw = localStorage.getItem('pw');


  var userName = document.getElementById('userName');
  var userPw = document.getElementById('userPw');

  //se estiver no localstorage vai para a pagina de login,
  //se não estiver no localstorage dá um alerta de erro
  if (userName.value == storedName && userPw.value == storedPw) {
    window.location.href = "_log/index_log.html";
    alert('Estás Logado.');

  } else {
    alert('ERRO.');
  }
}





//tudo igual mas para ingles
var name1 = document.getElementById('name1');
var pw = document.getElementById('pw');


function store2() {

  if (name1.value == '') {
    alert('Fill all the blanks')
  } else {
    localStorage.setItem('name1', name1.value);
    localStorage.setItem('pw', pw.value);
    alert('You are Registed.');
  }
}


function check2() {

  var storedName = localStorage.getItem('name1');
  var storedPw = localStorage.getItem('pw');


  var userName = document.getElementById('userName');
  var userPw = document.getElementById('userPw');


  if (userName.value == storedName && userPw.value == storedPw) {
    window.location.href = "_log/index_log.html";
    alert('You are Loged in.');
  } else {
    alert('ERROR.');
  }
}






//criação do form da pagina de registo e login_btn
//ao selecionar uma letra a label vai para baixo
$('.form').find('input, textarea').on('keyup blur focus', function(e) {

  var $this = $(this),
    label = $this.prev('label');

  if (e.type === 'keyup') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.addClass('active highlight');
    }
  } else if (e.type === 'blur') {
    if ($this.val() === '') {
      label.removeClass('active highlight');
    } else {
      label.removeClass('highlight');
    }
  } else if (e.type === 'focus') {

    if ($this.val() === '') {
      label.removeClass('highlight');
    } else if ($this.val() !== '') {
      label.addClass('highlight');
    }
  }

});

//a alteração de registo para login e de login para registo

$('.tab a').on('click', function(e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});





//movimento do background ao mover o rato
$(document).ready(function() {
  var movementStrength = 30;
  var height = movementStrength / $(window).height();
  var width = movementStrength / $(window).width();
  $(".logback").mousemove(function(e) {
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -1 - 15;
    var newvalueY = height * pageY * -1 - 50;
    $('.logback').css("background-position", newvalueX + "px     " + newvalueY + "px");
  });
});
