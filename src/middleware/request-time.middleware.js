export const requestTimeMiddleware = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};
