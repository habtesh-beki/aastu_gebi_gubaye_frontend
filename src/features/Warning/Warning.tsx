import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Warning() {
  return (
    <div className="flex bg-white flex-col items-strech justify-between h-1/3 w-1/3 max-w-[460px] absolute top-1/4 left-1/3 border rounded-lg overflow-hidden shadow-lg">
      <Header />
      <div className="flex flex-col items-center justify-center p-10">
        <p className="text-black text-2xl text-center">
          Are you sure you want to remove the student !
        </p>
      </div>
      <Footer />
    </div>
  );
}
