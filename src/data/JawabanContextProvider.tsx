import React, { useState } from 'react'
import { ConfidenceSifat, Jawaban, JawabanContext } from './jawaban-context'

const JawabanContextProvider: React.FC = props => {
    const [jawaban, setJawaban] = useState<Jawaban[]>([])
    const [confidenceSifat, setConfidenceSifat] = useState<ConfidenceSifat[]>([])

    const tambahJawaban = (jawab: Jawaban) => {
        setJawaban((_) => {
            const idxJwbn = jawaban.findIndex(e => e.id === jawab.id)
            if(idxJwbn != -1){
                jawaban[idxJwbn].confidence = jawab.confidence
                return jawaban
            }
            else{
                return jawaban.concat(jawab)
            }
        })
    }

    return (
        <JawabanContext.Provider value={{
            jawaban,
            confidenceSifat,
            tambahJawaban,
        }}>
            {props.children}
        </JawabanContext.Provider>
    )
}

export default JawabanContextProvider