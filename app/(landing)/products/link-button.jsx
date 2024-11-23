import Link from 'next/link';

const LinkButton = ({ href }) => {
  return (
    <Link href={href} className="link-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 17" className="icon">
        <path
          d="M7.0696 0.353516H15.6887C16.2176 0.353516 16.6464 0.782282 16.6464 1.31119V9.93028C16.6464 10.4592 16.2176 10.888 15.6887 10.888C15.1598 10.888 14.731 10.4592 14.731 9.93028V3.62323L2.00072 16.3535L0.646362 14.9992L13.3767 2.26887H7.0696C6.54069 2.26887 6.11192 1.8401 6.11192 1.31119C6.11192 0.782282 6.54069 0.353516 7.0696 0.353516Z"
          fill="currentColor"
        ></path>
      </svg>
    </Link>
  );
};

export default LinkButton;
