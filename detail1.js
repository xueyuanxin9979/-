window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    //1.鼠标经过preview_img 就显示和隐藏mask遮挡层和big放大层
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })

    //2.鼠标移动时让黄色盒子跟鼠标走
    preview_img.addEventListener('mousemove', function(e) {
        //（1）先计算鼠标在盒子里坐标
        //盒子高度的一半是150
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;

        //（2）减去盒子高度300的一半就是mask最终的left和top值
        //(3)mask移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;

        //(4)x坐标小于0，就停在0的位置

        var maskMax = preview_img.offsetWidth - mask.offsetWidth
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        //大图片的移动距离 = 遮挡层的移动距离 * 大图最大移动距离 / 遮挡层最大移动距离
        //大图
        var bigImg = document.querySelector('.bigImg');
        //大图最大移动距离
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        //大图移动距离
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';

    })
})