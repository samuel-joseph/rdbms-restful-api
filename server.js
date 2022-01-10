const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRoutes = require("./routes/user-routes");
app.use("/api/users", userRoutes);

const profileRoutes = require("./routes/profile-routes");
app.use("/api/profiles", profileRoutes);

const postRoutes = require("./routes/post-routes");
app.use("/api/posts", postRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`);
  });
});
