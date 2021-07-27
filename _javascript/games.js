jQuery(document).ready(function($) {
  var cartWrapper = $('.cd-cart-container');

  var productId = 0;

  if (cartWrapper.length > 0) {
    //armazenar os Objectos Jquery
    var cartBody = cartWrapper.find('.body')
    var cartList = cartBody.find('ul').eq(0);
    var cartTotal = cartWrapper.find('.checkout').find('span');
    var cartTrigger = cartWrapper.children('.cd-cart-trigger');
    var cartCount = cartTrigger.children('.count')
    var addToCartBtnas1 = $('.cd-add-to-cart-as-ps');
    var addToCartBtnas2 = $('.cd-add-to-cart-as-vive');
    var addToCartBtnas3 = $('.cd-add-to-cart-as-rift');
    var addToCartBtnbt1 = $('.cd-add-to-cart-bt-gear');
    var addToCartBtnbt2 = $('.cd-add-to-cart-bt-day');
    var addToCartBtnbx1 = $('.cd-add-to-cart-bx-gear');
    var addToCartBtnbx2 = $('.cd-add-to-cart-bx-day');
    var addToCartBtnch1 = $('.cd-add-to-cart-ch-rift');
    var addToCartBtndf1 = $('.cd-add-to-cart-df-gear');
    var addToCartBtndf2 = $('.cd-add-to-cart-df-vive');
    var addToCartBtndf3 = $('.cd-add-to-cart-df-rift');
    var addToCartBtndf4 = $('.cd-add-to-cart-df-day');
    var addToCartBtngj1 = $('.cd-add-to-cart-gj-gear');
    var addToCartBtngj2 = $('.cd-add-to-cart-gj-vive');
    var addToCartBtngj3 = $('.cd-add-to-cart-gj-rift');
    var addToCartBtngj4 = $('.cd-add-to-cart-gj-day');
    var addToCartBtnht1 = $('.cd-add-to-cart-ht-gear');
    var addToCartBtnht2 = $('.cd-add-to-cart-ht-rift');
    var addToCartBtnjs1 = $('.cd-add-to-cart-js-ps');
    var addToCartBtnjs2 = $('.cd-add-to-cart-js-vive');
    var addToCartBtnjs3 = $('.cd-add-to-cart-js-rift');
    var addToCartBtnke1 = $('.cd-add-to-cart-ke-gear');
    var addToCartBtnke2 = $('.cd-add-to-cart-ke-ps');
    var addToCartBtnke3 = $('.cd-add-to-cart-ke-vive');
    var addToCartBtnke4 = $('.cd-add-to-cart-ke-rift');
    var addToCartBtnke5 = $('.cd-add-to-cart-ke-day');
    var addToCartBtnlf1 = $('.cd-add-to-cart-lf-rift');
    var addToCartBtnln1 = $('.cd-add-to-cart-ln-rift');
    var addToCartBtnmc1 = $('.cd-add-to-cart-mc-gear');
    var addToCartBtnmc2 = $('.cd-add-to-cart-mc-rift');
    var addToCartBtnrm1 = $('.cd-add-to-cart-rm-ps');
    var addToCartBtnrm2 = $('.cd-add-to-cart-rm-vive');
    var addToCartBtnrm3 = $('.cd-add-to-cart-rm-rift');
    var addToCartBtnrr1 = $('.cd-add-to-cart-rr-rift');
    var addToCartBtnrv1 = $('.cd-add-to-cart-rv-rift');
    var addToCartBtnsh1 = $('.cd-add-to-cart-sh-gear');
    var addToCartBtnst1 = $('.cd-add-to-cart-st-ps');
    var addToCartBtnst2 = $('.cd-add-to-cart-st-vive');
    var addToCartBtnst3 = $('.cd-add-to-cart-st-rift');
    var addToCartBtnsu1 = $('.cd-add-to-cart-su-ps');
    var addToCartBtnsu2 = $('.cd-add-to-cart-su-vive');
    var addToCartBtnsu3 = $('.cd-add-to-cart-su-rift');
    var addToCartBtnte1 = $('.cd-add-to-cart-te-gear');
    var addToCartBtnth1 = $('.cd-add-to-cart-th-ps');
    var addToCartBtnth2 = $('.cd-add-to-cart-th-vive');
    var addToCartBtnth3 = $('.cd-add-to-cart-th-rift');
    var addToCartBtnun1 = $('.cd-add-to-cart-un-rift');
    var addToCartBtnwh1 = $('.cd-add-to-cart-wh-rift');
    var undo = cartWrapper.find('.undo');
    var undoTimeoutId;

    //AS
    addToCartBtnas1.on('click', function(event) {
      event.preventDefault();
      addToCartas1($(this));
    });


    addToCartBtnas2.on('click', function(event) {
      event.preventDefault();
      addToCartas2($(this));
    });

    addToCartBtnas3.on('click', function(event) {
      event.preventDefault();
      addToCartas3($(this));
    });


    //BT
    addToCartBtnbt1.on('click', function(event) {
      event.preventDefault();
      addToCartbt1($(this));
    });

    addToCartBtnbt2.on('click', function(event) {
      event.preventDefault();
      addToCartbt2($(this));
    });

    //BX
    addToCartBtnbx1.on('click', function(event) {
      event.preventDefault();
      addToCartbx1($(this));
    });

    addToCartBtnbx2.on('click', function(event) {
      event.preventDefault();
      addToCartbx2($(this));
    });

    //CH
    addToCartBtnch1.on('click', function(event) {
      event.preventDefault();
      addToCartch1($(this));
    });

    //DF
    addToCartBtndf1.on('click', function(event) {
      event.preventDefault();
      addToCartdf1($(this));
    });


    addToCartBtndf2.on('click', function(event) {
      event.preventDefault();
      addToCartdf2($(this));
    });

    addToCartBtndf3.on('click', function(event) {
      event.preventDefault();
      addToCartdf3($(this));
    });

    addToCartBtndf4.on('click', function(event) {
      event.preventDefault();
      addToCartdf4($(this));
    });



    //GJ
    addToCartBtngj1.on('click', function(event) {
      event.preventDefault();
      addToCartgj1($(this));
    });


    addToCartBtngj2.on('click', function(event) {
      event.preventDefault();
      addToCartgj2($(this));
    });

    addToCartBtngj3.on('click', function(event) {
      event.preventDefault();
      addToCartgj3($(this));
    });

    addToCartBtngj4.on('click', function(event) {
      event.preventDefault();
      addToCartgj4($(this));
    });


    //HT
    addToCartBtnht1.on('click', function(event) {
      event.preventDefault();
      addToCartht1($(this));
    });

    addToCartBtnht2.on('click', function(event) {
      event.preventDefault();
      addToCartht2($(this));
    });


    //JS
    addToCartBtnjs1.on('click', function(event) {
      event.preventDefault();
      addToCartjs1($(this));
    });

    addToCartBtnjs2.on('click', function(event) {
      event.preventDefault();
      addToCartjs2($(this));
    });

    addToCartBtnjs3.on('click', function(event) {
      event.preventDefault();
      addToCartjs3($(this));
    });



    //KE
    addToCartBtnke1.on('click', function(event) {
      event.preventDefault();
      addToCartke1($(this));
    });

    addToCartBtnke2.on('click', function(event) {
      event.preventDefault();
      addToCartke2($(this));
    });

    addToCartBtnke3.on('click', function(event) {
      event.preventDefault();
      addToCartke3($(this));
    });

    addToCartBtnke4.on('click', function(event) {
      event.preventDefault();
      addToCartke4($(this));
    });

    addToCartBtnke5.on('click', function(event) {
      event.preventDefault();
      addToCartke5($(this));
    });



    //LF
    addToCartBtnlf1.on('click', function(event) {
      event.preventDefault();
      addToCartlf1($(this));
    });


    //LN
    addToCartBtnln1.on('click', function(event) {
      event.preventDefault();
      addToCartln1($(this));
    });


    //MC
    addToCartBtnmc1.on('click', function(event) {
      event.preventDefault();
      addToCartmc1($(this));
    });

    addToCartBtnmc2.on('click', function(event) {
      event.preventDefault();
      addToCartmc2($(this));
    });



    //RM
    addToCartBtnrm1.on('click', function(event) {
      event.preventDefault();
      addToCartrm1($(this));
    });

    addToCartBtnrm2.on('click', function(event) {
      event.preventDefault();
      addToCartrm2($(this));
    });

    addToCartBtnrm3.on('click', function(event) {
      event.preventDefault();
      addToCartrm3($(this));
    });


    //RR
    addToCartBtnrr1.on('click', function(event) {
      event.preventDefault();
      addToCartrr1($(this));
    });



    //RV
    addToCartBtnrv1.on('click', function(event) {
      event.preventDefault();
      addToCartrv1($(this));
    });



    //SH
    addToCartBtnsh1.on('click', function(event) {
      event.preventDefault();
      addToCartsh1($(this));
    });


    //ST
    addToCartBtnst1.on('click', function(event) {
      event.preventDefault();
      addToCartst1($(this));
    });

    addToCartBtnst2.on('click', function(event) {
      event.preventDefault();
      addToCartst2($(this));
    });

    addToCartBtnst3.on('click', function(event) {
      event.preventDefault();
      addToCartst3($(this));
    });



    //SU
    addToCartBtnsu1.on('click', function(event) {
      event.preventDefault();
      addToCartsu1($(this));
    });

    addToCartBtnsu2.on('click', function(event) {
      event.preventDefault();
      addToCartsu2($(this));
    });

    addToCartBtnsu3.on('click', function(event) {
      event.preventDefault();
      addToCartsu3($(this));
    });



    //TE
    addToCartBtnte1.on('click', function(event) {
      event.preventDefault();
      addToCartte1($(this));
    });



    //TH
    addToCartBtnth1.on('click', function(event) {
      event.preventDefault();
      addToCartth1($(this));
    });

    addToCartBtnth2.on('click', function(event) {
      event.preventDefault();
      addToCartth2($(this));
    });

    addToCartBtnth3.on('click', function(event) {
      event.preventDefault();
      addToCartth3($(this));
    });




    //UN
    addToCartBtnun1.on('click', function(event) {
      event.preventDefault();
      addToCartun1($(this));
    });



    //WH
    addToCartBtnwh1.on('click', function(event) {
      event.preventDefault();
      addToCartwh1($(this));
    });


    //abrir fechar o carrinho
    cartTrigger.on('click', function(event) {
      event.preventDefault();
      toggleCart();
    });

    //fechar o carrinho quando precionar .cd-cart-container::before
    cartWrapper.on('click', function(event) {
      if ($(event.target).is($(this))) toggleCart(true);
    });

    //apagar um produto do carrinho
    cartList.on('click', '.delete-item', function(event) {
      event.preventDefault();
      removeProduct($(event.target).parents('.product'));
    });

    //update da quantidade de produtos
    cartList.on('change', 'select', function(event) {
      quickUpdateCart();
    });

    //reinserir produto ao carrinho
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
      //aparecer o desfazer
      clearInterval(undoTimeoutId);
      undo.removeClass('visible');
      cartList.find('.deleted').remove();

      setTimeout(function() {
        cartBody.scrollTop(0);
        //verificar se o carrinho esta vazio para fazer o hide
        if (Number(cartCount.find('li').eq(0).text()) == 0) cartWrapper.addClass('empty');
      }, 500);
    } else {
      cartWrapper.addClass('cart-open');
    }
  }



  //AS
  function addToCartas1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');
    //update lista do carrinho
    addProductas1();
    //update numero de produtos
    updateCartCount(cartIsEmpty);
    //update do preço total
    updateCartTotal(trigger.data('price'), true);
    //mostrar carrinho
    cartWrapper.removeClass('empty');
  }

  function addToCartas2(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');
    addProductas2();
    updateCartCount(cartIsEmpty);
    updateCartTotal(trigger.data('price'), true);
    cartWrapper.removeClass('empty');
  }

  function addToCartas3(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductas3();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  //BT
  function addToCartbt1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductbt1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartbt2(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductbt2();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  //BX
  function addToCartbx1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductbx1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartbx2(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductbx2();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  //CH
  function addToCartch1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductch1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }


  //DF
  function addToCartdf1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductdf1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartdf2(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductdf2();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartdf3(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductdf3();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartdf4(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductdf4();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }



  //GJ
  function addToCartgj1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductgj1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartgj2(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductgj2();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartgj3(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductgj3();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartgj4(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductgj4();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  //HT
  function addToCartht1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductht1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartht2(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductht2();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }


  //JS
  function addToCartjs1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductjs1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartjs2(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductjs2();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartjs3(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductjs3();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }


  //KE
  function addToCartke1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductke1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartke2(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductke2();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartke3(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductke3();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartke4(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductke4();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartke5(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductke5();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }


  //LF
  function addToCartlf1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductlf1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }


  //LN
  function addToCartln1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductln1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  //MC
  function addToCartmc1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductmc1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartmc2(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductmc2();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }



  //RM
  function addToCartrm1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductrm1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartrm2(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductrm2();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartrm3(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductrm3();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }


  //RR
  function addToCartrr1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductrr1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }


  //RV
  function addToCartrv1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductrv1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }



  //SH
  function addToCartsh1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductsh1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }




  //ST
  function addToCartst1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductst1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartst2(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductst2();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartst3(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductst3();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }



  //SU
  function addToCartsu1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductsu1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartsu2(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductsu2();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartsu3(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductsu3();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }


  //TE
  function addToCartte1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductte1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }



  //TH
  function addToCartth1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductth1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartth2(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductth2();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }

  function addToCartth3(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductth3();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }


  //UN
  function addToCartun1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductun1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }



  //WH
  function addToCartwh1(trigger) {
    var cartIsEmpty = cartWrapper.hasClass('empty');

    addProductwh1();

    updateCartCount(cartIsEmpty);

    updateCartTotal(trigger.data('price'), true);

    cartWrapper.removeClass('empty');
  }


  //adicionar dados do produto
  //substitui productId, productName, preço e url com a informação do produto
  //Arizona Sunshine
  function addProductas1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_as/asps.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Arizona Sunshine PS4</a></h3><span class="price">39.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  function addProductas2() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_as/asvive.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Arizona Sunshine HTC</a></h3><span class="price">39.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProductas3() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_as/asrift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Arizona Sunshine Rift</a></h3><span class="price">23.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  //Bait
  function addProductbt1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_bt/btgear.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Bait! Gear</a></h3><span class="price">0€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  function addProductbt2() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_bt/btday.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Bait! Daydream</a></h3><span class="price">7.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  //Bandit Six
  function addProductbx1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_bx/bxgear.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Bandit Six Gear</a></h3><span class="price">2.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  function addProductbx2() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_bx/bxday.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Bandit Six Daydream</a></h3><span class="price">1.59€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  //Chronos
  function addProductch1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_ch/chrift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Chronos Rift</a></h3><span class="price">39.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  //Dreadhalls
  function addProductdf1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_df/dfgear.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Dreadhalls Gear</a></h3><span class="price">4.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  function addProductdf2() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_df/dfvive.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Dreadhalls HTC</a></h3><span class="price">9.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProductdf3() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_df/dfrift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Dreadhalls Rift</a></h3><span class="price">9.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProductdf4() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_df/dfday.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Dreadhalls Daydream</a></h3><span class="price">4.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  //Eve: Gunjack
  function addProductgj1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_gj/gjgear.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Eve: Gunjack Gear</a></h3><span class="price">4.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  function addProductgj2() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_gj/gjvive.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Eve: Gunjack HTC</a></h3><span class="price">4.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProductgj3() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_gj/gjrift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Eve: Gunjack Rift</a></h3><span class="price">4.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProductgj4() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_gj/gjday.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Eve: Gunjack Daydream</a></h3><span class="price">4.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  //Hitman GO
  function addProductht1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_ht/htgear.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Hitman GO Gear</a></h3><span class="price">7.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  function addProductht2() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_ht/htrift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Hitman GO Rift</a></h3><span class="price">9.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  //Job Simulator
  function addProductjs1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_js/jsps.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Job Simulator PS4</a></h3><span class="price">19.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  function addProductjs2() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_js/jsvive.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Job Simulator HTC</a></h3><span class="price">19.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  function addProductjs3() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_js/jsrift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Job Simulator Rift</a></h3><span class="price">19.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  //Keep Talking
  function addProductke1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_ke/kegear.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">KTANE Gear</a></h3><span class="price">9.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  function addProductke2() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_ke/keps.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">KTANE PS4</a></h3><span class="price">14.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProductke3() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_ke/kevive.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">KTANE HTC</a></h3><span class="price">14.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProductke4() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_ke/kerift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">KTANE Rift</a></h3><span class="price">14.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProductke5() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_ke/keday.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">KTANE Daydream</a></h3><span class="price">10.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  //Landfall
  function addProductlf1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_lf/lfrift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Landfall Rift</a></h3><span class="price">14.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }



  //Lone Echo
  function addProductln1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_ln/lnrift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Lone Echo Rift</a></h3><span class="price">39.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }



  //Minecraft
  function addProductmc1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_mc/mcgear.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Minecraft Gear</a></h3><span class="price">6.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProductmc2() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_mc/mcrift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Minecraft Rift</a></h3><span class="price">0€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }




  //Rick and Morty
  function addProductrm1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_rm/rmps.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Rick and Morty PS4</a></h3><span class="price">29.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProductrm2() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_rm/rmvive.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Rick and Morty HTC</a></h3><span class="price">27.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProductrm3() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_rm/rmrift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Rick and Morty Rift</a></h3><span class="price">29.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  //Robo Recall
  function addProductrr1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_rr/rrrift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Robo Recall Rift</a></h3><span class="price">29.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }




  //Rock Band
  function addProductrv1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_rv/rvrift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Rock Band Rift</a></h3><span class="price">39.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  //Smash Hit
  function addProductsh1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_sh/shgear.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Smash Hit Gear</a></h3><span class="price">2.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  //Star Trek
  function addProductst1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_st/stps.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Star Trek PS4</a></h3><span class="price">49.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProductst2() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_st/stvive.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Star Trek HTC</a></h3><span class="price">19.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProductst3() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_st/strift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Star Trek Rift</a></h3><span class="price">49.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }



  //Super Hot
  function addProductsu1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_su/sups.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Super Hot PS4</a></h3><span class="price">24.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProductsu2() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_su/suvive.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Super Hot HTC</a></h3><span class="price">17.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProductsu3() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_su/surift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Super Hot Rift</a></h3><span class="price">24.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  //Temple Run
  function addProductte1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_te/tegear.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Temple Run Gear</a></h3><span class="price">0€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  //Thumper
  function addProductth1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_th/thps.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Thumper PS4</a></h3><span class="price">19.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  function addProductth2() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_th/thvive.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Thumper HTC</a></h3><span class="price">7.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }

  function addProductth3() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_th/thrift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Thumper Rift</a></h3><span class="price">19.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }



  //Unspoken
  function addProductun1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_un/unrift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">The Unspoken Rift</a></h3><span class="price">19.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }



  //Wilson Heart
  function addProductwh1() {

    productId = productId + 1;
    var productAdded = $('<li class="product"><div class="product-image"><a href="#0"><img src="../../_imagens/img_wh/whrift.jpg" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">Wilsons Heart Rift</a></h3><span class="price">29.99€</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-' + productId + '">Qtn</label><span class="select"><select id="cd-product-' + productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>');
    cartList.prepend(productAdded);
  }


  //remover o produto
  function removeProduct(product) {
    clearInterval(undoTimeoutId);
    cartList.find('.deleted').remove();

    var topPosition = product.offset().top - cartBody.children('ul').offset().top,
      productQuantity = Number(product.find('.quantity').find('select').val()),
      productTotPrice = Number(product.find('.price').text().replace('€', '')) * productQuantity;

    product.css('top', topPosition + 'px').addClass('deleted');

    //update do total de todos os produtos
    updateCartTotal(productTotPrice, false);
    updateCartCount(true, -productQuantity);
    undo.addClass('visible');

    //esperar 8s antes de remover o produto
    undoTimeoutId = setTimeout(function() {
      undo.removeClass('visible');
      cartList.find('.deleted').remove();
    }, 8000);
  }

  //update rapido do carrinho
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
