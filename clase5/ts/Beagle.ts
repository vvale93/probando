import { Perro } from './Perro';

export class Beagle extends Perro
{
    constructor(nombre : string,
    public raza : string = 'Beagle')
    {
        super(nombre);
    }
    ladrar() : string
    {
        return 'lala';
    }
}