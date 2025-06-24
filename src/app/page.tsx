import { Clock } from "../../components/widgets/Clock";
import News from "../../components/widgets/News";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">losper smart home v1</h1>

      <main className="h-screen w-screen grid grid-cols-3 grid-rows-2 gap-4 p-4 bg-black text-white">
        {/* Clock: Top left, large */}
        <div className="col-span-2 row-span-1 bg-gray-800 rounded-2xl p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">Clock</h2>
          <Clock />
        </div>

        {/* Weather: Right column full height */}
        <div className="col-span-1 row-span-2 bg-gray-900 rounded-2xl p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">Weather</h2>
          {/* Weather component goes here */}
        </div>

        {/* News: Bottom left, scrollable */}
        <div className="col-span-2 row-span-1 bg-gray-800 rounded-2xl p-4 shadow overflow-y-auto">
          <h2 className="text-xl font-semibold mb-2">News</h2>
          <News />
        </div>
      </main>
    </>
  );
}
