$(document).ready(function(){
    
    var titulos = $("h4")
    var items = $(".featured-item")
    var destaques = $("#reatured")

    console.log(titulos.first());

    $(".featured-item a").addClass("btn btn-dark stretch-link");

    $(".featured-item:first h4").append("<span class="badge bg-secondary">Novo</span")
})