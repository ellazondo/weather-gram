export default function OutfitBreakdown ({outfits}) {
  
  return(
<>
  {outfits.map((outfit) => {
    console.log('outfit breakdown', outfit)

  
    
  return (



<section  className="relative py-20 md:py-40 bg-yellowGray-50 overflow-hidden">
  <div  className="absolute top-0 right-0 w-1/4 sm:w-2/5 lg:w-1/3 h-full bg-yellow-500"></div>
  <div  className="relative container px-4 mx-auto">
    <div  className="flex flex-wrap -mx-4 items-end">
      <div  className="w-full lg:w-1/3 px-4 lg:pb-24">
        <div  className="md:max-w-sm">
          <div  className="inline-flex items-center px-5 py-2 bg-purple-50 rounded-full mb-10">
            <span  className="block w-2 h-2 mr-2 rounded-full bg-blue-500"></span>
            <span  className="uppercase text-sm font-medium tracking-tight">Team</span>
          </div>
          <span  className="block font-heading font-semibold text-3xl">Meet our team</span>
          <h1  className="text-7xl xs:text-9xl lg:text-10xl font-heading font-semibold mb-18">Team—</h1>
          <p  className="max-w-sm text-2xl mb-20">Meet our creative team. We're changing whole game.</p>
          <a  className="group relative inline-block h-16 w-full sm:w-52 bg-blueGray-900 rounded" href="#">
            <div  className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
              <div  className="flex h-full w-full items-center justify-center bg-blue-500 border-2 border-blueGray-900 rounded">
                <span  className="text-base font-semibold uppercase">all teamates</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div  className="hidden lg:block w-full lg:w-2/3 lg:-ml-22 px-4">
        <div  className="relative max-w-lg xl:max-w-xl ml-auto mr-6">
          <img  className="absolute bottom-full left-0 -mb-24 h-118 object-cover" src={outfit.top.top_img} alt="" />
          <div  className="absolute bottom-full right-0 -mr-32 mb-40 xl:mb-20 z-10">
            <div  className="flex mb-8 items-center justify-center w-15 h-15 bg-white rounded-full border-3 border-black text-2xl font-semibold text-black">LC</div>
            <h4  className="text-4xl font-medium">Lill Caoimhin</h4>
            <span>Co-Founder</span>
          </div>
          <div  className="flex -mx-2">
            <div  className="w-1/2 px-2">
              <div  className="animate-bouncingSlow">
                <div  className="relative h-44 bg-blue-500 rounded-t-xl">
                  <div  className="absolute z-10 bottom-0 left-0 ml-7 mb-3 flex items-center justify-center w-15 h-15 bg-white rounded-full border-3 border-black text-2xl font-semibold text-black">MA</div>
                  <img  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 xl:h-52 object-contain xl:object-cover" src={outfit.bottom.bottom_img} alt="" />
                </div>
                <div  className="px-8 pt-6 pb-8 bg-white rounded-b-xl">
                  <h4  className="text-2xl font-medium">Meave Anders</h4>
                  <span>Co-Founder</span>
                </div>
              </div>
            </div>
            <div  className="w-1/2 px-2">
              <div  className="animate-bouncingSlow" style={{animationDelay: "1s"}}>
                <div  className="relative h-44 bg-indigo-500 rounded-t-xl">
                  <div  className="absolute z-10 bottom-0 left-0 ml-7 mb-3 flex items-center justify-center w-15 h-15 bg-white rounded-full border-3 border-black text-2xl font-semibold text-black">CR</div>
                  <img  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 xl:h-52 object-contain xl:object-cover" src={outfit.shoe.shoe_img} alt="" />
                </div>
                <div  className="px-8 pt-6 pb-8 bg-white rounded-b-xl">
                  <h4  className="text-2xl font-medium">Calvin Ramsay</h4>
                  <span>Graphic Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div  className="lg:hidden w-full px-4">
        <div  className="relative pt-135 sm:-mr-10">
          <img  className="absolute top-0 left-0 ml-12 mt-52 h-88 object-cover" src={outfit.top.top_img} alt="" />
          <div  className="absolute top-0 left-0 mt-32 z-10">
            <div  className="flex mb-6 items-center justify-center w-12 h-12 bg-white rounded-full border-3 border-black text-xl font-semibold text-black">LC</div>
            <h4  className="text-3xl xs:text-4xl font-medium">Lill Caoimhin</h4>
            <span>Co-Founder</span>
          </div>
          <div>
            <div  className="w-full max-w-sm mx-auto mb-10">
              <div  className="relative h-44 bg-blue-500 rounded-t-xl">
                <div  className="absolute z-10 bottom-0 left-0 ml-7 mb-3 flex items-center justify-center w-15 h-15 bg-white rounded-full border-3 border-black text-2xl font-semibold text-black">MA</div>
                <img  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 xl:h-52 object-contain xl:object-cover" src={outfit.bottom.bottom_img} alt="" />
              </div>
              <div  className="px-8 pt-6 pb-8 bg-white rounded-b-xl">
                <h4  className="text-2xl font-medium">Meave Anders</h4>
                <span>Co-Founder</span>
              </div>
            </div>
            <div  className="w-full max-w-sm mx-auto">
              <div  className="relative h-44 bg-indigo-500 rounded-t-xl">
                <div  className="absolute z-10 bottom-0 left-0 ml-7 mb-3 flex items-center justify-center w-15 h-15 bg-white rounded-full border-3 border-black text-2xl font-semibold text-black">CR</div>
                <img  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 xl:h-52 object-contain xl:object-cover" src={outfit.shoe.shoe_img} alt="" />
              </div>
              <div  className="px-8 pt-6 pb-8 bg-white rounded-b-xl">
                <h4  className="text-2xl font-medium">Calvin Ramsay</h4>
                <span>Graphic Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        );
      })}
    </>
  );
}
       

        