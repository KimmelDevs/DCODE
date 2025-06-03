'use client'
import Image from 'next/image'
import { Button } from './button'
import { useRouter } from 'next/navigation'

export function Hero() {
  const router = useRouter()

  return (
    <section className="relative py-16 min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0"></div> {/* Overlay for better text contrast */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        {/* Text Content */}
        <div className="max-w-2xl space-y-6 text-black">
          <h1 className="text-4xl text-blue-600 md:text-5xl font-bold">
            DCODE
          </h1>
          
          <p className="text-lg text-white">
            Official DCODE Website, Learn more about this coding team and what they do
          </p>

          <div className="flex gap-4 justify-center">
            <Button 
              asChild 
              className="bg-white text-blue-600 hover:bg-white/90"
              onClick={() => router.push('/dashboard')}
            >
              <span>Proceed to Website</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero