import React from 'react'

export interface Jawaban {
    id: string,
    confidence: number,
}

interface JwbContext {
    jawaban: Jawaban[],
    tambahJawaban: (jawaban: Jawaban) => void,
    gantiJawaban: (jawaban: Jawaban) => void,
}

export const JawabanContext = React.createContext<JwbContext>({
    jawaban: [],
    tambahJawaban: () => {},
    gantiJawaban: () => {},
})