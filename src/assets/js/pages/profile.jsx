export default function Profile() {
  return (
    <div className="flex f-screen flex-col items-center justify-center space-y-8 text-center text-gray-700">
      <div className="container mx-auto p-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-3/4 mx-auto">
          <div className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-gray-500">25 yaşında</p>
                <p className="text-gray-500">İstanbul, Türkiye</p>
              </div>
              <img src="https://via.placeholder.com/150" alt="Profile Picture" className="w-24 h-24 rounded-full">
              </img>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-bold">Profil Bilgileri</h3>
              <p><span className="font-bold">Araç:</span> BMW X5</p>
              <p><span className="font-bold">İlgi Alanları:</span> Doğa yürüyüşü, tarih, fotoğrafçılık</p>
              <p><span className="font-bold">Sigara İçiyor mu:</span> Hayır</p>
              <p><span className="font-bold">Alkol İçiyor mu:</span> Nadiren</p>
              <p><span className="font-bold">Puan Değerlendirmesi:</span> 4.7</p>
              <div className="mt-8">
                <h3 className="text-lg font-bold">Hakkımda</h3>
                <p>Merhaba! Ben John Doe, seyahat etmeyi seven biriyim. Doğayla iç içe olmayı, yeni kültürler keşfetmeyi ve harika manzaraları fotoğraflamayı çok seviyorum. Sigara içmiyorum, nadiren alkol tüketirim. Seyahatlerim sırasında edindiğim deneyimleri ve izlenimleri paylaşmayı, yeni yerler keşfetmeyi ve farklı kültürlerle etkileşimde bulunmayı seviyorum. Seyahat arkadaşlarımla keyifli zaman geçirmek benim için önemli. Gelecekte daha birçok güzel yeri keşfetmek ve unutulmaz anılar biriktirmek istiyorum!</p>
              </div>
              <h3 className="text-lg font-bold mt-8">Yorumlar ve Puanlar</h3>
              <div className="mt-4">
                <div className="flex items-center">
                  <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full mr-4">
                  </img>
                  <div>
                    <p className="font-bold">Jane Doe</p>
                    <p>Harika bir seyahat arkadaşı, çok keyif aldık!</p>
                    <p className="text-gray-500">Puan: 4.5</p>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full mr-4">
                  </img>
                  <div>
                    <p className="font-bold">Alice Smith</p>
                    <p>Çok nazik ve yardımsever birisi, teşekkür ederim!</p>
                    <p className="text-gray-500">Puan: 5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

