function Footer() {
    const date = new Date().toLocaleDateString();
  
    return (
      <footer>
        <p>{date}</p>
        <p>Group Members: YourName, PartnerName</p>
      </footer>
    );
  }
  
  export default Footer;