import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useState, useRef, useEffect } from 'react';
import { ConfidenceSifat, JawabanContext } from '../../data/jawaban-context';
import { RuleContext } from '../../data/rule-context';
// import Chart, { ChartData } from 'chart.js/auto';
import { Doughnut, Pie } from 'react-chartjs-2';

import './Result.css';

// interface Props {
//   chartData: number[],
//   chartLabel: string[]
// }

// const MyChart = ({ chartData, chartLabel }: Props) => {
//   const formatData = (data: number[]): ChartData => ({
//     labels: [{ chartLabel }],
//     datasets: [{ data }]
//   });

//   const chartRef = useRef<Chart | null>(null);

//   chartRef.current?.destroy()

//   const canvasCallback = (canvas: HTMLCanvasElement | null) => {
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (ctx) {
//       chartRef.current = new Chart(ctx, {
//         type: "doughnut",
//         data: formatData(chartData),
//         options: { responsive: true }
//       });
//     }
//   };

//   useEffect(() => {
//     if (chartRef.current) {
//       chartRef.current.data = formatData(chartData);
//       chartRef.current.update();
//     }

//   }, [chartData]);

//   return (
//     <div>
//       <div>
//         <canvas ref={canvasCallback}></canvas>
//       </div>
//     </div>
//   );
// };

const Result: React.FC = () => {
  const jwbData = useContext(JawabanContext)
  const ruleData = useContext(RuleContext)

  if(jwbData.confidenceSifat.length == 0){
    console.info("kosong")
    return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Result</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonGrid>
        <IonRow>
          <IonCol className="ion-padding ion-text-center">
            <h2>Sepertinya kamu belum selesai mengisi pernyataannya. 
              Yuk isi sekarang!</h2>
              <IonButton routerLink="/questions">Isi Pernyataan</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
  }

  // Hitung total confidence dari semua kepribadian
  let totalConfidence = 0
  for (let i = 0; i < jwbData.confidenceSifat.length; i++) {
    const element = jwbData.confidenceSifat[i];
    totalConfidence += element.confidence
  }

  // Menghitung persentase confidence masing-masing kepribadian 
  let persenData : any[] = []
  for (let i = 0; i < jwbData.confidenceSifat.length; i++) {
    const element = jwbData.confidenceSifat[i];
    const persen = element.confidence / totalConfidence
    persenData.push(persen)
  }

  // Membuat array baru yang berisikan confidence yang sudah dinormalisasi
  let newData : ConfidenceSifat[] = []
  for (let i = 0; i < jwbData.confidenceSifat.length; i++) {
    newData.push({
      nama: jwbData.confidenceSifat[i].nama,
      confidence: persenData[i],
    })
  }

  const sortSifat = newData.sort((max,val) => max.confidence > val.confidence ? -1: 1)

  let tempNama : string[] = []
  let tempNumber : number[] = []

  sortSifat.map(sifat => {
    tempNama.push(sifat.nama)
    tempNumber.push(sifat.confidence)
  })

  const data = {
    labels: tempNama,
    datasets: [
      {
        label: 'Personalities Distribution',
        data: tempNumber,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ]
  }

  var description = (
    <>
    </>
  )

  if (sortSifat[0].nama == "Melancholis"){
    description = (
      <h3>
        Melancholis adalah lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nunc sit amet enim accumsan, id pretium diam egestas. Aenean pretium neque at mauris viverra imperdiet. Phasellus egestas, ex sed ullamcorper imperdiet, leo eros rhoncus tellus, at volutpat leo ex id purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </h3>
    )
  }
  else if(sortSifat[0].nama == "Choleris"){
    description = (
      <h3>
        Choleris adalah lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nunc sit amet enim accumsan, id pretium diam egestas. Aenean pretium neque at mauris viverra imperdiet. Phasellus egestas, ex sed ullamcorper imperdiet, leo eros rhoncus tellus, at volutpat leo ex id purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </h3>
    )
  }
  else if(sortSifat[0].nama == "Phlegmatis"){
    description = (
      <h3>
        Phlegmatis adalah lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nunc sit amet enim accumsan, id pretium diam egestas. Aenean pretium neque at mauris viverra imperdiet. Phasellus egestas, ex sed ullamcorper imperdiet, leo eros rhoncus tellus, at volutpat leo ex id purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </h3>
    )
  }
  else {
    description = (
      <h3>
        Sangunis adalah lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nunc sit amet enim accumsan, id pretium diam egestas. Aenean pretium neque at mauris viverra imperdiet. Phasellus egestas, ex sed ullamcorper imperdiet, leo eros rhoncus tellus, at volutpat leo ex id purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </h3>
    )
  }

  const layout = (
    <>
      <IonGrid className="ion-text-center ion-padding">
        <IonRow className="ion-justify-content-center result-content-container">
          <IonCol size="10" size-lg="5" className="ion-text-center">
            <img src={"assets/images/" + sortSifat[0].nama + ".jpg"} alt="" />
          </IonCol>
          <IonCol size="10" size-lg="5" className="result-content-text">
            <h3>Berdasarkan pengecekan kepribadian, ditemukan kepribadian 
              yang menonjol adalah <b className="result-content-name">{sortSifat[0].nama}</b> dengan tingkat kepercayaan
              sebesar <b className="result-content-name">{(sortSifat[0].confidence * 100).toFixed(2)}%</b>.
            </h3>
            {description}
          </IonCol>
        </IonRow>
        <IonRow className="ion-justify-content-center">
          <IonCol size-md="10" size-lg="5" className="ion-text-center result-graph-left">
            <IonList>
              {sortSifat.map(sifat => {
                return <IonItem className="ion-text-center">
                  {sifat.nama} - {(sifat.confidence * 100).toFixed(2)}
                </IonItem>
              })}
            </IonList>
          </IonCol>
          <IonCol size-md="10" size-lg="5" className="ion-text-center">
            {/* <Pie data={data} /> */}
            <Doughnut data={data} />
            {/* <MyChart chartData={tempNumber} chartLabel={tempNama} /> */}
          </IonCol>
        </IonRow>
      </IonGrid>
      
    </>
  )

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Result</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="result-title">
          <h1>My Results</h1>
        </div>
        <IonGrid>
          <IonRow>
            <IonCol>
              {layout}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Result;

