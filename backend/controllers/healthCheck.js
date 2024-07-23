const healthCheck = (req, res) => {
  res.status(200).send('Healthy');
};

module.exports = { healthCheck };