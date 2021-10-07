import React from 'react'

export interface Jawaban {
    id: string,
    confidence: number,
}

export interface ConfidenceSifat{
    nama: string,
    confidence: number,
}

interface JwbContext {
    jawaban: Jawaban[],
    confidenceSifat: ConfidenceSifat[],
    tambahJawaban: (jawaban: Jawaban) => void,
}

export const JawabanContext = React.createContext<JwbContext>({
    jawaban: [],
    confidenceSifat: [],
    tambahJawaban: () => {},
})