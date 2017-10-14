class ArticuloLibreria {
    constructor(nombre, precio, marca){
        this.nombre=nombre;
        this.precio=precio;
        this.marca=marca;
        this.tipoDeArticulo = "Sin definir";
    }
    consultarPrecio(){
        console.log("El precio es: "+ this.precio);
    }
    descripcion(){
        console.log(this.nombre+"("+this.marca+"): "+this.precio);
    }
}

class Cuaderno extends ArticuloLibreria{
    constructor(nombre, precio, marca, cantidadDehojas){
        super(nombre, precio, marca);
        this.cantidadDehojas = cantidadDehojas;
        }
    descripcion(){
        super.descripcion();
        console.log("Cantidad de hojas: "+this.cantidadDehojas);
    }
    }
class Resaltador extends ArticuloLibreria{
    constructor(nombre, precio, marca, color){
        super(nombre, precio, marca);
        this.color=color;
    }
    descripcion(){
        super.descripcion();
        console.log("Color: "+this.color);
    }
}

var a = new Cuaderno ('Cuaderno', 40, 'AmericaNos', 80);
a.consultarPrecio();
a.descripcion();
var b = new Resaltador ('Resaltador', 20, 'Filgo', 'Rosa');
a.descripcion();
