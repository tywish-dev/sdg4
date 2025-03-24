"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Search as SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export interface SearchProps extends React.HTMLAttributes<HTMLFormElement> {
    placeholder?: string
    searchPath?: string
}

export function Search({
    className,
    placeholder = "Arama yap...",
    searchPath = "/search",
    ...props
}: SearchProps) {
    const router = useRouter()
    const [searchQuery, setSearchQuery] = React.useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            router.push(`${searchPath}?q=${encodeURIComponent(searchQuery)}`)
        }
    }

    return (
        <form
            className={cn("relative w-full flex", className)}
            onSubmit={handleSubmit}
            {...props}
        >
            <Input
                type="search"
                placeholder={placeholder}
                className="pr-10 rounded-r-none border-r-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
                type="submit"
                className="rounded-l-none border border-input bg-[#c31c2d] hover:bg-[#c31c2d]/90 text-white"
            >
                <SearchIcon className="h-4 w-4" />
            </Button>
        </form>
    )
} 