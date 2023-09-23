const db = require("../models");

const getAll = async (req, res, next) => {
  try {
    const data = await db.orders.findAll({
      include: [
        {
          model: db.destinations,
          as: "Destination",
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

const getByUserId = async (req, res, next) => {
  try {
    const uid = req.uid;
    const data = await db.orders.findAll({
      where: {
        uid,
      },
      include: [
        {
          model: db.destinations,
          as: "Destination",
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

const create = async (req, res, next) => {
  try {
    const uid = req.uid;
    const requestBody = req.body;

    const data = await db.orders.save({
      id: null,
      fullName: requestBody.fullName,
      address: requestBody.address,
      email: requestBody.email,
      phoneNumber: requestBody.phoneNumber,
      departureDate: requestBody.departureDate,
      tour: requestBody.tour,
      uid,
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
  getByUserId,
  create,
};
