(function ($) {
    // // USE STRICT
    // "use strict";

    try {
        //WidgetChart 2
        var data1 = [52, 60, 55, 50, 65, 80, 57, 70, 105, 115]
        var ctx = document.getElementById("widgetChart2");
        if (ctx) {
            ctx.height = 300;
            ctx.width = 300;
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    type: 'line',
                    datasets: [{
                        data: data1,
                        label: 'Dataset',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                    },]
                },
                options: {

                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    responsive: true,
                    tooltips: {
                        mode: 'index',
                        titleFontSize: 12,
                        titleFontColor: '#000',
                        bodyFontColor: '#000',
                        backgroundColor: '#fff',
                        titleFontFamily: 'Montserrat',
                        bodyFontFamily: 'Montserrat',
                        cornerRadius: 3,
                        intersect: false,
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: 'transparent',
                                zeroLineColor: 'transparent'
                            },
                            ticks: {
                                fontSize: 2,
                                fontColor: 'transparent'
                            }
                        }],
                        yAxes: [{
                            display: false,
                            ticks: {
                                display: true,
                            }
                        }]
                    },
                    title: {
                        display: true,
                    },
                    elements: {
                        line: {
                            tension: 0.00001,
                            borderWidth: 1
                        },
                        point: {
                            radius: 4,
                            hitRadius: 10,
                            hoverRadius: 4
                        }
                    }
                }
            });
        }

    } catch (error) {
        console.log(error);
    }

    try {

        //Team chart
        var ctx = document.getElementById("team-chart");
        if (ctx) {
            ctx.height = 150;
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
                    type: 'line',
                    defaultFontFamily: 'Poppins',
                    datasets: [{
                        data: [0, 7, 3, 5, 2, 10, 7],
                        label: "Expense",
                        backgroundColor: 'rgba(0,103,255,.15)',
                        borderColor: 'rgba(0,103,255,0.5)',
                        borderWidth: 3.5,
                        pointStyle: 'circle',
                        pointRadius: 5,
                        pointBorderColor: 'transparent',
                        pointBackgroundColor: 'rgba(0,103,255,0.5)',
                    },]
                },
                options: {
                    responsive: true,
                    tooltips: {
                        mode: 'index',
                        titleFontSize: 12,
                        titleFontColor: '#000',
                        bodyFontColor: '#000',
                        backgroundColor: '#fff',
                        titleFontFamily: 'Poppins',
                        bodyFontFamily: 'Poppins',
                        cornerRadius: 3,
                        intersect: false,
                    },
                    legend: {
                        display: false,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            fontFamily: 'Poppins',
                        },

                    },
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                display: false,
                                drawBorder: false
                            },
                            scaleLabel: {
                                display: false,
                                labelString: 'Month'
                            },
                            ticks: {
                                fontFamily: "Poppins"
                            }
                        }],
                        yAxes: [{
                            display: true,
                            gridLines: {
                                display: false,
                                drawBorder: false
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Value',
                                fontFamily: "Poppins"
                            },
                            ticks: {
                                fontFamily: "Poppins"
                            }
                        }]
                    },
                    title: {
                        display: false,
                    }
                }
            });
        }

    } catch (error) {
        console.log(error);
    }

    try {
        //bar chart
        var ctx = document.getElementById("barChart");
        if (ctx) {
            ctx.height = 200;
            var myChart = new Chart(ctx, {
                type: 'bar',
                defaultFontFamily: 'Poppins',
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [
                        {
                            label: "My First dataset",
                            data: [65, 59, 80, 81, 56, 55, 40],
                            borderColor: "rgba(0, 123, 255, 0.9)",
                            borderWidth: "0",
                            backgroundColor: "rgba(0, 123, 255, 0.5)",
                            fontFamily: "Poppins"
                        },
                        {
                            label: "My Second dataset",
                            data: [28, 48, 40, 19, 86, 27, 90],
                            borderColor: "rgba(0,0,0,0.09)",
                            borderWidth: "0",
                            backgroundColor: "rgba(0,0,0,0.07)",
                            fontFamily: "Poppins"
                        }
                    ]
                },
                options: {
                    legend: {
                        position: 'top',
                        labels: {
                            fontFamily: 'Poppins'
                        }

                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                fontFamily: "Poppins"

                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontFamily: "Poppins"
                            }
                        }]
                    }
                }
            });
        }

    } catch (error) {
        console.log(error);
    }


})(jQuery);

(function ($) {
    // USE STRICT
    "use strict";
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 900,
        outDuration: 900,
        linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])',
        loading: true,
        loadingParentElement: 'html',
        loadingClass: 'page-loader',
        loadingInner: '<div class="page-loader__spin"></div>',
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'html',
        transition: function (url) {
            window.location.href = url;
        }
    });

})(jQuery);
(function ($) {
    // USE STRICT
    "use strict";

})(jQuery);

(function ($) {
    // USE STRICT
    "use strict";

    // Scroll Bar
    try {
        var jscr1 = $('.js-scrollbar1');
        if (jscr1[0]) {
            const ps1 = new PerfectScrollbar('.js-scrollbar1');
        }

        var jscr2 = $('.js-scrollbar2');
        if (jscr2[0]) {
            const ps2 = new PerfectScrollbar('.js-scrollbar2');

        }

    } catch (error) {
        console.log(error);
    }

})(jQuery);
(function ($) {
    // USE STRICT
    "use strict";

    // Select 2
    try {

        $(".js-select2").each(function () {
            $(this).select2({
                minimumResultsForSearch: 20,
                dropdownParent: $(this).next('.dropDownSelect2')
            });
        });

    } catch (error) {
        console.log(error);
    }

})(jQuery);

