import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ortaklar | Küresel Hedefler',
    description: 'Küresel Hedefler ortakları ve işbirlikçileri.',
};

export default function PartnersPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 title-font">Ortaklar</h1>
            <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                    Küresel Hedefler, dünya çapında birçok kuruluş, şirket ve bireyin desteğiyle hayata geçirilmektedir.
                    Ortaklarımız, sürdürülebilir kalkınma hedeflerine ulaşmak için bizimle birlikte çalışmaktadır.
                </p>

                {/* Partner categories will be added here */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 title-font">Stratejik Ortaklar</h2>
                    <p>Bu bölüm yakında güncellenecektir.</p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 title-font">Kurumsal Ortaklar</h2>
                    <p>Bu bölüm yakında güncellenecektir.</p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 title-font">Sivil Toplum Ortakları</h2>
                    <p>Bu bölüm yakında güncellenecektir.</p>
                </div>
            </div>
        </div>
    );
} 