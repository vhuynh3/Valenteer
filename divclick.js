$(document).delegate("div", "click", function() {
    window.location = $(this).find("a").attr("href");
 });