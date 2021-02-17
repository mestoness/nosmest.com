            (function() {
                NProgress.configure({
                    showSpinner: false
                });
                NProgress.start();
                window.onload = function() {
                    var preloader = document.querySelector('.ns-page-loading');
                    preloader.classList.remove('active');
                    setTimeout(function() {
                        preloader.remove();
                        NProgress.done();
                    }, 2000);
                   /* setTimeout(function() {
                        $('html, body').animate({
                            scrollTop: 0
                        }, '50');
                    }, 50);
                */};
            })();
            $(document).ready(function() {
                $(".br").html("<br>");
                $(window).resize(function() {
                    if ($(window).width() < 600) {
                        $(".navbar .menu-list").hide();
                        $("#mobileNav").show();
                        $(".brNav").html("<br><br><br>");
                    }
                    if ($(window).width() > 600) {
                        $(".navbar .menu-list").show();
                        $("#mobileNav").hide();
                        $(".brNav").html("<br><br><br><br>");
                    }
                    if ($(window).width() < 216) {
                        var loaderMin = '<div class="ns-page-loading active" id="loaderMin"></div>';
                        $(".loaderSMSM").html(loaderMin);
                    } else {
                        $("#loaderMin").hide();
                    }
                }).resize();
            });
            $(function() {
                $('.post-body p').pKisalt({
                    limit: 250,
                    text: "Devamını Oku",
                    text2: "Devamını Gizle"
                });
            });
            $(function() {
                $('.usernamePost').pdKisalt({
                    limit: 25,
                    text: "",
                    text2: ""
                });
            });
            $(function() {
                $('.nameSurname').pdKisalt({
                    limit: 30,
                    text: "",
                    text2: ""
                });
            });
            $("#modalClosePostBtn").click(function() {
                $("#modalOpenPost").fadeOut(100);
            });
            $("#modalOpenPostBtn").click(function() {
                $("#modalOpenPost").fadeIn(300)
            });