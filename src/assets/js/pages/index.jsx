import { Link } from '@inertiajs/react'

export default function Index() {
  return (
    <div className="flex flex-col justify-center gap-y-24 my-12 w-screen">
      <div className="flex flex-row justify-center align-middle bg-white shadow-md p-2 w-3/4 rounded-full border-gray-300 border mx-auto">
        <Link href="/search" className="text-purple-600 no-underline">
          Seyahat Ara
        </Link>
      </div>

      <div className="flex flex-row justify-between bg-blue-200 shadow-md overflow-hidden w-full">
        <div className="p-8">
          <h1 className="text-lg font-bold">Seyahat Dostu</h1>
          <p>Seyahatlerinize kafa dengi bir dost ile çıkın.</p>
        </div>
        <div>
          <img src="/images/logo.png" className="h-40"></img>
        </div>
      </div>

      <div className="flex flex-row justify-between bg-blue-200 shadow-md overflow-hidden w-full">
        <div className="p-8">
          <h1 className="text-lg font-bold">Seyahat Dostu</h1>
          <p>Seyahatlerinize kafa dengi bir dost ile çıkın.</p>
        </div>
        <div>
          <img src="/images/logo.png" className="h-40"></img>
        </div>
      </div>

    </div>
  )
}
