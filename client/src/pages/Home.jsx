import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


import { Link } from 'react-router-dom'







export default function Home() {
  return (
    <>
   <Header/>

   <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-center font-robot">
    <span className="block bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text">Elevate</span>
    <span className="block bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text">Tech World</span>
    <span className="block bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text">With Me</span>
</h1>




    <br/>
    <br/>
   

  <h2 className="text-center text-16 text-textColor md:text-21 lg:text-27  text-2xl  font-mont">
    I Create Visually Stunning and Intuitively Functional Websites
    <span className="block text-center">Crafted to Drive Results</span>
  </h2>


 <br/>
 <br/>

 <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8">About Me</h2>
          <p className="text-lg text-gray-700 mb-4"> Hii I am Satyam Kanojiya, I am from India . Yet, alongside my fascination with the universe, another realm captivates my curiosity — the digital world.</p>
          <p className="text-lg text-gray-700 mb-4"> I've been passionately exploring the realms of coding, initially delving into the world of web . This journey led me to the expansive landscape of web development. Nowadays, I channel most of my coding endeavors into crafting innovative web applications.</p>
          <p className="text-lg text-gray-700 mb-8"> A problem solver by nature and deeply passionate about creating impactful solutions, I'm eager to collaborate and contribute to projects that challenge and inspire. If you're interested in exploring potential collaborations or opportunities, feel free to reach out!</p>
        </div>
      </div>
    </section>
    
   

    <section id="technologies" className="bg-blur py-16">
  <div className="container mx-auto rounded-lg bg-slate-100 p-8">
    <h2 className="text-4xl font-semibold font-robot text-black text-center mb-8">Technologies</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {/* Python Card */}
  <div className="technology-card relative overflow-hidden hover:bg-violet-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
  <img src={'icons8-java.svg'} alt="Java Icon" className="mx-auto w-16 h-16 mb-4 hover:scale-110 transition duration-300 ease-in-out transform" />
  <p className="text-lg font-mont  font-semibold text-center text-black">Java</p>
</div>

      {/* HTML Card */}
      <div className="technology-card relative overflow-hidden hover:bg-pink-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
        <img src={'icons8-c.svg'} alt="C++ Icon" className="mx-auto w-16 h-16 mb-4 hover:scale-110 transition duration-300 ease-in-out transform" />
        <p className="text-lg  font-mont font-semibold text-center text-black">C++</p>
      </div>
      {/* CSS Card */}
      <div className="technology-card relative overflow-hidden hover:bg-yellow-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
        <img src={'icons8-html.svg'} alt="HTML Icon" className="mx-auto w-16 h-16 mb-4 hover:scale-110 transition duration-300 ease-in-out transform" />
        <p className="text-lg font-mont  font-semibold text-center text-black">HTML</p>
      </div>
      {/* JavaScript Card */}
      <div className="technology-card relative overflow-hidden hover:bg-yellow-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
        <img src={'icons8-javascript.svg'} alt="JavaScript Icon" className="mx-auto w-16 h-16 mb-4 hover:scale-110 transition duration-300 ease-in-out transform" />
        <p className="text-lg font-mont  font-semibold text-center text-black">JavaScript</p>
      </div>


      <div className="technology-card relative overflow-hidden hover:bg-sky-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
        <img src={'icons8-visual-studio-code.svg'} alt="Java Icon" className="mx-auto w-16 h-16 mb-4 hover:scale-110 transition duration-300 ease-in-out transform" />
        <p className="text-lg font-mont font-semibold text-center text-black">Visual Studio Code</p>
      </div>


      <div className="technology-card relative overflow-hidden hover:bg-orange-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
        <img src={'postman.svg'} alt="Java Icon" className="mx-auto w-16 h-16 mb-4 hover:scale-110 transition duration-300 ease-in-out transform" />
        <p className="text-lg font-mont  font-semibold text-center text-black">Postman</p>
      </div>
      <div className="technology-card relative overflow-hidden hover:bg-purple-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
        <img src={'icons8-github.svg'} alt="Java Icon" className="mx-auto w-16 h-16 mb-4 hover:scale-110 transition duration-300 ease-in-out transform" />
        <p className="text-lg font-mont  font-semibold text-center text-black">Github</p>
      </div>

      <div className="technology-card relative overflow-hidden hover:bg-lime-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
        <img src={'icons8-nodejs.svg'} alt="Java Icon" className="mx-auto w-16 h-16 mb-4 hover:scale-110 transition duration-300 ease-in-out transform" />
        <p className="text-lg font-mont  font-semibold text-center text-black">Nodejs</p>
      </div>


      <div className="technology-card relative overflow-hidden hover:bg-purple-400 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
        <img src={'icons8-redux.svg'} alt="Java Icon" className="mx-auto w-16 h-16 mb-4 hover:scale-110 transition duration-300 ease-in-out transform" />
        <p className="text-lg  font-mont font-semibold text-center text-black">Redux</p>
      </div>


      <div className="technology-card relative overflow-hidden hover:bg-blue-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
        <img src={'icons8-tailwind-css.svg'} alt="Java Icon" className="mx-auto w-16 h-16 mb-4 hover:scale-110 transition duration-300 ease-in-out transform" />
        <p className="text-lg  font-mont font-semibold text-center text-black">Tailwind CSS</p>
      </div>

      <div className="technology-card relative overflow-hidden hover:bg-purple-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
        <img src={'icons8-figma.svg'} alt="Java Icon" className="mx-auto w-16 h-16 mb-4 hover:scale-110 transition duration-300 ease-in-out transform" />
        <p className="text-lg  font-mont font-semibold text-center text-black">Figma</p>
      </div>

      <div className="technology-card relative overflow-hidden hover:bg-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
        <img src={'public/icons8-triangle-96.png'} alt="Java Icon" className="mx-auto w-16 h-16 mb-4 hover:scale-110 transition duration-300 ease-in-out transform" />
        <p className="text-lg  font-mont font-semibold text-center text-black">Vercel</p>
      </div>

      <div className="technology-card relative overflow-hidden hover:bg-green-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
        <img src={'icons8-mongodb.svg'} alt="Java Icon" className="mx-auto w-16 h-16 mb-4 hover:scale-110 transition duration-300 ease-in-out transform" />
        <p className="text-lg  font-mont font-semibold text-center text-black">MongoDB</p>
      </div>

      <div className="technology-card relative overflow-hidden hover:bg-emerald-200 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
        <img src={'icons8-express-js.svg'} alt="Java Icon" className="mx-auto w-16 h-16 mb-4 hover:scale-110 transition duration-300 ease-in-out transform" />
        <p className="text-lg font-mont font-semibold text-center text-black">Expressjs</p>
      </div>

      <div className="technology-card relative overflow-hidden hover:bg-sky-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
        <img src={'public/icons8-react-a-javascript-library-for-building-user-interfaces-96.png'} alt="Java Icon" className="mx-auto w-16 h-16 mb-4 hover:scale-110 transition duration-300 ease-in-out transform" />
        <p className="text-lg font-mont font-semibold text-center text-black">React</p>
      </div>

      <div className="technology-card relative overflow-hidden hover:bg-blue-200  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
        <img src={'icons8-css.svg'} alt="Java Icon" className="mx-auto w-16 h-16 mb-4 hover:scale-110 transition duration-300 ease-in-out transform" />
        <p className="text-lg font-mont font-semibold text-center text-black">CSS</p>
      </div>


      {/* More cards with the same structure */}
    </div>
  </div>
</section>































   
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col lg:h-svh justify-center">
        <div className="flex flex-col">
          <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
            <div>
              <h1 className='text-5xl font-robot'>PROJECTS</h1>
            </div>
          </div>
          <div className="mt-6 border-t pt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
              <div>
                <span className="text-gray-600 uppercase text-4xl font-medium">1.CryptoStare</span>
                <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">A application which display live cryptocurrency information it is created by fetchind a data from api . </p>
                <p className="text-2xl mt-4 text-gray-700 text-balance">You can compare cryptocurrencies and and update your information about crypto </p>
                <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                  <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                  <button className="py-3 px-5 rounded-lg text-white bg-gray-500 hover:bg-white hover:text-black">
                      <Link to='https://crypto-stare.vercel.app/'>Live Demo</Link>
                   </button>
                   
                  </div>
                  
                </div>
              </div>
              <div className="h-full md:order-first">
                <img className = 'h-100 w-100'src="https://m.foolcdn.com/media/dubs/images/original_imagesoriginal_imageshttpsg.foolcdn.c.width-880_SfbkM9V.jpg" />
              </div>
            </div>
          </div>
   </div> 
  </div>


 </section>
   





 <section>
  <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col lg:h-svh justify-center">
    <div className="flex flex-col">
     
      <div className="mt-6 border-t pt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
        <div className="h-full md:order-last">
                <img  className = 'h-100 w-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJmGQU-YJkAWvjqyS0zA6Ul5zqRPNBK_8YA&s" />
              </div>
          <div>
          <span className="text-gray-600 uppercase text-4xl font-medium">2.TechBlogs</span>
          <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">A Blog application where I post tech blogs mostly related to web Development, AI, BlockChain and Crypto. </p>
                <p className="text-2xl mt-4 text-gray-700 text-balance">Any One can post Blog over There and Can contribute </p>
            <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
              <div className="inline-flex items-center gap-2 text-xs text-gray-700">
              <button className="py-3 px-5 rounded-lg text-white bg-gray-500 hover:bg-white hover:text-black">
                      <Link to='https://github.com/Messi10SK/CrackJsBlogs.git'>Git Link</Link>
                   </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-screen-xl flex flex-col lg:h-svh justify-center">
        <div className="flex flex-col">
          <div className="mt-6 border-t pt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-24 items-center">
              <div>
                <span className="text-gray-600 uppercase text-4xl font-medium">3.DailyDo</span>
                <p className="text-4xl mt-8 tracking-tighter font-semibold text-gray-700 text-balance">Created a todo application using React for the frontend. Implemented features such as adding, deleting, and updating tasks, as well as filtering tasks based on their completion status. Utilized local storage for persistent data storage. </p>
                <p className="text-2xl mt-4 text-gray-700 text-balance">Use this to maintain consistency </p>
                <div className="mt-6 text-xs font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 text-gray-950">
                  <div className="inline-flex items-center gap-2 text-xs text-gray-700">
                  <button className="py-3 px-5 rounded-lg text-white bg-gray-500 hover:bg-white hover:text-black">
                      <Link to='https://daily-do-sandy.vercel.app/'>Live Demo</Link>
                   </button>
                   
                  </div>
                  
                </div>
              </div>
              <div className="h-full md:order-first">
                <img className = 'h-100 w-100'src=" https://media.istockphoto.com/id/1746104990/vector/3d-paper-clipboard-task-management-todo-check-list.jpg?s=612x612&w=0&k=20&c=o-7iI3IMEaBTS0oWZHG-YVgwcpEf8YlLdJB0qnJKMGU=" />
              </div>
            </div>
          </div>
   </div> 
  </div>


 </section>
<section>

<div className="p-6 text-center bg-gray-100 rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
      <p className="text-lg mb-6">
        I have created many projects related to full-stack development. You can visit my GitHub profile to check them out.
      </p>
      <a
        href="https://github.com/Messi10SK"
        className="text-black font-bold font-mont hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit my GitHub
      </a>
    </div>

</section>

<br />
<br />
<section>

<Footer/>
</section>

    </>
  )
}
