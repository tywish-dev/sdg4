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
}

const videos: Video[] = [
    {
        id: '1',
        title: 'Nitelikli Eğitim Nedir?',
        description: 'Sürdürülebilir Kalkınma Hedefleri kapsamında nitelikli eğitimin önemi ve hedefleri.',
        thumbnail: 'https://img.youtube.com/vi/xGQxZJwXK9Y/maxresdefault.jpg',
        videoId: 'xGQxZJwXK9Y'
    },
    {
        id: '2',
        title: 'Eğitimde Fırsat Eşitliği',
        description: 'Herkes için eşit eğitim fırsatları ve bunun sürdürülebilir kalkınmadaki rolü.',
        thumbnail: 'https://img.youtube.com/vi/4HXyJmY--g8/maxresdefault.jpg',
        videoId: '4HXyJmY--g8'
    },
    {
        id: '3',
        title: 'Dijital Çağda Eğitim',
        description: 'Teknolojinin eğitimdeki rolü ve geleceğin öğrenme yöntemleri.',
        thumbnail: 'https://img.youtube.com/vi/rG_ZiQZvEtE/maxresdefault.jpg',
        videoId: 'rG_ZiQZvEtE'
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
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.videoId}`}
                                        title={video.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full absolute inset-0 rounded-lg"
                                    />
                                </div>
                                <p className="mt-4 text-gray-600">{video.description}</p>
                            </div>
                        </SheetContent>
                    </Sheet>
                ))}
            </div>
        </main>
    );
} 