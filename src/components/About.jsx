import React from 'react';
import '../styles/About.css';
import Header from './Header';
import Footer from './Footer';

function About() {
  return (
    <>
      <Header />

      <div className="about-page py-5">
        <div className="container">

          {/* ABOUT TEAM WAHY */}
          <section className="mb-5">
            <div className="typewriter-container">
              <h2 className="typewriter">ABOUT TEAM WAHY</h2>
            </div>

            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src="/assets/iso_new.jpg"
                  alt="About Team Wahy" width={300} height={300}
                  className="img-fluid rounded shadow"
                />
              </div>
              <div className="col-md-6 box-shade">
                <p>
                  Wahy Lab Solutions is one of the top website development companies in Ernakulam, strategically located in Kochi, India, catering services across the globe.
                </p>
                <p>
                  Our organization is renowned for a foundation of quality and customer satisfaction. Our success lies in the success of our clients. We offer IoT Healthcare, ERP-CRM, Mobile Apps, Websites, Flutter Apps, Digital Marketing & more.
                </p>
              </div>
            </div>
          </section>
          {/**our vision */}
          {/* Our Vision Section */}
          <div className="container my-5">
            <div className="typewriter-container">
              <h2 className="typewriter">OUR VISION</h2>
            </div>
            <div className="row align-items-center g-4">
              <div className="col-md-6">
                <img
                  src="/assets/vision.webp"  // Replace with your image path
                  alt="Our Vision" width={300} height={300}
                  className="img-fluid rounded shadow "
                />
              </div>
              <div className="col-md-6 box-shade">
                <div className="card-body">
                  <h5 className="card-title">Empowering the Future with Technology</h5>
                  <p className="card-text">
                    At Wahy Lab Solutions, our vision is to bridge the gap between innovation
                    and opportunity. We aim to empower students, professionals, and businesses
                    by providing cutting-edge solutions, real-time training, and job-ready skills.
                  </p>
                  <ul className="ps-3">
                    <li>To become a top IT enabler for small to mid-size businesses</li>
                    <li>To upskill India’s youth through practical learning</li>
                    <li>To deliver modern, scalable, and impactful digital solutions</li>
                  </ul>

                </div>
              </div>
            </div>
          </div>

          {/* OUR MISSION */}
          <section className="mb-5">
            <div className="typewriter-container">
              <h2 className="typewriter">OUR MISSION</h2>
            </div>
            <div className="row align-items-center flex-md-row-reverse ">

              <div className="col-md-6 box-shade">
                <p>
                  Our mission is to improve the efficiency of your company by providing high-quality software system services at reasonable prices. We focus on customer satisfaction, friendly client relations, and innovation.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="/assets/mision.webp"
                  alt="Our Mission" width={300} height={300}
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </section>

          {/* OUR APPROACH */}
          <section className="mb-5">
            <div className="typewriter-container">
              <h2 className="typewriter">OUR APPROACH</h2>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <img
                  src="/assets/approach.webp"
                  alt="Our Approach"
                  className="img-fluid rounded shadow" width={300} height={300}
                />
              </div>
              <div className="col-md-6 box-shade">
                <ul className="list-group " style={{ backgroundColor:"rgb(237, 242, 240)"}}>
                  <li className="list-group-item" >High quality services and products that exceed customer expectations.</li>
                  <li className="list-group-item">Value for money.</li>
                  <li className="list-group-item">Courteous and pleasant service with professionalism and personalization.</li>
                  <li className="list-group-item">Honest and effective consultation and advice.</li>
                  <li className="list-group-item">Fast delivery of services and products.</li>
                  <li className="list-group-item">Continuous improvement in the services offered.</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
