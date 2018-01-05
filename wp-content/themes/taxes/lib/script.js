/*$(document).ready(function(){
    $.reject({reject:{safari6:true,chrome24:true,firefox23:true,msie7:true,msie8:true,opera17:true},header:'Вы используете устаревший браузер.',paragraph1:'Вы пользуетесь устравшим браузером, который не поддерживает'+' современные веб-стандарты и представляет угрозу вашей безопасности. '+'found below.',paragraph2:'Пожалуйста, установите современный браузер:',closeMessage:'',closeLink:'Зактрыть окно'});
    $(".sliderUsl").owlCarousel({items:4,responsiveClass:true,responsive:{0:{items:1},450:{items:2},991:{items:3},1199:{items:4}},margin:28,loop:true,nav:true,navText:["<img src='img/arr_left.png' alt=''>","<img src='img/arr_right.png' alt=''>"]});
    $(".sliderBrands").owlCarousel({responsiveClass:true,responsive:{0:{items:1},450:{items:2},767:{items:4},1199:{items:5}},margin:0,nav:true,navText:["<img src='img/arr_left.png' alt=''>","<img src='img/arr_right.png' alt=''>"]});
    $(".wrapper .content header .right .showMenu").click(function(){if($(this).hasClass("active")){$("body").css({"overflow":"auto"});$(this).removeClass("active");$(".menu").removeClass("active");}else{$("body").css({"overflow":"hidden"});$(this).addClass("active");$(".menu").addClass("active");}});
    $('textarea').textareaAutoSize();
    $(".wrapper .menu ul.mainMenu li .showSec").click(function(){secMenuF($(this));});
    $(".wrapper .menu ul.mainMenu li").hover(function(){$(".menu li").removeClass("active");if ($(this).find(".showSec").length > 0){if($(window).width()>1000){secMenuF($(this).find(".showSec"));}}});function secMenuF(e){$(".menu").addClass("secondMenu");var li=$(e).parents("li");$(li).addClass("active");var list=$(e).siblings(".sec").html();$(".secMenu").html("<a class='cap' href='"+$(li).find('a').attr('href')+"'>"+"<span class='"+$(li).find('span[class^=icon-]').attr('class')+"'></span>"+"<span>"+$(li).find('> a').text()+"</span>"+"</a>"+"<span class='back func'><span class='hideSec'></span>Назад</span>"+""+list);$(".wrapper .menu ul.secMenu .hideSec,.wrapper .menu ul.secMenu .back,.wrapper .content,.modal").click(function(){$(".menu").removeClass("secondMenu");$(".menu li.active").removeClass("active");});}
    $(".wrapper .menu ul.mainMenu li a").hover(function(){if($(this).siblings(".showSec").length==0){$(".menu").removeClass("secondMenu");}});
    $(".wrapper .content header .right .find").click(function(){if($(".wrapper .content header .right form").css("display")=="block"){$(".wrapper .content header .right form").slideUp(500);}else{$(".wrapper .content header .right form").slideDown(500);$(".wrapper .content header .right form input").focus();}});$(".dataNews .filters .butt,.dataCab .filters .butt,.dataAbout .filters .butt").click(function(){if($(this).hasClass("active")){$(this).siblings("ul").slideUp(500);$(this).removeClass("active");}else{$(this).siblings("ul").slideDown(500);$(this).addClass("active");}});$(".dataNews .more,.dataCab .more").click(function(){$(this).parent().slideUp(500);$(this).parents(".item").nextAll(".item").slideDown(500);});
    $(".dataCab .data .subs > .controls .filButt").click(function(){
        $(this).siblings(".items").slideToggle(500);});if($(".modal [class^='labels_']").length>0){$(".modal").find(".mform [class^='labels_']").hide();
        $(".labels_"+$("[name='typecl'][checked]").attr("id")).show();
        $(".labels_"+$("[name='typeregcl'][checked]").attr("id")).show();
        $("[name='typecl'],[name='typeregcl']").on('change',function(){var e=$(this);$(e).parents(".modal").find(".mform [class^='labels_']").hide();$(e).parents(".modal").find(".labels_"+$(e).attr("id")).show();});}$(".allYear").click(function(){if($(this).hasClass("active")){$(this).removeClass("active");$(this).parent(".drop").find("[type='checkbox']").prop("checked",false);}else{$(this).addClass("active");$(this).parent(".drop").find("[type='checkbox']").prop("checked",true);}});$(".modal .drop:not(.block) .list input").map(function(){var e=$(this);if($(e).prop("checked")==true){$(e).parents(".drop").find(".butt .name").text($("[for='"+$(e).attr('id')+"']").text());if($(e).parents(".drop").find(".list_href").length>0){$(e).parents(".drop").find(".list_href div[data-to='"+$(e).attr('id')+"']").show();}}});$(".modal .drop:not(.block) .butt").click(function(){if($(this).siblings(".list").css("display")=="block"){$(this).siblings(".list").slideUp(500);$(this).parents(".drop").removeClass('active');}else{$(this).siblings(".list").slideDown(500);$(this).parents(".drop").addClass('active');}});$(".modal .drop.block .list input").on('change',function(){if($(".modal .drop.block .list input:checked").length==12){$(".allYear").addClass("active");}else{$(".allYear").removeClass("active");}});$(".modal .drop:not(.block) .list input").on('change',function(){var e=$(this);if($(e).prop("checked")==true){$(e).parents(".drop").find(".butt .name").text($("[for='"+$(e).attr('id')+"']").text());if($(window).width()<641){$(e).parents(".drop").find(".list").slideUp();}$(e).parents(".drop").removeClass('active');if($(e).parents(".drop").find(".list_href").length>0){if($(window).width()<=640){$(e).parents(".drop").find(".list_href div").hide();$(e).parents(".drop").find(".list_href div[data-to='"+$(e).attr('id')+"']").show();}}}});$(".hideList").click(function(){if($(this).siblings(".list").css("display")=="none"){$(this).siblings(".list").slideDown(500);$(this).siblings(".butt").hide();$(this).text("свернуть").removeClass("showList");}else{$(this).siblings(".list").slideUp(500);$(this).siblings(".butt").css("display","table");$(this).text("развернуть").addClass("showList");}});$(".dataCab .data .profil .item span.change").click(function(){var e=$(this);$(this).siblings("textarea,input").width($(e).siblings(".cont").width()).show().textareaAutoSize();$(this).siblings("textarea,input").focus();$(this).siblings(".cont").hide();$(this).hide();});$(".dataCab .data .profil .item span.add").click(function(){var e=$(this);$(e).parents("p").before("<p><textarea rows='1' style='display: block'></textarea></p>");$('textarea').textareaAutoSize();});
    $(".modal .modal-content .mform .item .large_block > span.add").click(function(){
        var op=$(this).siblings(".blSel").find("select").html();
        $(this).before('<div class="blSels"><div class="pole sl"><label>Наименование бланка</label><select>'+op+'</select></div><div class="pole xs"><label>Количество номеров</label><textarea rows="1"></textarea> </div></div>');
        var id = $(this).parents(".modal").attr("id");
        $("select").selectmenu({
            appendTo: "#"+id
        });
        $('textarea').textareaAutoSize();});
    $(".wrapper .menu ul.secMenu").on('mouseleave',function(){$(".menu").removeClass("secondMenu");$(".menu li.active").removeClass("active");});
    $(".wrapper select").selectmenu();
    $(".modal").map(function(){
         var id = $(this).attr("id");
        $(this).find("select").selectmenu({
            appendTo: "#"+id
        });
    });
    $(".wrapper table").wrap("<div class='scrollT'></div>");

});
*/


