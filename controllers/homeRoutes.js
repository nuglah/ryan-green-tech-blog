const router = require("express").Router();
const { Blog } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      // attributes: { exclude: ["password"] },
      order: [["date_created", "ASC"]],
    });

    // const usblogsers = userData.map((project) => project.get({ plain: true }));
    console.log("blogs: ", blogs);

    res.render("homepage", {
      blogs,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
