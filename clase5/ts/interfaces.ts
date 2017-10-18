interface INombrable
{
    nombre: string;
    saludar(): string;
}

class Persona implements INombrable
{
    public nombre: string;
    saludar(): string
    {
        return 'Hola, soy: ' +this.nombre;
    }
}

function saludar(n: INombrable): void
{
    alert('Hola, soy: '+ n.nombre);
}

interface IRaza
{
    raza: string;
}

let obj = 
{
    raza: 'Beagle' 
};