export const addPoweredHeaderMiddleware = (req, res, next) => {
  res.set("X-Powered-By", "Farid Azhari");
  next();
};
