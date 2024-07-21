import { CardDemo1 } from "../components/ui/card1";
import { CardDemo2 } from "../components/ui/card2";
import { CardDemo3 } from "../components/ui/card3";

export default function Page() {
  return (
    <main className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-wrap justify-center items-center w-full max-w-screen-lg">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <CardDemo1 />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <CardDemo2 />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <CardDemo3 />
        </div>

      </div>
    </main>
  );
}
