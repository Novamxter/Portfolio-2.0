import React from "react";

export default function BgCanvas() {
  return (
    <>
      <div className="canvas relative w-[50vw] ml-[50%]">
        <div className="fixed h-[700px] w-[258px] rounded-full bg-[#9ABDE6] rotate-[40deg] z-[-10] scale-[0.7] top-[-220px] right-[-20px] x-sm:right-[20px] x-sm:scale-[0.85] x-sm:top-[-200px]  m-mlg:scale-[1] m-mlg:top-[-164px] m-mlg:right-[70px]">
          <div className="circle-1 h-[130px] aspect-square rounded-full bg-[radial-gradient(circle_at_3%_47%,_#B8F6FF_5%,_#30B9BD_95%)] absolute bottom-[-64px] left-[-30px]"></div>
          <div className="circle-2 h-[84px] aspect-square rounded-full bg-[radial-gradient(circle_at_0%_46%,_#B3E3FF_5%,_#4497C7_95%)] absolute bottom-[305px] left-[200px]"></div>
        </div>
      </div>
    </>
  );
}
