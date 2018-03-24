// JavaScript Document
    $(function () {
        var bomw = window.innerWidth;
        var bomh = window.innerHeight;
        $(".in01").hover(
			function () {
			    $(this).animate({ "top": "-5px" }, { queue: true, duration: 200 }, function () { $(this).css({ "top": "0px" }) }).animate({ "top": "5px" }, 200, function () { $(this).css({ "top": "0px" }) });
			},
		function () {
		    $(this).animate({ "top": "-5px" }, { queue: true, duration: 100 }, function () { $(this).css({ "top": "0px" }) }).animate({ "top": "5px" }, 100, function () { $(this).css({ "top": "0px" }) });

		})
        $(".in02").hover(
			function () {
			    $(this).animate({ "top": "103px" }, { queue: true, duration: 200 }, function () { $(this).css({ "top": "107px" }) }).animate({ "top": "111px" }, 200, function () { $(this).css({ "top": "107px" }) });
			},
		function () {
		    $(this).animate({ "top": "103px" }, { queue: true, duration: 200 }, function () { $(this).css({ "top": "107px" }) }).animate({ "top": "111px" }, 200, function () { $(this).css({ "top": "107px" }) });

		})
        $(".in03").hover(
			function () {
			    $(this).animate({ "top": "192px" }, { queue: true, duration: 200 }, function () { $(this).css({ "top": "196px" }) }).animate({ "top": "200px" }, 200, function () { $(this).css({ "top": "196px" }) });
			},
		function () {
		    $(this).animate({ "top": "192px" }, { queue: true, duration: 200 }, function () { $(this).css({ "top": "196px" }) }).animate({ "top": "200px" }, 200, function () { $(this).css({ "top": "196px" }) });

		})
        $(".in04").hover(
			function () {
			    $(this).animate({ "top": "321px" }, { queue: true, duration: 200 }, function () { $(this).css({ "top": "325px" }) }).animate({ "top": "329px" }, 200, function () { $(this).css({ "top": "325px" }) });
			},
		function () {
		    $(this).animate({ "top": "321px" }, { queue: true, duration: 200 }, function () { $(this).css({ "top": "325px" }) }).animate({ "top": "329px" }, 200, function () { $(this).css({ "top": "325px" }) });

		})
        $(".in05").hover(
			function () {
			    $(this).animate({ "top": "179px" }, { queue: true, duration: 200 }, function () { $(this).css({ "top": "183px" }) }).animate({ "top": "187px" }, 200, function () { $(this).css({ "top": "183px" }) });
			},
		function () {
		    $(this).animate({ "top": "179px" }, { queue: true, duration: 200 }, function () { $(this).css({ "top": "183px" }) }).animate({ "top": "187px" }, 200, function () { $(this).css({ "top": "183px" }) });

		})
        function auto() {
            $(".d01").animate({ "top": "25%", "left": "13%" }, { queue: true, duration: 100 }, function () { $(this).css({ "top": "26%", "left": "14%" }) }).animate({ "top": "27%", "left": "15%" }, 100, function () { $(this).css({ "top": "26%", "left": "14%" }) });
            $(".d02").animate({ "top": "54%", "left": "8%" }, { queue: true, duration: 100 }, function () { $(this).css({ "top": "55%", "left": "9%" }) }).animate({ "top": "56%", "left": "10%" }, 100, function () { $(this).css({ "top": "55%", "left": "9%" }) });
            $(".d03").animate({ "top": "83%", "left": "41%" }, { queue: true, duration: 100 }, function () { $(this).css({ "top": "84%", "left": "42%" }) }).animate({ "top": "85%", "left": "43%" }, 100, function () { $(this).css({ "top": "84%", "left": "42%" }) });
            $(".d04").animate({ "top": "69%", "left": "86%" }, { queue: true, duration: 100 }, function () { $(this).css({ "top": "70%", "left": "87%" }) }).animate({ "top": "71%", "left": "88%" }, 100, function () { $(this).css({ "top": "70%", "left": "87%" }) });
            $(".d05").animate({ "top": "20%", "left": "84%" }, { queue: true, duration: 100 }, function () { $(this).css({ "top": "21%", "left": "85%" }) }).animate({ "top": "22%", "left": "86%" }, 100, function () { $(this).css({ "top": "21%", "left": "85%" }) });
        }
        setInterval(auto, 1500);
    })
