export const getResponseRedirect = (req, res) => {
  res.redirect("/to-next-page");
  //res.redirect(301, "/to-next-page")
  //res.redirect("https://www.youtube.com")
};
