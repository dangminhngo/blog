import Image from 'next/image'

import Cloud from './Cloud'
import Github from '@/assets/icons/Github'
import Facebook from '@/assets/icons/Facebook'
import Twitter from '@/assets/icons/Twitter'
import Cactus from '@/assets/icons/Cactus'

export default function About() {
  return (
    <Cloud title="About Me">
      <div className="flex items-center gap-6">
        <div className="relative h-20 w-20 overflow-hidden rounded-full border border-gray-600">
          <Image src="/avatars/dangminhngo.png" alt="Dang Minh Ngo" fill={true} />
        </div>
        <div className="space-y-4">
          <strong>Dang Minh Ngo</strong>
          <div className="flex flex-1 items-center justify-end gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="text-gray-300" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Facebook className="text-[#1877f2]" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Twitter className="text-[#1da1f2]" />
            </a>
            <a href="https://dangminhngo.github.io" target="_blank" rel="noreferrer">
              <Cactus className="text-accent-400" />
            </a>
          </div>
        </div>
      </div>
      <p className="leading-relaxed">
        Hi, my name is Dang Minh Ngo. I am a Front-end Developer who is living and working Ho Chi
        Minh, Vietnam. Welcome to my personal blog where I share everything I know.
      </p>
    </Cloud>
  )
}
