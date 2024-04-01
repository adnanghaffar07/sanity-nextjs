import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="wrapper">
        <Link href={`/`} className="hover:underline my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/09d382e58784257b38ccca526b1322cf201dacdf4343ff92c6fe39c9ba7a1b1e?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
            className="self-start max-w-full aspect-[5] xl:w-[266px] w-[200px]"
          />
        </Link>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li className="mega-menu">
            <a href="#">Services</a>
            <div className="mega-box">
              <div className='content'>
                <div>
                <Link href={`/`} className="hover:underline my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/09d382e58784257b38ccca526b1322cf201dacdf4343ff92c6fe39c9ba7a1b1e?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
            className="self-start max-w-full aspect-[5] xl:w-[266px] w-[200px]"
          />
        </Link>
                </div>
                <div>
                  <h2 className='linkshead'>CMS</h2>
                  <ul className="mega-links">
                    <li><a href="#">Ecommerce</a></li>
                    <li><a href="#">Headless CMS</a></li>
                    <li><a href="#">Headless CMS & Ecommerce</a></li>
                    <li><a href="#">Headless</a></li>
                  </ul>
                  <h2 className='linkshead'>Payment platforms</h2>
                  <ul className="mega-links">
                    <li><a href="#">Ecommerce</a></li>
                    <li><a href="#">Headless CMS</a></li>
                    <li><a href="#">Headless CMS & Ecommerce</a></li>
                    <li><a href="#">Headless</a></li>
                  </ul>
                  <h2 className='linkshead'>Payment platforms</h2>
                  <ul className="mega-links">
                    <li><a href="#">Ecommerce</a></li>
                    <li><a href="#">Headless CMS</a></li>
                    <li><a href="#">Headless CMS & Ecommerce</a></li>
                    <li><a href="#">Headless</a></li>
                  </ul>
                </div>
                <div>
                <h2 className='linkshead'>Testing</h2>                  <ul className="mega-links">
                    <li><a href="#">Web developmment</a></li>
                    <li><a href="#">Mobile development </a></li>
                    <li><a href="#">Web & Mobile </a></li>
                    <li><a href="#">Authentication platforms</a></li>
                    <li><a href="#">RPA</a></li>
                    <li><a href="#">Voice</a></li>
                    <li><a href="#">Automation & Integeration</a></li>
                  </ul>
                </div>
              </div>
              </div>
            
          </li>
          <li><a href="#">Life at CA</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Technologies</a></li>

        </ul>
        <a
          className="flex gap-3 justify-between self-stretch px-4 py-2 text-xl bg-sky-500 rounded-full shadow-sm max-md:px-5"
          href="https://join.skype.com/invite/crU4cXW4bttb"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fac08cad98e0659b7b1fba8569319dcbc8cff9340fcddf511cabd61603becea7?apiKey=ce12b64a678e4e2a868af6b5dfd766b9&"
            className="aspect-[0.97] w-[27px]"
          />
          <div className="my-auto text-nowrap">Let&rsquo;s Skype</div>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
