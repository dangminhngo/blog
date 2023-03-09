import { SVGProps } from '@/types/shared'

export default function Logo(props: SVGProps) {
  return (
    <svg
      {...props}
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1V18.5194H6.87302V9.06202L16.873 21.155L6.87302 33.5581V24.5659H1V41H7.98413L24.9683 21.155L7.98413 1H1Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M33.8571 1L24.8095 12.0078L28.619 16.3488L34.8095 8.5969V18.5194H41V1H33.8571Z"
        stroke="currentColor"
      />
      <path
        d="M33.6984 41L24.6508 29.9922L28.4603 25.6512L34.6508 33.4031V23.4806H40.8413V41H33.6984Z"
        stroke="currentColor"
      />
    </svg>
  )
}
