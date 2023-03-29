export default function OutfitBreakdwon ({hangerInCloset}) {
  
   return (
  
   <div className="fixed top-1 left-0 right-0 w-fullcontainer mx-auto px-6 py-18 md:py-30 bg-white rounded-4xl">
      <div className="max-w-md mx-auto text-center">
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
 <br />
        
        <div className="relative max-w-lg xl:max-w-xl ml-auto mr-6">

          <img className="absolute bottom-full left-0 -mb-24 h-118 object-cover" src={hangerInCloset.outfit.top.top_img} alt="" />

          <div className="absolute bottom-full right-0 -mr-32 mb-40 xl:mb-20 z-10">
            {/* <div className="flex mb-8 items-center justify-center w-15 h-15 bg-white rounded-full border-3 border-black text-2xl font-semibold text-black">LC</div> */}
            <a href={hangerInCloset.outfit.top.zalando_link} target="_blank">
            <h4 className="text-4xl font-medium">{hangerInCloset.outfit.top.top_name}</h4>
            </a>
          </div>

          <div className="flex -mx-2">
            <div className="w-1/2 px-2">
              <div className="animate-bouncingSlow">
                <div className="relative h-44 bg-blue-500 rounded-t-xl">
                  {/* <div className="absolute z-10 bottom-0 left-0 ml-7 mb-3 flex items-center justify-center w-15 h-15 bg-white rounded-full border-3 border-black text-2xl font-semibold text-black">MA</div> */}
                  <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2 xl:h-52 object-contain xl:object-cover" src={hangerInCloset.outfit.bottom.bottom_img} alt="" />
                </div>
                <div className="px-8 pt-6 pb-8 bg-white rounded-b-xl">
                  <a href={hangerInCloset.outfit.bottom.zalando_link} target="_blank">
                  <h4 className="text-2xl font-medium">{hangerInCloset.outfit.bottom.bottom_name}</h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/2 px-2">
              <div className="animate-bouncingSlow" style={{ animationDelay: '1s' }}>
                <div className="relative h-44 bg-indigo-500 rounded-t-xl">
                  {/* <div className="absolute z-10 bottom-0 left-0 ml-7 mb-3 flex items-center justify-center w-15 h-15 bg-white rounded-full border-3 border-black text-2xl font-semibold text-black">CR</div> */}
                  <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2 xl:h-52 object-contain xl:object-cover" src={hangerInCloset.outfit.shoe.shoe_img} alt="" />
                </div>
                <div className="px-8 pt-6 pb-8 bg-white rounded-b-xl">
                  <a href={hangerInCloset.outfit.shoe.zalando_link} target="_blank">
                  <h4 className="text-2xl font-medium">{hangerInCloset.outfit.shoe.shoe_name}</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full px-4">
        <div className="relative pt-135 sm:-mr-10">
          <img className="absolute top-0 left-0 ml-12 mt-52 h-88 object-cover" src={hangerInCloset.outfit.top.top_img} alt="" />
          <div className="absolute top-0 left-0 mt-32 z-10">
            {/* <div className="flex mb-6 items-center justify-center w-12 h-12 bg-white rounded-full border-3 border-black text-xl font-semibold text-black">LC</div> */}
            <a href={hangerInCloset.outfit.top.zalando_link} target="_blank">
            <h4 className="text-3xl xs:text-4xl font-medium">{hangerInCloset.outfit.top.top_name}</h4>
            </a>
          </div>
          <div>
            <div className="w-full max-w-sm mx-auto mb-10">
              <div className="relative h-44 bg-blue-500 rounded-t-xl">
                <div className="absolute z-10 bottom-0 left-0 ml-7 mb-3 flex items-center justify-center w-15 h-15 bg-white rounded-full border-3 border-black text-2xl font-semibold text-black">MA</div>
                <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2 xl:h-52 object-contain xl:object-cover" src={hangerInCloset.outfit.bottom.bottom_img} alt="" />
              </div>

              <div className="px-8 pt-6 pb-8 bg-white rounded-b-xl">
                <a href={hangerInCloset.outfit.bottom.zalando_link} target="_blank">
                <h4 className="text-2xl font-medium">{hangerInCloset.outfit.bottom.bottom_name}</h4>
                </a>
              </div>

            </div>

            <div className="w-full max-w-sm mx-auto">
              <div className="relative h-44 bg-indigo-500 rounded-t-xl">

                <div className="absolute z-10 bottom-0 left-0 ml-7 mb-3 flex items-center justify-center w-15 h-15 bg-white rounded-full border-3 border-black text-2xl font-semibold text-black">CR</div>
                <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2 xl:h-52 object-contain xl:object-cover" src={hangerInCloset.outfit.shoe.shoe_img} alt="" />
              </div>

              <div className="px-8 pt-6 pb-8 bg-white rounded-b-xl">
                <a href={hangerInCloset.outfit.shoe.zalando_link} target="_blank">
                <h4 className="text-2xl font-medium">{hangerInCloset.outfit.shoe.shoe_name}</h4>
                </a>
              </div>

            </div>
          </div>

        </div>
      
        </div>
        </div>


    

    );
}

       

        