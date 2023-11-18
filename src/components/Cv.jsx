import pic from "../assets/pic.jpg";

const Cv = () => {
  return (
    <>
      <div className="container">
        <div className="left-side">
          <img src={pic} className="pic" alt="My-picture" />
          <h1>Faiqa Aslam</h1>
          <div className="line"></div>
          <p>Frontend developer</p>
          <br />

          <h2>Detail</h2>
          <br />
          <ul>
            <li>
              <b>Address:</b> Lahore Cantt
            </li>
            <li>
              <b>Email:</b> faiqaaslam45@gmail.com
            </li>
          </ul>
          <br />

          <h2>Education:</h2>
          <br />
          <div className="info">
            <p> Bachelor of Science in Information Technology</p>
            <p> Minhaj University Lahore</p>
          </div>
          <br />

          <div className="skills">
            <h2> Skills:</h2>
            <br />

            <div>
              <h4>HTML</h4>
              <div className="outer">
              <div className="inner"></div>
              </div>
            </div>

            <div>
              <h4>CSS</h4>
              <div className="outer">
              <div className="css-bar inner"></div>
              </div>
            </div>

            <div>
              <h4>JavaScript</h4>
              <div className="outer">
              <div className="js-bar inner"></div>
              </div>
            </div>

            <div>
              <h4>Php</h4>
              <div className="outer">
              <div className="php-bar inner"></div>
              </div>
            </div>

            <div>
              <h4>React</h4>
              <div className="outer">
              <div className="react-bar inner"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <h2 className="summary">Summary</h2>
          <br />
          <p className="summary para">
            To work in a meaningful and challenging position that enables me to
            develop myself as a professional and permits scope for advancement. To put my abilities and learning skills to best use and make my
            effective contribution to an organization for a bright and rewarding
            career. </p>
          <br />
          <h2>Work History</h2>
          <br />
          <ul className="work">
            <h3>At Sani IT Consultant:</h3>
            <br />
            <li>WordPress Developer</li>
            <li>Blogging</li>
            <li>Social media handling </li>
            <li>Designing posts on canvas</li>
            <li>Content Writer </li>
          </ul>
          <br />
          <h2>Projects and Certification</h2>
          <br />
          <ul className="work">
            <li>Text Editor using C++ (semester project).</li>
            <li>Designing topologies (semester project).</li>
            <li>Creating Front-end website (semester project).</li>
            <li>
              Online Store and Inventory Management System (Final Year Project).
            </li>
            <li>Certification course for Web Design (Udemy).</li>
            <li>
              Certification course for Green School Campaigan at Klimatech
              Environmental club.
            </li>
            <li>
              Certification course for Aain Deen Seekhain at Minhaj Ul Quran
              institute.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cv;
