import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Gizlilik Politikası | Küresel Hedefler',
    description: 'Küresel Hedefler web sitesi gizlilik politikası.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 title-font">Gizlilik Politikası</h1>
            <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                    Bu gizlilik politikası, Küresel Hedefler web sitesini kullanımınız sırasında
                    toplanan kişisel verilerinizin nasıl kullanıldığını ve korunduğunu açıklar.
                </p>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">1. Toplanan Bilgiler</h2>
                    <p>
                        Sizden aşağıdaki bilgileri toplayabiliriz:
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Ad ve soyadınız</li>
                        <li>E-posta adresiniz</li>
                        <li>İletişim bilgileriniz</li>
                        <li>IP adresiniz ve tarayıcı bilgileriniz</li>
                        <li>Site kullanım verileriniz</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">2. Bilgilerin Kullanımı</h2>
                    <p>
                        Topladığımız bilgileri aşağıdaki amaçlarla kullanırız:
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Size hizmet sağlamak</li>
                        <li>İletişim kurmak</li>
                        <li>Siteyi geliştirmek</li>
                        <li>Yasal yükümlülükleri yerine getirmek</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">3. Bilgilerin Paylaşımı</h2>
                    <p>
                        Kişisel verilerinizi üçüncü taraflarla paylaşmayız, ancak aşağıdaki durumlar
                        istisnadır:
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Yasal zorunluluk durumunda</li>
                        <li>Sizin açık rızanızla</li>
                        <li>Hizmet sağlayıcılarımızla (veri işleme amaçlı)</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">4. Çerezler</h2>
                    <p>
                        Sitemizde çerezler kullanılmaktadır. Çerezler hakkında detaylı bilgi için
                        Çerez Politikamızı inceleyebilirsiniz.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">5. Veri Güvenliği</h2>
                    <p>
                        Kişisel verilerinizi korumak için uygun güvenlik önlemlerini alıyoruz.
                        Ancak, internet üzerinden veri iletiminin %100 güvenli olmadığını unutmayın.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">6. Haklarınız</h2>
                    <p>
                        KVKK kapsamında aşağıdaki haklara sahipsiniz:
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Verilerinize erişim hakkı</li>
                        <li>Verilerinizin düzeltilmesini isteme hakkı</li>
                        <li>Verilerinizin silinmesini isteme hakkı</li>
                        <li>Veri işlemeye itiraz etme hakkı</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">7. İletişim</h2>
                    <p>
                        Gizlilik politikamızla ilgili sorularınız için bizimle iletişime geçebilirsiniz:
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