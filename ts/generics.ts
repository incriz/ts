const valueFactory = (x: number) => x;
const myValue = valueFactory(11);

type TypeFactory<X> = X;
type MyType = TypeFactory<string>


interface ValueContainer <Value>{
    value: Value;
}

type StringContainer = ValueContainer<string>

const x: StringContainer = {
    value: 'asd'
}

// class ArrayOfNumbers {
//     constructor(public collection: number[]){}

//     get(index: number): number{
//         return this.collection[index]
//     }
// }

// class ArrayOfStrings{
//     constructor(public collection: string[]) {}

//     get(index: number): string{
//         return this.collection[index]
//     }
// }

class ArrayOfAnything<Type>{
    constructor(public collection: Type[]){}

    get(index: number): Type{
        return this.collection[index]
    }
}

new ArrayOfAnything<string>(['1', '2', '3'])
new ArrayOfAnything<number>([1, 2, 3])


function printString(arr: string[]): void{
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

function printNumbers(arr: number[]): void{
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

function printAnything<T>(arr: T[]): void{
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

printAnything<number>([1,2,3])

function fillArray<T>(len: number, elem: T): T[]{
    return new Array<T>(len).fill(elem)
}

const array1 = fillArray<string>(10, '*')

interface Array<T>{
    concat(...items: Array<T[] | T>): T[];
    reduce<U>(
        callBack: (state: U, element: T, index: number, array: T[]) => U,
        firstState?: U
        ): U
}


interface LengthWise{
    length: number;
}

function printLength<T extends LengthWise>(arg: T): number{
    return arg.length;
}

// printLength('1')

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key]
}

const myObj = {
    a: 1,
    b: 2,
    c: 3,
}

// K === 'a','b','c'

getProperty(myObj, 'a')

