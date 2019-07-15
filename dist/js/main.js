(function($) {
    "use strict"
    $(function() {

        numberAnimation()
        startAnimationBlocks()
        startAnimationGraphs()

        function numberAnimation() {
            var numsItems = $('.is--animate-num')
            numsItems.each(function() {
                var thisNumber = $(this)
                var thisNumberDataNum = $(this).data('num')
                var thisToggle = true

                if($(this).visible(true) && !$(this).hasClass('is--finish')) {
                    thisNumber.animateNumber({
                        number: thisNumberDataNum
                    }, {
                        easing: 'swing',
                        duration: 1000
                    });
                    thisNumber.addClass('is--finish')
                }
            })
        }

        function startAnimationBlocks() {
            var blockItems = $('.is--animate-block')
            blockItems.each(function() {
                var thisBlock = $(this)
                var thisAnim = $(this).data('animname')
                var thisDelay = $(this).data('animdelay')

                if($(this).visible(true) && !$(this).hasClass('is--finish')) {
                    thisBlock
                        .addClass('animated')
                        .addClass(thisAnim)
                        .css({
                            "-webkit-animation-delay": thisDelay + 's',
                            "-moz-animation-delay": thisDelay + 's',
                            "-o-animation-delay": thisDelay + 's',
                            "animation-delay": thisDelay + 's'
                        })
                }
            })
        }

        function startAnimationGraphs() {
            var blockItems = $('.is--animate-graph')
            blockItems.each(function() {
                var thisBlock = $(this)

                if($(this).visible(true) && !$(this).hasClass('is--finish')) {
                    thisBlock
                        .addClass('is--anim')

                    thisBlock.siblings('.is--animate-graph-circle')
                            .addClass('is--anim')
                }
            })
        }

        $(document).scroll(function() {
            numberAnimation()
            startAnimationBlocks()
            startAnimationGraphs()
        })

        $('.__dd__cursor').on('mousemove', function(e) {
            var xPos = e.clientX
            $('.__dd__block-on__or.is--on').css({
                transform: 'translateX(-' + xPos / 40 + 'px)'
            })
            $('.__dd__block-on__or.is--tw').css({
                transform: 'translateX(' + xPos / 80 + 'px)'
            })
            $('.__dd__block-on__or.is--th').css({
                transform: 'translateX(-' + xPos / 110 + 'px)'
            })
        })

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIG51bWJlckFuaW1hdGlvbigpXHJcbiAgICAgICAgc3RhcnRBbmltYXRpb25CbG9ja3MoKVxyXG4gICAgICAgIHN0YXJ0QW5pbWF0aW9uR3JhcGhzKClcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbnVtYmVyQW5pbWF0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgbnVtc0l0ZW1zID0gJCgnLmlzLS1hbmltYXRlLW51bScpXHJcbiAgICAgICAgICAgIG51bXNJdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRoaXNOdW1iZXIgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc051bWJlckRhdGFOdW0gPSAkKHRoaXMpLmRhdGEoJ251bScpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc1RvZ2dsZSA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICBpZigkKHRoaXMpLnZpc2libGUodHJ1ZSkgJiYgISQodGhpcykuaGFzQ2xhc3MoJ2lzLS1maW5pc2gnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNOdW1iZXIuYW5pbWF0ZU51bWJlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcjogdGhpc051bWJlckRhdGFOdW1cclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ3N3aW5nJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzTnVtYmVyLmFkZENsYXNzKCdpcy0tZmluaXNoJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uQmxvY2tzKCkge1xyXG4gICAgICAgICAgICB2YXIgYmxvY2tJdGVtcyA9ICQoJy5pcy0tYW5pbWF0ZS1ibG9jaycpXHJcbiAgICAgICAgICAgIGJsb2NrSXRlbXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzQmxvY2sgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0FuaW0gPSAkKHRoaXMpLmRhdGEoJ2FuaW1uYW1lJylcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzRGVsYXkgPSAkKHRoaXMpLmRhdGEoJ2FuaW1kZWxheScpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS52aXNpYmxlKHRydWUpICYmICEkKHRoaXMpLmhhc0NsYXNzKCdpcy0tZmluaXNoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzQmxvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhbmltYXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyh0aGlzQW5pbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5XCI6IHRoaXNEZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLW1vei1hbmltYXRpb24tZGVsYXlcIjogdGhpc0RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItby1hbmltYXRpb24tZGVsYXlcIjogdGhpc0RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmltYXRpb24tZGVsYXlcIjogdGhpc0RlbGF5ICsgJ3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbkdyYXBocygpIHtcclxuICAgICAgICAgICAgdmFyIGJsb2NrSXRlbXMgPSAkKCcuaXMtLWFuaW1hdGUtZ3JhcGgnKVxyXG4gICAgICAgICAgICBibG9ja0l0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0Jsb2NrID0gJCh0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKCQodGhpcykudmlzaWJsZSh0cnVlKSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnaXMtLWZpbmlzaCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc0Jsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtLWFuaW0nKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzQmxvY2suc2libGluZ3MoJy5pcy0tYW5pbWF0ZS1ncmFwaC1jaXJjbGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy0tYW5pbScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG51bWJlckFuaW1hdGlvbigpXHJcbiAgICAgICAgICAgIHN0YXJ0QW5pbWF0aW9uQmxvY2tzKClcclxuICAgICAgICAgICAgc3RhcnRBbmltYXRpb25HcmFwaHMoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5fX2RkX19jdXJzb3InKS5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICB2YXIgeFBvcyA9IGUuY2xpZW50WFxyXG4gICAgICAgICAgICAkKCcuX19kZF9fYmxvY2stb25fX29yLmlzLS1vbicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0nICsgeFBvcyAvIDQwICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJCgnLl9fZGRfX2Jsb2NrLW9uX19vci5pcy0tdHcnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgnICsgeFBvcyAvIDgwICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJCgnLl9fZGRfX2Jsb2NrLW9uX19vci5pcy0tdGgnKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtJyArIHhQb3MgLyAxMTAgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
