import AktifRezervasyonKarti from '@/components/AktifRezervasyonKarti'
import GecmisRezervasyonKarti from '@/components/GeçmişRezervasyonKarti'
import { Link } from '@inertiajs/react'

export default function Reservations() {
  return (
    <div className="flex f-screen flex-col space-y-8 text-gray-700 my-12">

      <div className="p-4 border-b border-black">
        <h1 className="font-bold text-black">Rezervasyonlarım</h1>
      </div>
      <div className="flex flex-row gap-4 p-4 flex-wrap">
        <AktifRezervasyonKarti></AktifRezervasyonKarti>
        <AktifRezervasyonKarti></AktifRezervasyonKarti>
        <AktifRezervasyonKarti></AktifRezervasyonKarti>
        <AktifRezervasyonKarti></AktifRezervasyonKarti>
        <AktifRezervasyonKarti></AktifRezervasyonKarti>
      </div>

      <div className="p-4 border-b border-black">
        <h1 className="font-bold text-black">Geçmiş Rezervasyonlarım</h1>
      </div>
      <div className="flex flex-row gap-4 p-4 flex-wrap">
        <GecmisRezervasyonKarti></GecmisRezervasyonKarti>
        <GecmisRezervasyonKarti></GecmisRezervasyonKarti>
        <GecmisRezervasyonKarti></GecmisRezervasyonKarti>
        <GecmisRezervasyonKarti></GecmisRezervasyonKarti>
        <GecmisRezervasyonKarti></GecmisRezervasyonKarti>
        <GecmisRezervasyonKarti></GecmisRezervasyonKarti>
      </div>

    </div>
  )
}


