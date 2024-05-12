export default function Ride() {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-3/4 mx-auto">
        <div className="p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">İstanbul - Ankara Yolculuğu</h2>
              <p className="text-gray-500">Kalkış Tarihi: 26 Temmuz 2022, 09:00</p>
              <p className="text-gray-500">Yaklaşık Varış Tarihi: 26 Temmuz 2022, 15:00</p>
              <p className="text-gray-500">Fiyat: 100 TL</p>
              <p className="text-gray-500">Boş Koltuk Sayısı: 2</p>
            </div>
            <img src="https://via.placeholder.com/150" alt="User Avatar" className="w-24 h-24 rounded-full">
            </img>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold">Yolculuğu Düzenleyen</h3>
            <div className="flex items-center mt-4">
              <div>
                <p className="font-bold">John Doe</p>
                <p>25 yaşında, İstanbul</p>
                <p><span className="font-bold">Araç:</span> BMW X5</p>
                <p><span className="font-bold">İlgi Alanları:</span> Doğa yürüyüşü, tarih, fotoğrafçılık</p>
                <p><span className="font-bold">Sigara İçiyor mu:</span> Hayır</p>
                <p><span className="font-bold">Alkol İçiyor mu:</span> Nadiren</p>
                <p><span className="font-bold">Puan Değerlendirmesi:</span> 4.7</p>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mt-4 hover:bg-blue-400 transition-colors duration-300">Profilini İncele</button>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold">Özel Mesaj</h3>
            <p>Merhaba, yolculuğumuz hakkında detaylı bilgi almak isterseniz benimle iletişime geçebilirsiniz.</p>
          </div>
        </div>
        <div className="bg-gray-200 p-4 text-center">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-400 transition-colors duration-300">Rezervasyon Al</button>
        </div>
      </div>
    </div>
  )
}
