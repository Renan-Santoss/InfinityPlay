import styles from "./footer.module.css";
import logo from "../../assets/img/logo_infinity.png";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer_content}>
          <div className={styles.footer_wrapper}>
            <div className={styles.ajuda}>
              <h2>Suporte</h2>
            </div>
            <div className={styles.ajuda}>
              <h2>Blog</h2>
            </div>
            <div className={styles.ajuda}>
              <h2>Sobre</h2>
            </div>
            <div className={styles.ajuda}>
              <h2>Carreiras</h2>
            </div>
            <div className={styles.ajuda}>
              <h2>Seu jogo na InfinityPlay</h2>
            </div>
            <div className={styles.ajuda}>
              <h2>InfinityPlay Co-op</h2>
            </div>
            <div className={styles.ajuda}>
              <h2> Termos de Uso </h2>
            </div>
            <div className={styles.ajuda}>
              <h2>Política de Privacidade </h2>
            </div>
            <div className={styles.ajuda}>
              <h2> Nossa História </h2>
            </div>
            <div className={styles.ajuda}>
              <h2> Criadores </h2>
            </div>
            <div className={styles.ajuda}>
              <h2> Doações <a href="#"></a> </h2>
            </div>
          </div>
          <div className={styles.footerSociais}>
            <h2> ACOMPANHE-NOS </h2>
            <div className={styles.sociais}>
              <a href="#">
                <i className="fa-brands fa-square-facebook fa-2xl"></i>
              </a>
              <h2>Facebook</h2>
            </div>
            <div className={styles.sociais2}>
              <a href="#">
                <i className="fa-brands fa-twitter fa-2xl"></i>
              </a>
              <h2>Twitter</h2>
            </div>
            <div className={styles.sociais3}>
              <a href="#">
                <i className="fa-brands fa-twitch fa-2xl"></i>
              </a>
              <h2>Twitch</h2>
            </div>
            <div className={styles.sociais4}>
              <a href="#">
                <i className="fa-brands fa-instagram fa-2xl"></i>
              </a>
              <h2 className={styles.instagram}>Instagram</h2>
            </div>
          </div>
          <div className={styles.footerSociais2}>
            <div className={styles.txt}>
              <a href="#">
                <img src={logo} alt="#" />
              </a>
              <span>InfinityPlay</span>
              <p>© 2021-2024</p>
            </div>
            <div className={styles.txtAll}>
              <div className={styles.txt2}>
                <a href="#">
                  InfinityPlay Ltda. – CNPJ 00.000.000/0001-10 , Carlos Roberto, n°
                  116, sala 503 - Rio de Janeiro - Botafogo - Rio de Janeiro,
                  RJ - 00000-000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
