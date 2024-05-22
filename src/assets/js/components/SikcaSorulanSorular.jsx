import SoruKarti from "./SoruKarti";

export default function SikcaSorulanSorular(){
    const sssData = [
        {
          question: "Seyahat Dostu nasıl çalışır?",
          answer: "Seyahat Dostu, sürücü ve yolcuları buluşturan bir paylaşım uygulamasıdır. Sürücüler yolculuk bilgilerini paylaşır ve yolcular bu yolculuklara katılabilir. Her iki taraf da kimlik doğrulaması yaparak güvenliği sağlar."
        },
        {
          question: "Uygulamayı kullanmak güvenli mi?",
          answer: "Evet, Seyahat Dostu kullanıcı güvenliğini ön planda tutar. Kimlik doğrulama, profil değerlendirmeleri ve güvenlik özellikleri ile güvenli bir yolculuk deneyimi sunar."
        },
        {
          question: "Yolculuk detaylarını nasıl paylaşabilirim?",
          answer: "Yolculuk bilgilerinizi uygulama içindeki paylaşım ekranından kolayca girebilirsiniz. Buluşma noktası, varış yeri, tarih ve saat gibi bilgileri ekleyerek yolcuların sizi bulmasını sağlayabilirsiniz."
        },
        {
          question: "Acil durumlarda ne yapmalıyım?",
          answer: "Acil durumlarda uygulama üzerinden destek hattımıza ulaşabilirsiniz. Ayrıca yerel polis ve acil durum numaralarını da her zaman yanınızda bulundurmanız önerilir."
        },
        {
          question: "Uygulama ücretli mi?",
          answer: "Seyahat Dostu uygulaması ücretsizdir. Ancak, sürücüler yolculuk başına belirli bir ücret talep edebilir. Ücretler, yolculuk detaylarında açıkça belirtilir."
        },
      ];

      return (
        <section id="SSS" className="max-w-4xl mx-auto py-10 px-5">
          <h1 className="text-4xl font-bold mb-8 text-center">Sıkça Sorulan Sorular</h1>
          {sssData.map((sss, index) => (
            <SoruKarti key={index} question={sss.question} answer={sss.answer} />
          ))}
        </section>
      );
}
