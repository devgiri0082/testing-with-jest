const app = require("./index");
const mongoose = require("mongoose");

const PORT = 3310;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
