import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Pilihan from '../components/Pilihan';
import { PernyataanContext } from '../data/pernyataan-context';

// TODO: Change to use context
const rule = [
  ['P1','P2'],
  ['P3','P4'],
  ['P1','P3'],
  ['P2','P4'],
]

const Check: React.FC = () => {
  const [tahap, setTahap] = useState(1)
  const pytData = useContext(PernyataanContext)
  const history = useHistory()

  const listPernyataan = pytData.pernyataan.map(pyt => {
    if(rule[tahap-1].includes(pyt.id))
      return (<Pilihan id={pyt.id}></Pilihan>)
  })

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
      <IonButton onClick={() => history.push('/page/Result')}>
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
