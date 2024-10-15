import Link from "next/link";
import React from "react";
import ButtonScrollToSection from "../components/ButtonScrollToSection";

const CookiePolicyPage = () => {
  return (
    <section>
      {/* Header Section */}
      <div className="flex overflow-hidden relative flex-col w-full font-light text-white h-[450px] lg:min-h-[700px]">
        <img
          className="top-0 left-0 object-cover absolute inset-0 size-full"
          src="/cookies-policy.jpg"
          alt="cookies policy"
        />
                <div className="absolute top-0 left-0 w-full h-full bg-[#020C16] opacity-75"></div>

        <div className="flex relative flex-col items-center justify-center max-w-7xl mx-auto lg:px-20 px-5 lg:pt-12 w-full max-md:px-5 max-md:max-w-full flex-grow mt-20 lg:mt-0">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="lg:text-4xl text-2xl font-bold capitalize lg:w-8/12 mx-auto">
              <h2 className="title capitalize text-md">Cookies Policy</h2>
            </div>
            <p className="md:text-2xl sm:text-xl text-lg text-center mt-4 max-md:max-w-full lg:px-32">
            Cookies and Data Privacy at CodeAutomation
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full text-gray-800 bg-white pt-10 px-4 md:px-12 lg:px-20">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">CODEAUTOMATION.AI</h1>
        <h2 className="text-2xl font-semibold text-center mb-6">Cookies Policy</h2>
        <p className=" text-center md:text-left text-gray-800 text-lg max-w-6xl mx-auto leading-relaxed">
          Thank you for visiting our website (“Site”).  CodeAutomation is committed to treating the personal and corporate information of our Site users, customers, and vendors with respect and sensitivity.  This Cookie Policy (“Policy “) explains our website use “cookies” and web server logs.  This Policy should be read in conjunction with our Privacy Policy and our Terms of Use.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 mt-5 bg-white rounded-md">
        <h2 className="text-md leading-7 mb-6">Click on these links to go directly to these topics:</h2>
        <ul className="list-disc list-inside text-[#14aecf] font-light  cursor-pointer text-md mb-8">
          <ButtonScrollToSection
            classes="my-10"
            content="What Are Cookies and How Do We Use Them?"
            destination="what-are-cookies"
            key="Claim-Offer-button"
          />
          <br />
          <br />
          <ButtonScrollToSection
            classes="mb-10"
            content="Your Consent to the Use of Cookies"
            destination="consent-to-use-cookies"
            key="Claim-Offer-button"
          />
          <br />
          <br />
          <ButtonScrollToSection
            classes="mb-10"
            content="Blocking Cookies"
            destination="blocking-cookies"
            key="Claim-Offer-button"
          />
          <br />
          <br />
          <ButtonScrollToSection
            classes="mb-10"
            content="Types of Cookies We Use"
            destination="types-of-cookies"
            key="Claim-Offer-button"
          />
          <br />
          <br />
          <ButtonScrollToSection
            classes=""
            content="Details of Specific Cookies"
            destination="specific-cookies"
            key="Claim-Offer-button"
          />
        </ul>

        <div id="what-are-cookies" className="mb-8">
          <h3 className="text-2xl font-bold my-6">1. What Are Cookies and How Do We Use Them?</h3>
          <p className="text-gray-700 text-lg mb-4">
            A cookie is a very small text document, which often includes an anonymous unique identifier. When you visit a website, a computer asks your computer for permission to store this file in a part of your hard drive specifically designated for cookies.
          </p>
          <p className="text-gray-700 text-lg mb-4">
            Like many websites, we use “cookies” and obtain certain types of information when you access our Site, or our advertisements, or other content provided by us or by others on our behalf from other sites. Information we gather through cookies may include the date and time of your visits to our Site, the pages viewed, and the time spent at our Site.
          </p>
          <p className="text-gray-700 text-lg mb-4">We use cookies to:</p>
          <ul className="list-disc list-inside text-md text-gray-700 pl-4">
            <li className="mb-3">Personalize your experience with our Site.</li>
            <li className="mb-3">Collect aggregate information about Site usage by all of our users.</li>
            <li className="mb-3">Offer other products, services, and functionalities personalized to you.</li>
            <li className="mb-3">Improve the performance of our Site to provide you with a better user experience.</li>
          </ul>
          <p className="text-gray-700 mt-6">
            For further details on cookies, please visit <a target="_blank" rel="noopener noreferrer" href="http://www.allaboutcookies.org" className="text-blue-600 underline">All About Cookies</a> where you can find comprehensive information on cookies and similar technologies.
          </p>
        </div>


        <div id="consent-to-use-cookies" className="mb-8">
          <h3 className="text-2xl font-bold my-3">2. Your Consent to the Use of Cookies</h3>
          <p className="text-gray-700 text-lg">
            By continuing to use our Site, you consent to the use of cookies as described in this Policy. If you do not consent, please see the section on blocking cookies below.
          </p>
        </div>

        <div id="blocking-cookies" className="mb-8">
          <h3 className="text-2xl font-bold mb-3">3. Blocking Cookies</h3>
          <p className="text-gray-700 text-lg">
            You can block our use of cookies through settings in your browser.  Because these settings are different in different browsers, we recommend that you visit All About Cookies at www.allaboutcookies.org, where you can find comprehensive information on cookie management and blocking for a wide variety of browsers.

            In order to use certain services offered through our Site, your web browser must accept cookies. If you choose to block our use of cookies on this Site, some aspects of the Site may not work properly, you may not be able to access all or part of our Site, and you may not be able to use all of the features available.           </p>
        </div>

        <div id="types-of-cookies" className="mb-8">
          <h3 className="text-2xl font-bold my-3">4. Types of Cookies We Use</h3>
         <p className="text-lg text-gray-700 my-6">We use cookies where they are essential for the operation of our Site, such as to enable you to use our shopping basket function when purchasing products and services.</p> 
          <p className="text-gray-800 text-lg">
            <strong>Strictly Necessary Cookies:</strong> Essential for the website’s functionality.<br /><br />
            <strong>Session Cookies:</strong> Used to maintain your browsing session.<br /><br />
            <strong>Analytics Cookies:</strong> Help us understand site usage and improve user experience.<br /><br />
            <strong>Targeting Cookies:</strong> Used to provide relevant ads and track campaign effectiveness.
          </p>
        </div>

        <div id="specific-cookies" className="mb-8">
  <h3 className="text-2xl font-bold mb-7">5. Details of Specific Cookies</h3>
  <table className="w-full border text-left text-gray-700">
    <thead>
      <tr className="bg-gray-100">
        <th className="p-2">Cookie</th>
        <th className="p-2">Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="p-2 border-t">Google Analytics (_ga, _gid)</td>
        <td className="p-2 border-t">Tracks session duration, user engagement, and site usage for analytics purposes.</td>
      </tr>
      <tr>
        <td className="p-2 border-t">Google Ads/Google Tag Manager (IDE, ANID)</td>
        <td className="p-2 border-t">Used for advertising, such as remarketing and conversion tracking, and to manage other tags.</td>
      </tr>
      <tr>
        <td className="p-2 border-t">Meta Pixel (Facebook/Instagram) (_fbp, fr)</td>
        <td className="p-2 border-t">Tracks user interactions and engagement with Facebook and Instagram ads.</td>
      </tr>
      <tr>
        <td className="p-2 border-t">CookieConsent</td>
        <td className="p-2 border-t">Stores user consent preferences regarding cookies.</td>
      </tr>
      <tr>
        <td className="p-2 border-t">Session Management</td>
        <td className="p-2 border-t">Maintains the user&apos;s session state and preferences during a visit.</td>
      </tr>
    </tbody>
  </table>
  <p className="mt-4">
    <em>Note:</em> Most cookies expire within 30 days, though some may persist longer depending on user interactions and preferences.
  </p>
</div>

      </div>
    </section>
  );
};

export default CookiePolicyPage;
