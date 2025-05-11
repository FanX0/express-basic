export const getResponseHeader = (req, res) => {
  res
    .set({
      "X-Powered-By": "Farid Azhari",
      "X-Author": "Farid",
    })
    .end();
};
