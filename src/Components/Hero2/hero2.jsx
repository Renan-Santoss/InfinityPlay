import styles from "./hero2.module.css";
import img from "../../assets/img/Verificado.svg";
import img2 from "../../assets/img/Security.svg";
import img3 from "../../assets/img/Controle.svg";
import PAC from "../../assets/img/PAC.png";
import NARU from "../../assets/img/NARUTO.png";
import TEK from "../../assets/img/TEKKEN.png";
import DGB from "../../assets/img/DGB.png";
import FOOT from "../../assets/img/EFOOT.png"; 
import BULLY from "../../assets/img/BULLY.png";
import GTA5 from "../../assets/img/GTA5.png";
import GTA6 from "../../assets/img/GTA6.png";
import GTASAN from "../../assets/img/GTASAN.png";
import RED from "../../assets/img/RED.png";
import LEGO from "../../assets/img/LEGO.png";
import UFC from "../../assets/img/UFC.png";
import INQ from "../../assets/img/INQ.png";
import SIM from "../../assets/img/SIM4.png";
import BT from "../../assets/img/BATLE.png";

const Hero2 = () => {
  return (
    <section>
      <div className={styles.hero2}>
        <div className={styles.hero2_wrapper}>
           <div className={styles.hero2_content}>
            <h2> Seja Muito Bem-Vindo(a) a InfinityPlay</h2>
            <p>
               Os Melhores Jogos com até <span>99% de Desconto.</span>
            </p>
          </div> 
          <div className={styles.conteiner}>
            <div className={styles.conteiner_in}>
              <h4> BANDAI NAMCO </h4>
              <a href="#"> Ver Mais </a>
            </div>
            <div className={styles.section}>
              <div className={styles.features}>
                <div className={styles.card_p}>
                  <div className={styles.card_txt}>
                    <img src={PAC} alt="" />
                    <h3>Pac-Man World Be-Pac</h3>
                    <div className={styles.buttons}>
                      <button className={styles.descont}>-50%</button>
                      <button className={styles.buy}>
                        <i className="fa-solid fa-cart-shopping"></i>R$ 79,99
                      </button>
                    </div>
                  </div>
                  <div className={styles.card_txt}>
                    <img src={NARU} alt="#" />
                    <h3>Ultimate Storm 4</h3>
                    <div className={styles.buttons}>
                      <button className={styles.descont}>-37%</button>
                      <button className={styles.buy}>
                        <i className="fa-solid fa-cart-shopping"></i>R$57,60
                      </button>
                    </div>
                  </div>
                  <div className={styles.card_txt}>
                    <img src={TEK} alt="#" />
                    <h3>Tekken 7</h3>
                    <div className={styles.buttons}>
                      <button className={styles.descont}>-26%</button>
                      <button className={styles.buy}>
                        <i className="fa-solid fa-cart-shopping"></i>R$42,79
                      </button>
                    </div>
                  </div>
                  <div className={styles.card_txt}>
                    <img src={DGB} alt="#" />
                    <h3>Dragon Ball Xenovers 11</h3>
                    <div className={styles.buttons}>
                      <button className={styles.descont}>-32%</button>
                      <button className={styles.buy}>
                        <i className="fa-solid fa-cart-shopping"></i>R$46,99
                      </button>
                    </div>
                  </div>

                  <div className={styles.card_txt}>
                    <img src={FOOT} alt="" />
                    <h3>eFootball 2020</h3>
                    <div className={styles.buttons}>
                      <button className={styles.descont}>-100%</button>
                      <button className={styles.buy}>
                        Gratuito
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.conteiner_in}>
                  <h4> ROCKSTAR GAMES </h4>
                  <a href="#"> Ver Mais </a>
                </div>
                <div className={styles.card_p2}>
                  <div className={styles.card_txt}>
                    <img src={GTA5} alt="" />
                    <h3>Grand Theft Auto V</h3>
                    <div className={styles.buttons}>
                      <button className={styles.descont}>-21%</button>
                      <button className={styles.buy}>
                        <i className="fa-solid fa-cart-shopping"></i>R$83,20
                      </button>
                    </div>
                  </div>
                  <div className={styles.card_txt}>
                    <img src={GTA6} alt="" />
                    <h3>Grand Theft Auto VI</h3>
                    <div className={styles.buttons}>
                      <button className={styles.descont}> 0%</button>
                      <button className={styles.buy}>
                         Em Breve 
                      </button>
                    </div>
                  </div>
                  <div className={styles.card_txt}>
                    <img src={GTASAN} alt="" />
                    <h3>Grand Theft Auto SA</h3>
                    <div className={styles.buttons}>
                      <button className={styles.descont}>-50%</button>
                      <button className={styles.buy}>
                        <i className="fa-solid fa-cart-shopping"></i>R$48,23
                      </button>
                    </div>
                  </div>
                  <div className={styles.card_txt}>
                    <img src={RED} alt="" />
                    <h3>Red Dead Redemption 2</h3>
                    <div className={styles.buttons}>
                      <button className={styles.descont}>-50%</button>
                      <button className={styles.buy}>
                        <i className="fa-solid fa-cart-shopping"></i>R$89,99
                      </button>
                    </div>
                  </div>
                  <div className={styles.card_txt}>
                    <img src={BULLY} alt="" />
                    <h3>Bully</h3>
                    <div className={styles.buttons}>
                      <button className={styles.descont}>-55%</button>
                      <button className={styles.buy}>
                        <i className="fa-solid fa-cart-shopping"></i>R$ 32,12
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.conteiner_in}>
                  <h4> ELETRONIC ARTS</h4>
                  <a href="#"> Ver Mais </a>
                </div>
                <div className={styles.card_p3}>
                  <div className={styles.card_txt}>
                    <img src={INQ} alt="" />
                    <h3>Dragon Age: Inquisition</h3>
                    <div className={styles.buttons}>
                      <button className={styles.descont}>-40%</button>
                      <button className={styles.buy}>
                        <i className="fa-solid fa-cart-shopping"></i>R$ 69,99
                      </button>
                    </div>
                  </div>
                  <div className={styles.card_txt}>
                    <img src={BT} alt="" />
                    <h3>Battlefield 2042</h3>
                    <div className={styles.buttons}>
                      <button className={styles.descont}>-70%</button>
                      <button className={styles.buy}>
                        <i className="fa-solid fa-cart-shopping"></i>R$ 38,72
                      </button>
                    </div>
                  </div>
                  <div className={styles.card_txt}>
                    <img src={UFC} alt="" />
                    <h3>UFC 5</h3>
                    <div className={styles.buttons}>
                      <button className={styles.descont}>-90%</button>
                      <button className={styles.buy}>
                        <i className="fa-solid fa-cart-shopping"></i>R$ 99,86
                      </button>
                    </div>
                  </div>
                  <div className={styles.card_txt}>
                    <img src={LEGO} alt="" />
                    <h3>Lego Star Wars</h3>
                    <div className={styles.buttons}>
                      <button className={styles.descont}>-79%</button>
                      <button className={styles.buy}>
                        <i className="fa-solid fa-cart-shopping"></i>R$ 12,67
                      </button>
                    </div>
                  </div>
                  <div className={styles.card_txt}>
                    <img src={SIM} alt="" />
                    <h3>The Sims 4 </h3>
                    <div className={styles.buttons}>
                      <button className={styles.descont}>-50%</button>
                      <button className={styles.buy}>
                        <i className="fa-solid fa-cart-shopping"></i>R$ 47,32
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.img_container}>
          <div className={styles.img_wrapper}>
            <div className={styles.img1}>
              <img src={img} alt="" />
              <div>
                <h2>Loja</h2>
                <p>100% Oficial</p>
              </div>
            </div>
            <div className={styles.img2}>
              <img src={img2} alt="" />
              <div>
                <h2>Experiência</h2>
                <p>Segurança e Simples</p>
              </div>
            </div>
            <div className={styles.img3}>
              <img src={img3} alt="" />
              <div className={styles.txt3}>
                <h2>Divirta-se com</h2>
                <p>Os melhores jogos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
