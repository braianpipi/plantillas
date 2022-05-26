const Contenedor = require("../contenedor");
const { Router } = require("express");
const router = Router();

let contenedor = new Contenedor();

// app.get('/', (req,res)=>{
//     res.render('./views/layouts/index.ejs', {contenedor})
// })

// * GET '/api/productos' ->devuelve todos los productos.
router.get("/", (req, res) => {
  // function tieneProductos (productos) {
  //   if (productos.length == 0) {
  //     true;
  //   } else {
  //     false;
  //   }
  // }
  let productos = contenedor.getAll();
  // let conProductos = tieneProductos(productos)
    // console.log(conProductos)
    res.render("../views/partials/principal.hbs",{productos, productos})
});

// * POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
router.post("/productos", (req, res) => {
  const  producto  = req.body;
  console.log(producto)
  contenedor.save(producto);
  res.redirect('/')
});
router.get('/productos',(req, res)=>{
    let productos = contenedor.getAll();
    res.render('../views/partials/tablaProductos.hbs', {productos: productos})
})
// * GET '/api/productos/:id' -> devuelve un producto segun su Id.
// router.get("/:id", (req, res) => {
//   const idBuscado = req.params;
//   let productoBuscado = contenedor.getById(idBuscado.id);
//   res.json({producto : productoBuscado})
// });
// * DELETE '/api/productos/:id' -> elimina un productos segun su id.
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id)
//   const productoEliminado =contenedor.deleteById(id)
//   // const productoEliminado = contenedor.splice(contenedor(Number(id.id) - 1, 1));
//   res.json({ Eliminada: productoEliminado });
// });

module.exports = router;