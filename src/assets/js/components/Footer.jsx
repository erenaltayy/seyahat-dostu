export default function Footer() {
  return (
    <footer className="bg-green-700 h-[50vh] bg-round-pattern">
      <div className="h-1 bg-green-300"></div>
      <div className="container flex flex-col h-full w-full m-auto p-8 lg:flex-row justify-between items-center">
        <div className="flex justify-center mt-4 lg:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="bg-green-700 hover:bg-green-900 border-green-900 border-solid border text-white rounded-md px-3 py-2 text-sm font-medium">
                About
              </a>
            </li>
            <li>
              <a href="#" className="bg-green-700 hover:bg-green-900 border-green-900 border-solid border text-white rounded-md px-3 py-2 text-sm font-medium">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="bg-green-700 hover:bg-green-900 border-green-900 border-solid border text-white rounded-md px-3 py-2 text-sm font-medium">
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
          <p>Seyahat Dostu &copy; 2024</p>
        </div>
      </div>
    </footer>
  )
}