(function ($) {
    // USE STRICT
    "use strict";

    // Load more
    try {
        var list_load = $('.js-list-load');
        if (list_load[0]) {
            list_load.each(function () {
                var that = $(this);
                that.find('.js-load-item').hide();
                var load_btn = that.find('.js-load-btn');
                load_btn.on('click', function (e) {
                    $(this).text("Loading...").delay(1500).queue(function (next) {
                        $(this).hide();
                        that.find(".js-load-item").fadeToggle("slow", 'swing');
                    });
                    e.preventDefault();
                });
            })

        }
    } catch (error) {
        console.log(error);
    }

})(jQuery);
(function ($) {
    // USE STRICT
    "use strict";

    try {

        $('[data-toggle="tooltip"]').tooltip();

    } catch (error) {
        console.log(error);
    }

    // Chatbox
    try {
        var inbox_wrap = $('.js-inbox');
        var message = $('.au-message__item');
        message.each(function () {
            var that = $(this);

            that.on('click', function () {
                $(this).parent().parent().parent().toggleClass('show-chat-box');
            });
        });

    } catch (error) {
        console.log(error);
    }

})(jQuery);
(function ($) {
    // USE STRICT
    "use strict";
  
    // Scroll Bar
    try {
      var jscr1 = $('.js-scrollbar1');
      if (jscr1[0]) {
        const ps1 = new PerfectScrollbar('.js-scrollbar1');
      }
  
      var jscr2 = $('.js-scrollbar2');
      if (jscr2[0]) {
        const ps2 = new PerfectScrollbar('.js-scrollbar2');
  
      }
  
    } catch (error) {
      console.log(error);
    }
  
  })(jQuery);
  (function ($) {
    // USE STRICT
    "use strict";
  
    // Select 2
    try {
  
      $(".js-select2").each(function () {
        $(this).select2({
          minimumResultsForSearch: 20,
          dropdownParent: $(this).next('.dropDownSelect2')
        });
      });
  
    } catch (error) {
      console.log(error);
    }
  
  
  })(jQuery);
  
  (function ($) {
    // USE STRICT
    "use strict";
  
    // Dropdown 
    try {
      var menu = $('.js-item-menu');
      var sub_menu_is_showed = -1;
  
      for (var i = 0; i < menu.length; i++) {
        $(menu[i]).on('click', function (e) {
          e.preventDefault();
          $('.js-right-sidebar').removeClass("show-sidebar");
          if (jQuery.inArray(this, menu) == sub_menu_is_showed) {
            $(this).toggleClass('show-dropdown');
            sub_menu_is_showed = -1;
          }
          else {
            for (var i = 0; i < menu.length; i++) {
              $(menu[i]).removeClass("show-dropdown");
            }
            $(this).toggleClass('show-dropdown');
            sub_menu_is_showed = jQuery.inArray(this, menu);
          }
        });
      }
      $(".js-item-menu, .js-dropdown").click(function (event) {
        event.stopPropagation();
      });
  
      $("body,html").on("click", function () {
        for (var i = 0; i < menu.length; i++) {
          menu[i].classList.remove("show-dropdown");
        }
        sub_menu_is_showed = -1;
      });
  
    } catch (error) {
      console.log(error);
    }
  
    var wW = $(window).width();
    // Right Sidebar
    var right_sidebar = $('.js-right-sidebar');
    var sidebar_btn = $('.js-sidebar-btn');
  
    sidebar_btn.on('click', function (e) {
      e.preventDefault();
      for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("show-dropdown");
      }
      sub_menu_is_showed = -1;
      right_sidebar.toggleClass("show-sidebar");
    });
  
    $(".js-right-sidebar, .js-sidebar-btn").click(function (event) {
      event.stopPropagation();
    });
  
    $("body,html").on("click", function () {
      right_sidebar.removeClass("show-sidebar");
  
    });
  
  
    // Sublist Sidebar
    try {
      var arrow = $('.js-arrow');
      arrow.each(function () {
        var that = $(this);
        that.on('click', function (e) {
          e.preventDefault();
          that.find(".arrow").toggleClass("up");
          that.toggleClass("open");
          that.parent().find('.js-sub-list').slideToggle("250");
        });
      });
  
    } catch (error) {
      console.log(error);
    }
  
  
    try {
      // Hamburger Menu
      $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('.navbar-mobile').slideToggle('500');
      });
      $('.navbar-mobile__list li.has-dropdown > a').on('click', function () {
        var dropdown = $(this).siblings('ul.navbar-mobile__dropdown');
        $(this).toggleClass('active');
        $(dropdown).slideToggle('500');
        return false;
      });
    } catch (error) {
      console.log(error);
    }
  })(jQuery);
  
  (function ($) {
    // USE STRICT
    "use strict";
  
    // Load more
    try {
      var list_load = $('.js-list-load');
      if (list_load[0]) {
        list_load.each(function () {
          var that = $(this);
          that.find('.js-load-item').hide();
          var load_btn = that.find('.js-load-btn');
          load_btn.on('click', function (e) {
            $(this).text("Loading...").delay(1500).queue(function (next) {
              $(this).hide();
              that.find(".js-load-item").fadeToggle("slow", 'swing');
            });
            e.preventDefault();
          });
        })
  
      }
    } catch (error) {
      console.log(error);
    }
  
  })(jQuery);
