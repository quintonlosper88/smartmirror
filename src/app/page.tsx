import { Clock } from "../../components/widgets/Clock";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-black text-white">
      <h1 className="mb-4 text-2xl">Losper Family Smart Home V1</h1>
      <hr />
      <Clock />
    </main>
  );
}
