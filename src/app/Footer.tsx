import SocialIcons from '@/components/SocialIcons'
import Subscribe from './Subscribe'

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="mx-auto flex w-full flex-col items-stretch divide-y-[1px] divide-gray-600 px-4 xl:w-320 xl:px-0">
        <div className="py-16">
          <Subscribe />
        </div>
        <div className="flex flex-col-reverse items-center justify-between gap-6 py-4 md:flex-row">
          <p>
            Designed and Coded by <strong>Dang Minh Ngo</strong> &copy; 2023
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  )
}
