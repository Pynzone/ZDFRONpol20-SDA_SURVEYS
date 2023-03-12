// Krotka jednoelementowa gdzie na pierwszym miejscu znajduje sie element typu number => [number]
// Tablica dowolnej długości tylko elementów typu number => number[]
type Tab<T> = T[];
type Tuple<T, K> = [T, K]

const tuple: Tuple<string, boolean> = ['4', false]
const numbers: Tab<number> = [4, 5, 67]

// Tablica typu number
const number2: number[] = [3, 5, 3]

// Krotka
const number3: [number] = [3]

export default 'Offtop'