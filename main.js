alert('Bienvenido a Last Game');

const comprarProductos = () => {
    let producto = '';
    let cantidad = 0;
    let precio = 0;
    let subtotal = 0;
    let seguirComprando = true;

    do {
        producto = prompt('¿Que producto deseas comprar, mouse, teclado, auricular o todos?');

        console.log(producto);
        console.log(cantidad);

        switch (producto) {
            case 'mouse':
                cantidad = Number(prompt('¿Cuantos mouses queres comprar?'));
                alert('Compraste mouse, el precio de la unidad es $4.500')
                subtotal += 4500 * cantidad;
                break;
            case 'teclado':
                cantidad = Number(prompt('¿Cuantos teclados queres comprar?'));
                alert('Compraste teclado, el precio de la unidad es $10.000')
                subtotal += 10000 * cantidad;
                break;
            case 'auricular':
                cantidad = Number(prompt('¿Cuantos auriculares queres comprar?'));
                alert('Compraste auricular, el precio de la unidad es $15.000')
                subtotal += 15000 * cantidad;
                break;
            case 'todos':
                const precioMouse = 4500;
                const precioTeclado = 10000;
                const precioAuricular = 15000;
                const cantidadMouse = Number(prompt('¿Cuántos mouse quieres comprar?'));
                const cantidadTeclado = Number(prompt('¿Cuántos teclados quieres comprar?'));
                const cantidadAuricular = Number(prompt('¿Cuántos auriculares quieres comprar?'));

                subtotal += (precioMouse * cantidadMouse) + (precioTeclado * cantidadTeclado) + (precioAuricular * cantidadAuricular);
                break;
            default:
                if (producto !== null) {
                    alert('El producto no se encuentra en el catálogo');
                }

        }
        console.log(subtotal);
        if (producto !== 'todos') {
            seguirComprando = confirm('¿Seguir comprando?');
        } else {
            seguirComprando = false; // Termina el bucle después de "todos"
        }

    } while (seguirComprando);

    alert(`El precio total de la compra es: $${subtotal}`);
}

comprarProductos();