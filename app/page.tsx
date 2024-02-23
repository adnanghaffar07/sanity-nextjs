import Image from "next/image";
import styles from "./page.module.css";
import { getProjects } from "@/sanity/sanity-utils";
// import { projectId } from "@/sanity/env";
// import project from "@/sanity/schemas/project-schema";
// import { Project } from "@/types/Project";

export default async function Home() {
  const projects = await getProjects();

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
          <div className={styles.bannerColImgIntroBanner}>
          {projects.map((project) => (
              <div key={project.image}>
                  <img src={project.image}/>
              </div>
            ))}            
          </div>
          <div className={styles.bannerContent}>
          {/* {projects.map((project) => (
            <div key={project._id}>
              {project.name}
            </div>
          ))} */}
            <h5 className={styles.bannerSubtitle}>Hi, I am John William</h5>
            {projects.map((project) => (
              <h2 className={styles.bannertitle} key={project._id}>
                  {project.name}
              </h2>
            ))}
            
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
              src="/work_img.png"
              alt="work_img.png"
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
                      Motion Design{" "}
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
                      Website Design{" "}
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
                      Phototype Design{" "}
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

      <div className="creativeWorkWrapper">
        <div className="creativeWorkContainer">
          <div className="creativeWorkContent">
            <div className="creativeWorkContent-center">
              <h5 className="creativeWorkSubtitle">Creative Works</h5>
              <h2 className="creativeWorkTitle">You Will Like These Design Made by Me</h2>
              <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry&rsquo;s Standard.</p>
            </div>
            <div className="project-menu-nav">
              <button className="active">
                All Project
              </button>
              <button>App Design</button>
              <button>Web Design</button>
              <button>Branding App</button>
            </div>
            <div className="project-wrapper">
              <div className="project-item-two">
                <div className="project-thumb-two">
                  <Image                    
                    src="/h2_project_img01.jpg"
                    alt="Icon" width={411} height={503}
                  />
                </div>
                <div className="project-content-two">
                  <h2 className="title">
                    <a href="">App Design</a>
                  </h2>
                  <span>Gorem Ipsum is simply</span>
                </div>
              </div>
              <div className="project-item-two">
                <div className="project-thumb-two">
                  <Image                    
                    src="/h2_project_img04.jpg"
                    alt="Icon" width={411} height={503}
                  />
                </div>
                <div className="project-content-two">
                  <h2 className="title">
                    <a href="">App Design</a>
                  </h2>
                  <span>Gorem Ipsum is simply</span>
                </div>
              </div>
              <div className="project-item-two">
                <div className="project-thumb-two">
                  <Image                    
                    src="/h2_project_img05.jpg"
                    alt="Icon" width={411} height={503}
                  />
                </div>
                <div className="project-content-two">
                  <h2 className="title">
                    <a href="">App Design</a>
                  </h2>
                  <span>Gorem Ipsum is simply</span>
                </div>
              </div>
            </div>            
          </div>
        </div>
      </div>

      <div className="packagesWrapper">
        <div className="packagesContainer">
          <div className="packagesContent">
            <div className="packagesContent-center">
              <h5 className="packagesSubtitle">Reasonable package</h5>
              <h2 className="packagesTitle">The Right Plan for Your Business</h2>
              <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry&rsquo;s Standard.</p>
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <button
                  className="nav-link active"
                >
                  Monthly
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link "
                >
                  Yearly
                </button>
              </li>
            </ul>
            <div className="pricingPackagesWarpper">
              <div className="pricing-item default">
                <div className="pricing-icon">
                  <img
                    src="/pricing_icon01.png"
                    alt="img"
                  />
                </div>
                <div className="pricing-top">
                  <h2 className="title">Professional</h2>
                  <p>Do more with Dokan Using Powerful Advanced feat..</p>
                </div>
                <div className="pricing-price">
                  <h2 className="price">
                    <span>$</span>49<strong>/mo</strong>
                  </h2>
                </div>
                <div className="pricing-list">
                  <h4 className="title">Everything in Starter</h4>
                  <ul className="list-wrap">
                    <li>
                      <i className="far fa-check" />
                      WC Product Addon Integration
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Vendor Review
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Store Support
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Seller Verification
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Stripe &amp; Msip
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <a href="#" target="_blank" rel="nofollow" className="btn">
                    Choose Plan
                  </a>
                </div>
              </div>
              <div className="pricing-item active">
                <div className="pricing-icon">
                  <img
                    src="/pricing_icon02.png"
                    alt="img"
                  />
                </div>
                <div className="pricing-top">
                  <h2 className="title">Business</h2>
                  <p>Do more with Dokan Using Powerful Advanced feat..</p>
                </div>
                <div className="pricing-price">
                  <h2 className="price">
                    <span>$</span>69<strong>/mo</strong>
                  </h2>
                </div>
                <div className="pricing-list">
                  <h4 className="title">Everything in Starter</h4>
                  <ul className="list-wrap">
                    <li>
                      <i className="far fa-check" />
                      WC Product Addon Integration
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Vendor Review
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Store Support
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Seller Verification
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Stripe &amp; Msip
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <a href="#" target="_blank" rel="nofollow" className="btn">
                    Choose Plan
                  </a>
                </div>
              </div>
              <div className="pricing-item default">
                <div className="pricing-icon">
                  <img
                    src="/pricing_icon03.png"
                    alt="img"
                  />
                </div>
                <div className="pricing-top">
                  <h2 className="title">Enterprise</h2>
                  <p>Do more with Dokan Using Powerful Advanced feat..</p>
                </div>
                <div className="pricing-price">
                  <h2 className="price">
                    <span>$</span>89<strong>/mo</strong>
                  </h2>
                </div>
                <div className="pricing-list">
                  <h4 className="title">Everything in Starter</h4>
                  <ul className="list-wrap">
                    <li>
                      <i className="far fa-check" />
                      WC Product Addon Integration
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Vendor Review
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Store Support
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Seller Verification
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Stripe &amp; Msip
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <a href="#" target="_blank" rel="nofollow" className="btn">
                    Choose Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="workingStepsWrapper">
        <div className="workingStepsContainer">
          <div className="col-img-working-steps">
            <Image
              src="/work_img.png"
              alt="work_img"
              className="img-working-steps"
              width={444}
              height={545}
              priority
            />
          </div>
          <div className="workingStepsContent">
            <h5 className="workingStepsSubtitle">Working Steps</h5>
            <h2 className="workingStepsTitle">My Working Process</h2>
            <div className="workingStepsList">
              <div className="workingStepsListItem">
                <div className="workingStepsListIcon">
                  <Image
                    src="/about_icon01.png"
                    alt="about_icon01"
                    className="img-about-icon"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
                <div className="workingStepsListContent">
                  <h3>Concept Creation</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="workingStepsListItem">
                <div className="workingStepsListIcon">
                  <Image
                    src="/about_icon02.png"
                    alt="about_icon02"
                    className="img-about-icon"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
                <div className="workingStepsListContent">
                  <h3>Sketch Drawing</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className="workingStepsListItem">
                <div className="workingStepsListIcon">
                  <Image
                    src="/about_icon03.png"
                    alt="about_icon03"
                    className="img-about-icon"
                    width={60}
                    height={60}
                    priority
                  />
                </div>
                <div className="workingStepsListContent">
                  <h3>Final Design</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
            </div>
          </div>          
        </div>        
      </div>

      <div className="testimonailWrapper">
        <div className="testimonailContainer">
          <h5 className="testimonailSubtitle">What Clients Say</h5>
          <h2 className="testimonailTitle">What People Say About Us</h2>
          <div className="testimonailItemsWrapper">
            <div className="testimonial-item-two">
              <div className="testimonial-content-two">
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <p>&#8220;Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry Lorem Ipsum has been the standard dummy text&#8220;</p>
              </div>
              <div className="testimonial-info-two">
                <div className="thumb">
                  <Image
                    src="/testimonial_avatar03.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className="content">
                  <h5 className="title">Zonalos Neko</h5>
                  <span>CEO Kawasaki Inc.</span>
                </div>
              </div>
            </div>
            <div className="testimonial-item-two">
              <div className="testimonial-content-two">
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <p>&#8220;Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry Lorem Ipsum has been the standard dummy text&#8220;</p>
              </div>
              <div className="testimonial-info-two">
                <div className="thumb">
                  <Image
                    src="/testimonial_avatar03.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className="content">
                  <h5 className="title">Zonalos Neko</h5>
                  <span>CEO Kawasaki Inc.</span>
                </div>
              </div>
            </div>
            <div className="testimonial-item-two">
              <div className="testimonial-content-two">
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <p>&#8220;Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry Lorem Ipsum has been the standard dummy text&#8220;</p>
              </div>
              <div className="testimonial-info-two">
                <div className="thumb">
                  <Image
                    src="/testimonial_avatar03.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div className="content">
                  <h5 className="title">Zonalos Neko</h5>
                  <span>CEO Kawasaki Inc.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-content-center">
            <Image
              src="/secondary_logo.png"
              alt="Footer Logo"
              className={styles.footerLogo}
              width={126}
              height={41}
              priority
            />
            <p>Agency Is A Full-Service Agency, Busy Designing And Building Beautiful Digital Products, Brands, And Experiences.</p>
          </div>          
          <hr />
          <div className="footer-btm-content">
            <div className="cpy-right">
              <p>Copyright &copy; Xolio 2023. All Rights Reserved</p>
            </div>
            <div className="social-media-icons">
              Follow us
              <a href=""><Image src="/footer_icon01.png" alt="footer_icon01" className="" width={36} height={36} /></a>
              <a href=""><Image src="/footer_icon02.png" alt="footer_icon01" className="" width={36} height={36} /></a>
              <a href=""><Image src="/footer_icon03.png" alt="footer_icon01" className="" width={36} height={36} /></a>
              <a href=""><Image src="/footer_icon04.png" alt="footer_icon01" className="" width={36} height={36} /></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}