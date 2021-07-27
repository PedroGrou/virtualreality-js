//adicionar ao carrinho
//verificar detalhadamente no games.js
jQuery(document).ready(function($) {
  var cartWrapper = $('.cd-cart-container');
  var productId = 0;

  if (cartWrapper.length > 0) {
    var cartBody = cartWrapper.find('.body')
    var cartList = cartBody.find('ul').eq(0);
    var cartTotal = cartWrapper.find('.checkout').find('span');
    var cartTrigger = cartWrapper.children('.cd-cart-trigger');
    var cartCount = cartTrigger.children('.count')
    var addToCartBtn = $('.cd-add-to-cart');
    var addToCartBtn2 = $('.cd-add-to-cart2');
    var addToCartBtn3 = $('.cd-add-to-cart3');
    var addToCartBtn4 = $('.cd-add-to-cart4');
    var addToCartBtn5 = $('.cd-add-to-cart5');
    var undo = cartWrapper.find('.undo');
    var undoTimeoutId;

    addToCartBtn.on('click', function(event) {
      event.preventDefault();
      addToCart($(this));
    });

    addToCartBtn2.on('click', function(event) {
      event.preventDefault();
      addToCart2($(this));
    });

    addToCartBtn3.on('click', function(event) {
      event.preventDefault();
      addToCart3($(this));
    });

    addToCartBtn4.on('click', function(event) {
      event.preventDefault();
      addToCart4($(this));
    });

    addToCartBtn5.on('click', function(event) {
      event.preventDefault();
      addToCart5($(this));
    });


    cartTrigger.on('click', function(event) {
      event.preventDefault();
      toggleCart();
    });


    cartWrapper.on('click', function(event) {
      if ($(event.target).is($(this))) toggleCart(true);
    });


    cartList.on('click', '.delete-item', function(event) {
      event.preventDefault();
      removeProduct($(event.target).parents('.product'));
    });


    cartList.on('change', 'select', function(event) {
      quickUpdateCart();
    });


    undo.on('click', 'a', function(event) {
      clearInterval(undoTimeoutId);
      event.preventDefault();
      cartList.find('.deleted').addClass('undo-deleted').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        $(this).off('webkitAnimationEnd oanimationend msAnimationEnd animationend').removeClass('deleted undo-deleted').removeAttr('style');
        quickUpdateCart();
      });
      undo.removeClass('visible');
    });
  }

  function toggleCart(bool) {
    var cartIsOpen = (typeof bool === 'undefined') ? cartWrapper.hasClass('cart-open') : bool;

    if (cartIsOpen) {
      cartWrapper.removeClass('cart-open');

      clearInterval(undoTimeoutId);
      undo.removeClass('visible');
      cartList.find('.deleted').remove();

      setTimeout(function() {
        cartBody.scrollTop(0);

        if (Number(cartCount.find('li').eq(0).text()) == 0) cartWrapper.addClass('empty');
      }, 500);
    } else {
      cartWrapper.addClass('cart-open');
    }
  }

  function addToCart(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProduct();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCart2(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProduct2();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }


  function addToCart3(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProduct3();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCart4(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProduct4();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCart5(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProduct5();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }



  function addProduct() {



    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../_imagens/vr_1.png" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Samsung Gear VR</a></h3><span class="price">49.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProduct2() {



    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../_imagens/vr_2.png" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Sony PlayStation VR</a></h3><span class="price">299.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProduct3() {



    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../_imagens/vr_3.png" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">HTC Vive</a></h3><span class="price">449.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProduct4() {



    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../_imagens/vr_4.png" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Oculus Rift</a></h3><span class="price">299.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProduct5() {



    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../_imagens/vr_5.png" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">HTC Vive</a></h3><span class="price">79.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function removeProduct(product) {
    clearInterval(undoTimeoutId);
    cartList.find('.deleted').remove();

    var topPosition = product.offset().top - cartBody.children('ul').offset().top,
      productQuantity = Number(product.find('.quantity').find('select').val()),
      productTotPrice = Number(product.find('.price').text().replace('€', '')) * productQuantity;

    product.css('top', topPosition + 'px').addClass('deleted');


    updateCartTotal(productTotPrice, false);
    updateCartCount(true, -productQuantity);
    undo.addClass('visible');


    undoTimeoutId = setTimeout(function() {
      undo.removeClass('visible');
      cartList.find('.deleted').remove();
    }, 8000);
  }

  function quickUpdateCart() {
    var quantity = 0;
    var price = 0;

    cartList.children('li:not(.deleted)').each(function() {
      var singleQuantity = Number($(this).find('select').val());
      quantity = quantity + singleQuantity;
      price = price + singleQuantity * Number($(this).find('.price').text().replace('€', ''));
    });

    cartTotal.text(price.toFixed(2));
    cartCount.find('li').eq(0).text(quantity);
    cartCount.find('li').eq(1).text(quantity + 1);
  }

  function updateCartCount(emptyCart, quantity) {
    if (typeof quantity === 'undefined') {
      var actual = Number(cartCount.find('li').eq(0).text()) + 1;
      var next = actual + 1;

      if (emptyCart) {
        cartCount.find('li').eq(0).text(actual);
        cartCount.find('li').eq(1).text(next);
      } else {
        cartCount.addClass('update-count');

        setTimeout(function() {
          cartCount.find('li').eq(0).text(actual);
        }, 150);

        setTimeout(function() {
          cartCount.removeClass('update-count');
        }, 200);

        setTimeout(function() {
          cartCount.find('li').eq(1).text(next);
        }, 230);
      }
    } else {
      var actual = Number(cartCount.find('li').eq(0).text()) + quantity;
      var next = actual + 1;

      cartCount.find('li').eq(0).text(actual);
      cartCount.find('li').eq(1).text(next);
    }
  }

  function updateCartTotal(price, bool) {
    bool ? cartTotal.text((Number(cartTotal.text()) + Number(price)).toFixed(2)) : cartTotal.text((Number(cartTotal.text()) - Number(price)).toFixed(2));
  }
});







//alterar a imagem
function changeimg(url, e) {
  document.getElementById("img").src = url;
  var nodes = document.getElementById("thumb_img");
  var img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active')
  }
  e.classList.add('active');

}

function changeimg2(url, e) {
  document.getElementById("img2").src = url;
  var nodes = document.getElementById("thumb_img2");
  var img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active2')
  }
  e.classList.add('active2');

}


function changeimg3(url, e) {
  document.getElementById("img3").src = url;
  var nodes = document.getElementById("thumb_img3");
  var img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active3')
  }
  e.classList.add('active3');

}

