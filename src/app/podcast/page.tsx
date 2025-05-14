import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Podcast | Küresel Hedefler',
    description: 'Küresel Hedefler podcast serisi.',
};

export default function PodcastPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 title-font">Podcast</h1>
            <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                    Küresel Hedefler podcast serimizde, sürdürülebilir kalkınma hedeflerine ulaşmak için
                    çalışan ilham verici kişiler ve projelerle tanışın.
                </p>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 title-font">Son Bölümler</h2>
                    <div className="space-y-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Yakında</h3>
                            <p className="text-gray-600">
                                Podcast bölümlerimiz yakında yayınlanacak. Takipte kalın!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 title-font">Dinleme Platformları</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <a
                            href="#"
                            className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Spotify
                        </a>
                        <a
                            href="#"
                            className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Apple Podcasts
                        </a>
                        <a
                            href="#"
                            className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            Google Podcasts
                        </a>
                        <a
                            href="#"
                            className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            YouTube
                        </a>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 title-font">Podcast Hakkında</h2>
                    <p>
                        Küresel Hedefler podcast serisi, sürdürülebilir kalkınma hedeflerine ulaşmak için
                        çalışan kişilerin hikayelerini ve deneyimlerini paylaşıyor. Her bölümde farklı bir
                        konuk, kendi alanında yaptığı çalışmaları ve Küresel Hedeflere katkılarını anlatıyor.
                    </p>
                </div>
            </div>
        </div>
    );
} 