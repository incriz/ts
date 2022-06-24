// списки
const arr = ['a', 'b', 'c']
const arr1: Array<number> = [1, 2]

const arr2: string[][] = []
arr2.push(['a', 'b'])

// const arr3: (string | number)[] = [] 
type Mytype = (string | number)
const arr3: Mytype[] = []

// кортежи
const tuple1: [string, boolean, number] = ['abc', true, 2]

// csv
type SimpleCsv = [string, string, number]
const example: SimpleCsv[] = [
    ['str', 'st', 2]
]

// const example: [string, string, number][] = [
//     ['str', 'st', 2]
// ]


