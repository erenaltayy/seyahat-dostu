import BeklemedeYolculukKarti from '@/components/BeklemedeYolculukKarti'
import AktifYolculukKarti from '@/components/AktifYolculukKarti'

export default function MyRides() {
  return (
    <div className="flex f-screen flex-col space-y-8 text-gray-700 my-12">

      <div className="p-4 border-b border-black">
        <h1 className="font-bold text-black">Aktif Yolculuklarım</h1>
      </div>
      <div className="flex flex-row gap-4 p-4 flex-wrap">
        <AktifYolculukKarti></AktifYolculukKarti>
        <AktifYolculukKarti></AktifYolculukKarti>
        <AktifYolculukKarti></AktifYolculukKarti>
        <AktifYolculukKarti></AktifYolculukKarti>
      </div>

      <div className="p-4 border-b border-black">
        <h1 className="font-bold text-black">Beklemede</h1>
      </div>
      <div className="flex flex-row gap-4 p-4 flex-wrap">
        <BeklemedeYolculukKarti></BeklemedeYolculukKarti>
        <BeklemedeYolculukKarti></BeklemedeYolculukKarti>
        <BeklemedeYolculukKarti></BeklemedeYolculukKarti>
        <BeklemedeYolculukKarti></BeklemedeYolculukKarti>
        <BeklemedeYolculukKarti></BeklemedeYolculukKarti>
      </div>


    </div>
  )
}


