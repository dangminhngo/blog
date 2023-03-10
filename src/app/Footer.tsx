import SocialIcons from '@/components/SocialIcons'
import Subscribe from './Subscribe'

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="mx-auto flex w-320 flex-col items-stretch divide-y-[1px] divide-gray-600">
        <div className="py-16">
          <Subscribe />
        </div>
        <div className="flex items-center justify-between py-4">
          <p>
            Designed and Coded by <strong>Dang Minh Ngo</strong> &copy; 2023
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  )
}
