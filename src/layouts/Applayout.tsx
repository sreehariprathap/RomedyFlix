import Navbar from "../components/Navbar/Navbar"

const Applayout: React.FC<any> = ({ children }) => {
  return (
    <div className="flex flex-col bg-dark">
      <Navbar />
      {children}
    </div>
  )
}

export default Applayout
