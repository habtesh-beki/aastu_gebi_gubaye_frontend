import Login from "@/shared/components/Login/login";

export default function LoginPage({
  setLogedIn,
}: {
  setLogedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex bg-[#dbeafe] justify-center items-center h-screen w-full">
      <Login setLogedIn={setLogedIn} />
    </div>
  );
}
