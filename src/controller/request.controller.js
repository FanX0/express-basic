export const getRequest = (req, res) => {
  res.send(`Hello ${req.query.name}`);
};
