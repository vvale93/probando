interface INombrable
{
    nombre: string;
}

class Persona implements INombrable
{
    public nombre: string;
}

function saludar(n: INombrable): void
{
    alert('Hola, soy: '+ n.nombre);
}