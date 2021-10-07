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
    updateJawaban: (jawaban: Jawaban) => void,
    updateConfidenceSifat: (cfd: ConfidenceSifat) => void,
}

export const JawabanContext = React.createContext<JwbContext>({
    jawaban: [],
    confidenceSifat: [],
    updateJawaban: () => {},
    updateConfidenceSifat: () => {},
})