// JavaScript Document
    $(function () {
        var bomw = window.innerWidth;
        var bomh = window.innerHeight;
        var showbar = bomh;
        $(".wrapper").css({ "width": bomw, "height": bomh });
        $(".showbar").css({ "height": showbar });
        $(".showwrapper").css({ "height": bomh });
        $(".sw_box").css({ "height": bomh });
        $(".swb_box").css({ "height": bomh });
        var item = $(".item .title");
        item.eq(0).parent().attr("id", "a0");
        item.eq(1).parent().attr("id", "a1");
        item.eq(2).parent().attr("id", "a2");
        item.eq(3).parent().attr("id", "a3");
        var img1 = $(".item img").eq(0).attr("src");
        var img2 = $(".item img").eq(1).attr("src");
        var img3 = $(".item img").eq(2).attr("src");
        var img4 = $(".item img").eq(3).attr("src");
        $(".item .title a").each(function (index, element) {
            if (index == 0) {
                $(this).click(function () {
                    $(this).parent().removeAttr("id").attr("id", "tit01");
                    item.eq(1).removeAttr("id").attr("id", "tit02");
                    item.eq(2).removeAttr("id").attr("id", "tit03");
                    item.eq(3).removeAttr("id").attr("id", "tit04");
                    $(this).parent().parent().removeAttr("id").attr("id", "a0");
                    item.eq(1).parent().removeAttr("id").attr("id", "a1");
                    item.eq(2).parent().removeAttr("id").attr("id", "a2");
                    item.eq(3).parent().removeAttr("id").attr("id", "a3");

                    $(".item img").eq(0).attr("src", img1);
                    $(".item img").eq(1).attr("src", img2);
                    $(".item img").eq(2).attr("src", img3);
                    $(".item img").eq(3).attr("src", img4);
                });
            }
            else if (index == 1) {
                $(this).click(function () {
                    $(this).parent().removeAttr("id").attr("id", "tit01");
                    item.eq(0).removeAttr("id").attr("id", "tit04");
                    item.eq(2).removeAttr("id").attr("id", "tit02");
                    item.eq(3).removeAttr("id").attr("id", "tit03");
                    $(this).parent().parent().removeAttr("id").attr("id", "a0");
                    item.eq(0).parent().removeAttr("id").attr("id", "a3");
                    item.eq(2).parent().removeAttr("id").attr("id", "a1");
                    item.eq(3).parent().removeAttr("id").attr("id", "a2");
                    $(".item img").eq(0).attr("src", img4);
                    $(".item img").eq(1).attr("src", img1);
                    $(".item img").eq(2).attr("src", img2);
                    $(".item img").eq(3).attr("src", img3);
                });
            } else if (index == 2) {
                $(this).click(function () {
                    $(this).parent().removeAttr("id").attr("id", "tit01");
                    item.eq(1).removeAttr("id").attr("id", "tit04");
                    item.eq(0).removeAttr("id").attr("id", "tit03");
                    item.eq(3).removeAttr("id").attr("id", "tit02");
                    $(this).parent().parent().removeAttr("id").attr("id", "a0");
                    item.eq(0).parent().removeAttr("id").attr("id", "a2");
                    item.eq(1).parent().removeAttr("id").attr("id", "a3");
                    item.eq(3).parent().removeAttr("id").attr("id", "a1");
                    $(".item img").eq(0).attr("src", img3);
                    $(".item img").eq(1).attr("src", img4);
                    $(".item img").eq(2).attr("src", img1);
                    $(".item img").eq(3).attr("src", img2);
                });
            } else {
                $(this).click(function () {
                    $(this).parent().removeAttr("id").attr("id", "tit01");
                    item.eq(1).removeAttr("id").attr("id", "tit03");
                    item.eq(2).removeAttr("id").attr("id", "tit04");
                    item.eq(0).removeAttr("id").attr("id", "tit02");
                    $(this).parent().parent().removeAttr("id").attr("id", "a0");
                    item.eq(0).parent().removeAttr("id").attr("id", "a1");
                    item.eq(1).parent().removeAttr("id").attr("id", "a2");
                    item.eq(2).parent().removeAttr("id").attr("id", "a3");
                    $(".item img").eq(0).attr("src", img2);
                    $(".item img").eq(1).attr("src", img3);
                    $(".item img").eq(2).attr("src", img4);
                    $(".item img").eq(3).attr("src", img1);
                });
            }
        });
        $(".item").each(function () {
            var w = $(this).css("width");
            $(this).find(".yin").css({ "width": w });
        });
    })