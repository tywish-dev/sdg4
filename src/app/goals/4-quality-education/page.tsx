import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaTwitter, FaFacebookF, FaPinterest, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import QualityEducationHero from '@/components/goals/QualityEducationHero';
import TargetCard from '@/components/goals/TargetCard';

export default function QualityEducationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <QualityEducationHero />

      {/* Main content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Description section */}
          <section className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 uppercase title-font">
              KAPSAYICI VE EŞİTLİKÇİ NİTELİKLİ EĞİTİMİ SAĞLAMAK VE HERKES İÇİN YAŞAM BOYU ÖĞRENME FIRSATLARINI TEŞVİK ETMEK.
            </h2>
            <p className="text-lg mb-8">
              Eğitim, zekayı özgürleştirir, hayal gücünü açar ve öz saygı için temeldir. Refahın anahtarıdır ve her birimizin ilerici, sağlıklı bir topluma katkıda bulunmasını mümkün kılan bir fırsatlar dünyası açar. Öğrenme her insana fayda sağlar ve herkese açık olmalıdır.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/resources">
                <Button className="bg-[#c31c2d] hover:bg-[#c31c2d]/90 text-white">
                  Kaynaklar
                </Button>
              </Link>
              <Link href="/take-action">
                <Button className="bg-[#c31c2d] hover:bg-[#c31c2d]/90 text-white">
                  Harekete Geç
                </Button>
              </Link>
              <Link href="#things-to-do">
                <Button className="bg-[#c31c2d] hover:bg-[#c31c2d]/90 text-white">
                  Yapılacaklar
                </Button>
              </Link>
            </div>
            <div className="mt-8 space-y-4">
              <div>
                <p className="text-sm uppercase font-bold mb-2">Güncel kalmak için bültenimize abone olun</p>
                <div className="flex space-x-2">
                  <span className="text-sm uppercase font-bold">Bu sayfayı paylaş</span>
                  <div className="flex space-x-2">
                    <Link href="https://twitter.com/intent/tweet?url=https://www.globalgoals.org/goals/4-quality-education/" className="text-[#c31c2d]">
                      <FaTwitter className="h-5 w-5" />
                    </Link>
                    <Link href="https://www.facebook.com/sharer/sharer.php?u=https://www.globalgoals.org/goals/4-quality-education/" className="text-[#c31c2d]">
                      <FaFacebookF className="h-5 w-5" />
                    </Link>
                    <Link href="https://www.pinterest.com/pin/create/button/?url=https://www.globalgoals.org/goals/4-quality-education/" className="text-[#c31c2d]">
                      <FaPinterest className="h-5 w-5" />
                    </Link>
                    <Link href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.globalgoals.org/goals/4-quality-education/" className="text-[#c31c2d]">
                      <FaLinkedinIn className="h-5 w-5" />
                    </Link>
                    <Link href="https://api.whatsapp.com/send?text=https://www.globalgoals.org/goals/4-quality-education/" className="text-[#c31c2d]">
                      <FaWhatsapp className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Targets section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 uppercase title-font">HEDEFLER</h2>
            <p className="text-lg mb-8">
              Herkes Küresel Hedeflere ulaşmamızı sağlamaya yardımcı olabilir. Nitelikli eğitimi sağlamak için eylem oluşturmak üzere bu on hedefi kullanın.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <TargetCard
                number="4.1"
                title="ÜCRETSİZ İLK VE ORTA ÖĞRETİM"
                description="2030 yılına kadar, tüm kız ve erkek çocuklarının ilgili ve etkili öğrenme çıktılarına yol açan ücretsiz, eşitlikçi ve kaliteli ilk ve orta öğretimi tamamlamasını sağlamak."
                imageUrl="https://ext.same-assets.com/2670017615/1806687726.svg"
              />

              <TargetCard
                number="4.2"
                title="KALİTELİ OKUL ÖNCESİ EĞİTİME EŞİT ERİŞİM"
                description="2030 yılına kadar, tüm kız ve erkek çocuklarının, ilköğretime hazır olmaları için kaliteli erken çocukluk gelişimi, bakım ve okul öncesi eğitime erişimini sağlamak."
                imageUrl="https://ext.same-assets.com/2670017615/3254498891.svg"
              />

              <TargetCard
                number="4.3"
                title="UYGUN FİYATLI TEKNİK, MESLEKİ VE YÜKSEK ÖĞRENİME EŞİT ERİŞİM"
                description="2030 yılına kadar, tüm kadın ve erkeklerin üniversite dahil olmak üzere uygun fiyatlı ve kaliteli teknik, mesleki ve yüksek öğrenime eşit erişimini sağlamak."
                imageUrl="https://ext.same-assets.com/2670017615/1127720775.svg"
              />

              <TargetCard
                number="4.4"
                title="FİNANSAL BAŞARI İÇİN İLGİLİ BECERİLERE SAHİP KİŞİ SAYISINI ARTIRMAK"
                description="2030 yılına kadar, istihdam, insana yakışır işler ve girişimcilik için teknik ve mesleki beceriler dahil olmak üzere ilgili becerilere sahip genç ve yetişkin sayısını önemli ölçüde artırmak."
                imageUrl="https://ext.same-assets.com/2670017615/1044160847.svg"
              />

              <TargetCard
                number="4.5"
                title="EĞİTİMDE TÜM AYRIMCILIĞI ORTADAN KALDIRMAK"
                description="2030 yılına kadar, eğitimde cinsiyet eşitsizliklerini ortadan kaldırmak ve engelliler, yerli halklar ve savunmasız durumdaki çocuklar dahil olmak üzere savunmasız kişilerin tüm eğitim ve mesleki eğitim seviyelerine eşit erişimini sağlamak."
                imageUrl="https://ext.same-assets.com/2670017615/594867196.svg"
              />

              <TargetCard
                number="4.6"
                title="EVRENSEL OKURYAZARLIK VE MATEMATİK BECERİSİ"
                description="2030 yılına kadar, tüm gençlerin ve hem erkek hem de kadın yetişkinlerin önemli bir oranının okuma, yazma ve matematik becerilerine ulaşmasını sağlamak."
                imageUrl="https://ext.same-assets.com/2670017615/2265843220.svg"
              />

              <TargetCard
                number="4.7"
                title="SÜRDÜRÜLEBİLİR KALKINMA VE KÜRESEL VATANDAŞLIK İÇİN EĞİTİM"
                description="2030 yılına kadar, diğerlerinin yanı sıra, sürdürülebilir kalkınma için eğitim ve sürdürülebilir yaşam tarzları, insan hakları, cinsiyet eşitliği, barış ve şiddet içermeyen kültürün teşviki, küresel vatandaşlık ve kültürel çeşitliliğin takdiri ve sürdürülebilir kalkınmaya kültürün katkısı yoluyla, tüm öğrencilerin sürdürülebilir kalkınmayı teşvik etmek için gerekli bilgi ve becerileri edinmesini sağlamak."
                imageUrl="https://ext.same-assets.com/2670017615/2217337232.svg"
              />

              <TargetCard
                number="4.8"
                title="KAPSAYICI VE GÜVENLİ OKULLAR İNŞA ETMEK VE YÜKSELTMEK"
                description="Çocuk, engelli ve cinsiyet duyarlı eğitim tesisleri inşa etmek ve yükseltmek ve herkes için güvenli, şiddet içermeyen, kapsayıcı ve etkili öğrenme ortamları sağlamak."
                imageUrl="https://ext.same-assets.com/2670017615/2530928535.svg"
              />

              <TargetCard
                number="4.9"
                title="GELİŞMEKTE OLAN ÜLKELER İÇİN YÜKSEK ÖĞRENİM BURSLARINI GENİŞLETMEK"
                description="2020 yılına kadar, gelişmiş ülkelerde ve diğer gelişmekte olan ülkelerde mesleki eğitim ve bilgi ve iletişim teknolojisi, teknik, mühendislik ve bilimsel programlar dahil olmak üzere yüksek öğrenim kaydı için gelişmekte olan ülkelere, özellikle en az gelişmiş ülkelere, gelişmekte olan küçük ada devletlerine ve Afrika ülkelerine sunulan bursların sayısını küresel olarak önemli ölçüde artırmak."
                imageUrl="https://ext.same-assets.com/2670017615/167198564.svg"
              />

              <TargetCard
                number="4.a"
                title="GELİŞMEKTE OLAN ÜLKELERDE NİTELİKLİ ÖĞRETMENLERİN SAYISINI ARTIRMAK"
                description="2030 yılına kadar, özellikle en az gelişmiş ülkeler ve gelişmekte olan küçük ada devletleri olmak üzere gelişmekte olan ülkelerde öğretmen eğitimi için uluslararası işbirliği yoluyla nitelikli öğretmenlerin arzını önemli ölçüde artırmak."
                imageUrl="https://ext.same-assets.com/2670017615/4126927710.svg"
              />
            </div>
          </section>

          {/* Things to do section */}
          <section id="things-to-do" className="mb-16">
            <h2 className="text-3xl font-bold mb-8 uppercase title-font">YAPILACAKLAR</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#c31c2d] flex items-center justify-center text-white">
                  <span className="text-xl">1</span>
                </div>
                <div>
                  <p className="text-lg">
                    Desteklemek istediğiniz bir Hedef 4 hayır kurumu bulun. Küçük ya da büyük, her bağış fark yaratabilir!
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#c31c2d] flex items-center justify-center text-white">
                  <span className="text-xl">2</span>
                </div>
                <div>
                  <p className="text-lg">
                    Kullanılmış kitaplarınızı bağışlayın. Bilgiye erişim sağlamanın en kolay yolu, kullanılmış kitaplarınızı birine bağışlamaktır.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#c31c2d] flex items-center justify-center text-white">
                  <span className="text-xl">3</span>
                </div>
                <div>
                  <p className="text-lg">
                    Ücretsiz çevrimiçi kursları teşvik edin ve alın. Dijital bir dünyada, sadece üniversiteye gitmek dışında eğitime erişmek için daha fazla fırsat var.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#c31c2d] flex items-center justify-center text-white">
                  <span className="text-xl">4</span>
                </div>
                <div>
                  <p className="text-lg">
                    Yerel okulunuzu ziyaret edin ve hangi okul malzemelerine ihtiyaç duyduklarını sorun. Topluluğunuzda bir okul malzemesi toplama kampanyası başlatın.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#c31c2d] flex items-center justify-center text-white">
                  <span className="text-xl">5</span>
                </div>
                <div>
                  <p className="text-lg">
                    Gençlere rehberlik edin. Özel ders verebilir ve ödev yardımı sağlayabilir, bir dil öğretebilir veya Küresel Hedefler hakkında bir ders verebilirsiniz.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#c31c2d] flex items-center justify-center text-white">
                  <span className="text-xl">6</span>
                </div>
                <div>
                  <p className="text-lg">
                    Bilgi sahibi olun. Yerel haberlerinizi takip edin ve <a href="https://twitter.com/TheGlobalGoals" className="text-[#c31c2d] hover:underline">@TheGlobalGoals</a> üzerinden çevrimiçi veya sosyal medyada Küresel Hedeflerle iletişimde kalın.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* School and Business sections */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-100 p-8">
              <h3 className="text-2xl font-bold mb-4 uppercase title-font">OKUL</h3>
              <p className="mb-6">
                Dünyanın En Büyük Dersini ve geniş kapsamlı etkinlikleri ve materyalleri keşfedin. Hepsi gençleri motive etmek ve onları bilgili ve aktif vatandaşlar olmaya teşvik etmek için tasarlanmıştır.
              </p>
              <Link href="https://worldslargestlesson.globalgoals.org/">
                <Button className="bg-black hover:bg-black/80 text-white">
                  Öğrenmeye başla
                </Button>
              </Link>
            </div>

            <div className="bg-gray-100 p-8">
              <h3 className="text-2xl font-bold mb-4 uppercase title-font">İŞ DÜNYASI</h3>
              <p className="mb-6">
                İster bir işletme ister bir çalışan olun, sürdürülebilirlik yolculuğunuzun başında olun veya bir sonraki taahhüt setinizi geliştiriyor olun, Küresel Hedeflere katkınızı desteklemek için faydalı kaynaklarımız var.
              </p>
              <Link href="https://business.globalgoals.org/">
                <Button className="bg-black hover:bg-black/80 text-white">
                  Planlamaya başla
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
