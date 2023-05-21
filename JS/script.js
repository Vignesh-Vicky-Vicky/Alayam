$(function () {
  const $hamburgerBtn = $("header .hamburger");
  const $hamburgerMenu = $("header ul.nav-links");
  const $form = $("form.contact-form");

  // Hamburger
  $hamburgerBtn.on("click", function () {
    $(this).toggleClass("active");
    $hamburgerMenu.toggleClass("active");
  });

  $hamburgerMenu.find("li a").on("click", function () {
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
    $hamburgerBtn.removeClass("active");
    $hamburgerMenu.removeClass("active");
  });
  
  // Form Data
  $form.on("submit", function (e) {
    e.preventDefault();
    const formData = $(this).serializeArray();
    const formValue = {
      name: "",
      email: "",
      class: "",
      requirement: "",
    };
    if (formData.length) {
      formValue.name = formData[0].value;
      formValue.email = formData[1].value;
      formValue.class = formData[2].value;
      formValue.requirement = formData[3].value;
      sendFormData(formValue);
    }
  });

  function sendFormData(formData) {
    $form.find(".message").hide();
    $.ajax({
      type: "POST",
      url: "", //Add API URL here
      dataType: "json",
      data: JSON.stringify(formData),
      success: (res) => {
        $form[0].reset();
        $form.find(".success").show();
      },
      error: (err) => {
        $form.find(".error").show();
      },
    });
  }
});