function changeimg4(url, e) {
  document.getElementById("img4").src = url;
  var nodes = document.getElementById("thumb_img4");
  var img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active4')
  }
  e.classList.add('active4');

}

function changeimg5(url, e) {
  document.getElementById("img5").src = url;
  var nodes = document.getElementById("thumb_img5");
  var img_child = nodes.children;
  for (i = 0; i < img_child.length; i++) {
    img_child[i].classList.remove('active5')
  }
  e.classList.add('active5');

}





//hide/show botões
jQuery(document).ready(function() {
  jQuery('#lermais').on('click', function(event) {
    jQuery('.mais').toggle('show');
  });
});


jQuery(document).ready(function() {
  jQuery('#specs').on('click', function(event) {
    jQuery('.table1').toggle('show');
  });
});

jQuery(document).ready(function() {
  jQuery('#video').on('click', function(event) {
    jQuery('.video').toggle('show');
  });
});

jQuery(document).ready(function() {
  jQuery('#preco').on('click', function(event) {
    jQuery('.buy').toggle('show');
  });
});

jQuery(document).ready(function() {
  jQuery('#lermais2').on('click', function(event) {
    jQuery('.mais2').toggle('show');
  });
});

jQuery(document).ready(function() {
  jQuery('#specs2').on('click', function(event) {
    jQuery('.table2').toggle('show');
  });
});

jQuery(document).ready(function() {
  jQuery('#video2').on('click', function(event) {
    jQuery('.video2').toggle('show');
  });
});


jQuery(document).ready(function() {
  jQuery('#preco2').on('click', function(event) {
    jQuery('.buy2').toggle('show');
  });
});

jQuery(document).ready(function() {
  jQuery('#lermais3').on('click', function(event) {
    jQuery('.mais3').toggle('show');
  });
});

jQuery(document).ready(function() {
  jQuery('#specs3').on('click', function(event) {
    jQuery('.table3').toggle('show');
  });
});

jQuery(document).ready(function() {
  jQuery('#video3').on('click', function(event) {
    jQuery('.video3').toggle('show');
  });
});



jQuery(document).ready(function() {
  jQuery('#preco3').on('click', function(event) {
    jQuery('.buy3').toggle('show');
  });
});

jQuery(document).ready(function() {
  jQuery('#lermais4').on('click', function(event) {
    jQuery('.mais4').toggle('show');
  });
});

jQuery(document).ready(function() {
  jQuery('#specs4').on('click', function(event) {
    jQuery('.table4').toggle('show');
  });
});

jQuery(document).ready(function() {
  jQuery('#video4').on('click', function(event) {
    jQuery('.video4').toggle('show');
  });
});



jQuery(document).ready(function() {
  jQuery('#preco4').on('click', function(event) {
    jQuery('.buy4').toggle('show');
  });
});

jQuery(document).ready(function() {
  jQuery('#lermais5').on('click', function(event) {
    jQuery('.mais5').toggle('show');
  });
});

jQuery(document).ready(function() {
  jQuery('#specs5').on('click', function(event) {
    jQuery('.table5').toggle('show');
  });
});

jQuery(document).ready(function() {
  jQuery('#video5').on('click', function(event) {
    jQuery('.video5').toggle('show');
  });
});



jQuery(document).ready(function() {
  jQuery('#preco5').on('click', function(event) {
    jQuery('.buy5').toggle('show');
  });
});


//aparecer os imagens e o texto onscrool
$(function() {
  window.sr = ScrollReveal();

  sr.reveal('.showcase-left', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px'
  });
  sr.reveal('.showcase-rigth', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
  });
  sr.reveal('.showcase-btn', {
    duration: 2000,
    delay: 1000,
    origin: 'bottom'
  });

});
