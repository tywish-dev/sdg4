import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Project Everyone | Küresel Hedefler',
    description: 'Project Everyone hakkında bilgi ve çalışmalar.',
};

export default function ProjectEveryonePage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 title-font">Project Everyone</h1>
            <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                    Project Everyone, Küresel Hedefleri herkes için erişilebilir ve anlaşılır kılmak amacıyla kurulmuş bir organizasyondur.
                    Amacımız, sürdürülebilir kalkınma hedeflerini dünya çapında tanıtmak ve bu hedeflere ulaşmak için gerekli eylemleri teşvik etmektir.
                </p>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 title-font">Misyonumuz</h2>
                    <p>
                        Project Everyone, Küresel Hedeflerin başarıya ulaşması için çalışan, kâr amacı gütmeyen bir yaratıcı iletişim ajansıdır.
                        Richard Curtis tarafından kurulan Project Everyone, Birleşmiş Milletler ve iş dünyası, sivil toplum kuruluşları ve bireylerle
                        işbirliği yaparak Küresel Hedeflerin bilinirliğini artırmak ve eyleme geçmek için çalışmaktadır.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 title-font">Çalışmalarımız</h2>
                    <p>
                        Project Everyone olarak, yaratıcı iletişim kampanyaları, eğitim programları ve ortaklıklar aracılığıyla
                        Küresel Hedeflerin tanıtımını yapıyor ve bu hedeflere ulaşmak için gerekli eylemleri teşvik ediyoruz.
                    </p>
                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6 title-font">İletişim</h2>
                    <p>
                        Project Everyone ile iletişime geçmek için:<br />
                        E-posta: info@project-everyone.org
                    </p>
                </div>
            </div>
        </div>
    );
} 