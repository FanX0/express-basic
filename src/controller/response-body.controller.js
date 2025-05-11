export const getResponseBody = (req, res) => {
  res.set("Content-Type", "text/html");
  res.send("<html><head><title>Hello Farid</title></head></html>");
};
