$(function () {
  let lastId,
    topMenu = $(".nav-links"),
    topMenuHeight = topMenu.outerHeight() + 10,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
      let item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  $(window).scroll(function () {
    let fromTop = $(this).scrollTop() + topMenuHeight;

    let cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop) return this;
    });
    cur = cur[cur.length - 1];
    let id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      menuItems
        .parent()
        .removeClass("active")
        .end()
        .filter("[href='#" + id + "']")
        .parent()
        .addClass("active");
    }

    if (fromTop === 39 || fromTop < 50) {
      $(".nav-links").find("li").eq(0).addClass("active");
    }
  });
});
