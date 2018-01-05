$(document).ready(function(){
    var loading = false;
    $('body').on('click', '#catalog-next-page-a', function () {
        loading = true;

        var $_this =  $(this);
        var url = $('#catalog-next-page-a').attr('href');
        $.get(url, {is_ajax: 'y'}, function(data){
            $('#catalog-next-page').after(data);
            $('#catalog-next-page').remove();
            $_this.parent().remove();
            loading = false;
        });
        return false;
    });

    $('body').on('click', '.subscribe_by', function () {
        var id = parseInt( $(this).attr('eid') );
        BX.ajax.insertToNode('/by/ajax/subscribe.php?id='+id+'&site='+$('#site_dir').val()+'&local='+location.href+'', 'subscribe_mform');
        $("#subscribe").modal("show");
    });

    $(".wrapper select").selectmenu({

        change: function (event, ui) {
            if (ui.item.value) {
                $(this).find("option[value='"+ui.item.value+"']").attr("selected", "selected");
                $(this).find("option[value='"+ui.item.value+"']").change();
            }
        }
    });

    $(".modal .modal-content .mform .item .large_block > span.add").click(function() {

        var blSel = parseInt($('#blSel').val())+1;

        $('#blSel').val(blSel);
        $('.blSel'+ blSel).show();
        if(blSel>2){
            $(this).hide();
        }

        var res = $(this).attr("id");
        $(this).find("select").selectmenu({
            appendTo : "#" + res
        });

    });


});

