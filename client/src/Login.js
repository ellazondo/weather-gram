export default function Login({ onLogin, updateLoginFormData }) {

    return (
        <>

<section className="relative overflow-x-hidden">
  <div className="container p-62 mx-auto">
    <div className="flex flex-wrap items-center">
      <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
        <div className="py-20 text-center">
          <a className="inline-block mb-5 text-3xl font-bold font-heading" href="#">
            <img className="h-9" src="https://i.imgur.com/ImxEQfI.png" alt="" width="auto" />
          </a>
          {/* <h3 className="mb-8 text-4xl md:text-5xl font-bold font-heading">WEATHER GRAM</h3> */}
          <form onSubmit={onLogin} >
            <input className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="text" name="username" placeholder="username" onChange={updateLoginFormData} />
            <input className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md" type="password" placeholder="Password" name="password" onChange={updateLoginFormData} />
            <button className="mt-12 md:mt-5 bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-5 px-8 rounded-md uppercase">LOGIN</button>
          </form>
        </div>
        {/* <img className="lg:hidden object-cover max-w-xs" src="https://i.imgur.com/ImxEQfI.png" alt="" /> */}
      </div>
    </div>
  </div>
  <div className="hidden lg:block lg:absolute top-20 bottom-20 right-20 lg:w-3/6 bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url("https://i.imgur.com/l2dIfig.png")` }}></div>
</section>
</>
        
    );
}

   



    

