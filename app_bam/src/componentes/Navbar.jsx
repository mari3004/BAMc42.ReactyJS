import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav classNameName="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="titulo col-xs-12 col-sm-12 col-md-2 col-lg-4">
                <h3>A3 Cosas rusticas</h3>
            </div>

            <div className="objetos col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <ul className="navbar-nav">
                    <li className="menuvar nav-item">
                        <a className="nav-link active" aria-current="page" href="/productos">
                            <button className="botonnav">
                                Productos
                            </button>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="menuvar nav-link active" aria-current="page" href="/sobremi">
                            <button className="botonnav">
                                Quien soy
                            </button>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="menuvar nav-link active" aria-current="page" href="/contactame">
                            <button className="botonnav">
                                Contactame
                            </button>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="botones col-xs-12 col-sm-12 col-md-5 col-lg-3">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="https://www.instagram.com/a3_cosas_rusticas_/">
                            <button><img src="./../images/instagram.png" id="logo" alt="Instagram"></img></button>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.facebook.com/alejandro.aizpitarte">
                            <button><img src="./../images/facebook.png" id="logo" alt="Facebook"></img></button>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://api.whatsapp.com/send?phone=542268516561">
                            <button><img src="./../images/whatsapp.png" id="logo" alt="Whatsapp"></img></button>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar