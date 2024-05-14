export default function AktifYolculukKarti() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-bold">İstanbul - Ankara Yolculuğu</h2>
        <p className="text-sm text-gray-500">Kalkış Tarihi: 26 Temmuz 2022, 09:00</p>
        <p className="text-sm text-gray-500">Yaklaşık Varış Tarihi: 26 Temmuz 2022, 15:00</p>
      </div>
      <div className="p-4">
        <h3 className="text-md font-bold mb-2">Rezervasyonlar</h3>
        <div>
          <p className="text-sm">John Doe</p>
          <p className="text-xs text-gray-500">25 yaşında, İstanbul</p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mt-4 hover:bg-blue-400 transition-colors duration-300">Profilini İncele</button>
        </div>
      </div>
    </div>
  )
}



