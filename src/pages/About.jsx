import styles from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <>

            {/* About Us Section */}
            <section className={styles.aboutSection}>
                <div className={styles.sectionContainer}>
                    <h1>About Pawfect Home</h1>
                    <p>
                        We are dedicated to rescuing abandoned pets and connecting them with loving families.<br/> 
                        Our mission is to create a world where every pet finds a loving home.
                    </p>
                </div>
            </section>
            
            {/* Mission Section */}
            <section className={styles.missionSection}>
                <div className={styles.sectionContainer}>
                    <h2>Our Mission</h2>
                    <p>At Pawfect Home, we rescue and rehabilitate abandoned, neglected, and surrendered pets. <br/>
                        We provide them with medical care, love, and training to prepare them for their forever homes.
                    </p>
                    <p>Every animal in the world deserves a second chance at happiness.</p>

                    <div className={styles.missionCards}>
                        <div className={styles.card}>
                            <h3>Rescue & Rehabilitation</h3>
                            <img src="src/assets/Rescueing.jpg" alt="Rescue & Rehab" className={styles.cardImage} />
                            <p>We provide immediate medical care and emotional support to pets in need.</p>
                        </div>
                        <div className={styles.card}>
                            <h3>Careful Matching</h3>
                            <img src="src/assets/Right-Family.jpg" alt="Rescue & Rehab" className={styles.cardImage} />
                            <p>We ensure each pet finds the right family through our thorough adoption process.</p>
                        </div>
                        <div className={styles.card}>
                            <h3>Ongoing Support</h3>
                            <img src="src/assets/Guiding.jpg" alt="Rescue & Rehab" className={styles.cardImage} />
                        <p>We provide continued guidance and support to ensure successful adoptions.</p>
                    </div>
                </div>
            </div>
            </section>

            {/* Vision Section */}
            <section className={styles.visionSection}>
                <div className={styles.sectionContainer}>
                    <h2>Our Vision</h2>
                    <p>"A world where every pet finds a loving home."</p>

                    <div className={styles.visionCards}>
                        <div className={styles.card}>
                            <img src="src/assets/icons/star.png" alt="Excellence in Care" className={styles.visionIcon} />
                        <h3>Excellence in Care</h3>
                        <p>We strive to provide the highest quality medical care.</p>
                        </div>
                        <div className={styles.card}>
                            <img src="src/assets/icons/love.png" alt="Community Impact" className={styles.visionIcon} />
                        <h3>Community Impact</h3>
                        <p>We work with local communities to educate.</p>
                        </div>
                        <div className={styles.card}>
                            <img src="src/assets/icons/dog.png" alt="Global Inspiration" className={styles.visionIcon} />
                        <h3>Global Inspiration</h3>
                        <p>We aim to inspire other organizations worldwide.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <section className={styles.successSection}>
                <div className={styles.sectionContainer}>
                    <h2>Success Stories</h2>
                    <p>Read about some of our wonderful adoption success stories.</p>

                    <div className={styles.storyCards}>
                        <div className={styles.storyCard}>
                        <img src="src/assets/Jude's_Review.jpg" alt="Max" className={styles.storyImage} />
                        <h3>Max & The Jude</h3>
                        <span>Adopted 6 months ago</span>
                        <p>"Max has brought so much joy to our family..."</p>
                        <p className={styles.author}>- Sarah Johnson</p>
                        </div>

                        <div className={styles.storyCard}>
                        <img src="src/assets/Michael's_Reviwe.jpg" alt="Luna" className={styles.storyImage} />
                        <h3>Luna & Michael</h3>
                        <span>Adopted 1 year ago</span>
                        <p>"Luna was exactly what I needed in my life..."</p>
                        <p className={styles.author}>- Michael Chen</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Analysis Section */}
            <section className={styles.impactSection}>
                <div className={styles.sectionContainer}>
                    <h2>Our Impact</h2>
                    <p>Making a difference, One pet at a time</p>

                    <div className={styles.impactCards}>
                        <div className={styles.card}>
                        <h3>500 +</h3>
                        <p>Pets Rescued</p>
                        </div>
                        <div className={styles.card}>
                        <h3>450 +</h3>
                        <p>Successful Adoptions</p>
                        </div>
                        <div className={styles.card}>
                        <h3>98%</h3>
                        <p>Adoption Success Rate</p>
                        </div>
                        <div className={styles.card}>
                        <h3>5</h3>
                        <p>Years of Service</p>
                        </div>
                </div>
            </div>
            </section>

            {/* Ready to Make a Difference Section */}
            <section className={styles.readySection}>
                <div className={styles.sectionContainer}>
                    <h2>Ready to Make a Difference?</h2>
                    <p>
                        Whether you're looking to adopt a pet, volunteer, or support our mission, 
                        there are many ways to get involved with Pawfect Home.
                    </p>
                    <div className={styles.buttons}>
                        <Link to="/pets">
                            <button className={styles.adoptBtn}>Adopt a Pet</button>
                        </Link>
                        <Link to="/contact">
                        <button className={styles.involveBtn}>Get Involved</button>
                        </Link>
                    </div>
                </div>
            </section>
        
        </>
    );
};

export default About;

