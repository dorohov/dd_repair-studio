(function($) {
    "use strict"
    $(function() {

        startAnimationBlocks()
        setPaddingForContainerClasses()

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

        function setPaddingForContainerClasses() {
            var padding = document.getElementsByClassName('__dd__container')[0].getBoundingClientRect()
            $('.__dd-container-left').css({
                paddingLeft: padding.left + 30
            })
            $('.__dd-container-right').css({
                paddingRight: padding.left + 30
            })
        }

        $(window).resize(function() {
            setPaddingForContainerClasses()
        })

        $(document).scroll(function() {
            startAnimationBlocks()
        })

    })
})(jQuery);