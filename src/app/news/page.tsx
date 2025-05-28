import React from 'react';

export const metadata = {
    title: 'Haberler | Kaliteli Eğitim Küresel Hedefler',
    description: 'Sürdürülebilir Kalkınma Hedefleri hakkında haberler ve güncellemeler',
};

const NewsPage = () => {
    const newsItems = [
        {
            id: 1,
            title: 'Sürdürülebilir küresel kalkınmanın anahtarı: Nitelikli Eğitim',
            date: '2024',
            excerpt: "Bu yazıda, nitelikli eğitimin yoksullukla mücadele, eşitsizliklerin azaltılması ve toplumsal cinsiyet eşitliği gibi konulardaki önemi vurgulanıyor. Küresel Okullar Programı'nın 105 ülkede 176.000 öğrenciye ulaştığı belirtiliyor.",
            content: 'Ayrıca, Türkiye\'de Milli Eğitim Bakanlığı\'nın sürdürülebilirlik projelerine özel ilgi gösterdiği ifade ediliyor.'
        },
        {
            id: 2,
            title: '4. İstanbul Eğitim Zirvesi\'nde yeni ve sürdürülebilir okul kültürü ele alındı',
            date: '7 Aralık 2024',
            excerpt: 'Türkiye Maarif Vakfı\'nın düzenlediği zirvede, eğitimde kapsayıcılık, sevgi temelli öğrenme ve yapay zekâ entegrasyonu gibi konular ele alındı.',
            content: 'Tokyo Şehir Üniversitesi\'nden Prof. Dr. Takaharu Tezuka, duvarsız ve interaktif öğrenme alanlarının önemine dikkat çekti.'
        },
        {
            id: 3,
            title: 'Sürdürülebilir Geleceğin Anahtarı: Nitelikli Eğitim',
            date: '23 Temmuz 2024',
            excerpt: 'Bu yazı, 2030 yılına kadar ulaşılması hedeflenen nitelikli eğitim amaçlarını detaylandırıyor.',
            content: 'Hedefler arasında ücretsiz ve kaliteli ilköğretim, okul öncesi eğitime erişim ve teknik-mesleki eğitime eşit erişim gibi maddeler bulunuyor.'
        },
        {
            id: 4,
            title: 'Sürdürülebilir kalkınma hedefleri, yeşil kampüsler',
            date: 'Eylül 2024',
            excerpt: 'Bu yazı, üniversitelerin sürdürülebilir kalkınma hedeflerine katkı sağlamak için yeşil kampüsler oluşturma çabalarını ele alıyor.',
            content: 'BM Yükseköğretim Sürdürülebilirlik Girişimi kapsamında, üniversitelerin sürdürülebilirlik performanslarını değerlendirmeleri teşvik ediliyor.'
        },
        {
            id: 5,
            title: 'Sürdürülebilir kalkınma için eğitime olan taahhüt güçlenmeli',
            date: '2020',
            excerpt: 'UNESCO\'nun katılımıyla gerçekleşen toplantıda, Sürdürülebilir Kalkınma için Eğitim (ESD) stratejileri tartışıldı.',
            content: 'ESD\'nin, bireylere iklim değişikliği, biyoçeşitlilik kaybı ve eşitsizlik gibi küresel sorunlarla başa çıkma becerisi kazandırdığı vurgulandı.'
        },
        {
            id: 6,
            title: 'Öğretmenler 2030: Sürdürülebilir Kalkınma Amaçları ve İklim Seferberliği Eğitimi 4. döneme başlıyor',
            date: 'Ocak 2025',
            excerpt: 'Schneider Electric, UN SDSN Türkiye ve Boğaziçi Üniversitesi iş birliğiyle düzenlenen bu program, K12 öğretmenlerine sürdürülebilirlik konularında eğitim veriyor.',
            content: 'Program, öğretmenlerin öğrencilerine çözüm odaklı düşünme becerileri kazandırmasını hedefliyor.'
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