console.log("Your index.js file is loaded correctly!");
$(".download-button").on("mouseenter",function(){
    $(this).addClass("hover")
})
$(".download-button").on("mouseleave",function(){
    $(this).removeClass("hover")
})