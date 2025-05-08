export const requestTime = (req, res) => {
  res.send(`Hello, Today Is ${req.requestTime}`);
};
