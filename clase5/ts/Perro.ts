export abstract class Perro
{
    constructor(public nombre : string)
    {
    }
    public ladrar() : string
    {
        return 'GUAU';
    }
}