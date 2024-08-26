"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Disc3 } from "lucide-react"

interface Props {
  results: any[];
}

export default function SearchGridView({ results }: Props) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null)

  const handleMouseEnter = (id: number) => {
    setHoveredId(id)
    if (audioElement) {
      audioElement.play()
    }
  }

  const handleMouseLeave = () => {
    setHoveredId(null)
    if (audioElement) {
      audioElement.pause()
      audioElement.currentTime = 0
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {results.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <CardContent className="p-4">
              <div className="relative w-full pb-[100%]">
                <div
                  className={`absolute inset-0 rounded-full overflow-hidden transition-transform duration-500 ease-in-out ${
                    hoveredId === item.id ? "animate-spin" : ""
                  }`}
                  style={{
                    backgroundImage: `url(${item.cover})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <Disc3 className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-sm text-muted-foreground">{item.artist}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <audio
        ref={(el) => setAudioElement(el)}
        src="https://example.com/audio-sample.mp3"
        preload="auto"
      />
    </div>
  )
}