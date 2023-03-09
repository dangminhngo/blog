export default function Subscribe() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="mb-2 text-2xl font-bold">Subscribe to my Newsletter</h1>
      <form className="relative w-[512px] rounded-lg bg-gray-700">
        <input
          className="rounded-lg bg-transparent px-6 py-4 outline-none placeholder:text-gray-500"
          placeholder="Enter your email address"
        />
        <button className="absolute top-1/2 right-0 -translate-x-2 -translate-y-1/2 rounded-lg bg-gray-900 px-6 py-2 font-semibold">
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
