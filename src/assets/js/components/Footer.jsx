export default function Footer() {
  return (
    <footer className="flex flex-col h-[50vh] bg-blue-900">
      <div className="h-1 bg-blue-300"></div>
      <div className="container flex flex-col space-y-4 h-full w-full m-auto p-8 lg:flex-row justify-between items-center">
        <div className="flex justify-center mt-4 lg:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="bg-blue-900 hover:bg-blue-700 border-blue-700 border-solid border-2 text-white  px-3 py-2 text-sm font-medium">
                About
              </a>
            </li>
            <li>
              <a href="#" className="bg-blue-900 hover:bg-blue-700 border-blue-700 border-solid border-2 text-white  px-3 py-2 text-sm font-medium">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="bg-blue-900 hover:bg-blue-700 border-blue-700 border-solid border-2 text-white  px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center text-white">
          <p>Address: 123 Main St, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
          <br></br>
        </div>
      </div>
      <div className="bg-blue-800 p-4 text-white text-center snake-pattern">
        <p>Seyahat Dostu &copy; 2024</p>
      </div>
    </footer>
  )
}
