import React from 'react';

export const metadata = {
    title: 'Haberler | Kaliteli Eğitim Küresel Hedefler',
    description: 'Sürdürülebilir Kalkınma Hedefleri hakkında haberler ve güncellemeler',
};

const NewsPage = () => {
    const newsItems = [
        {
            id: 1,
            title: 'BM Raporu: Kaliteli Eğitimde Küresel İlerleme Hızlandırılmalı',
            date: '15 Mart 2023',
            excerpt: 'Birleşmiş Milletler\'in yeni raporuna göre, dünya genelinde kaliteli eğitime erişim konusunda ilerleme kaydedilmesine rağmen, 2030 hedeflerine ulaşmak için çabaların hızlandırılması gerekiyor.',
            content: 'Birleşmiş Milletler\'in yayınladığı son rapora göre, pandemi sonrası toparlanma sürecinde eğitim alanında ilerlemeler kaydedilse de, hala milyonlarca çocuk temel eğitim hizmetlerine erişemiyor. Rapor, özellikle düşük gelirli ülkelerde kız çocuklarının eğitime erişiminin artırılması ve dijital eğitim altyapısının güçlendirilmesi gerektiğini vurguluyor. UNESCO verilerine göre, dünya genelinde 258 milyon çocuk ve genç hala okula gitmiyor ve bu sayının azaltılması için uluslararası işbirliğinin artırılması çağrısında bulunuluyor.'
        },
        {
            id: 2,
            title: 'Yeni Eğitim Teknolojileri Zirvesi: Dijital Dönüşüm ve Kaliteli Eğitim',
            date: '27 Şubat 2023',
            excerpt: 'Geçtiğimiz hafta düzenlenen Eğitim Teknolojileri Zirvesi\'nde, Sürdürülebilir Kalkınma Hedefi 4 kapsamında dijital dönüşümün eğitim kalitesine etkileri tartışıldı.',
            content: 'Global EdTech Zirvesi\'nde bir araya gelen eğitim ve teknoloji liderleri, yapay zeka, artırılmış gerçeklik ve diğer yenilikçi teknolojilerin eğitim kalitesini artırma potansiyelini değerlendirdi. Zirvede özellikle kırsal ve dezavantajlı bölgelerde yaşayan öğrencilere kaliteli eğitim sağlamak için teknolojinin nasıl kullanılabileceği konusunda önemli projeler sunuldu. Ayrıca, öğretmenlerin dijital yetkinliklerinin artırılması ve eğitim müfredatlarının 21. yüzyıl becerilerine uygun şekilde güncellenmesi konularında da önemli kararlar alındı.'
        },
        {
            id: 3,
            title: 'Öğretmen Eğitimi İçin Yeni Küresel Fon Başlatıldı',
            date: '10 Ocak 2023',
            excerpt: 'Kaliteli eğitim hedeflerine ulaşmak için kritik öneme sahip öğretmen eğitimine destek olmak amacıyla uluslararası bir fon oluşturuldu.',
            content: 'Dünya Bankası, UNESCO ve çeşitli küresel vakıfların işbirliğiyle "Öğretmenler için Küresel Eğitim Fonu" kuruldu. Bu fon, özellikle gelişmekte olan ülkelerde öğretmen kalitesini artırmak, mesleki gelişim programları sunmak ve eğitimcilere destek sağlamak amacıyla 2 milyar dolarlık bir bütçeye sahip. Program kapsamında önümüzdeki beş yıl içinde 1 milyondan fazla öğretmenin eğitilmesi ve desteklenmesi hedefleniyor. Kaliteli eğitimin sağlanmasında öğretmenlerin rolünün kritik olduğunu vurgulayan yetkililer, bu girişimin SDG 4 hedeflerine ulaşmada önemli bir adım olduğunu belirtiyor.'
        }
    ];

    return (
        <main className="container mx-auto px-4 py-24 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Kaliteli Eğitim Haberleri</h1>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
                Küresel Hedefler kapsamında kaliteli eğitim çalışmaları, projeler ve gelişmeler hakkında güncel haberler
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="p-6">
                            <span className="text-sm text-gray-500">{item.date}</span>
                            <h2 className="text-xl font-semibold mt-2 mb-3">{item.title}</h2>
                            <p className="text-gray-700 mb-4">{item.excerpt}</p>
                            <div className="border-t pt-4 mt-auto">
                                <p className="text-gray-800">{item.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default NewsPage; 