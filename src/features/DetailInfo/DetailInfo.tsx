import Footer from "./component/Footer";
import Header from "./component/Header";

export default function DetailInfo() {
  return (
    <div className="flex flex-col h-2/4 w-1/4 absolute top-1/4 left-1/3 border rounded-lg overflow-hidden shadow-lg">
      <Header />
      <div className="grid bg-white grid-cols-2 px-8 pt-4 gap-4 text-lg">
        <div className="">
          <p className="text-[#7D807C]">Full Name</p>
          <p>Hile Mikaile gemeches</p>
        </div>
        <div>
          <p className="text-[#7D807C]">Gender</p>
          <p>male</p>
        </div>
        <div>
          <p className="text-[#7D807C]">Student ID</p>
          <p>ETS0710/14</p>
        </div>
        <div>
          <p className="text-[#7D807C]">Department</p>
          <p>Electrical</p>
        </div>
        <div>
          <p className="text-[#7D807C]">Acadamic Year</p>
          <p>second</p>
        </div>
        <div>
          <p className="text-[#7D807C]">Service</p>
          <p>Mezemur</p>
        </div>
        <div>
          <p className="text-[#7D807C]">phone Number</p>
          <p>09786754</p>
        </div>
        <div>
          <p className="text-[#7D807C]">Email</p>
          <p>haile@gmail.com</p>
        </div>
        <div>
          <p className="text-[#7D807C]">Language</p>
          <p>Amharic</p>
        </div>
        <div>
          <p className="text-[#7D807C]">Role</p>
          <p>Admin</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
