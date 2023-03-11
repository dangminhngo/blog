export default function Subscribe() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="mb-2 text-2xl font-bold">Subscribe to my Newsletter</h1>
      <form className="relative flex w-full items-center rounded-lg bg-gray-700 p-2 sm:w-[512px]">
        <input
          className="w-full rounded-lg bg-transparent px-2 outline-none placeholder:text-gray-500"
          placeholder="Enter your email address"
        />
        <button className="rounded-lg bg-gray-900 px-6 py-2 font-semibold">Submit</button>
      </form>
      <p className="w-full text-center leading-relaxed sm:w-[456px]">
        Subscribe to our email newsletter to get the <strong>latest articles</strong> delivered{' '}
        <strong>right to your email</strong>.
      </p>
    </div>
  )
}
