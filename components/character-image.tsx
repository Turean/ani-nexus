"use client"

import Image from "next/image"
import { useState } from "react"

export default function CharacterImage({
    src,
    alt,
}: {
    src: string
    alt: string
}) {
    const [error, setError] = useState(false)

    return (
        <div className="relative aspect-2/3 rounded-lg overflow-hidden mb-2">
            {error ? (
                <div className="w-full h-full bg-gray-300" />
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width: 768px) 10vw, (min-width: 640px) 12vw, 30vw"
                    className="object-cover"
                    onError={() => setError(true)}
                />
            )}
        </div>
    )
}
