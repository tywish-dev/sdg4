"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface Video {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    videoId: string;
    externalUrl?: string;
    canEmbed?: boolean;
}

const videos: Video[] = [
    {
        id: '1',
        title: 'SDG 4 for Children – Quality Education | UNESCO',
        description: 'UNESCO Brezilya tarafından hazırlanan bu 2 dakikalık animasyon, 7–11 yaş arası çocuklara sürdürülebilir kalkınma için eğitimin önemini anlatıyor. Video, insan hakları, toplumsal cinsiyet eşitliği ve kültürel çeşitlilik gibi konuları ele alarak çocuklara SDG 4\'ün hedeflerini tanıtıyor.',
        thumbnail: 'https://img.youtube.com/vi/LIExX9St4oA/maxresdefault.jpg',
        videoId: 'LIExX9St4oA',
        canEmbed: true
    },
    {
        id: '2',
        title: 'SDG 4 Quality Education – Deep Dive | Hippy In A Suit',
        description: 'Bu derinlemesine inceleme videosu, SDG 4\'ün hedeflerini, karşılaşılan zorlukları ve eğitimde eşitliğin önemini ele alıyor. Video, kapsayıcı ve sürdürülebilir öğrenme ortamlarının oluşturulmasının gerekliliğini vurguluyor.',
        thumbnail: 'https://img.youtube.com/vi/PjjWYHEuoKI/maxresdefault.jpg',
        videoId: 'PjjWYHEuoKI',
        canEmbed: true
    },
    {
        id: '3',
        title: 'Sustainable Development Goal 4: Quality Education | Academy 4SC',
        description: 'Bu video, SDG 4\'ün on hedefini ve bu hedeflerin nasıl ölçüldüğünü açıklıyor. Ayrıca, eğitimdeki küresel eşitsizlikler ve bu eşitsizliklerin üstesinden gelmek için önerilen stratejiler hakkında bilgi veriyor.',
        thumbnail: 'https://learn.academy4sc.org/wp-content/uploads/2021/03/SDG4-Quality-Education-1024x576.png',
        videoId: '',
        externalUrl: 'https://learn.academy4sc.org/video/sustainable-development-goal-4-quality-education/',
        canEmbed: false
    },
    {
        id: '4',
        title: 'Anadolu’dan Yarınlara Sürdürülebilir Kalkınma Amaçları Eğitim Programı – Seminer 1',
        description: 'Anadolu Grubu tarafından düzenlenen bu seminer, sürdürülebilir kalkınma kavramının gelişimini ve Birleşmiş Milletler\'in 2030 hedeflerini anlatıyor. Video, Türkiye\'deki eğitim programlarının SDG 4 ile nasıl uyumlu hale getirildiğini gösteriyor.',
        thumbnail: 'https://s1.dmcdn.net/v/S4Qk91X4Qk9k4Qk9k/x720',
        videoId: '',
        externalUrl: 'https://www.dailymotion.com/embed/video/x84ebcx',
        canEmbed: true
    },
    {
        id: '5',
        title: 'The Ten Targets of Sustainable Development Goal 4…with Elyx | UNESCO',
        description: 'Birleşmiş Milletler\'in dijital elçisi Elyx ile hazırlanan bu animasyon, SDG 4\'ün on hedefini eğlenceli bir şekilde tanıtıyor. Video, kapsayıcı ve kaliteli eğitimin nasıl sağlanabileceğine dair bilgiler sunuyor.',
        thumbnail: 'https://img.youtube.com/vi/V24JzUPlR44/maxresdefault.jpg',
        videoId: 'V24JzUPlR44',
        canEmbed: true
    }
];

export default function VideosPage() {
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

    return (
        <main className="container mx-auto px-4 py-24 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Eğitim Videoları</h1>
            <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
                Nitelikli eğitim hakkında bilgilendirici videolar ve eğitim içerikleri
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video) => (
                    <Sheet key={video.id}>
                        <SheetTrigger asChild>
                            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                                <CardContent className="p-4">
                                    <div className="aspect-video mb-4 relative overflow-hidden rounded-lg">
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                                            <Button
                                                variant="secondary"
                                                className="bg-white/90 hover:bg-white text-primary"
                                                onClick={() => setSelectedVideo(video)}
                                            >
                                                Videoyu İzle
                                            </Button>
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
                                    <p className="text-gray-600">{video.description}</p>
                                </CardContent>
                            </Card>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-[90vw] md:w-[80vw] lg:w-[60vw]">
                            <div className="h-full flex flex-col">
                                <h2 className="text-2xl font-bold mb-4">{video.title}</h2>
                                <div className="flex-grow relative">
                                    {video.videoId ? (
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.videoId}`}
                                            title={video.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full absolute inset-0 rounded-lg"
                                        />
                                    ) : video.externalUrl && video.canEmbed ? (
                                        <iframe
                                            src={video.externalUrl}
                                            title={video.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full absolute inset-0 rounded-lg"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full">
                                            <a
                                                href={video.externalUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary underline"
                                            >
                                                Videoyu yeni sekmede aç
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <p className="mt-4 text-gray-600">{video.description}</p>
                                {video.externalUrl && (
                                    <a
                                        href={video.externalUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 text-primary underline block"
                                    >
                                        Videoyu yeni sekmede aç
                                    </a>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                ))}
            </div>
        </main>
    );
} 