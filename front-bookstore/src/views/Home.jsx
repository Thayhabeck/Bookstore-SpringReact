import React from "react";
import figureBookstore from '../bookstore.svg';
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div className="p-0 m-0 py-2 mt-5">
            <div id="bookstoreCarrousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.discordapp.com/attachments/899633526411001876/950201671009570816/6.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.discordapp.com/attachments/899633526411001876/950201671240253531/7.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.discordapp.com/attachments/899633526411001876/950201671449997412/8.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#bookstoreCarrousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#bookstoreCarrousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="home sticky-top p-3">
                <h2 className="cabecalho fw-bold m-2 p-2 text-center">Conheça Nossos Livros</h2>
                <div className="row p-5 justify-content-around">
                    <div className="jumbotrom col-md-5 p-3 text-center">
                        <p className="home-text p-4">
                            Viaje por um mundo infinito de aventuras através da leitura! <br />
                            Aqui você encontra gêneros variados <br /> <i>Aventura, Sci-fi, Romances e muito mais! </i> <br />
                            Disponíveis em e-book e versão impressa, confira:
                        </p>
                        <hr />
                        <Link to="/Livros" className="btn btn-primary" style={{ margin: '5px' }}>
                            Livros
                        </Link>
                    </div>
                    <div className="col-md-3 p-3">
                        <img className="img-fluid" src={figureBookstore} alt="imagem" />
                    </div>
                </div>
            </div>
        </div>
    );
}
