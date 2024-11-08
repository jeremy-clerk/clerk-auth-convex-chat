export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={"flex flex-col w-full h-full items-center justify-center"}>
      {children}
    </div>
  );
}
