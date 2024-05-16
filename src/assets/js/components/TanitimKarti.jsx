export default function TanitimKarti({title, content}) {
    return (
      <div className="flex flex-col text-wrap items-center justify-center bg-white rounded-lg overflow-hidden shadow-lg w-full mx-4 hover:shadow-xl h-60">
          <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-center" >{title}</h3>
              <p className="text-gray-600 text-center">{content}</p>
          </div>
      </div>
    )
}