const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer>
        <p>© {currentYear} NodeByteLTD. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  