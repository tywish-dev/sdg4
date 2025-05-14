import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Basın | Küresel Hedefler',
    description: 'Küresel Hedefler basın merkezi ve medya kaynakları.',
};

export default function PressPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 title-font">Basın</h1>
            <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                    Küresel Hedefler hakkında en güncel basın bültenleri, medya kaynakları ve iletişim bilgileri.
                </p>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 title-font">Basın Bültenleri</h2>
                    <p>Bu bölüm yakında güncellenecektir.</p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 title-font">Medya Kaynakları</h2>
                    <p>Bu bölüm yakında güncellenecektir.</p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 title-font">Medya İletişim</h2>
                    <p>Basın ve medya sorularınız için lütfen iletişime geçin:</p>
                    <p className="mt-4">
                        E-posta: press@kureselamaclar.org<br />
                        Telefon: +90 (xxx) xxx xx xx
                    </p>
                </div>
            </div>
        </div>
    );
} 