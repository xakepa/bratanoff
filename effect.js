$("#administrative").on("click", function () {
    $(".wrap, a").toggleClass("active");

    return false;
  });

  $(document).ready(function(){
$(".view-btn").click(function(){
    $(this).text($(this).text() == 'скрий текста' ? 'Покажи повече' : 'скрий текста');
});
});