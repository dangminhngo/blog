export default function Subscribe() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="mb-2 text-2xl font-bold">Subscribe to my Newsletter</h1>
      <form className="relative w-[512px] flex p-2 items-center rounded-lg bg-gray-700">
        <input
          className="px-2 w-full rounded-lg bg-transparent outline-none placeholder:text-gray-500"
          placeholder="Enter your email address"
        />
        <button className="rounded-lg bg-gray-900 px-6 py-2 font-semibold">
          Submit
        </button>
      </form>
      <p className="w-[456px] text-center leading-relaxed">
        Subscribe to our email newsletter to get the <strong>latest articles</strong> delivered{' '}
        <strong>right to your email</strong>.
      </p>
    </div>
  )
}
