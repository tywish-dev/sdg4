import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Yolsuzlukla Mücadele | Küresel Hedefler',
    description: 'Küresel Hedefler yolsuzlukla mücadele politikası.',
};

export default function AntiCorruptionPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 title-font">Yolsuzlukla Mücadele Politikası</h1>
            <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                    Küresel Hedefler olarak, yolsuzluğun her türlüsüne karşı sıfır tolerans
                    politikası uyguluyoruz. Bu politika, organizasyonumuzun yolsuzlukla mücadele
                    taahhüdünü ve ilkelerini açıklar.
                </p>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">1. Amaç ve Kapsam</h2>
                    <p>
                        Bu politika, Küresel Hedefler'in tüm çalışanlarını, yöneticilerini,
                        iş ortaklarını ve paydaşlarını kapsar. Amacımız, yolsuzluğu önlemek ve
                        etik iş uygulamalarını teşvik etmektir.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">2. Tanımlar</h2>
                    <p>
                        Yolsuzluk, kişisel çıkar sağlamak amacıyla görev ve yetkinin kötüye
                        kullanılmasıdır. Bu kapsamda:
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Rüşvet</li>
                        <li>Zimmete para geçirme</li>
                        <li>Dolandırıcılık</li>
                        <li>Kayırmacılık</li>
                        <li>Kara para aklama</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">3. Temel İlkeler</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Dürüstlük</h3>
                            <p>
                                Tüm iş ilişkilerimizde dürüstlük ve şeffaflık ilkelerini benimseriz.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Hesap Verebilirlik</h3>
                            <p>
                                Her seviyede hesap verebilirlik ve sorumluluk ilkelerini uygularız.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Uyum</h3>
                            <p>
                                Tüm yerel ve uluslararası yolsuzlukla mücadele yasalarına uyarız.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">4. Yükümlülükler</h2>
                    <p>
                        Tüm çalışanlarımız ve iş ortaklarımız:
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Bu politikaya uymakla yükümlüdür</li>
                        <li>Şüpheli durumları bildirmelidir</li>
                        <li>Düzenli eğitimlere katılmalıdır</li>
                        <li>Çıkar çatışmalarını açıklamalıdır</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">5. İhlal Bildirimi</h2>
                    <p>
                        Yolsuzluk şüphesi veya ihlallerini aşağıdaki kanallardan bildirebilirsiniz:
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>E-posta: ethics@kureselamaclar.org</li>
                        <li>Telefon: +90 (xxx) xxx xx xx</li>
                        <li>Online Bildirim Formu</li>
                    </ul>
                    <p className="mt-4">
                        Tüm bildirimler gizli tutulur ve bildirimi yapan kişiler korunur.
                    </p>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">6. Yaptırımlar</h2>
                    <p>
                        Bu politikanın ihlali durumunda:
                    </p>
                    <ul className="list-disc pl-6 mt-4">
                        <li>Disiplin cezaları uygulanır</li>
                        <li>İş ilişkisi sonlandırılabilir</li>
                        <li>Yasal işlem başlatılabilir</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4 title-font">7. İletişim</h2>
                    <p>
                        Bu politikayla ilgili sorularınız için:
                        <br />
                        E-posta: compliance@kureselamaclar.org
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