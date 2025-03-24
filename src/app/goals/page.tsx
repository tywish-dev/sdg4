import Image from 'next/image';
import Link from 'next/link';

const goals = [
    {
        id: 1,
        title: 'Yoksulluğa Son',
        description: 'Her türlü yoksulluğu her yerde sona erdirmek.',
        color: '#e5243b',
        slug: '1-no-poverty'
    },
    {
        id: 2,
        title: 'Açlığa Son',
        description: 'Açlığı bitirmek, gıda güvenliğini sağlamak, beslenmeyi geliştirmek ve sürdürülebilir tarımı desteklemek.',
        color: '#DDA63A',
        slug: '2-zero-hunger'
    },
    {
        id: 3,
        title: 'Sağlık ve Kaliteli Yaşam',
        description: 'Sağlıklı yaşamları güvence altına almak ve her yaşta esenliği desteklemek.',
        color: '#4C9F38',
        slug: '3-good-health-and-well-being'
    },
    {
        id: 4,
        title: 'Nitelikli Eğitim',
        description: 'Kapsayıcı ve eşitlikçi, nitelikli eğitimi sağlamak ve herkes için yaşam boyu öğrenim fırsatlarını teşvik etmek.',
        color: '#C5192D',
        slug: '4-quality-education'
    },
    {
        id: 5,
        title: 'Toplumsal Cinsiyet Eşitliği',
        description: 'Toplumsal cinsiyet eşitliğini sağlamak ve tüm kadınlar ile kız çocuklarını güçlendirmek.',
        color: '#FF3A21',
        slug: '5-gender-equality'
    },
    {
        id: 6,
        title: 'Temiz Su ve Sanitasyon',
        description: 'Herkes için suya ve sanitasyona erişimi ve sürdürülebilir yönetimi güvence altına almak.',
        color: '#26BDE2',
        slug: '6-clean-water-and-sanitation'
    },
    {
        id: 7,
        title: 'Erişilebilir ve Temiz Enerji',
        description: 'Herkes için erişilebilir, güvenilir, sürdürülebilir ve modern enerjiyi sağlamak.',
        color: '#FCC30B',
        slug: '7-affordable-and-clean-energy'
    },
    {
        id: 8,
        title: 'İnsana Yakışır İş ve Ekonomik Büyüme',
        description: 'Sürdürülebilir ve kapsayıcı ekonomik büyümeyi, tam ve üretken istihdamı ve herkes için insana yakışır işleri desteklemek.',
        color: '#A21942',
        slug: '8-decent-work-and-economic-growth'
    },
    {
        id: 9,
        title: 'Sanayi, Yenilikçilik ve Altyapı',
        description: 'Dayanıklı altyapılar inşa etmek, kapsayıcı ve sürdürülebilir sanayileşmeyi desteklemek ve yenilikçiliği güçlendirmek.',
        color: '#FD6925',
        slug: '9-industry-innovation-and-infrastructure'
    },
    {
        id: 10,
        title: 'Eşitsizliklerin Azaltılması',
        description: 'Ülkeler içinde ve ülkeler arasında eşitsizlikleri azaltmak.',
        color: '#DD1367',
        slug: '10-reduced-inequalities'
    },
    {
        id: 11,
        title: 'Sürdürülebilir Şehirler ve Topluluklar',
        description: 'Şehirleri ve insan yerleşimlerini kapsayıcı, güvenli, dayanıklı ve sürdürülebilir kılmak.',
        color: '#FD9D24',
        slug: '11-sustainable-cities-and-communities'
    },
    {
        id: 12,
        title: 'Sorumlu Üretim ve Tüketim',
        description: 'Sürdürülebilir tüketim ve üretim kalıplarını sağlamak.',
        color: '#BF8B2E',
        slug: '12-responsible-consumption-and-production'
    },
    {
        id: 13,
        title: 'İklim Eylemi',
        description: 'İklim değişikliği ve etkileri ile mücadele için acilen eyleme geçmek.',
        color: '#3F7E44',
        slug: '13-climate-action'
    },
    {
        id: 14,
        title: 'Sudaki Yaşam',
        description: 'Sürdürülebilir kalkınma için okyanusları, denizleri ve deniz kaynaklarını korumak ve sürdürülebilir kullanmak.',
        color: '#0A97D9',
        slug: '14-life-below-water'
    },
    {
        id: 15,
        title: 'Karasal Yaşam',
        description: 'Karasal ekosistemleri korumak, restore etmek ve sürdürülebilir kullanımını desteklemek, ormanları sürdürülebilir yönetmek, çölleşme ile mücadele etmek, toprak bozulumunu durdurmak ve tersine çevirmek ve biyolojik çeşitlilik kaybını engellemek.',
        color: '#56C02B',
        slug: '15-life-on-land'
    },
    {
        id: 16,
        title: 'Barış, Adalet ve Güçlü Kurumlar',
        description: 'Sürdürülebilir kalkınma için barışçıl ve kapsayıcı toplumlar tesis etmek, herkes için adalete erişimi sağlamak ve her düzeyde etkili, hesap verebilir ve kapsayıcı kurumlar oluşturmak.',
        color: '#00689D',
        slug: '16-peace-justice-and-strong-institutions'
    },
    {
        id: 17,
        title: 'Amaçlar için Ortaklıklar',
        description: 'Uygulama araçlarını güçlendirmek ve sürdürülebilir kalkınma için küresel ortaklığı canlandırmak.',
        color: '#19486A',
        slug: '17-partnerships-for-the-goals'
    }
];

export default function GoalsPage() {
    return (
        <div className="pt-24 pb-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Sürdürülebilir Kalkınma Hedefleri</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
                    Birleşmiş Milletler tarafından belirlenen, yoksulluğa son vermek, gezegeni korumak ve herkesin barış ve refah içinde yaşamasını sağlamak için 2030 yılına kadar ulaşılması hedeflenen 17 küresel hedef.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {goals.map((goal) => (
                    <Link
                        href={`/goals/${goal.slug}`}
                        key={goal.id}
                        className="block group hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden border border-gray-200"
                    >
                        <div
                            className="h-4"
                            style={{ backgroundColor: goal.color }}
                        />
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <div
                                    className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-lg mr-4"
                                    style={{ backgroundColor: goal.color }}
                                >
                                    {goal.id}
                                </div>
                                <h2 className="text-xl font-bold group-hover:text-blue-600 transition-colors duration-300">
                                    {goal.title}
                                </h2>
                            </div>
                            <p className="text-gray-600">{goal.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
} 