export const getRequestBody = (req, res) => {
  const name = req.body.name;
  res.json({ hello: `Hello ${name}` });
};
