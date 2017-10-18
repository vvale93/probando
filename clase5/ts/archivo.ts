let miString: string = 'hola';

miString = 'hola si';
miString = 1;

let miNumero = 5;
miNumero = 10;

let miBooleano: boolean = true;

function suma( a: number, b:number):number
{
    return a+b;
}
suma(1,2);
//suma('a'+'b');
let miArrayDeNumeros: number[] = [1, 2, 3];
let miArrayDeNumeros2: Array<Number> = [1, 2, 3];
function agregarUnArray(arr:Array<number>, element:number):void
{
    arr.push(element);
}