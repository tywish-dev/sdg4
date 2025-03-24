"use client"

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// Define an interface for our search result items
interface SearchResult {
    id: number;
    title: string;
    description: string;
    link: string;
}

// This is a simple mock data structure that would typically come from a database or API
const mockSearchData: SearchResult[] = [
    {
        id: 1,
        title: "Nitelikli Eğitim Hedefi",
        description: "Kapsayıcı ve eşitlikçi nitelikli eğitimi sağlamak ve herkes için yaşam boyu öğrenme fırsatlarını teşvik etmek.",
        link: "/goals/4-quality-education"
    },
    {
        id: 2,
        title: "Ücretsiz İlk ve Orta Öğretim",
        description: "2030 yılına kadar, tüm kız ve erkek çocuklarının ilgili ve etkili öğrenme çıktılarına yol açan ücretsiz, eşitlikçi ve kaliteli ilk ve orta öğretimi tamamlamasını sağlamak.",
        link: "/goals/4-quality-education#targets"
    },
    {
        id: 3,
        title: "Kaliteli Okul Öncesi Eğitime Eşit Erişim",
        description: "2030 yılına kadar, tüm kız ve erkek çocuklarının, ilköğretime hazır olmaları için kaliteli erken çocukluk gelişimi, bakım ve okul öncesi eğitime erişimini sağlamak.",
        link: "/goals/4-quality-education#targets"
    },
    {
        id: 4,
        title: "Eğitimde Yapılacaklar",
        description: "Nitelikli eğitim hedefine ulaşmak için yapılabilecek eylemler ve aktiviteler.",
        link: "/goals/4-quality-education#things-to-do"
    }
]

export default function SearchPage() {
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get('q') || ''
    const [searchResults, setSearchResults] = useState<SearchResult[]>([])

    useEffect(() => {
        if (searchQuery) {
            // Filter mock data based on search query
            const results = mockSearchData.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase())
            )
            setSearchResults(results)
        } else {
            setSearchResults([])
        }
    }, [searchQuery])

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-[#c31c2d] py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto flex items-center h-16">
                        <h1 className="text-4xl font-bold text-white">Arama Sonuçları</h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-5xl mx-auto">
                    {searchQuery ? (
                        <>
                            <p className="text-xl mb-8">
                                <span className="font-bold">{searchQuery}</span> için arama sonuçları:
                                <span className="ml-2 text-gray-500">
                                    {searchResults.length} sonuç bulundu
                                </span>
                            </p>

                            {searchResults.length > 0 ? (
                                <div className="space-y-8">
                                    {searchResults.map(result => (
                                        <div key={result.id} className="bg-white p-6 rounded-lg shadow-sm">
                                            <h2 className="text-2xl font-bold mb-2">
                                                <Link href={result.link} className="text-[#c31c2d] hover:underline">
                                                    {result.title}
                                                </Link>
                                            </h2>
                                            <p className="text-gray-600 mb-4">{result.description}</p>
                                            <Link href={result.link}>
                                                <Button className="bg-[#c31c2d] hover:bg-[#c31c2d]/90 text-white">
                                                    Daha Fazla Bilgi
                                                </Button>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                                    <h2 className="text-2xl font-bold mb-4">Sonuç bulunamadı</h2>
                                    <p className="text-gray-600 mb-6">
                                        Aramanız için herhangi bir sonuç bulamadık. Lütfen farklı anahtar kelimelerle tekrar deneyin.
                                    </p>
                                    <Link href="/goals/4-quality-education">
                                        <Button className="bg-[#c31c2d] hover:bg-[#c31c2d]/90 text-white">
                                            Nitelikli Eğitim Sayfasına Dön
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                            <h2 className="text-2xl font-bold mb-4">Arama yapmak için bir anahtar kelime girin</h2>
                            <p className="text-gray-600 mb-6">
                                Eğitim ile ilgili içeriklerde arama yapmak için header'daki arama kutusunu kullanın.
                            </p>
                            <Link href="/goals/4-quality-education">
                                <Button className="bg-[#c31c2d] hover:bg-[#c31c2d]/90 text-white">
                                    Nitelikli Eğitim Sayfasına Dön
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
} 