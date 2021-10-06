import React, { useState } from 'react'
import { Jawaban, JawabanContext } from './jawaban-context'

const JawabanContextProvider: React.FC = props => {
    const [jawaban, setJawaban] = useState<Jawaban[]>([])

    const tambahJawaban = (jawab: Jawaban) => {
        setJawaban((jwbnSekarang) => {
            return jwbnSekarang.concat(jawab)
        })
    }

    const gantiJawaban = (jawaban: Jawaban) => {
        console.log("ganti jawaban")
    }

    return (
        <JawabanContext.Provider value={{
            jawaban,
            tambahJawaban,
            gantiJawaban,
        }}>
            {props.children}
        </JawabanContext.Provider>
    )
}

export default JawabanContextProvider