var main = function(){
    var cursos = [
        "Agropecuária",
        "Mineração",
        "Administração",
        "Informática"
    ];
    $(".tabs a span").toArray().forEach(function (element){
        var $element = $(element);

        //Adicionar um handler para o evento de click
        $element.on("click", function(){
            var $content,
                $input,
                $button,
                i;
            
                $(".tabs a span").removeClass("active");
                $element.addClass("active");
                $("main .content").empty();

                if($element.parent().is(":nth-child(1)")){
                    //primeiros elementos inseridos
                    $content = $("<ul>");
                    for(i = cursos.length-1; i>=0; i--){
                        $content.append($("<li>").text(cursos[i]));
                    }
                } else if($element.parent().is(":nth-child(2)")){
                    //ultimos elementos inseridos
                    $content = $("<ul>");
                    cursos.forEach(function(curso){
                        $content.append($("<li>").text(curso));
                    });    
                } else if ($element.parent().is(":nth-child(3)")) {
                    
                    $input = $("<input>"),
                    $button = $("<button>").text("+");
    
                    $button.on("click", function () {
                        if ($input.val() !== "") {
                            cursos.push($input.val());
                            $input.val("");
                        }
                    });
                    $content = $("<div>").append($input).append($button);

                }
            $("main .content").append($content);
            return false;
        });
    });
    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);