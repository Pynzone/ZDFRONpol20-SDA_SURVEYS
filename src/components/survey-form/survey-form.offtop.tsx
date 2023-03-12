// Krotka jednoelementowa gdzie na pierwszym miejscu znajduje sie element typu number => [number]

import { FormData } from "./survey-form";

// Tablica dowolnej długości tylko elementów typu number => number[]
type Tab<T> = T[];
type Tuple<T, K> = [T, K]

const tuple: Tuple<string, boolean> = ['4', false]
const numbers: Tab<number> = [4, 5, 67]

// Tablica typu number
const number2: number[] = [3, 5, 3]

// Krotka
const number3: [number] = [3]

interface Sample {
    name: string;
    quantity: number;
    price: number;
}

const sample: Sample = {
    name: 'Tv',
    quantity: 5,
    price: 324.42
};

// Złe - bo przekazujemy przez referencje
const getFormInitialDataWrong: FormData = ({
    name: 'Jan',
    surname: 'Kowalski',
    gender: 'male'
})

// Dobre - bo tworzymy nowy obiekt
const getFormInitialData = (): FormData => ({
    name: 'Jan',
    surname: 'Kowalski',
    gender: 'male'
})

const newSample: Sample = sample
const newName: string = sample.name
const {name: newName2, price, quantity }= sample;
//console.log(newName2)

// setValue('new value')
// setValue(oldValue => 'new value')

export default 'Offtop'