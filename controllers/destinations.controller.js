const db = require("../models");

const getAll = async (req, res, next) => {
  try {
    const data = await db.destinations.findAll({
      include: [
        {
          model: db.regions,
          as: "Region",
        },
      ],
    });
    return res.status(200).json({
      code: 200,
      status: "OK",
      data: data,
    });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({
      code: 500,
      status: "Internal Server Error",
      message: err.message,
    });
  }
};

module.exports = {
  getAll,
};
