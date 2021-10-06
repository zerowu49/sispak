import React, { useState } from 'react'
import { Pernyataan, PernyataanContext } from './pernyataan-context'

const PernyataanContextProvider: React.FC = props => {
    const [pernyataan, setPernyataan] = useState<Pernyataan[]>([
        {
            id: 'P1',
            pernyataan: 'Saya harus lebih baik dari orang lain',
            value: 0.291
        },
        {
            id: 'P2',
            pernyataan: 'Kekuasaan merupakan keinginan saya',
            value: 0.321
        },
        {
            id: 'P3',
            pernyataan: 'Saya mudah marah.',
            value: 0.318
        },
        {
            id: 'P4',
            pernyataan: 'Saya suka ketika orang takut pada saya.',
            value: 0.311
        },
    ])

    const tambahPernyataan = (data: Pernyataan) => {
        setPernyataan((dataSekarang) => {
            return dataSekarang.concat(data)
        })
    }
    
    return (
        <PernyataanContext.Provider value={{
            pernyataan,
            tambahPernyataan,
        }}>
            {props.children}
        </PernyataanContext.Provider>
    )
}

export default PernyataanContextProvider