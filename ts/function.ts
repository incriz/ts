const fn1 = (num: number): string =>{
    return String(num)
}

type CallBack = (num :number) => string

function fn2(cb?: CallBack ){
    if(cb === undefined){
        cb = String;
    }

    cb(12)
}
function createPoint(x=0, y=0){}


interface Printable{
    label: string
}

function printReport(obj:  Printable): void{

}


function pickCard(x: number) : {suit: string; card: number}[];
function pickCard(x: {suit: string; card: number}[]) : number;
function pickCard(x) : any {
    if(typeof x === 'object'){
        let num = 5;
        return num * 2;
    } else if(typeof x === 'number'){
        return { siuts: '', card: x % 13}
    }   
}