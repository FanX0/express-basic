export const getRequestQuery = (req, res) => {
  res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
};
