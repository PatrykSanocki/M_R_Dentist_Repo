import React, { Fragment } from "react";
import chair from "./pictures/chair-2589770_1024.jpg";
import dentist1 from "./pictures/dentist-428646_1024.jpg";
import dentist2 from "./pictures/dentist-1639683_1024.jpg";
import "./Home.css";

const Home = ({
  modal1Opened,
  setModal1Opened,
  modal2Opened,
  setModal2Opened,
  modal3Opened,
  setModal3Opened,
  disableBodyScroll,
  enableBodyScroll,
}) => {
  const [clickCount, setClickCount] = React.useState(900000);
  const [imageTranslation, setImageTranslation] = React.useState({});

  let carouselPrevBtn = () => {
    updateTranslations(clickCount - 1);
  };

  let carouselNextBtn = () => {
    updateTranslations(clickCount + 1);
  };

  let updateTranslations = (clicks) => {
    setClickCount(clicks);
    setImageTranslation({
      transform: "translateX(" + -(clicks % 3) * 100 + "%)",
    });
  };

  let handleSetModalOpened = (func, open) => {
    if (open) {
      func(true);
      disableBodyScroll();
    } else {
      func(false);
      enableBodyScroll();
    }
  };

  return (
    <Fragment>
      <article>
        <div class="carousel">
          <div class="screen">
            <div class="film">
              <img
                src={chair}
                width="1024"
                height="auto"
                alt="chair"
                style={imageTranslation}
              ></img>
              <img
                src={dentist1}
                width="1024"
                height="auto"
                style={imageTranslation}
                alt="dentist"
              ></img>
              <img
                src={dentist2}
                width="1024"
                height="auto"
                alt="dentist"
                style={imageTranslation}
              ></img>
            </div>
            <button onClick={carouselPrevBtn} id="prev">
              {"<"}
            </button>
            <button onClick={carouselNextBtn} id="next">
              {">"}
            </button>
          </div>
        </div>
        <div class="news-section">
          <p>News</p>
        </div>
      </article>
      <article>
        <div class="news">
          <p class="news-title">News</p>
          <p class="news-message">Clinic closed for a day on 21.05.2021</p>
          <button
            onClick={() => handleSetModalOpened(setModal1Opened, true)}
            id="blockquote-1-btn"
            class="more"
          >
            More
          </button>
          <div hidden={!modal1Opened} class="blockquote" id="quote-closed">
            <div class="blockquote-panel">
              <p class="modal-title">news</p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              dolorem animi fugiat harum aut cum, id obcaecati debitis molestias
              eius, est iusto corporis sit saepe, autem accusantium? Est cumque
              quibusdam eveniet aut ratione nam animi. Debitis, quisquam
              accusantium. Quisquam inventore dicta asperiores maiores, quasi
              repellendus error officia quae obcaecati ducimus sit, nihil,
              sapiente perferendis voluptates debitis aut. Deleniti atque
              dignissimos repellendus praesentium assumenda quam rerum incidunt
              iure sit omnis impedit porro alias adipisci consequatur enim
              eligendi odit aperiam provident officiis quibusdam blanditiis,
              expedita dolores! Accusamus, facilis id perspiciatis deleniti
              natus libero nihil alias maxime maiores consequuntur. Voluptas
              nesciunt dolorum consequuntur harum doloribus explicabo fugiat,
              quod debitis commodi, amet alias, ipsa suscipit reprehenderit sunt
              facilis veritatis? Illum dolorum ad eveniet, non in tempore
              repellat molestias ea nam nulla, nihil ex quaerat? Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Commodi dolorem animi
              fugiat harum aut cum, id obcaecati debitis molestias eius, est
              iusto corporis sit saepe, autem accusantium? Est cumque quibusdam
              eveniet aut ratione nam animi. Debitis, quisquam accusantium.
              Quisquam inventore dicta asperiores maiores, quasi repellendus
              error officia quae obcaecati ducimus sit, nihil, sapiente
              perferendis voluptates debitis aut. Deleniti atque dignissimos
              repellendus praesentium assumenda quam rerum incidunt iure sit
              omnis impedit porro alias adipisci consequatur enim eligendi odit
              aperiam provident officiis quibusdam blanditiis, expedita dolores!
              Accusamus, facilis id perspiciatis deleniti natus libero nihil
              alias maxime maiores consequuntur. Voluptas nesciunt dolorum
              consequuntur harum doloribus explicabo fugiat, quod debitis
              commodi, amet alias, ipsa suscipit reprehenderit sunt facilis
              veritatis? Illum dolorum ad eveniet, non in tempore repellat
              molestias ea nam nulla, nihil ex quaerat?
            </div>
            <button
              onClick={() => handleSetModalOpened(setModal1Opened, false)}
              class="modal-close"
            >
              Close
            </button>
          </div>
        </div>
      </article>
      <article>
        <div class="news">
          <p class="news-title">Health contract</p>
          <p class="news-message">
            Read more about our national healthcare contract
          </p>
          <button
            onClick={() => handleSetModalOpened(setModal2Opened, true)}
            id="blockquote-2-btn"
            class="more"
          >
            More
          </button>
          <div hidden={!modal2Opened} class="blockquote" id="quote-closed2">
            <div class="blockquote-panel">
              <p class="modal-title">Health contract</p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              nobis eaque sed non veniam optio doloremque ab voluptas, in
              possimus facilis et molestias aspernatur voluptatem amet itaque
              debitis quasi at doloribus ad, magnam provident! Repudiandae
              assumenda quasi cum exercitationem ab. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Optio quidem quibusdam nihil nostrum
              quae ratione magnam facere quia ullam, deserunt aspernatur in
              dicta accusantium impedit vel quasi magni nisi libero perspiciatis
              cum, rerum laudantium odio repellendus? Nam nemo fugit animi.
            </div>
            <button
              onClick={() => handleSetModalOpened(setModal2Opened, false)}
              class="modal-close"
            >
              Close
            </button>
          </div>
        </div>
      </article>
      <article>
        <div class="news">
          <p class="news-title">Private healthcare</p>
          <p class="news-message">Check our private healthcare offer</p>
          <button
            onClick={() => handleSetModalOpened(setModal3Opened, true)}
            id="blockquote-3-btn"
            class="more"
          >
            More
          </button>
          <div hidden={!modal3Opened} class="blockquote" id="quote-closed3">
            <div class="blockquote-panel">
              <p class="modal-title">Private healthcare</p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              consectetur culpa quo, vel error commodi ducimus quidem
              necessitatibus sunt nobis quasi temporibus autem quod, animi
              perferendis fugiat fuga iure exercitationem! Sit vel in provident
              enim adipisci minima temporibus expedita, sint velit voluptatem
              veniam? Quos repellat repellendus id, dolores iste dolor assumenda
              officiis amet error saepe, esse et odio ullam eos ab. Ad et quos
              fuga consectetur earum laborum blanditiis maxime iusto
              exercitationem possimus expedita, sequi voluptatibus impedit,
              voluptatum perspiciatis. Nulla. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Maxime veritatis, ducimus quasi ab
              quisquam dolor sapiente. Explicabo quam sapiente perferendis?
            </div>
            <button
              onClick={() => handleSetModalOpened(setModal3Opened, false)}
              class="modal-close"
              on="tap:quote-closed3.close,hide-content-box.hide"
            >
              Close
            </button>
          </div>
        </div>
      </article>
    </Fragment>
  );
};

export default Home;
