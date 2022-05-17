import Header from "./Header";

interface LayoutProps {
  children: React.ReactElement | React.ReactElement[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="px-4 lg:px-0">
      <Header />
      <main className="container mx-auto max-w-7xl">{children}</main>
    </div>
  );
};

export default Layout;
