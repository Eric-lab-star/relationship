export const home = (req, res) => {
  return res.render("videos/home");
};
export const watch = (req, res) => {
  return res.render("videos/home");
};

export const getUpload = (req, res) => {
  return res.render("videos/upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const {
    body: { title, description },
    file,
  } = req;
  console.log(title, description, file);
  return res.redirect("/");
};

export const getSearch = (req, res) => {
  return res.render("videos/search");
};
