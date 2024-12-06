import { Navbar } from "@/shared/components";
import { Sidebar } from "@/shared/components";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main>
        <Sidebar />
      </main>
    </div>
  );
}
