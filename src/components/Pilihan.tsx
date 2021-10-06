import { IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio } from "@ionic/react"
import { useContext } from "react"
import { Jawaban, JawabanContext } from "../data/jawaban-context"
import { PernyataanContext } from "../data/pernyataan-context"

const Pilihan: React.FC<{id: string}> = props => {
    const pytData = useContext(PernyataanContext)
    const jwbData = useContext(JawabanContext)

    const pernyataan = pytData.pernyataan.find(e => e.id === props.id)
    const jawaban = jwbData.jawaban.find(e => e.id === props.id)

    const pilihJawaban = (value: number) => {
        let jawaban: Jawaban = {
            id: props.id,
            confidence: value
        }
        console.info(jawaban)
        jwbData.tambahJawaban(jawaban)
    }

    return (
        <>
            <IonRadioGroup value={jawaban?.confidence} onIonChange={e=> pilihJawaban(e.detail.value)}>
                <IonListHeader>
                    <h1 className="ion-text-center">{pernyataan?.pernyataan}</h1>
                </IonListHeader>

                <IonItem>
                    <IonLabel>Sangat tidak setuju</IonLabel>
                    <IonRadio slot="start" value={0} />
                </IonItem>

                <IonItem>
                    <IonLabel>Tidak setuju</IonLabel>
                    <IonRadio slot="start" value={0.25} />
                </IonItem>

                <IonItem>
                    <IonLabel>Mungkin</IonLabel>
                    <IonRadio slot="start" value={0.5} />
                </IonItem>

                <IonItem>
                    <IonLabel>Setuju</IonLabel>
                    <IonRadio slot="start" value={0.75} />
                </IonItem>

                <IonItem>
                    <IonLabel>Sangat Setuju</IonLabel>
                    <IonRadio slot="start" value={1} />
                </IonItem>
            </IonRadioGroup>
            
        </>
    )
}

export default Pilihan