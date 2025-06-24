import { Clock } from "../../components/widgets/Clock";
import News from "../../components/widgets/News";
export default function Home() {
  return (
    <main className="h-screen w-screen grid grid-cols-3 grid-rows-2 gap-4 p-4 bg-black text-white">
      <div className="col-span-2 row-span-1 bg-gray-800 rounded-2xl p-4 shadow">
        <h2 className="text-xl font-semibold">Clock</h2>
        {/* Insert <Clock /> component here */}
        <Clock />
      </div>

      <div className="col-span-1 row-span-2 bg-gray-900 rounded-2xl p-4 shadow">
        <h2 className="text-xl font-semibold">Weather</h2>
        {/* Insert <Weather /> */}
      </div>

      <div className="col-span-2 row-span-1 bg-gray-800 rounded-2xl p-4 shadow">
        <h2 className="text-xl font-semibold">News</h2>
        {/* Insert <News /> */}
        <News />
      </div>
    </main>
  );
}
