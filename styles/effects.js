$("#administrative").on("click", function () {
  $(".wrap, a").toggleClass("active");

  return false;
});

$(document).ready(function () {
  $(".view-btn").click(function () {
    $(this).text(
      $(this).text() == "скрий текста" ? "Покажи повече" : "скрий текста"
    );
    $(this).toggleClass("btn-active");
    // $(".wrap, a").toggleClass("active"); this toggle all .wrap page
  });
});

$(".tips").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".protect-your-rights").offset().top,
    },
    "slow"
  );
});

$(".go-to-laws").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".types-laws").offset().top,
    },
    "slow"
  );
});

$(".go-to-top").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".header").offset().top,
    },
    "slow"
  );
});

$(".about").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".presentation").offset().top,
    },
    "slow"
  );
});

function YNconfirm() {
  if (
    window.confirm(
      "Ще бъдете прехвърлен към друг сайт. Желаете ли да продължите?"
    )
  ) {
    window.location.href = "https://lex.bg/laws/tree/laws";
  }
}
