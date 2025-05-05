import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// HTTP Method: GET (Mengambil data)
app.get("/users", (req, res) => {
  res.send("Daftar user");
});

// HTTP Method: POST (Menambah data)
app.post("/users", (req, res) => {
  const newUser = req.body;
  res.send(`User ditambahkan: ${JSON.stringify(newUser)}`);
});

//HTTP Method: PUT (Mengubah seluruh data)
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User dengan ID ${id} diubah sepenuhnya`);
});

// HTTP Method: DELETE (Menghapus data)
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User dengan ID ${id} dihapus`);
});

// HTTP Method: OPTIONS (Menampilkan opsi yang tersedia)
app.options("/users", (req, res) => {
  res.set("Allow", "GET, POST, OPTIONS").send();
});

// 7. HTTP Method: TRACE (Jarang digunakan)
app.trace("/trace-example", (req, res) => {
  res.send("TRACE method received");
});

// 8. HTTP Method: HEAD (Hanya mengembalikan header tanpa body)
app.head("/info", (req, res) => {
  res.set("Custom-Header", "value").end();
});

// 9. HTTP Method: PATCH (Mengubah sebagian data)
app.patch("/users/:id", (req, res) => {
  const id = req.params.id;
  res.send(`User dengan ID ${id} diupdate sebagian`);
});

// 10. app.all() menangani semua method
app.all("/universal", (req, res) => {
  res.send(`Request diterima dengan method: ${req.method}`);
});
