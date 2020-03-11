$(function() {
    // 为product-main注册事件
    $('.product-main').hover(function(e) {
        // product-content 注册鼠标经过离开事件
        $('.product-content').hover(function(e) {
            // product-content 获取焦点向上移动
            $(e.currentTarget).css({
                transform: 'translateY(-15px)'
            });
            // product-btn 向下移动
            $(e.currentTarget).find($('.product-btn')).css({
                bottom: '-50px',
                backgroundColor: '#fff',
                opacity: 1
            });
            setTimeout(function() {
                $(e.currentTarget).find($('.product-btn')).find('a').css({
                    opacity: 1
                });
            }, 300);
            // 为 a 链接注册经过和离开事件
            $(e.currentTarget).find($('.product-btn')).find('a').hover(function(e) {
                // 切换 product-toggle 类变换样式
                $($(e.currentTarget)[0]).toggleClass('product-toggle');
                //console.dir($(e.currentTarget));
            }, function(e) {
                $($(e.currentTarget)[0]).toggleClass('product-toggle');
            });

        }, function(e) {
            $(e.currentTarget).find($('.product-btn')).css({
                bottom: '-18px',
                backgroundColor: '#F5F5F5'
            });

            $(e.currentTarget).find($('.product-btn')).find('a').css({
                opacity: 0
            });
            setTimeout(function() {
                $(e.currentTarget).find($('.product-btn')).css({
                    opacity: 0
                });
                // 复原
                $(e.currentTarget).css({
                    transform: 'translateY(0)'
                });
            }, 300);

        });
    });
});