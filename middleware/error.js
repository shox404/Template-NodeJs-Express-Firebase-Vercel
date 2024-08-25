const error = (err, req, res, next) => {
  console.error(err);

  return res.status(500).json({ error: "Internal server error!" });
};

module.exports = error;
