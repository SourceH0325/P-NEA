import { useState } from "react";

function App() {

  let [Count, setCount] = useState(0);
  let onIncrease = () => {
    setCount(Count + 1);
  }

  let today = new Date(),
    dday = new Date("Nov 16,2023, 08:40:00").getTime(),
    gap = dday - today,
    result = Math.floor(gap / (1000 * 60 * 60 * 24));

  return (
    <div>
      <div className="mt-20 text-center text-white">
        <p className="text-[24px]">2024학년도 대학수학능력시험</p>
        <p className="text-[90px]">D-{result}</p>
      </div>
      <div className="mt-20 text-center">
        <button onClick={onIncrease} className="transition duration-300 ease-in-out rounded-md bg-neutral-600 pr-3 pl-3 text-[24px] text-[#212529] hover:bg-[#0051ff]">응원 추가</button>
      </div>
      <div className="mt-20 text-center">
        <button className="rounded-md bg-orange-500 pr-3 pl-3 text-[24px] text-white" disabled>응원 수 : {Count}</button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 mb-2 mt-2 text-center">
        <p className="text-neutral-600">(ง •̀ω•́)ง 화이팅!</p>
        <a className="transition duration-300 ease-in-out text-neutral-600 underline underline-offset-4 hover:text-white" href="https://github.com/SourceH0325/Future">GITHUB</a>
      </div>
    </div>
  )
}

export default App;
