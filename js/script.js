$("#circle").hover(
  function() {
    $(this).append($("<h3>Sabiha Mumcu</h3>"));
  },
  function() {
    $(this)
      .find("h3:last")
      .remove();
  }
);
