import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Şartlar ve Koşullar | Küresel Hedefler',
    description: 'Küresel Hedefler web sitesi kullanım şartları ve koşulları.',
};

export default function TermsConditionsPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 title-font">Şartlar ve Koşullar</h1>
            <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                    Bu şartlar ve koşullar, Küresel Hedefler web sitesini kullanımınızı düzenler.
                    Siteyi kullanarak bu şartları kabul etmiş olursunuz.
                </p>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">1. Tanımlar</h2>
                    <p>
                        "Küresel Hedefler", "biz", "bizim" ifadeleri Küresel Hedefler web sitesini
                        ve ilgili hizmetleri ifade eder. "Siz" ve "kullanıcı" ifadeleri siteyi
                        kullanan kişiyi ifade eder.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">2. Kullanım Koşulları</h2>
                    <p>
                        Siteyi kullanırken tüm yerel, ulusal ve uluslararası yasalara ve düzenlemelere
                        uymayı kabul edersiniz. Sitenin içeriğini kopyalama, dağıtma, iletme, görüntüleme,
                        satma, lisanslama veya başka şekilde kullanma hakkına sahip değilsiniz.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">3. Hesap Güvenliği</h2>
                    <p>
                        Hesabınızın güvenliğinden siz sorumlusunuz. Şifrenizi güvende tutmalı ve
                        hesabınızla yapılan tüm işlemlerden sorumlu olduğunuzu kabul etmelisiniz.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">4. Gizlilik</h2>
                    <p>
                        Gizlilik politikamız, kişisel verilerinizin nasıl toplandığını, kullanıldığını
                        ve korunduğunu açıklar. Siteyi kullanarak gizlilik politikamızı kabul etmiş
                        olursunuz.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">5. İçerik ve Telif Hakkı</h2>
                    <p>
                        Sitedeki tüm içerik, Küresel Hedefler'in veya lisans verenlerin mülkiyetindedir
                        ve telif hakkı yasaları tarafından korunmaktadır. İçeriği izinsiz kullanmak
                        yasaktır.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">6. Sorumluluk Reddi</h2>
                    <p>
                        Site "olduğu gibi" sunulmaktadır. Küresel Hedefler, sitenin kesintisiz veya
                        hatasız çalışacağını garanti etmez. Siteden kaynaklanan herhangi bir zarardan
                        sorumlu değiliz.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">7. Değişiklikler</h2>
                    <p>
                        Bu şartları ve koşulları herhangi bir zamanda değiştirme hakkını saklı tutarız.
                        Değişiklikler sitede yayınlandığı anda yürürlüğe girer.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">8. İletişim</h2>
                    <p>
                        Bu şartlar ve koşullarla ilgili sorularınız için bizimle iletişime geçebilirsiniz:
                        <br />
                        E-posta: legal@kureselamaclar.org
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