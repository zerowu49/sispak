import React, { useState } from 'react'
import { Pernyataan, PernyataanContext } from './pernyataan-context'

const PernyataanContextProvider: React.FC = props => {
    const [pernyataan, setPernyataan] = useState<Pernyataan[]>([
        // Choleris
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
        {
            id: 'P5',
            pernyataan: 'Saya tidak suka menyenangkan orang lain',
            value: 0.272,
        },
        //Melancholis
        {
            id: 'P6',
            pernyataan: 'Saya sering cemas',
            value: 0.302,
        },
        {
            id: 'P7',
            pernyataan: 'Orang lain sering mencemooh/menjelekkan saya',
            value: 0.308,
        },
        {
            id: 'P8',
            pernyataan: 'Saya takut sendirian',
            value: 0.313,
        },
        {
            id: 'P9',
            pernyataan: 'Saya sering merasakan sedih',
            value: 0.284,
        },
        {
            id: 'P10',
            pernyataan: 'Saya sakit hati saat dicemooh orang lain',
            value: 0.282,
        },
        //Phlegmatis
        {
            id: 'P11',
            pernyataan: 'Sulit untuk mengontrol emosi saya',
            value: 0.27,
        },
        {
            id: 'P12',
            pernyataan: 'Saya selalu mengambil cara yang simpel/mudah',
            value: 0.295,
        },
        {
            id: 'P13',
            pernyataan: 'Hubungan dengan teman merupakan hal yang penting',
            value: 0.267,
        },
        {
            id: 'P14',
            pernyataan: 'Suasana damai adalah suasana yang saya dambakan.',
            value: 0.273,
        },
        // Sangunis
        {
            id: 'P15',
            pernyataan: 'Teman teman merasa bahagia saat saya ada.',
            value: 0.308,
        },
        {
            id: 'P16',
            pernyataan: 'Bergembira merupakan hal utama.',
            value: 0.341,
        },
        {
            id: 'P17',
            pernyataan: 'Saya mudah berteman.',
            value: 0.28,
        },
        {
            id: 'P18',
            pernyataan: 'Hal yang berulang membuat saya bosan.',
            value: 0.284,
        },
        {
            id: 'P19',
            pernyataan: 'Saya membuat orang merasa diterima.',
            value: 0.282,
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