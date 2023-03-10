export interface CloudProps {
  title: string
  rightSide?: boolean
  children: React.ReactNode
}

export default function Cloud({ title, rightSide = false, children }: CloudProps) {
  return (
    <div className="relative">
      <h3
        className={`absolute top-0 ${
          rightSide ? 'right-6' : 'left-6'
        } -translate-y-1/2 rounded-lg border border-gray-600 bg-gray-900 px-6 py-2 text-lg font-semibold`}
      >
        {title}
      </h3>
      <div className="space-y-6 rounded-2xl border border-gray-600 px-6 pt-11 pb-6">{children}</div>
    </div>
  )
}
