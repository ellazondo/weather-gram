export default function Home () {
    return (
        <section class="relative bg-white overflow-hidden">
  <nav class="relative z-10 border-b border-gray-900">

  </nav>
  <div class="relative pt-28 lg:pb-20 md:px-8 bg-yellowGray-50 overflow-hidden">
    <div class="hidden md:block absolute top-0 left-0 w-8 bg-white h-full border-r border-gray-900 z-10"></div>
    <div class="hidden md:block absolute top-0 right-0 w-8 bg-white h-full border-l border-gray-900 z-10"></div>
    <img class="hidden lg:block animate-moveRight absolute top-0 right-0 w-48 xl:w-60 h-48 xl:h-60 mt-32 mr-60 xl:mr-112" src="https://i.imgur.com/kE6Ouh1.jpeg" alt="" />
    <img class="hidden lg:block absolute top-0 right-0 w-48 xl:w-60 h-48 xl:h-60 mt-88 xl:mt-96 mr-40 xl:mr-52" src="https://uploads-ssl.webflow.com/5c9284aa898626230de35f1e/5d245db48107012ce29a0458_nederlandse-vrouwelijke-fashion-influencers-dna-278.jpeg" alt="" />
    <img class="hidden lg:block animate-moveBottom1 h-32 xl:h-44 w-32 xl:w-44 absolute bottom-0 right-0 mb-72 2xl:mb-80 mr-96 xl:mr-135 2xl:mr-142" src="https://cdn.mos.cms.futurecdn.net/qRJjvuoXd9Nhzh8DPmAeB8.jpg" alt="" />
    <img class="hidden lg:block absolute bottom-0 right-0 max-w-3xl 2xl:max-w-none" src="suncealand-assets/background/bg-circle-header.svg" alt="" />
    <div class="container px-4 mx-auto">
      <div class="max-w-lg mx-auto lg:mx-0 mb-24 lg:mb-44 md:pl-8">
        <h1 class="text-6xl xs:text-8xl md:text-10xl 2xl:text-12xl font-heading mb-20">Weather. Gram.</h1>
        <p class="text-xl mb-24">Optimizing fashion to be appropriate for the weather.</p>
        <a class="group relative inline-block h-16 w-full sm:w-40 bg-blueGray-900 rounded" href="/todaysfeed">
          <div class="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
            <div class="flex h-full w-full items-center justify-center bg-white border-2 border-blueGray-900 rounded">
              <span class="text-base font-semibold uppercase">More</span>
            </div>
          </div>
        </a>
      </div>
      <div class="max-w-lg lg:max-w-none mx-auto text-center">
        <p class="text-xs text-gray-900 uppercase">Sign up to get inspiration from influencers and share your own ideas.</p>
      </div>
    </div>
    <img class="md:hidden mt-24 w-full" src="suncealand-assets/images/circle-bg-photos-header.png" alt="" />
    <div class="relative hidden md:block lg:hidden mt-24">
      <img class="animate-moveRight absolute top-0 right-0 w-48 h-48 mr-88" src="suncealand-assets/images/square-portfolio-small3.png" alt="" />
      <img class="absolute top-0 right-0 w-48 h-48 mt-52 mr-40" src="suncealand-assets/images/square-portfolio-small9.png" alt="" />
      <img class="animate-moveBottom1 h-32 w-32 absolute bottom-0 right-0 mb-48 mr-96" src="suncealand-assets/images/square-portfolio-small8.png" alt="" />
      <img class="relative" src="suncealand-assets/background/bg-circle-header.svg" alt="" />
    </div>
  </div>
  <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div class="navbar-backdrop fixed inset-0 backdrop-blur-xl backdrop-filter bg-gray-900 bg-opacity-80"></div>
    <nav class="relative pt-8 pb-8 bg-white h-full overflow-y-auto">
      <div class="flex flex-col px-6 h-full">
        <a class="inline-block text-2xl font-bold ml-8 mb-16" href="#">
          <img src="suncealand-assets/logos/suncealand-dark.svg" alt="" />
        </a>
        <ul class="w-full mb-auto pb-16">
          <li class="group mb-6">
            <button class="inline-block text-left text-base font-medium text-black">
              <div class="flex items-center">
                <span class="mr-3">Resources</span>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.332 0.999974L10.3887 0.0566406L6.66536 3.77997L5.9987 4.5L5.33203 3.77997L1.6087 0.0566402L0.665365 0.999974L5.9987 6.33331L11.332 0.999974Z" fill="currentColor"></path>
                </svg>
              </div>
            </button>
            <div class="hidden group-hover:block pt-4">
              <div class="pl-6"><a class="block mb-2 text-black" href="#">Link 1</a><a class="block mb-2 text-black" href="#">Link 1</a><a class="block text-black" href="#">Link 1</a></div>
            </div>
          </li>
          <li class="mb-6"><a class="inline-block text-base font-medium text-black" href="#">Community</a></li>
          <li class="mb-6"><a class="inline-block text-base font-medium text-black" href="#">Story</a></li>
          <li><a class="inline-block text-base font-medium text-black" href="#">Pricing</a></li>
        </ul>
        <div class="w-full">
          <a class="relative group inline-flex h-12 w-full mb-4 items-center justify-center font-semibold rounded-lg bg-white border border-black" href="#">
            <span class="text-black">Login</span>
          </a>
          <a class="relative inline-flex h-12 w-full mb-4 items-center justify-center font-semibold rounded-lg bg-blue-500" href="#">
            <span class="text-black">Logout</span>
          </a>
          <p class="pl-2 text-sm">2022 © Shuffle</p>
        </div>
      </div>
    </nav>
  </div>
</section>
    ) 

    
}