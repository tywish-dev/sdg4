import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kampanyalar | Küresel Hedefler',
    description: 'Küresel Hedefler kampanyaları ve etkinlikleri.',
};

export default function CampaignsPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 title-font">Kampanyalar</h1>
            <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                    Küresel Hedefler'e ulaşmak için düzenlenen kampanyalar ve etkinlikler hakkında bilgi edinin.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 title-font">Dünyanın En Büyük Dersi</h2>
                        <p className="mb-4">
                            Dünyanın En Büyük Dersi, çocukları ve gençleri Küresel Hedefler hakkında
                            bilgilendirmek ve harekete geçirmek için düzenlenen küresel bir eğitim projesidir.
                        </p>
                        <a href="#" className="text-primary hover:underline">Daha fazla bilgi →</a>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 title-font">Gençlik Kampanyası</h2>
                        <p className="mb-4">
                            Gençleri Küresel Hedefler konusunda bilinçlendirmek ve sürdürülebilir bir
                            gelecek için harekete geçirmek amacıyla düzenlenen kampanya.
                        </p>
                        <a href="#" className="text-primary hover:underline">Daha fazla bilgi →</a>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 title-font">İklim Eylemi</h2>
                        <p className="mb-4">
                            İklim değişikliğiyle mücadele için düzenlenen kampanyalar ve etkinlikler.
                        </p>
                        <a href="#" className="text-primary hover:underline">Daha fazla bilgi →</a>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 title-font">Toplumsal Cinsiyet Eşitliği</h2>
                        <p className="mb-4">
                            Toplumsal cinsiyet eşitliğini sağlamak için düzenlenen kampanyalar ve projeler.
                        </p>
                        <a href="#" className="text-primary hover:underline">Daha fazla bilgi →</a>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 title-font">Yaklaşan Etkinlikler</h2>
                    <p>Yakında yeni kampanya ve etkinliklerimiz duyurulacak. Takipte kalın!</p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 title-font">Kampanyalara Katılın</h2>
                    <p>
                        Siz de Küresel Hedefler için düzenlenen kampanyalara katılabilir ve değişimin
                        bir parçası olabilirsiniz. Kampanyalarımız hakkında detaylı bilgi için
                        bizimle iletişime geçin.
                    </p>
                </div>
            </div>
        </div>
    );
} 