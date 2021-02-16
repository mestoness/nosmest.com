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
                    setTimeout(function() {
                        $('html, body').animate({
                            scrollTop: 0
                        }, '50');
                    }, 50);
                };
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
                    var spinner = '<div class="ns-page-loading active"><div class="ns-page-loading-inner"><div class="ns-page-spinner"> </div></div></div>';
                    if ($(window).width() < 200) {
                        $("body").html(spinner);
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
                $('.nameSurname').pdKisalt({
                    limit: 10,
                    text: "",
                    text2: ""
                });
            });
            $(function() {
                $('.usernamePost').pdKisalt({
                    limit: 25,
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