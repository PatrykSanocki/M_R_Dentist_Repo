import React, { Fragment } from "react";
import dentist1 from "./pictures/dentist-428648_1024.jpg";
import dental from "./pictures/dental-2450751_1024.jpg";
import doctor from "./pictures/doctor-1149149_1024.jpg";
import dentist2 from "./pictures/dentist-1864921_1024.jpg";
import "./Prices.css";

const Prices = () => {
  return (
    <Fragment>
      <article>
        <div class="news-section">
          <p>Prices</p>
        </div>
      </article>
      <article>
        <div class="card">
          <img
            class="card-img"
            src={dentist1}
            width="1024"
            height="auto"
            alt="dentist"
          ></img>
          <p class="card-title">Doloribus ut iste.</p>
          <p class="card-content">Lorem ipsum dolor sit amet consectetur.</p>
          <button class="more">
            <a href="#p1">more</a>
          </button>
        </div>
      </article>
      <article>
        <div class="card">
          <img
            class="card-img"
            src={dental}
            width="1024"
            height="auto"
            alt="dental"
          ></img>
          <p class="card-title">Lorem, ipsum dolor.</p>
          <p class="card-content">Lorem ipsum dolor sit amet consectetur.</p>
          <button class="more">
            <a href="#p2">more</a>
          </button>
        </div>
      </article>
      <article>
        <div class="card">
          <img
            class="card-img"
            src={doctor}
            width="1024"
            height="auto"
            alt="doctor"
          ></img>
          <p class="card-title">Lorem, ipsum.</p>
          <p class="card-content">Lorem ipsum dolor sit amet consectetur.</p>
          <button class="more">
            <a href="#p3">more</a>
          </button>
        </div>
      </article>
      <article>
        <div class="card">
          <img
            class="card-img"
            src={dentist2}
            width="1024"
            height="auto"
            alt="dentist"
          ></img>
          <p class="card-title">Repudiandae, sapiente.</p>
          <p class="card-content">Lorem ipsum dolor sit amet consectetur.</p>
          <button class="more">
            <a href="#p4">more</a>
          </button>
        </div>
      </article>
      <article>
        <table>
          <tr>
            <th>Service</th>
            <th>Price from:</th>
            <th>Price to:</th>
          </tr>
        </table>
        <p id="p1" class="table-service">
          Doloribus ut iste.
        </p>
        <table>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>Lorem, ipsum.</td>
            <td>20$</td>
            <td>30$</td>
          </tr>
          <tr>
            <td>Lorem, ipsum dolor.</td>
            <td>50$</td>
            <td>70$</td>
          </tr>
          <tr>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>75$</td>
            <td>80$</td>
          </tr>
          <tr>
            <td>Lorem, ipsum.</td>
            <td>20$</td>
            <td>30$</td>
          </tr>
          <tr>
            <td>Lorem, ipsum dolor.</td>
            <td>50$</td>
            <td>70$</td>
          </tr>
          <tr>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>55$</td>
            <td>90$</td>
          </tr>
          <tr>
            <td>Lorem ipsum dolor, sit amet consectetur adipisicing.</td>
            <td>120$</td>
            <td>230$</td>
          </tr>
          <tr>
            <td>Lorem, ipsum dolor.</td>
            <td>50$</td>
            <td>70$</td>
          </tr>
          <tr>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>175$</td>
            <td>180$</td>
          </tr>
        </table>
        <p id="p2" class="table-service">
          Lorem, ipsum dolor.
        </p>
        <table>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>Lorem, ipsum.</td>
            <td>20$</td>
            <td>30$</td>
          </tr>
          <tr>
            <td>Lorem, ipsum dolor.</td>
            <td>50$</td>
            <td>70$</td>
          </tr>
          <tr>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>75$</td>
            <td>80$</td>
          </tr>
          <tr>
            <td>Lorem, ipsum.</td>
            <td>20$</td>
            <td>30$</td>
          </tr>
          <tr>
            <td>Lorem, ipsum dolor.</td>
            <td>50$</td>
            <td>70$</td>
          </tr>
          <tr>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>55$</td>
            <td>90$</td>
          </tr>
        </table>
        <p id="p3" class="table-service">
          Lorem, ipsum.
        </p>
        <table>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>Lorem, ipsum.</td>
            <td>20$</td>
            <td>30$</td>
          </tr>
          <tr>
            <td>Lorem, ipsum dolor.</td>
            <td>50$</td>
            <td>70$</td>
          </tr>
          <tr>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>75$</td>
            <td>80$</td>
          </tr>
        </table>
        <p id="p4" class="table-service">
          Repudiandae, sapiente.
        </p>
        <table>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>Lorem, ipsum.</td>
            <td>20$</td>
            <td>30$</td>
          </tr>
          <tr>
            <td>Lorem, ipsum dolor.</td>
            <td>50$</td>
            <td>70$</td>
          </tr>
          <tr>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>75$</td>
            <td>80$</td>
          </tr>
          <tr>
            <td>Lorem, ipsum.</td>
            <td>20$</td>
            <td>30$</td>
          </tr>
          <tr>
            <td>Lorem, ipsum dolor.</td>
            <td>50$</td>
            <td>70$</td>
          </tr>
          <tr>
            <td>Lorem ipsum dolor sit amet.</td>
            <td>55$</td>
            <td>90$</td>
          </tr>
        </table>
      </article>
    </Fragment>
  );
};

export default Prices;
