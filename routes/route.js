const router = require("express").Router();

router.get("/", (_, res) => {
  return res.status(200).json({ message: "Hi" });
});

router.post("/", (req, res) => {
  const data = req.body;

  // add to database

  return res.status(201).json(data);
});

router.put("/:id", (req, res) => {
  const data = req.body;
  const id = req.params.id;

  // find and update data

  return res.status(204).json({ data, id });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  // find and delete data

  return res.status(204).json(id);
});

module.exports = router;
