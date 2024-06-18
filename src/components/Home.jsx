import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <div className={styles.container_one}>
        <div className={styles.logo}>
          <h1>CATRAY INN</h1>
        </div>
        <div className={styles.navigation}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Room</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className={styles.container_two}>
        <img src={"https://catrayinn.vercel.app/houseimg.jpg"} />
      </div>
      <div className={styles.container_three}>
        <div className={styles.one}>
          <h3>ABOUT US</h3>
          <h1>Welcome to CATRAY INN</h1>
          <h2>Why should a traveler choose to stay at our property?</h2>
          <h4>
            We have Peaceful rooms, 5 mins walk to beach, Family friendly space,
            Free space on top floor to relaxing, Parking space available,
            Transport facilities available with payment, Food and accommodation
            can be arranged with payment, Fully furnished rooms.
          </h4>
          <img src={"https://catrayinn.vercel.app/imagepool.webp"} />
        </div>
        <div className={styles.two}>
          <img src={"https://catrayinn.vercel.app/imagenew.jpg"} />
          <h4>
            Bed configuration, extra bed options, air conditioning are also
            important. Each hotel has a slightly different list that can also
            include details such as the window view or the presence of a
            balcony. It is crucial to clearly indicate such features as early as
            on the first list view of all rooms.
          </h4>
        </div>

        <div className={styles.three}>
          <img src={"https://catrayinn.vercel.app/resturantimg.webp"} />
        </div>
      </div>
      <div className={styles.container_four}>
        <h2>Rooms</h2>
        <div className={styles.rooms}>
          <div className={styles.one}>
            <img src={"https://catrayinn.vercel.app/roomone.jpg"} />
            <h2>Room No 201</h2>
            <h4>
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet lorem.
            </h4>
            <button>5000 LKR/Night</button>
          </div>
          <div className={styles.two}>
            <img src={"https://catrayinn.vercel.app/imgnewone.jpg"} />
            <h2>Room No 202</h2>
            <h4>
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet lorem.
            </h4>
            <button>4000 LKR/Night</button>
          </div>
          <div className={styles.three}>
            <img src={"https://catrayinn.vercel.app/rooms203.webp"} />
            <h2>Room No 203</h2>
            <h4>
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet lorem.
            </h4>
            <button>5500 LKR/Night</button>
          </div>
          <div className={styles.four}>
            <img src={"https://catrayinn.vercel.app/room204.jpg"} />
            <h2>Room No 204</h2>
            <h4>
              Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem
              sed diam stet diam sed stet lorem.
            </h4>
            <button>5000 LKR/Night</button>
          </div>
        </div>
      </div>
      <div className={styles.container_five}>
        <div className={styles.black}>
          <h3>LUXURY LIVING </h3>
          <h1>Discover A Brand Luxurious Hotel</h1>
          <h4>
            Peaceful rooms, 5 mins walk to beach, Family friendly space, Free
            space on top floor to relaxing, Parking space available, Transport
            facilities available with payment, Food and accommodation can be
            arranged with payment,Fully furnished rooms.
          </h4>
          <div className={styles.button1}>
            <button>Our Rooms</button>
          </div>
          <div className={styles.button2}>
            {" "}
            <button>Book a Room</button>
          </div>
        </div>
        <div className={styles.image}>
          <img src={"https://catrayinn.vercel.app/hotelpools.jpg"} />
        </div>
      </div>
      <div className={styles.container_six}>
        <div className={styles.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.5727106845493!2d81.67962327481786!3d7.728907392289315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afad283349eb911%3A0xf926840fb3037029!2sApp%20Dev%20Sri%20Lanka%20-%20Mobile%20App%20%26%20Web%20Development%20Batticaloa!5e0!3m2!1sen!2slk!4v1718107118301!5m2!1sen!2slk"></iframe>
        </div>
        <div className={styles.black}>
          <h1>Contact</h1>
          <div className={styles.contact}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
            </svg>
            <h4>#135A, Udayar Road, Kalmunai. F </h4>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
          </svg>
          <h4>+94 74 096 0027</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="m480-920 362 216q18 11 28 30t10 40v434q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200v-434q0-21 10-40t28-30l362-216Zm0 466 312-186-312-186-312 186 312 186Zm0 94L160-552v352h640v-352L480-360Zm0 160h320-640 320Z" />
          </svg>
          <h4>catrayinn.kalmunai@gmail.com</h4>
        </div>
        <div className={styles.container_seven}>
          <div className={styles.rights}>
            <h4>2024 Catray Inn. All Rights Reserved.</h4>
          </div>
          <div className={styles.terms}>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
