var contador = 0;
$(function () {

    $("#cargarmas").click(function () {

        if (contador > 1) {
            document.getElementsByTagName("button")[0].style.display = "none";
            alert("LO SENTIMOS, NO TENEMOS MAS NOTICIAS");
        }
        if (contador === 1) {
            $("#noticias3").append("<article id='article1'> \n\
 <figure> \n\
 <a id='imagen4' href='../img/foto_noticia7.jpg'></a> \n\
 <figcaption id='piefoto4'> \n\
 <p class='seguir'> </p>\n\
 </figcaption> \n\
 </figure> \n\
 <a href='#'>\n\
 <h3 id='titulo4'></h3> \n\
 \n\
 <p id='descripcion4'>\n\
 </p>\n\
 </a>\n\
 <p id='seguir'> Seguir leyendo </p>\n\
 </article>\n\
");
            $("#noticias3").append("<article id='article2'class='col-md-6'> \n\
 <figure> \n\
 <a id='imagen5' href='../img/foto_noticia8.jpe'></a> \n\
 <figcaption id='piefoto5> \n\
 <p class='seguir'> </p>\n\
 </figcaption> \n\
 </figure> \n\
 <a href='#'>\n\
 <h3 id='titulo5'></h3> \n\
 \n\
 <p id='descripcion5'>\n\
 </p>\n\
 </a>\n\
 <p id='seguir'> Seguir leyendo </p>\n\
 </article>");
            $("#noticias3").append("<article id='article3' class='col-md-6'> \n\
 <figure> \n\
 <a id='imagen6' href='../img/foto_noticia9.jpg'></a> \n\
 <figcaption id='piefoto6> \n\
 <p class='fecha6'> </p>\n\
 </figcaption> \n\
 </figure> \n\
 <a href='#'>\n\
 <h3 id='titulo6'></h3> \n\
 \n\
 <p id='descripcion6'>\n\
 </p>\n\
 </a>\n\
 <p id='seguir'> Seguir leyendo </p>\n\
 </article>");
            $.ajax({
                url: '../JSON/news2.json',
                dataType: 'json',
                type: 'get',
                cache: false,
                success: function (datos) {
                    $(datos.noticias3).each(function (i, value) {
                        var t = i + 4;
                        $("#titulo" + t).append(value.titulo);
                        $("#imagen" + t).append("<img class='imagen3 img-responsive center-block' src='" + value.imagen + "'/>");
                        $("#descripcion" + t).append(value.descripcion);
                    });
                }
            });
            contador++;
        }
        if (contador === 0) {
            $("#noticias2").append("<article id='article1'> \n\
 <figure> \n\
 <a id='imagen1' href='../img/foto_noticia4.jpg'></a> \n\
 <figcaption id='piefoto1> \n\
 <div id='fecha1'> </div>\n\
 </figcaption> \n\
 </figure> \n\
 <a href='#'>\n\
 <h3 id='titulo1'></h3> \n\
 \n\
 <p id='descripcion1'>\n\
 </p>\n\
 </a>\n\
 <p id='seguir'> Seguir leyendo </p>\n\
 </article>\n\
");
            $("#noticias2").append("<article id='article2'class='col-md-6'> \n\
 <figure> \n\
 <a id='imagen2' href='../img/foto_noticia5.jpg'></a> \n\
 <figcaption id='piefoto2> \n\
 <p class='seguir'> </p>\n\
 </figcaption> \n\
 </figure> \n\
 <a href='#'>\n\
 <h3 id='titulo2'></h3> \n\
 \n\
 <p id='descripcion2'>\n\
 </p>\n\
 </a>\n\
 <p id='seguir'> Seguir leyendo </p>\n\
 </article>");
            $("#noticias2").append("<article id='article3' class='col-md-6'> \n\
 <figure> \n\
 <a id='imagen3' href='../img/foto_noticia6.jpg'></a> \n\
 <figcaption id='piefoto3> \n\
 <p class='seguir'> </p>\n\
 </figcaption> \n\
 </figure> \n\
 <a href='#'>\n\
 <h3 id='titulo3'></h3> \n\
 \n\
 <p id='descripcion3'>\n\
 </p>\n\
 </a>\n\
 <p id='seguir'> Seguir leyendo </p>\n\
 </article>");
            $.ajax({
                url: '../JSON/news1.json',
                dataType: 'json',
                type: 'get',
                cache: false,
                success: function (datos) {
                    $(datos.noticias2).each(function (i, value) {
                        var e = i + 1;
                        $("#fecha" + e).append("<p>" + value.fecha + "</p>");
                        $("#titulo" + e).append(value.titulo);
                        $("#imagen" + e).append("<img class='imagen3 img-responsive center-block' src='" + value.imagen + "'/>");
                        $("#descripcion" + e).append(value.descripcion);
                    });
                }
            });
            contador++;
        }
    });

    $(window).scroll(function () {
        if($(window).scrollTop()+$(window).height()>$(document).height()-1){
        if (contador === 1) {
            $("#noticias3").append("<article id='article1'> \n\
 <figure> \n\
 <a id='imagen4' href='../img/foto_noticia7.jpg'></a> \n\
 <figcaption id='piefoto4'> \n\
 <p class='seguir'> </p>\n\
 </figcaption> \n\
 </figure> \n\
 <a href='#'>\n\
 <h3 id='titulo4'></h3> \n\
 \n\
 <p id='descripcion4'>\n\
 </p>\n\
 </a>\n\
 <p id='seguir'> Seguir leyendo </p>\n\
 </article>\n\
");
            $("#noticias3").append("<article id='article2'class='col-md-6'> \n\
 <figure> \n\
 <a id='imagen5' href='../img/foto_noticia8.jpe'></a> \n\
 <figcaption id='piefoto5> \n\
 <p class='seguir'> </p>\n\
 </figcaption> \n\
 </figure> \n\
 <a href='#'>\n\
 <h3 id='titulo5'></h3> \n\
 \n\
 <p id='descripcion5'>\n\
 </p>\n\
 </a>\n\
 <p id='seguir'> Seguir leyendo </p>\n\
 </article>");
            $("#noticias3").append("<article id='article3' class='col-md-6'> \n\
 <figure> \n\
 <a id='imagen6' href='../img/foto_noticia9.jpg'></a> \n\
 <figcaption id='piefoto6> \n\
 <p class='fecha6'> </p>\n\
 </figcaption> \n\
 </figure> \n\
 <a href='#'>\n\
 <h3 id='titulo6'></h3> \n\
 \n\
 <p id='descripcion6'>\n\
 </p>\n\
 </a>\n\
 <p id='seguir'> Seguir leyendo </p>\n\
 </article>");
            $.ajax({
                url: '../JSON/news2.json',
                dataType: 'json',
                type: 'get',
                cache: false,
                success: function (datos) {
                    $(datos.noticias3).each(function (i, value) {
                        var t = i + 4;
                        $("#titulo" + t).append(value.titulo);
                        $("#imagen" + t).append("<img class='imagen3 img-responsive center-block' src='" + value.imagen + "'/>");
                        $("#descripcion" + t).append(value.descripcion);
                    });
                }
            });
            contador++;
        }
        if (contador === 0) {
            $("#noticias2").append("<article id='article1'> \n\
 <figure> \n\
 <a id='imagen1' href='../img/foto_noticia4.jpg'></a> \n\
 <figcaption id='piefoto1> \n\
 <div id='fecha1'> </div>\n\
 </figcaption> \n\
 </figure> \n\
 <a href='#'>\n\
 <h3 id='titulo1'></h3> \n\
 \n\
 <p id='descripcion1'>\n\
 </p>\n\
 </a>\n\
 <p id='seguir'> Seguir leyendo </p>\n\
 </article>\n\
");
            $("#noticias2").append("<article id='article2'class='col-md-6'> \n\
 <figure> \n\
 <a id='imagen2' href='../img/foto_noticia5.jpg'></a> \n\
 <figcaption id='piefoto2> \n\
 <p class='seguir'> </p>\n\
 </figcaption> \n\
 </figure> \n\
 <a href='#'>\n\
 <h3 id='titulo2'></h3> \n\
 \n\
 <p id='descripcion2'>\n\
 </p>\n\
 </a>\n\
 <p id='seguir'> Seguir leyendo </p>\n\
 </article>");
            $("#noticias2").append("<article id='article3' class='col-md-6'> \n\
 <figure> \n\
 <a id='imagen3' href='../img/foto_noticia6.jpg'></a> \n\
 <figcaption id='piefoto3> \n\
 <p class='seguir'> </p>\n\
 </figcaption> \n\
 </figure> \n\
 <a href='#'>\n\
 <h3 id='titulo3'></h3> \n\
 \n\
 <p id='descripcion3'>\n\
 </p>\n\
 </a>\n\
 <p id='seguir'> Seguir leyendo </p>\n\
 </article>");
            $.ajax({
                url: '../JSON/news1.json',
                dataType: 'json',
                type: 'get',
                cache: false,
                success: function (datos) {
                    $(datos.noticias2).each(function (i, value) {
                        var e = i + 1;
                        $("#fecha" + e).append("<p>" + value.fecha + "</p>");
                        $("#titulo" + e).append(value.titulo);
                        $("#imagen" + e).append("<img class='imagen3 img-responsive center-block' src='" + value.imagen + "'/>");
                        $("#descripcion" + e).append(value.descripcion);
                    });
                }
            });
            contador++;
        }
        }
    });
});
