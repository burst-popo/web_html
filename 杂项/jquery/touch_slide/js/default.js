// JavaScript Document
 function pageInit() {
        //createFlash("WeiXinPlat.swf", 480, 800);
        createFlash("BaseData/Style/Mobifreaks/WeiXinPlat_online.swf", 480, 800);
        //纠错处理，flash播放完成后，如果flash未主动调用sendToJavaScript方法，则js使用计时器调用。
        var interval = setInterval(function () {
            sendToJavaScript("");
            clearInterval(interval);
        }, 4000);

    }

    //动画完毕，移除swf文件，加载其他内容
    var loadEnd = false;
    function sendToJavaScript(value) {
        //删除flash动画
        if (true == loadEnd) return;
        loadEnd = true;

        document.body.removeChild(document.getElementById("flashContent"));
        //进入其他界面
        
    }
    $(function () {
        var bomw = window.innerWidth;
        var bomh = window.innerHeight;
        var a001 = bomw * 0.2375 - 28;
        var a002 = bomw * 0.6417 - 28;
        var a003 = bomw * 0.7708 - 28;
        var a004 = bomw * 0.275 - 79;
        var a005 = bomw * 0.2708 - 77;
        var a006 = bomw * 0.4563 - 77;
        var star = $(".icon");
        var i;
        var a = $(".icon a");
        var iframbox = $(".info");
        var ifram = $(".info iframe");
        star.hide();
        iframbox.hide();
        $(".text01").css({ "left": a001 });
        $(".text02").css({ "left": a002 });
        $(".text03").css({ "left": a003 });
        $(".text04").css({ "left": a004 });
        $(".text05").css({ "left": a005 });
        $(".text06").css({ "left": a006 });
        $(".star").css({ "width": bomw, "height": bomh });
        $(".bgshow").css({ "width": bomw, "height": bomh });
        $(".bgshow img").css({ "width": bomw, "height": bomh });
        star.each(function () {
            var i = $(this).index();
            if ($(this).is(":hidden")) {
                var time = 100 * i + 200;
                $(this).fadeIn(time).fadeOut(200).fadeIn(time).fadeOut(200).fadeIn(time).fadeOut(200).fadeIn(time);
            }
        });
    })
    //创建flash动画内容，加载swf文件
    function createFlash(ur, w, h) {
        var content = '<div id = flashContent>'
        content += '<object classid="clsid:D27CDB6E-AE6D-11CF-96B8-444553540000" id="WinXinPro" width="' + w + '"height="' + h + '">';
        content += '<param name="movie" value="' + ur + '">'
        content += '<param name="bgcolor" value="#000000"/>';
        content += '<param name="quality" value="high">';
        content += '<param name="allowScriptAccess" value="always"/>';
        content += '<param name="allowFullScreen" value="true">';
        content += '<param name="wmode" value="transparent">';
        content += '<embed src="' + ur + '" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" name="WinXinPro" width="' + w + '" height="' + h + '" quality="High" bgcolor="#000000" play="true" loop="false" allowScriptAccess="always" allowFullScreen="true" swliveconnect="true" wmode="transparent">';
        content += '</embed>';
        content += '</object>';
        content += '</div>';

        //document.body.appendChild(content);
        document.body.innerHTML=content;
    } 