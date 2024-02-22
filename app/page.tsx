import Image from "next/image";
import styles from "./page.module.css";
// import { getProjects } from "@/sanity/sanity-utils";

export default async function Home() {
  // const projects = await getProjects();
  return (
    <main className={styles.main}>
      <div className={styles.headerDiv}>
        <div className={styles.headerContainer}>      
          <Image
              src="/secondary_logo.png"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={126}
              height={41}
              priority
            />
            <div className={styles.navbarWrap}>
              <ul id="menu-main-menu" className="navigation">
                <li
                  className=""
                >
                  <a
                    title="Home"
                    href=""
                    className="nav-links"
                  >
                    Home
                  </a>
                  <div className="dropdown-btn">
                    <span className="fas fa-angle-down" />
                  </div>
                </li>
                <li
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-76 nav-item"
                >
                  <a
                    href=""
                    className="nav-links"
                  >
                    About Us
                  </a>
                </li>
                <li
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown has-dropdown menu-item-82 nav-item"
                >
                  <a title="Pages" href="#" className="nav-links">
                    Pages
                  </a>
                </li>              
              </ul>{" "}
            </div>
        </div>
      </div>
      <div className={styles.bannerIntro}>
        <div className={styles.bannerContainer}>
          <Image
              src="/h2_banner_img.png"
              alt="h2_banner_img"
              className={styles.h2BannerImg}
              width={359}
              height={519}
              priority
            />
          <div className={styles.bannerContent}>
            <h5 className={styles.bannerSubtitle}>Hi, I am John William</h5>
            <h2 className={styles.bannertitle}> Professional Product <span>Designer</span> Based in USA</h2>
            <div className={styles.bannerActions}>
              <a href="" target="_self" className={styles.btn}>Contact Us<span></span></a>
              <ul className="list-wrap">
                <li>
                  <a href="#" target="_blank">
                    <Image                      
                      src="/banner_icon01.svg"
                      alt="Image" width={29} height={29}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <Image                      
                      src="/banner_icon02.svg"
                      alt="Image" width={29} height={29}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <Image                      
                      src="/banner_icon03.svg"
                      alt="Image" width={29} height={29}
                    />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <Image                      
                      src="/banner_icon04.svg"
                      alt="Image" width={29} height={29}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>          
        </div>        
      </div>
      <div className="brandWrapper">
        <div className="brandContainer">
          <div className={styles.brandItem}>
            <a href="" target="_self" className={styles.brandLink}>
              <Image src="/brand_img01.png" alt="" width={107} height={27} />
            </a>
          </div>
          <div className={styles.brandItem}>
            <a href="" target="_self" className={styles.brandLink}>
              <Image src="/brand_img02.png" alt="" width={107} height={27} />
            </a>
          </div>
          <div className={styles.brandItem}>
            <a href="" target="_self" className={styles.brandLink}>
              <Image src="/brand_img03.png" alt="" width={107} height={27} />
            </a>
          </div>
          <div className={styles.brandItem}>
            <a href="" target="_self" className={styles.brandLink}>
              <Image src="/brand_img04.png" alt="" width={107} height={27} />
            </a>
          </div>
          <div className={styles.brandItem}>
            <a href="" target="_self" className={styles.brandLink}>
              <Image src="/brand_img05.png" alt="" width={107} height={27} />
            </a>
          </div>
          <div className={styles.brandItem}>
            <a href="" target="_self" className={styles.brandLink}>
              <Image src="/brand_img06.png" alt="" width={107} height={27} />
            </a>
          </div>
        </div>
      </div>
      <div className="aboutWrapper">
        <div className="aboutContainer">
          <div className="aboutContent">
            <h5 className="aboutSubtitle">I&rsquo;m a Designer</h5>
            <h2 className="aboutTitle"> I Can Design per <br />Your Requirement</h2>
            <p>Hello There! I&rsquo;m A Web Designer, And I&rsquo;m Very Passionate And Dedicated To My Work. With 20 Years Experience As A Professional Web Developer, I Have Acquired The Skills And Knowledge Necessary To Make Your Project A Success. I Enjoy Every Step Of The Design Process, From Discussion And Collaboration.</p>
            <div className="aboutActions">
              <a href="" target="_self" rel="nofollow">
                <span className="arrow"><Image src="/right_arrow.svg" alt="icon" width={34} height={16} /></span>
                <span className="text">Available jobs</span>
              </a>
            </div>
          </div>
          <div className="col-about-img">
            <Image
              src="/h2_about_img.png"
              alt="h2_about_img"
              className="img-about-us"
              width={554}
              height={556}
              priority
            />
          </div>
        </div>        
      </div>
      <div className="counterWrapper">
        <div className="counterContainer">
          <div className="counterContent">
            <div className="counter-item-wrap">
              <div className="counter-item">
                <span className="count odometer odometer-auto-theme" data-count={535}>
                  <div className="odometer-inside">
                    <span className="odometer-digit">
                      535
                    </span>
                  </div>
                </span>
                <p>
                  Project <span>Completed</span>
                </p>
              </div>
              <div className="counter-item">
                <span className="count odometer odometer-auto-theme" data-count={922}>
                  <div className="odometer-inside">
                    <span className="odometer-digit">
                      992
                    </span>
                  </div>
                </span>
                <p>
                  Our Happy <span>Clients</span>
                </p>
              </div>
              <div className="counter-item">
                <span className="count odometer odometer-auto-theme" data-count={954}>
                  <div className="odometer-inside">
                    <span className="odometer-digit">
                      954
                    </span>
                  </div>
                </span>
                <p>
                  Cup of <span>Coffee for Me</span>
                </p>
              </div>
              <div className="counter-item">
                <span className="count odometer odometer-auto-theme" data-count={345}>
                  <div className="odometer-inside">
                    <span className="odometer-digit">
                      345
                    </span>
                  </div>
                </span>
                <p>
                  Clients Work <span>With Me</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="servicesWrapper">
        <div className="servicesContainer">
          <div className="servicesContent">
            <div className="servicesContent-center">
              <h5 className="servicesSubtitle">What I Do</h5>
              <h2 className="servicesTitle"> What Service Do I Provide</h2>
            </div>
            <div className="servicesBoxWarpper">
              <div className="services-item-two">
                <div className="services-icon-two">
                  <Image                    
                    src="/services_icon01.png"
                    alt="Icon" width={66} height={61}
                  />
                </div>
                <div className="services-content-two">
                  <h4 className="title">
                    <a
                      target="_self"
                      rel="nofollow"
                      href=""
                    >
                      UI UX Design{" "}
                    </a>
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
              <div className="services-item-two">
                <div className="services-icon-two">
                  <Image                    
                    src="/services_icon02.png"
                    alt="Icon" width={66} height={61}
                  />
                </div>
                <div className="services-content-two">
                  <h4 className="title">
                    <a
                      target="_self"
                      rel="nofollow"
                      href=""
                    >
                      UI UX Design{" "}
                    </a>
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
              <div className="services-item-two">
                <div className="services-icon-two">
                  <Image                    
                    src="/services_icon03.png"
                    alt="Icon" width={66} height={61}
                  />
                </div>
                <div className="services-content-two">
                  <h4 className="title">
                    <a
                      target="_self"
                      rel="nofollow"
                      href=""
                    >
                      UI UX Design{" "}
                    </a>
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
              <div className="services-item-two">
                <div className="services-icon-two">
                  <Image                    
                    src="/services_icon04.png"
                    alt="Icon" width={66} height={61}
                  />
                </div>
                <div className="services-content-two">
                  <h4 className="title">
                    <a
                      target="_self"
                      rel="nofollow"
                      href=""
                    >
                      UI UX Design{" "}
                    </a>
                  </h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

      {/* <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}