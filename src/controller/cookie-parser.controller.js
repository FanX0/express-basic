export const getCookieParser = (req, res) => {
  const name = req.cookies["name"];
  res.send(`Hello ${name}`);
};
