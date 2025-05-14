import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Çerez Politikası | Küresel Hedefler',
    description: 'Küresel Hedefler web sitesi çerez politikası.',
};

export default function CookiesPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 title-font">Çerez Politikası</h1>
            <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                    Bu çerez politikası, Küresel Hedefler web sitesinde kullanılan çerezler
                    hakkında bilgi vermektedir.
                </p>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">1. Çerez Nedir?</h2>
                    <p>
                        Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınıza yerleştirilen
                        küçük metin dosyalarıdır. Bu dosyalar, site deneyiminizi iyileştirmek
                        ve size daha iyi hizmet sunmak için kullanılır.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">2. Kullandığımız Çerez Türleri</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Zorunlu Çerezler</h3>
                            <p>
                                Sitenin çalışması için gerekli olan temel çerezlerdir. Bu çerezler olmadan
                                site düzgün çalışmaz.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Performans Çerezleri</h3>
                            <p>
                                Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olan
                                çerezlerdir.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">İşlevsellik Çerezleri</h3>
                            <p>
                                Dil tercihi gibi seçimlerinizi hatırlamamızı sağlayan çerezlerdir.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Hedefleme/Reklam Çerezleri</h3>
                            <p>
                                Size ilgi alanlarınıza göre özelleştirilmiş içerik sunmamızı sağlayan
                                çerezlerdir.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">3. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
                    <p>
                        Tarayıcınızın ayarlarından çerezleri kontrol edebilir veya silebilirsiniz.
                        Ancak, çerezleri devre dışı bırakmanın bazı site özelliklerinin çalışmasını
                        etkileyebileceğini unutmayın.
                    </p>
                    <p className="mt-4">
                        Çerez ayarlarınızı değiştirmek için tarayıcınızın yardım sayfasını ziyaret
                        edebilirsiniz:
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Google Chrome</li>
                        <li>Mozilla Firefox</li>
                        <li>Safari</li>
                        <li>Microsoft Edge</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">4. Çerez Tercihleriniz</h2>
                    <p>
                        Sitemizi ilk ziyaretinizde çerez kullanımı hakkında bilgilendirilirsiniz.
                        Çerez kullanımını kabul etmek veya reddetmek sizin tercihinizdir.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">5. İletişim</h2>
                    <p>
                        Çerez politikamızla ilgili sorularınız için bizimle iletişime geçebilirsiniz:
                        <br />
                        E-posta: privacy@kureselamaclar.org
                    </p>
                </div>

                <div className="mt-8">
                    <p className="text-sm text-gray-600">
                        Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
                    </p>
                </div>
            </div>
        </div>
    );
} 