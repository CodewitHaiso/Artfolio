import './css/all.min.css'
import './css/fontawesome.min.css'
import './Haiso.css'
import './function.js'

function Haiso() {
  return (
    <> 
      <section className='header'>
        <input type="checkbox" id='check' />
            <label For="check" className='checkbtn'>
              <i className='fas fa-bars'></i>
            </label>
          <a href="#" className='logo'>Haniya.</a>
          <nav >
            <ul className='Navbar'>
              <li><a href="#">HOME</a></li>
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">PROJECT</a></li>
              <li><a href="#">SERVICES</a></li>
              <li><a href="#">CONTACT</a></li>
           <div className='nav-icon'>
                <a href=""><i class="fa-brands fa-github"></i></a>
                <a href=""><i class="fa-brands fa-discord"></i></a>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
          </div>
            </ul>
          </nav>
      </section>

      {/* Home Section */}

      <section className='Home'>
        
        {/* CHILD =======1 */}
        <div className='Sec1'>
          <h4>HELLO!</h4>
          <h1><span>I'M</span> HANIYA AHMAD</h1>
          <h3>Graphic Designer</h3>
          <button  className='btn'>Download CV</button><br></br>
          <div className='Soc-icon'>
          <a href=""><i class="fa-brands fa-github"></i></a>
          <a href=""><i class="fa-brands fa-discord"></i></a>
          <a href=""><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>

          {/* CHILD=======2 */}
        <div className='Sec2'>
        <img src="pictures/poster.png" alt="poster" className='poster' />
        </div>
      </section>


      {/*ABOUT SECTION  */}

       <section className='About'>

        <div  className='about-img'>
           <img src="pictures/about.png" alt="about img" className='poster2'/>
        </div>

        <div className='about-text'>
         <h4>--ABOUT</h4>
         <h1>MY BIOGRAPHY</h1>
         <h2>Designs that Speak</h2>
         <p>Hi, I'm Haniya Ahmad, a passionate graphic designer with a talent for creating compelling visuals that tell a story. Proficient in Adobe Creative Suite and experienced in branding, digital marketing, and print design, I thrive on bringing creative concepts to life. My goal is to craft designs that not only look stunning but also connect with audiences on a deeper level.</p>       
        </div>
       </section>

       {/* PROJECT SECTION */}

       <section className='project'>
        <div className='pro-text'>
          <h4>--PROJECT</h4>
          <h1>Portfolio of Work</h1>
          <p>A passionate and innovative graphic designer dedicated to transforming ideas into visually compelling designs. With expertise in branding, digital design, and print media, I strive to create work that combines creativity and strategy to leave a lasting impact. My portfolio showcases a variety of projects, including brand identities, marketing campaigns, and user-focused designs, all crafted with attention to detail and a commitment to excellence. Whether it’s building a brand’s visual presence or designing engaging materials, my goal is to create designs that connect with audiences and deliver meaningful results.</p>
        </div>
        <div className='pro-images'>
            <img src="pictures/img1.jpg" alt="img1" />
            <img src="pictures/img2.jpg" alt="img2" />
            <img src="pictures/img3.jpg" alt="img3" />
            <img src="pictures/img4.jpg" alt="img4" />
            <img src="pictures/img5.jpg" alt="img5" />
            <img src="pictures/img6.jpg" alt="img6" />
        </div>
       </section>

       {/* SERVICE SECTION */}
       <section className='Services'>

        {/* Child 1 */}
        <div className='service-text'>
          <h4>--SERVICES</h4>
          <h1>What i can do</h1>
          <img src="pictures/Side.png" alt="Side IMAGE" className='poster3' />
        </div>

        {/* Child 2 */}
        <div className='service-cards'>
         <div className='Card1'>
         <i class="fa-solid fa-pen-to-square"></i><h2>Graphic Desinger</h2>
         <p>A graphic designer creatively combines visuals, typography, and design elements to communicate ideas and enhance brand identity.</p>
         </div>
         <div className='Card2'>
         <i class="fa-solid fa-people-group"></i><h2>Client Satisfaction</h2>
         <p>Delivering creative designs tailored to exceed customer expectations and ensure complete satisfaction.</p>
         </div>
         <div className='Card3'>
         <i class="fa-brands fa-figma"></i><h2>Figma Desinger</h2>
         <p>Crafting intuitive and visually appealing designs in Figma to enhance user experiences and achieve client satisfaction.</p>
         </div>
         <div className='Card4'>
         <i class="fa-solid fa-head-side-virus"></i><h2>Creative Desinger</h2>
         <p>Transforming ideas into impactful and innovative designs that captivate, motivate and inspire Clinet.</p>
         </div>
        </div>
       </section>
      <section className='Contact'>
         <div className='Ctext'>
            <h4>--CONTACT</h4>
            <h1>IS THERE ANY WORK?<br></br>LET ME KNOW HERE!</h1>
            <p>If you have any work for me or want to discuss something about your idea fill the following form or just reach out to me ffrom social media.</p>
            <h3><i class="fa-solid fa-location-dot"></i> House No 201, Street NO 5, DHA phase 5, Lahore</h3><br></br>
            <h3><i class="fa-solid fa-envelope"></i> example123@gmail.com</h3><br></br>
            <h3><i class="fa-solid fa-phone"></i> +92 315 0987634</h3><br></br>
            <div className='Con-icon'>
          <a href="#"><i class="fa-brands fa-github"></i></a>
          <a href="#"><i class="fa-brands fa-discord"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          </div>
         </div>
         <div className='Con-form'>
          <form action="#" className='form'>
              <input type="text" name="text" id="#" placeholder='Your name' className='p-2 mb-10 w-full text-[#FFA500] border-2 border-yellow-500 rounded-lg' required /><br></br>
              <input type="mail" name="mail" id="#" placeholder='Youremail@gmail.com' className='p-2 mb-10 w-full text-[#FFA500] border-2 border-yellow-500 rounded-lg' required  /><br></br>
              <input type="tel" name="phone" id="#" placeholder='Phone no' className='p-2 mb-10 w-full text-[#FFA500] border-2 border-yellow-500 rounded-lg' required /><br></br>
              <input type="text" name='Message' id='#' placeholder='Any message' className='pb-20 mb-5 w-full text-[#FFA500] border-2 border-yellow-500 rounded-lg' required />
              <button className='btn2'>SEND</button>
              </form>
         </div>
      </section>
      <footer className='footer'>
      <a href="#" className='f-logo'>Haniya.</a>
      <p>© Copyright 2024.All rights Reserved</p>
      </footer>
       </>   
  )
}

export default Haiso


