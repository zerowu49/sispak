import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Pilihan from '../components/Pilihan';
import { JawabanContext } from '../data/jawaban-context';
import { PernyataanContext } from '../data/pernyataan-context';
import { RuleContext } from '../data/rule-context';

const Check: React.FC = () => {
  const [tahap, setTahap] = useState(1)
  const pytData = useContext(PernyataanContext)
  const jwbData = useContext(JawabanContext)
  const ruleData = useContext(RuleContext)
  const history = useHistory()

  const listPernyataan = pytData.pernyataan.map(pyt => {
    if(ruleData.rule[tahap-1].member.includes(pyt.id))
      return (<Pilihan id={pyt.id}></Pilihan>)
  })
  console.info(`${jwbData.jawaban}`)

  const fungsiSubmit = () => {
    /// Cek apakah semua data sudah dimasukkan
    console.info(`${jwbData.jawaban}`)
    if (jwbData.jawaban.length < 19){
      return
    }
    

    /// Kalkulasi jawaban

    // Ambil list jawaban
    jwbData.jawaban.forEach(jawab => {
      // Temukan nilai confidence
      const pyt = pytData.pernyataan.find(e => e.id === jawab.id)
      console.info(`pyt: ${pyt?.value}`)

      // Hitung nilai cf awal
      const cfAwal = jawab.confidence * (pyt?.value as number)
      console.info(`cfAwal: ${cfAwal}`)

      // 
    })

    // Redicect
    history.push('/page/Result')
  }

  console.info(`tahap: ${tahap}`)

  const tombolBalik = (
    <>
      <IonButton onClick={() => setTahap(value => value-1)}>
        Balik
      </IonButton>
    </>
  )

  const tombolMaju = (
    <>
      <IonButton onClick={() => setTahap(value => value+1)}>
        Selanjutnya
      </IonButton>
    </>
  )

  const tombolSubmit = (
    <>
      <IonButton onClick={fungsiSubmit}>
        Submit
      </IonButton>
    </>
  )

  let tombolNavigasi

  if(tahap == 4) tombolNavigasi = (
    <> 
      {tombolBalik}
      {tombolSubmit}
    </>
  )
  else if (tahap == 1) tombolNavigasi = tombolMaju
  else 
    tombolNavigasi = (
      <> 
        {tombolBalik}
        {tombolMaju}
      </>
    )
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton /> 
          </IonButtons>
          <IonTitle>Cek Kepribadian Diri</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonText id="tahap">Tahap: {tahap}</IonText>
        <IonGrid className="ion-text-center">
          {listPernyataan}
          {tombolNavigasi}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Check;
