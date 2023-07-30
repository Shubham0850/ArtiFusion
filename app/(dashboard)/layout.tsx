import NavBar from "@/components/navbar";
import SideBar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900 md:w-72">
        <SideBar/>
      </div>
      <main className="md:ml-72">
        <NavBar />
        {children}
      </main>
    </div>
  );
}
