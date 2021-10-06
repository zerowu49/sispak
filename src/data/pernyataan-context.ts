import React from 'react'

export interface Pernyataan {
    id: string,
    pernyataan: string,
    value: number,
}

interface PytContext {
    pernyataan: Pernyataan[],
    tambahPernyataan: (pernyataan: Pernyataan) => void,
}

export const PernyataanContext = React.createContext<PytContext>({
    pernyataan: [],
    tambahPernyataan: () => {},
})