import "../style/footer.css";

function Footer() {
  return (
    <footer>
      <p>
        <strong className="contactTitle">Contáctanos</strong>
      </p>
      <p>info@paulette.com</p>
      <div>
        <img alt="Facebook" />
        <img alt="Twitter" />
        <img alt="Instagram" />
      </div>
      <p className="copyFooter">Copyright 2023 Made with LOVE</p>
    </footer>
  );
}

export default Footer;
