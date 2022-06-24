type MyObj = {
  name: string;
  age: number;
  job: string;
};

interface MyObject {
  name: string;
  readonly age: number;
  job: string;
  // print(): number
  // print?: () => number;
  [key: string]: number | string;
}

const obj: MyObj = { name: "Tolik", age: 22, job: "Frontend" };

const obj1: MyObject = {
  name: "Tolik",
  age: 22,
  job: "Frontend",
  asdas: "asdasd",
  asda: 12,
};

interface IPerson {
  name: string;
}
interface IPerson {
  age: number;
}

interface IAccount {
  email: string;
  login: string;
  status: boolean;
}
interface IDeveloper extends IPerson, IAccount {
  skills: string[];
  level?: string;
}

const jonh: IDeveloper = {
  name: "",
  age: 22,
  email: "",
  login: "",
  status: false,
  skills: ["js", "ts"],
};

// type Person = {
//   name: string;
// };
// type Person = {
//   age: number;
// };

type Person = {
    age: number;
  }

type Account = {
  email: string;
  login: string;
  status: boolean;
};

type MyDev = {
  skills: string[];
  level?: string; 
}

type Frontend = Person & Account & MyDev;

const devArr: Frontend[] = []