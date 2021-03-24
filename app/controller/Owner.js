const Owner = require("../models/owner");

module.exports = {
  create: async (req, res) => {
    const { name, phone, city } = req.body;
    const owner = await Owner.create({
      name,
      phone,
      city,
    });
    res.status(200).send(owner);
  },
  find: async (req, res) => {
    const owner = await Owner.find();
    return res.send(owner);
  },
  carByOwner: async (req, res) => {
    const { id } = req.param;
    const owner = await (await Owner.findById(id)).populate("Car");
    res.send(owner.Car);
  },
};
