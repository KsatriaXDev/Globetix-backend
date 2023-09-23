const express = require("express");
const app = express();

app.get("/java", (req, res) => {
  return res.status(200).json({
    code: 200,
    status: "Success",
    data: [
      {
        id: 1,
        title: "Monas - Jakarta",
        thumbnail: "https://freeimghost.net/images/2023/09/17/Monas1.jpeg",
        link: "/java/monas",
      },
      {
        id: 2,
        title: "Taman Safari - Jakarta",
        thumbnail:
          "https://freeimghost.net/images/2023/09/17/Tamansafari1.jpeg",
        link: "/java/taman-safari",
      },
      {
        id: 3,
        title: "Bromo - DIY Yogyakarta",
        thumbnail: "https://freeimghost.net/images/2023/09/17/Bromo1.jpeg",
        link: "/java/bromo",
      },
      {
        id: 4,
        title: "Borobudur - DIY Yogyakarta",
        thumbnail: "https://freeimghost.net/images/2023/09/17/Borobudur1.jpeg",
        link: "/java/candi-borobudur",
      },
    ],
  });
});

app.listen(3001, () => {
  console.clear();
  console.log("Server running on http://localhost:3001");
});
