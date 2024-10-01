import { FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import Menu from './Menu';

const Footer = () => {
  return (
    <>
      {/* first part */}
      <div className='flex mt-12 items-center'>
        <div className='flex-grow border-t-[2.3px] border-primary-green'></div>
        <div className=''>
          <ul className='menu menu-horizontal px-1  text-primary-green text-sm md:text-base flex items-center'>
            <li>
              <a
                className='hover:text-hoverColor hover:bg-transparent'
                href='https://everythinggreen.org/sustainable-website-hong-kong'
              >
                Sustainable Website
              </a>
            </li>
            <li>
              <a
                className='hover:text-hoverColor hover:bg-transparent'
                href='https://blog.everythinggreen.org'
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className='hover:text-hoverColor hover:bg-transparent'
                href='https://everythinggreen.org/contact-us'
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className='flex-grow border-t-[2.3px] border-primary-green'></div>
      </div>

      {/* second part */}
      <div className='flex flex-col lg:flex-row items-center lg:items-end  lg:justify-between pt-4 lg:pt-8 pb-12 text-[#233] px-12 space-y-6 text-sm md:text-base '>
        {/* contact */}
        <div>
          <p className='text-primary-green mb-1'>Contact :</p>
          <span className='flex items-center'>
            <FaRegEnvelope size={15} />
            <span className='cursor-pointer hover:underline'>
              &nbsp;&nbsp;contact@everythinggreen.org
            </span>
          </span>
        </div>

        {/* privacy policy */}
        <div>
          <div className='flex gap-5 items-center'>
            <a
              className=' hover:underline cursor-pointer'
              href='https://everythinggreen.org/privacy-policy'
            >
              Privacy Policy
            </a>
            <a href='https://www.linkedin.com/company/everything-green-ltd'>
              <FaLinkedin color='blue' />
            </a>
          </div>
        </div>

        <div className='text-center lg:text-start'>
          <p className='text-primary-green mb-1'>Address:</p>
          <p>China Hong Kong City Block 3, Room 1203,</p>
          <p>12th Floor, 33 Canton Rd, Tsim Sha Tsui, Hong Kong</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
