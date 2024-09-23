const productos = [ 
{ id: 1, nombre: "Producto 1", precio: "$10", imagen: "categoria1.jpg", categoria: 1, descripcion: "Descripción del Producto 1" }, 
{ id: 2, nombre: "Producto 2", precio: "$20", imagen: "categoria2.jpg", categoria: 2, descripcion: "Descripción del Producto 2" }, 
{ id: 3, nombre: "Producto 3", precio: "$30", imagen: "categoria3.jpg", categoria: 3, descripcion: "Descripción del Producto 3" }, 
]; 

function cargarProductos(categoria = null) { 
    const productosContainer = document.getElementById('productos-container'); 
    productosContainer.innerHTML = ''; 
    
    const productosFiltrados = categoria 
    ? productos.filter(producto => producto.categoria === categoria) 
    : productos; 
    
    productosFiltrados.forEach(producto => { 
        const productoHTML = ` 
        <div class="col-md-4"> 
            <div class="card mb-4 shadow-sm"> 
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}"> 
                <div class="card-body"> 
                    <h5 class="card-title">${producto.nombre}</h5> 
                    <p class="card-text">Precio: ${producto.precio}</p> 
                    <a href="product.html?id=${producto.id}" class="btn btn-primary">Ver producto</a> 
                </div> 
            </div> 
        </div> 
        `; 
        productosContainer.innerHTML += productoHTML; 
    }); 
} 
function filtrarPorCategoria(categoria) { 
    cargarProductos(categoria); 
} 
function cargarDetalleProducto() { 
    const params = new URLSearchParams(window.location.search); 
    const idProducto = parseInt(params.get('id')); 
    const producto = productos.find(p => p.id === idProducto); 
    
    if (producto) { 
        const detalleHTML = ` 
        <div class="col-md-6"> 
            <img src="${producto.imagen}" class="img-fluid" alt="${producto.nombre}"> 
        </div> 
        <div class="col-md-6"> 
            <h1>${producto.nombre}</h1> 
            <p>${producto.descripcion}</p> 
            <p>Precio: ${producto.precio}</p> 
            <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button> 
        </div> 
        `; 
        document.getElementById('producto-detalle').innerHTML = detalleHTML; 
    } 
} 
function agregarAlCarrito(id) { 
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []; 
    carrito.push(id); 
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    alert('Producto agregado al carrito'); 
} 
function cargarCarrito() { 
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []; 
    const carritoContainer = document.getElementById('carrito-container'); 
    carritoContainer.innerHTML = ''; 
    
    if (carrito.length > 0) { 
        carrito.forEach(id => { 
            const producto = productos.find(p => p.id === id); 
            const productoHTML = ` 
            <div class="col-md-4"> 
                <div class="card mb-3"> 
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}"> 
                    <div class="card-body"> 
                        <h5 class="card-title">${producto.nombre}</h5> 
                        <p class="card-text">Precio: ${producto.precio}</p> 
                        <button class="btn btn-danger" onclick="eliminarDelCarrito(${id})">Eliminar</button> 
                    </div> 
                </div> 
            </div> 
            `; 
            carritoContainer.innerHTML += productoHTML; 
        }); 
    } else { 
        carritoContainer.innerHTML = '<p>El carrito está vacío.</p>'; 
    } 
} 
function eliminarDelCarrito(id) { 
    let carrito = JSON.parse(localStorage.getItem('carrito')) || []; 
    carrito = carrito.filter(productoId => productoId !== id); 
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    cargarCarrito(); 
} 
function vaciarCarrito() { 
    localStorage.removeItem('carrito'); 
    cargarCarrito(); 
} 
document.addEventListener('DOMContentLoaded', () => { 
    if (document.getElementById('productos-container')) { 
        cargarProductos(); 
    } 
    
    if (document.getElementById('carrito-container')) { 
        cargarCarrito(); 
    } 
    
    if (document.getElementById('producto-detalle')) { 
        cargarDetalleProducto(); 
    } 
});
