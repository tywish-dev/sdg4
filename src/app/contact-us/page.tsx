import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Bize Ulaşın | Küresel Hedefler',
    description: 'Küresel Hedefler ile iletişime geçin.',
};

export default function ContactUsPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 title-font">Bize Ulaşın</h1>
            <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                    Küresel Hedefler hakkında sorularınız mı var? Bizimle iletişime geçin.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 title-font">İletişim Bilgileri</h2>
                        <div className="space-y-4">
                            <p>
                                <strong>Adres:</strong><br />
                                Küresel Hedefler Türkiye<br />
                                İstanbul, Türkiye
                            </p>
                            <p>
                                <strong>E-posta:</strong><br />
                                info@kureselamaclar.org
                            </p>
                            <p>
                                <strong>Telefon:</strong><br />
                                +90 (xxx) xxx xx xx
                            </p>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold mb-4">Sosyal Medya</h3>
                            <p>Bizi sosyal medyada takip edin:</p>
                            <div className="flex space-x-4 mt-2">
                                <a href="https://twitter.com/TheGlobalGoals" className="text-primary hover:text-primary/80">Twitter</a>
                                <a href="https://www.facebook.com/theglobalgoals" className="text-primary hover:text-primary/80">Facebook</a>
                                <a href="https://www.instagram.com/TheGlobalGoals" className="text-primary hover:text-primary/80">Instagram</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6 title-font">İletişim Formu</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Ad Soyad
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    E-posta
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    Konu
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Mesaj
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-2 border rounded-md"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                            >
                                Gönder
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
} 