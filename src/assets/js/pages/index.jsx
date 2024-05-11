import { Link } from '@inertiajs/react'

export default function Index() {
  return (
    <div className="h-[50vh] w-screen">
      <div className="p-8 text-center">
        <Link href="/search" className="text-purple-600 no-underline">
          Seyahat Ara
        </Link>
      </div>
    </div>
  )
}
