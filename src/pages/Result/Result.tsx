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
              <IonButton routerLink="/questions" color="warning">Isi Pernyataan</IonButton>
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
        Orang-orang dengan kepribadian melankolis menyukai tradisi. Misalnya wanita memasak untuk laki-laki, laki-laki membuka pintu bagi wanita. <br/><br/>
        Tipe melankolis rata-rata mencintai keluarga dan teman-temannya, tidak seperti orang-orang sanguinis. Melankolis tidak suka mencari hal-hal baru dan petualangan dan bahkan cenderung akan sangat menghindarinya. <br/><br/>
        Seseorang dengan kepribadian melankolis tidak mungkin menikah dengan orang asing atau meninggalkan tanah airnya ke negara lain. <br/><br/>
        Orang yang melankolis juga dikenal sangat sosial dan berupaya berkontribusi pada komunitas, sangat teliti dan akurat. Tipe ini adalah manajer yang fantastis dengan kepribadian yang baik. <br/><br/>
        Karier yang sempurna untuk tipe kepribadian melankolis antara lain dalam bidang pengelolaan/ manajemen, akuntansi, pekerjaan social, atau bagian administrasi.
      </h3>
    )
  }
  else if(sortSifat[0].nama == "Choleris"){
    description = (
      <h3>
        Seseorang dengan kepribadian koleris biasanya orang yang sangat berorientasi pada tujuan. <br/><br/>
        Orang yang koleris terkenal sangat cerdas, analitis, dan logis, sangat praktis dan langsung, tetapi tipe ini tidak harus menjadi teman baik atau orang yang ramah. <br/><br/>
        Seorang koleris tidak menyukai pembicaraan singkat dan menikmati percakapan yang mendalam dan bermakna. Mereka lebih suka sendirian daripada di perusahaan dengan orang berkepribadian lemah. <br/><br/>
        Idealnya, tipe ini suka menghabiskan waktu bersama orang-orang yang memiliki minat profesional yang serupa. <br/><br/>
        Pekerjaan ideal untuk seorang koleris terkait dengan industri tentang pengelolaan, teknologi, statistik, teknik, dan pemrograman.
      </h3>
    )
  }
  else if(sortSifat[0].nama == "Phlegmatis"){
    description = (
      <h3>
        Seseorang dengan kepribadian plegmatis biasanya adalah orang-orang yang cinta damai. <br/><br/>
        Tipe ini biasanya mencari keharmonisan antar-pribadi dan hubungan dekat yang membuat orang-orang plegmatis menjadi pasangan yang setia dan orang tua yang penuh kasih. <br/><br/>
        Orang-orang plegmatis suka menjaga hubungan dengan teman-teman lama, anggota keluarga yang jauh, dan tetangga. <br/><br/>
        Dalam hal kepribadian, tipe plegmatis cenderung menghindari konflik dan selalu berusaha menengahi orang lain untuk memulihkan perdamaian dan harmoni. <br/><br/>
        Plegmatis juga sangat suka beramal dan membantu orang lain. Karier yang ideal untuk tipe kepribadian plegmatis antara lain perawat, guru, psikolog, konseling, atau layanan sosial.
      </h3>
    )
  }
  else {
    description = (
      <h3>
        Orang dengan tipe kepribadian sanguinis cenderung hidup, optimis, ringan, dan riang. Tipe ini juga menyukai petualangan dan memiliki toleransi tinggi akan risiko. <br/><br/>
        Selain itu, tipe sanguin biasanya lemah dalam menoleransi kebosanan, serta akan mencari variasi dan hiburan. Secara alami, sifat ini kadang-kadang negatif dalam memengaruhi hubungan percintaan dan lainnya. <br/><br/>
        Karena kepribadian ini berperilaku mencari kesenangan, banyak orang dengan kepribadian sanguinis cenderung berjuang dengan kecanduan (ingin suatu hal dengan terus-menerus). <br/><br/>
        Orang sanguin juga dikenal sangat kreatif dan bisa menjadi seniman serta penghibur yang hebat dan akan berhasil jika memilih karier di industri hiburan. <br/><br/>
        Kemampuan alami orang sanguinis sangat cocok jika memilih pekerjaan yang berhubungan dengan marketing, travel, fashion, memasak/kuliner, atau olahraga.
      </h3>
    )
  }

  const layout = (
    <>
      <IonGrid className="ion-text-center ion-padding">
        <IonRow className="ion-justify-content-center result-content-container">
          <IonCol size="10" size-lg="5" className="ion-text-center about-content-illustration">
            <img src={"assets/images/" + sortSifat[0].nama + ".jpg"} alt="" />
          </IonCol>
          <IonCol size="10" size-lg="5" className="result-content-text">
            <h3>Berdasarkan pengecekan kepribadian, kepribadian yang menonjol
              dalam diri kamu adalah <b className="result-content-name">{sortSifat[0].nama}</b> dengan tingkat kepercayaan
              sebesar <b className="result-content-name">{(sortSifat[0].confidence * 100).toFixed(2)}%</b>.
            </h3>
            {description}
          </IonCol>
        </IonRow>
        <div className="result-title">
          <h1>Visualisasi persentase jenis kepribadian dalam diri Anda</h1>
        </div>
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
          <h1>Hasil Diagnosis Sistem Pakar</h1>
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

