export default function BeklemedeYolculukKarti() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-bold">Ankara - İzmir Yolculuğu</h2>
        <p className="text-sm text-gray-500">Kalkış Tarihi: 28 Temmuz 2022, 10:00</p>
        <p className="text-sm text-gray-500">Yaklaşık Varış Tarihi: 28 Temmuz 2022, 16:00</p>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mt-4 hover:bg-blue-400 transition-colors duration-300">Düzenle</button>
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg mt-4 hover:bg-red-400 transition-colors duration-300">İptal Et</button>
      </div>
      <div className="p-4">
        <h3 className="text-md font-bold mb-2">Rezervasyonlar</h3>
        <p className="text-sm text-gray-500">Beklemede</p>
      </div>
    </div>
  )
}


