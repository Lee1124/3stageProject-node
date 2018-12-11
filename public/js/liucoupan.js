// 查看点击
$(".clickLook").on("click",function () {

    if ($(this).html()=="查看 &gt;") {
        $(this).parent().find("img").css("display","block");
        $(this).siblings(".blockClick").css("display","block");
        $(this).html("收起 >");

        // 领一张优惠券隐藏

        console.log($(this).parent().parent().siblings());

        $(this).parent().parent().siblings().find("img").css("display","none");
        $(this).parent().parent().siblings().find(".blockClick").css("display","none");
        $(this).parent().parent().siblings().find("a").html("查看 >");


    }else{
        $(this).siblings(".blockClick").css("display","none");
        $(this).parent().find("img").css("display","none");
        $(this).html("查看 >");
    }

});


// 点击使用
$(".cakePages").on("click",function () {
    window.open("caketext.html")
});