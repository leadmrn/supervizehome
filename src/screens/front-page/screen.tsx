import picto1 from '../../assets/images/picto1.svg';
import picto2 from '../../assets/images/picto2.svg';
import picto3 from '../../assets/images/picto3.svg';
import img2 from '../../assets/images/img2.png';
import logo from '../../assets/global/logo-white.svg';

import './styles.scss';
import { Link } from 'react-router-dom';

function FrontPage() {
  return (
    <div className="FrontPage">
      <div className="section1">
        <div>
          <h1>
            Votre projet immobilier
            <br /> de A à Z
          </h1>
        </div>
      </div>
      <div className="section2">
        <div>
          <h2>
            Des experts vous accompagnent dans la réalisation de votre projet
            immobiler
          </h2>
          <p>Construire en toute sérénité</p>
        </div>
        <div className="columns">
          <div>
            <img src={picto1} alt="Picto 1" />
            <h4>1. Un projet immobilier</h4>
            <p>
              Vous voulez construire votre maison, un immeuble à distance, mais
              vous avez peur de manquer de visibilité sur l’avancé de vos
              travaux
            </p>
          </div>
          <div>
            <img src={picto2} alt="Picto 2" />
            <h4>2. Surveillance participative</h4>
            <p>
              Travaillez main dans la main avec vos artisans. Notre plateforme
              permets aux artisans de consigner l’avancé de vos projets
            </p>
          </div>
          <div>
            <img src={picto3} alt="Picto 3" />
            <h4>3. Livraison</h4>
            <p>
              La mission est terminée ? Mettez nous un feedback positif sur la
              plateforme.
            </p>
          </div>
        </div>
      </div>
      <div className="section3">
        <div>
          <h2>Le guide de la construction</h2>
          <img src={img2} alt="Pic 2" />
          <p>
            Construisez votre maison en tout sérénité en suivant les étapes de
            notre guide complet 2023
          </p>
          <Link
            to="/files/guide.pdf"
            target="_blank"
            download
            className="Button primary"
          >
            Obtenir le guide
          </Link>
        </div>
        <div>
          <h2>Le Dashboard</h2>
          <img src={img2} alt="Pic 2" />
          <p>
            Laissez vous accompagner par les meilleurs artisans pour construire
            votre maison. Pour se faire inscrivez-vous sur notre plateforme pour
            y avoir accès.
          </p>
          <Link to="/register" className="Button secondary">
            Inscrivez-vous
          </Link>
        </div>
      </div>
      <footer>
        <div>
          <div>
            <img src={logo} alt="Logo" />
            <p>
              Lorem ipsum dolor sin amet Lorem ipsum dolor sit amet, consectetur
              adipisicing elit,
            </p>
          </div>
          <div className="nav">
            <Link to="/login">Connexion</Link>
            <Link to="/register">Inscription</Link>
            <Link to="/files/guide.pdf" target="_blank" download>
              Guide de construction
            </Link>
          </div>
        </div>
        <div>
          <p>Copyright 2022 © Tout droits réservés Supervizehome</p>
        </div>
      </footer>
    </div>
  );
}

export default FrontPage;
