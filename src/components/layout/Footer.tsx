"use client"

import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';

const newsletterSchema = z.object({
  firstName: z.string().min(1, 'Ad alanı zorunludur'),
  lastName: z.string().min(1, 'Soyad alanı zorunludur'),
  email: z.string().email('Geçerli bir e-posta adresi giriniz').min(1, 'E-posta alanı zorunludur'),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

const Footer = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterForm) => {
    try {
      // Simulating an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      toast({
        variant: "success",
        title: "Başarılı!",
        description: "Bülten aboneliğiniz başarıyla tamamlandı.",
      });

      // Reset form
      reset();
    } catch (error) {
      // Show error message
      toast({
        variant: "destructive",
        title: "Hata!",
        description: "Bir hata oluştu. Lütfen tekrar deneyiniz.",
      });
    }
  };

  return (
    <footer className="bg-[#0077b8] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">GÜNCEL KALIN</h2>
          <p className="max-w-3xl mx-auto mb-8">
            Bültenimize kaydolun ve Küresel Hedeflere doğru ilerlemeyi sağlamaya yardımcı olan,
            tüm dünyada gerçekleşen büyük fikirler ve yeni kampanyalar hakkında bilgi edinin.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Ad"
                className="bg-transparent border-b-2 border-white rounded-none focus:border-white text-white placeholder:text-white placeholder:opacity-100"
                {...register('firstName')}
                aria-invalid={errors.firstName ? "true" : "false"}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-300">{errors.firstName.message}</p>
              )}
            </div>

            <div className="flex-1">
              <Input
                type="text"
                placeholder="Soyad"
                className="bg-transparent border-b-2 border-white rounded-none focus:border-white text-white placeholder:text-white placeholder:opacity-100"
                {...register('lastName')}
                aria-invalid={errors.lastName ? "true" : "false"}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-300">{errors.lastName.message}</p>
              )}
            </div>

            <div className="flex-1">
              <Input
                type="email"
                placeholder="E-posta"
                className="bg-transparent border-b-2 border-white rounded-none focus:border-white text-white placeholder:text-white placeholder:opacity-100"
                {...register('email')}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-300">{errors.email.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="bg-white text-[#0077b8] hover:bg-white/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Gönderiliyor...' : 'KATIL'}
            </Button>
          </form>

          <p className="text-xs mt-6 text-center">
            Formu göndererek Küresel Hedefler'in
            <Link href="/terms-conditions" className="underline ml-1">Şartlar ve Koşullar</Link> ve
            <Link href="/privacy-policy" className="underline ml-1">Gizlilik Politikası</Link>'nı kabul etmiş olursunuz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/">
              <img
                src="https://ext.same-assets.com/3646222951/3601422302.svg"
                alt="Küresel Hedefler"
                className="h-16 mb-4"
              />
            </Link>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-sm">Dolaşım</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:underline">Ana Sayfa</Link>
              <Link href="/goals" className="hover:underline">17 Hedef</Link>
              <Link href="/take-action" className="hover:underline">Harekete Geç</Link>
              <Link href="/news" className="hover:underline">Haberler</Link>
              <Link href="/resources" className="hover:underline">Kaynaklar</Link>
              <Link href="/partners" className="hover:underline">Ortaklar</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-bold mb-4 uppercase text-sm">Kısayollar</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="https://worldslargestlesson.globalgoals.org/" className="hover:underline">Okul</Link>
              <Link href="https://business.globalgoals.org/" className="hover:underline">İş Dünyası</Link>
              <Link href="/press" className="hover:underline">Basın</Link>
              <Link href="/project-everyone" className="hover:underline">Project Everyone</Link>
              <Link href="/contact-us" className="hover:underline">Bize Ulaşın</Link>
              <Link href="/podcast" className="hover:underline">Podcast</Link>
              <Link href="/category/campaigns" className="hover:underline">Kampanyalar</Link>
            </nav>
          </div>

          <div>
            <Link href="https://www.project-everyone.org/">
              <img
                src="https://ext.same-assets.com/3646222951/1148391730.svg"
                alt="Project Everyone"
                className="h-10 mb-4"
              />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/30 pt-4 flex flex-col md:flex-row justify-between">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            <Link href="/terms-conditions" className="text-sm hover:underline">Şartlar ve Koşullar</Link>
            <Link href="/privacy-policy" className="text-sm hover:underline">Gizlilik Politikası</Link>
            <Link href="/cookies" className="text-sm hover:underline">Çerezler</Link>
            <Link href="/anti-corruption" className="text-sm hover:underline">Yolsuzlukla Mücadele</Link>
            <Link href="/asset-licence" className="text-sm hover:underline">Varlık Lisansı</Link>
          </div>

          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/theglobalgoals" className="hover:opacity-80">
              <FaFacebookF className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com/TheGlobalGoals" className="hover:opacity-80">
              <FaTwitter className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/TheGlobalGoals/" className="hover:opacity-80">
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link href="https://www.youtube.com/channel/UCRfuAYy7MesZmgOi1Ezy0ng" className="hover:opacity-80">
              <FaYoutube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
