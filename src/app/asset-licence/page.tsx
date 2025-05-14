import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Varlık Lisansı | Küresel Hedefler',
    description: 'Küresel Hedefler varlık lisansı ve kullanım koşulları.',
};

export default function AssetLicencePage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 title-font">Varlık Lisansı</h1>
            <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                    Bu lisans, Küresel Hedefler'in logo, görsel, metin ve diğer varlıklarının
                    kullanım koşullarını belirler.
                </p>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">1. Lisans Kapsamı</h2>
                    <p>
                        Bu lisans, Küresel Hedefler'in aşağıdaki varlıklarını kapsar:
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Logolar ve simgeler</li>
                        <li>Görseller ve fotoğraflar</li>
                        <li>Metinler ve dokümanlar</li>
                        <li>Video ve ses dosyaları</li>
                        <li>Tasarım öğeleri</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">2. Kullanım İzinleri</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-bold mb-2">İzin Verilen Kullanımlar</h3>
                            <ul className="list-disc pl-6">
                                <li>Eğitim amaçlı kullanım</li>
                                <li>Haber ve medya kapsamında kullanım</li>
                                <li>Küresel Hedefler'i destekleyen kampanyalarda kullanım</li>
                                <li>Kar amacı gütmeyen organizasyonlarda kullanım</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Yasak Kullanımlar</h3>
                            <ul className="list-disc pl-6">
                                <li>Ticari amaçlı kullanım (özel izin olmadan)</li>
                                <li>Değiştirme veya uyarlama</li>
                                <li>Yanıltıcı veya zararlı kullanım</li>
                                <li>Politik kampanyalarda kullanım</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">3. Kullanım Koşulları</h2>
                    <p>
                        Varlıkları kullanırken aşağıdaki koşullara uymanız gerekmektedir:
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Kaynak gösterilmelidir</li>
                        <li>Varlıklar değiştirilmemelidir</li>
                        <li>Küresel Hedefler'in itibarı korunmalıdır</li>
                        <li>Kullanım amacı belirtilmelidir</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">4. İzin Alma Süreci</h2>
                    <p>
                        Ticari kullanım veya özel izin gerektiren durumlar için:
                    </p>
                    <ol className="list-decimal pl-6 mt-4">
                        <li>İzin başvuru formunu doldurun</li>
                        <li>Kullanım amacını ve kapsamını belirtin</li>
                        <li>Gerekli belgeleri ekleyin</li>
                        <li>Yanıt için 5-7 iş günü bekleyin</li>
                    </ol>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">5. Varlık Kütüphanesi</h2>
                    <p>
                        Onaylı varlıklarımıza aşağıdaki kaynaklardan ulaşabilirsiniz:
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Dijital Varlık Kütüphanesi</li>
                        <li>Logo Paketi</li>
                        <li>Görsel Kılavuz</li>
                        <li>Marka Kitapçığı</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">6. İletişim</h2>
                    <p>
                        Varlık lisansı ve kullanım izinleriyle ilgili sorularınız için:
                        <br />
                        E-posta: assets@kureselamaclar.org
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