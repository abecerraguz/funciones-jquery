// Espero a que se cargue el DOM
$(document).ready(function(){

    console.log('Se ha cargado el DOM');
    
    //Seleccionamos a todos los títulos
    let titulos = $('.h-100').find('h2');
    console.log('Estos son los titulos', titulos);
    let titulo1 = titulos.eq(0),titulo2=titulos.eq(1),titulo3=titulos.eq(2),titulo4=titulos.eq(3),titulo5=titulos.eq(4),titulo6=titulos.eq(5),titulo7=titulos.eq(6),titulo8=titulos.eq(7),titulo9=titulos.eq(8),titulo10=titulos.eq(9),titulo11=titulos.eq(10),titulo12=titulos.eq(11),titulo13=titulos.eq(12),titulo14=titulos.eq(13),titulo15=titulos.eq(14),titulo16=titulos.eq(15),titulo17=titulos.eq(16)

    let parrafos = $('.h-100').find('p');
    console.log('Estos son los parrafos', parrafos);
    let parrafo1 = parrafos.eq(0),
        parrafo2=parrafos.eq(1),
        parrafo3=parrafos.eq(2),
        parrafo4=parrafos.eq(3),
        parrafo5=parrafos.eq(4),
        parrafo6=parrafos.eq(5),
        parrafo7=parrafos.eq(6),
        parrafo8=parrafos.eq(7),
        parrafo9=parrafos.eq(8),
        parrafo10=parrafos.eq(9),
        parrafo11=parrafos.eq(10),
        parrafo12=parrafos.eq(11),
        parrafo13=parrafos.eq(12),
        parrafo14=parrafos.eq(13),
        parrafo15=parrafos.eq(14),
        parrafo16=parrafos.eq(15),
        parrafo17=parrafos.eq(16)

    parrafo3.hide();
    $('.alert').hide();

    //Seleccionamos a todos los buttom
    let button = $('.h-100').find('.btn-outline-secondary');
    console.log('Estos son los botones', button );
    let button1 = button.eq(0),button2=button.eq(1),button3=button.eq(2),button4=button.eq(3),button5=button.eq(4),button6=button.eq(5),button7=button.eq(6),button8=button.eq(7),button9=button.eq(8),button10=button.eq(9),button11=button.eq(10),button12=button.eq(11),button13=button.eq(12),button14=button.eq(13),button15=button.eq(14),button16=button.eq(15),button17=button.eq(16)

    
    // 1. Ejemplo de click()
    button1.click(function (e) {
        e.preventDefault();
        alert('Esto es un click')
    });

    // 2. Ejemplo de hide()
    button2.click(function (e) {
        e.preventDefault();
        parrafo2.hide('slow');
    });

    // 3. Ejemplo de show()
    button3.click(function (e) {
        e.preventDefault();
        parrafo3.show('fast');
        $('.alert').show('fast')
    });

    // 4. Ejemplo de toggle()
    button4.click(function (e) {
        e.preventDefault();
        titulo4.toggle('slow');
        parrafo4.toggle('slow');
    });

    // 5. Ejemplo de slideDown()
    button5.click(function (e) {
        $('.card').slideDown();
    });

    // 6. Ejemplo de slideUp()
    button6.click(function (e) {
        $('.accordion').slideUp();
    });

    // 7. Ejemplo de slideToggle()
    button7.click(function (e) {
        console.log('Boton 7', parrafo7)
        parrafo7.slideToggle();
    });

    // 8. Ejemplo de fadeIn()
    parrafo8.hide();
    button8.click(function (e) {
        parrafo8.fadeIn();
    });

    // 9. Ejemplo de fadeOut()
    button9.click(function (e) {
        parrafo9.fadeOut();
    });

    // 10. Ejemplo de addClass()
    button10.click(function (e) {
        parrafo10.addClass('text-success');
    });

    // 11. Ejemplo de before()
    button11.click(function (e) {
        $(this).before('<h3 class="my-3">Antes Hola mundo</h3>');
    });

    // 12. Ejemplo de after()
    button12.click(function (e) {
         $(this).after('<h3 class="my-3">Despues Hola mundo</h3>');
    });

    // 13. Ejemplo de append()
    button13.click(function (e) {
         $(this).append(document.createTextNode(" ,texto desde append"));
    });

    // 14. Ejemplo de html()
    button14.click(function (e) {
         parrafo14.html('Texto desde HTML mantiene la etiqueta original');
    });

    // 15. Ejemplo de attr()
    button15.click(function (e) {
         $(this).attr('type','submit');
         $(this).html(document.createTextNode("El type se cambio de button a submit"));
    });
    // 16. Ejemplo de attr()
    button16.click(function (e) {
         $(this).attr('type','submit');
         $(this).html(document.createTextNode("El type se cambio de button a submit"));
    });

    // 17. Ejemplo de attr()
    button17.click(function (e) {
         parrafo17.text('Texto desde HTML mantiene la etiqueta original');
    });

     

    


})