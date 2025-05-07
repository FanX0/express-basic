export const getRequestHeader = (req, res) => {
  const type = req.get("accept");
  res.send(`Hello ${type}`);
};
