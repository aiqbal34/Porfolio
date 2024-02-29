import Navbar from "./_components/Navbar";
import Title from "./_components/Title";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <Navbar></Navbar>
      {/* title */}
      <div className="flex-grow flex items-center justify-center border">
        <Title></Title>
      </div>
    </div>
  );
}