$(document).ready(function() {
    /**
     * @param {?} el
     * @return {undefined}
     */
    function postLink(el) {
        $(".menu").addClass("secondMenu");
        var item = $(el).parents("li");
        $(item).addClass("active");
        var x = $(el).siblings(".sec").html();
        $(".secMenu").html("<a class='cap' href='" + $(item).find("a").attr("href") + "'>" + "<span class='" + $(item).find("span[class^=icon-]").attr("class") + "'></span>" + "<span>" + $(item).find("> a").text() + "</span>" + "</a>" + "<span class='back func'><span class='hideSec'></span>\u041d\u0430\u0437\u0430\u0434</span>" + "" + x);
        $(".wrapper .menu ul.secMenu .hideSec,.wrapper .menu ul.secMenu .back,.wrapper .content,.modal").click(function() {
            $(".menu").removeClass("secondMenu");
            $(".menu li.active").removeClass("active");
        });
    }
    $.reject({
        reject : {
            safari6 : true,
            chrome24 : true,
            firefox23 : true,
            msie7 : true,
            msie8 : true,
            opera17 : true
        },
        header : "\u0412\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440.",
        paragraph1 : "\u0412\u044b \u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435\u0441\u044c \u0443\u0441\u0442\u0440\u0430\u0432\u0448\u0438\u043c \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442" + " \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0432\u0435\u0431-\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u044b \u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0443\u0433\u0440\u043e\u0437\u0443 \u0432\u0430\u0448\u0435\u0439 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438. " +
        "found below.",
        paragraph2 : "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440:",
        closeMessage : "",
        closeLink : "\u0417\u0430\u043a\u0442\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e"
    });
    $(".sliderUsl").owlCarousel({
        items : 4,
        responsiveClass : true,
        responsive : {
            0 : {
                items : 1
            },
            450 : {
                items : 2
            },
            991 : {
                items : 3
            },
            1199 : {
                items : 4
            }
        },
        margin : 28,
        loop : true,
        nav : true,
        navText : ["<img src='/bitrix/templates/main/img/arr_left.png' alt=''>", "<img src='/bitrix/templates/main/img/arr_right.png' alt=''>"]
    });
    $(".sliderBrands").owlCarousel({
        responsiveClass : true,
        responsive : {
            0 : {
                items : 1
            },
            450 : {
                items : 2
            },
            767 : {
                items : 4
            },
            1199 : {
                items : 5
            }
        },
        margin : 0,
        nav : true,
        navText : ["<img src='/bitrix/templates/main/img/arr_left.png' alt=''>", "<img src='/bitrix/templates/main/img/arr_right.png' alt=''>"]
    });
    $(".wrapper .content header .right .showMenu").click(function() {
        if ($(this).hasClass("active")) {
            $("body").css({
                "overflow" : "auto"
            });
            $(this).removeClass("active");
            $(".menu").removeClass("active");
        } else {
            $("body").css({
                "overflow" : "hidden"
            });
            $(this).addClass("active");
            $(".menu").addClass("active");
        }
    });
    $("textarea").textareaAutoSize();
    $(".wrapper .menu ul.mainMenu li .showSec").click(function() {
        postLink($(this));
    });
    $(".wrapper .menu ul.mainMenu li").hover(function() {
        $(".menu li").removeClass("active");
        if ($(this).find(".showSec").length > 0) {
            if ($(window).width() > 1E3) {
                postLink($(this).find(".showSec"));
            }
        }
    });
    $(".wrapper .menu ul.mainMenu li a").hover(function() {
        if ($(this).siblings(".showSec").length == 0) {
            $(".menu").removeClass("secondMenu");
        }
    });
    $(".wrapper .content header .right .find").click(function() {
        if ($(".wrapper .content header .right form").css("display") == "block") {
            $(".wrapper .content header .right form").slideUp(500);
        } else {
            $(".wrapper .content header .right form").slideDown(500);
            $(".wrapper .content header .right form input").focus();
        }
    });
    $(".dataNews .filters .butt,.dataCab .filters .butt,.dataAbout .filters .butt").click(function() {
        if ($(this).hasClass("active")) {
            $(this).siblings("ul").slideUp(500);
            $(this).removeClass("active");
        } else {
            $(this).siblings("ul").slideDown(500);
            $(this).addClass("active");
        }
    });
    $(".dataNews .more,.dataCab .more").click(function() {
        $(this).parent().slideUp(500);
        $(this).parents(".item").nextAll(".item").slideDown(500);
    });
    $(".dataCab .data .subs > .controls .filButt").click(function() {
        $(this).siblings(".items").slideToggle(500);
    });
    $(".dataCab .data .profil .item span.change").click(function() {
        var _field = $(this);
        $(this).siblings("textarea,input").width($(_field).siblings(".cont").width()).show().textareaAutoSize();
        $(this).siblings(".ui-selectmenu-button").css({"display":"block"});
        $(this).siblings("textarea,input,.ui-selectmenu-button").focus();
        $(this).siblings(".cont").hide();
        $(this).hide();
    });
    $(".dataCab .data .profil .item span.add").click(function() {
        var selector = $(this);
        $(selector).parents("p").before("<p><textarea rows='1' style='display: block'></textarea></p>");
        $("textarea").textareaAutoSize();
    });
    $(".wrapper .menu ul.secMenu").on("mouseleave", function() {
        $(".menu").removeClass("secondMenu");
        $(".menu li.active").removeClass("active");
    });
    $(".wrapper select").selectmenu();
    $(".modal").map(function() {
        var res = $(this).attr("id");
        $(this).find("select").selectmenu({
            appendTo : "#" + res
        });
    });


    $('.modal').on('shown.bs.modal', function () {
        /*$(".modal .modal-content .mform .item .large_block > span.add").click(function() {
            var op = $(this).siblings(".blSel").find("select").html();
            $(this).before('<div class="blSels"><div class="pole sl"><label>\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u043b\u0430\u043d\u043a\u0430</label><select>' + op + '</select></div><div class="pole xs"><label>\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u043e\u043c\u0435\u0440\u043e\u0432</label><textarea rows="1"></textarea> </div></div>');
            var res = $(this).parents(".modal").attr("id");
            $("select").selectmenu({
                appendTo : "#" + res
            });
            $("textarea").textareaAutoSize();
        });*/
        $(".modal .drop:not(.block) .list input").map(function() {
            var input = $(this);
            if ($(input).prop("checked") == true) {
                $(input).parents(".drop").find(".butt .name").text($("[for='" + $(input).attr("id") + "']").text());
                if ($(input).parents(".drop").find(".list_href").length > 0) {
                    $(input).parents(".drop").find(".list_href div[data-to='" + $(input).attr("id") + "']").show();
                }
            }
        });
        $(".modal .drop:not(.block) .butt").click(function() {
            if ($(this).siblings(".list").css("display") == "block") {
                $(this).siblings(".list").slideUp(500);
                $(this).parents(".drop").removeClass("active");
            } else {
                $(this).siblings(".list").slideDown(500);
                $(this).parents(".drop").addClass("active");
            }
        });
        /*$(".modal .drop.block .list input").on("change", function() {
            if ($(".modal .drop.block .list input:checked").length == 12) {
                $(".allYear").addClass("active");
            } else {
                $(".allYear").removeClass("active");
            }
        });*/
        $(".modal .drop:not(.block) .list input").on("change", function() {
            var input = $(this);
            if ($(input).prop("checked") == true) {
                $(input).parents(".drop").find(".butt .name").text($("[for='" + $(input).attr("id") + "']").text());
                if ($(window).width() < 641) {
                    $(input).parents(".drop").find(".list").slideUp();
                }
                $(input).parents(".drop").removeClass("active");
                if ($(input).parents(".drop").find(".list_href").length > 0) {
                    if ($(window).width() <= 640) {
                        $(input).parents(".drop").find(".list_href div").hide();
                        $(input).parents(".drop").find(".list_href div[data-to='" + $(input).attr("id") + "']").show();
                    }
                }
            }
        });
        if ($(".modal [class^='labels_']").length > 0) {
            $(".modal").find(".mform [class^='labels_']").hide();
            $(".labels_" + $(".typecl[checked]").attr("id")).show();
            $(".labels_" + $(".typeregcl[checked]").attr("id")).show();
            $(".typecl,.typeregcl").on("change", function() {
                var el = $(this);
                $(el).parents(".modal").find(".mform [class^='labels_']").hide();
                $(el).parents(".modal").find(".labels_" + $(el).attr("id")).show();
            });
        }
        /*$(".allYear").click(function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this).parent(".drop").find("[type='checkbox']").prop("checked", false);
            } else {
                $(this).addClass("active");
                $(this).parent(".drop").find("[type='checkbox']").prop("checked", true);
            }
        });*/
        $(".hideList").click(function() {
            if ($(this).siblings(".list").css("display") == "none") {
                $(this).siblings(".list").slideDown(500);
                $(this).siblings(".butt").hide();
                $(this).text("\u0441\u0432\u0435\u0440\u043d\u0443\u0442\u044c").removeClass("showList");
            } else {
                $(this).siblings(".list").slideUp(500);
                $(this).siblings(".butt").css("display", "table");
                $(this).text("\u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044c").addClass("showList");
            }
        });
    });


    $(".wrapper table:not(.vote-answer-table)").wrap("<div class='scrollT'></div>");
    $("#subscribe form").validate({
        rules: {
            fio: {
                required: true,
                minlength: 5
            },
            umane: {
                required: true,
                minlength: 3
            },
            tel: {
                required: true,
                minlength: 6
            },
            utel: {
                required: true,
                minlength: 6
            },
            email: {
                required: true,
                email: true
            },
            uemail: {
                required: true,
                email: true
            }
        },
        messages: {
            fio: {
                required: "Введите ваше ФИО",
                minlength: "Слишком коротко"
            },
            tel: {
                required: "Введите телефон для связи",
                minlength: "Минимальная длинна телефона 6 символов (442211)"
            },
            email: "Вашь Email не корректный",
            uname: {
                required: "Введите название предприятия",
                minlength: "Слишком коротко"
            },
            utel: {
                required: "Введите телефон для связи",
                minlength: "Минимальная длинна телефона 6 символов (442211)"
            },
            uemail: "Вашь Email не корректный"
        }
    });

});
