import React, { useState } from 'react'
import { ConfidenceSifat, Jawaban, JawabanContext } from './jawaban-context'

const JawabanContextProvider: React.FC = props => {
    const [jawaban, setJawaban] = useState<Jawaban[]>([])
    const [confidenceSifat, setConfidenceSifat] = useState<ConfidenceSifat[]>([])

    const updateJawaban = (jawab: Jawaban) => {
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

    const updateConfidenceSifat = (confidence: ConfidenceSifat) => {
        console.log(`Nama: ${confidence.nama}`)
        console.info(confidenceSifat)
        setConfidenceSifat((data) => {
            const idxCfd = data.findIndex(e => e.nama === confidence.nama)
            if(idxCfd != -1){
                console.log("sdh ada")
                data[idxCfd].confidence = confidence.confidence
                return data
            }
            else{
                console.log("concat")
                return data.concat(confidence)
            } 
        })
    }

    return (
        <JawabanContext.Provider value={{
            jawaban,
            confidenceSifat,
            updateJawaban,
            updateConfidenceSifat,
        }}>
            {props.children}
        </JawabanContext.Provider>
    )
}

export default JawabanContextProvider