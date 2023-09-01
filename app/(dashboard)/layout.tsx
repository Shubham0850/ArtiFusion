import SideBar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-full">
      <div className="">
        <SideBar/>
      </div>
      <div className="w-full bg-[#1E1E1F] h-[100vh] overflow-y-scroll">
        {children}
      </div>
    </div>
  );
}
