const productos = [

    //mouses
    {
        id: "mouse-01",
        titulo: "Mouse Genius Ammox X1 400",
        imagen: "./img/mouses/mouse-genius-ammox-x1-400.webp",
        categoria: {
            nombre: "Mouses",
            id: "mouses"
        },
        precio: 3749
    },

    {
        id: "mouse-02",
        titulo: "Mouse Logitech Hero G 403",
        imagen: "./img/mouses/mouse-logitech-g403.webp",
        categoria: {
            nombre: "Mouses",
            id: "mouses"
        },
        precio: 16199,
    },

    {
        id: "mouse-03",
        titulo: "Mouse Logitech USB M 90",
        imagen: "./img/mouses/mouse-oficina.webp",
        categoria: {
            nombre: "Mouses",
            id: "mouses"
        },
        precio: 3499,
    },

    {
        id: "mouse-04",
        titulo: "Mouse Inalambrico Genius Nx 7000",
        imagen: "./img/mouses/mouse-oficina.webp",
        categoria: {
            nombre: "Mouses",
            id: "mouses"
        },
        precio: 4499,
    },

    //teclados
    {
        id: "teclado-01",
        titulo: "Teclado HyperX Alloys Core RGB ",
        imagen: "./img/teclados/teclado-hyperx-alloy-core-rgb.webp",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: 34999,
    },

    {
        id: "teclado-02",
        titulo: "Teclado Genius Slimstar 230",
        imagen: "./img/teclados/teclado-genius-slimstar-230.webp",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: 4350,
    },

    {
        id: "teclado-03",
        titulo: "Teclado Genius GX Scorpion K8",
        imagen: "./img/teclados/teclado-genius-gx-scorpion-k8.webp",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: 5300,
    },

    {
        id: "teclado-04",
        titulo: "Teclado HyperX Alloys FPS PRO",
        imagen: "./img/teclados/teclado-hyperx-alloys-fps-pro.webp",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: 19999,
    },

    //auriculares
    {
        id: "auricular-01",
        titulo: "Auricular Logitech Astro A10",
        imagen: "./img/auriculares/auris-astro-a10.webp",
        categoria: {
            nombre: "Auriculares",
            id: "auriculares"
        },
        precio: 14499,
    },

    {
        id: "auricular-02",
        titulo: "Auricular HyperX Cloud Stinger Core",
        imagen: "./img/auriculares/auris-hyperx-cloud-stinger-ps4.webp",
        categoria: {
            nombre: "Auriculares",
            id: "auriculares"
        },
        precio: 29999,
    },

    {
        id: "auricular-03",
        titulo: "Auricular Logitech H111",
        imagen: "./img/auriculares/auris-logitech-h111.webp",
        categoria: {
            nombre: "Auriculares",
            id: "auriculares"
        },
        precio: 5999,
    },

    {
        id: "auricular-04",
        titulo: "auricular genius Hs- G560",
        imagen: "./img/auriculares/genius-hs-g560.webp",
        categoria: {
            nombre: "Auriculares",
            id: "auriculares"
        },
        precio: 8300,
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
    <img  class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalle">
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">$${producto.precio}</p>
        <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
    `;

        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito = [];
function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    productosEnCarrito.push(productoAgregado);
}