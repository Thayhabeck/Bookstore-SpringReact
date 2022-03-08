import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LivroService from "../../services/LivroService";

export default function Index() {
    const [livros, setLivros] = useState([]);
    const getAllLivros = () => {
        LivroService.getAllLivros()
            .then((response) => {
                setLivros(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllLivros();
    }, []);

    const deleteLivro = (livroId) => {
        if (window.confirm("Deseja realmente excluir este livro?")) {
            LivroService.deleteLivro(livroId)
                .then((response) => {
                    getAllLivros();
                }).catch((error) => {
                    console.log(error);
                    const { data } = error.response;
                    if (data.status === 500)
                        alert("Não é possível excluir este dado!");
                });
        }
    };

    return (
        <div className="container py-4 mt-5">
            <Link className="btn btn-primary" style={{ marginBottom: '10px' }} to="/Livros-Create">Adicionar Livro</Link>

            <div className="books justify-content-around">
                {livros.map((livro) => (
                    <div className="book_box card text-center m-1 my-3" key={livro.id_Livro}>
                        <img className="card-img-top img-responsive p-3 pb-0" src={livro.urlImg} alt="Capa" />
                        <h5 className="card-title fw-bold my-2">{livro.titulo}</h5>
                        <p className="card-subtitle fw-bold ">{livro.autor.nome} {livro.autor.sobrenome}</p>
                        <hr className="p-0 m-2" />
                        <div className="card-body text-center p-1 m-0">
                            <p className="card-text m-1 p-0">Editora {livro.editora.nome}</p>
                            <p className="card-text text-muted fs-6 m-0 p-0">{livro.isbn}</p>
                            <p className="card-text preco fw-bold fs-5 m-1 p-0"> R$ {livro.preco}</p>
                            <Link className="btn btn-warning" style={{ margin: '5px' }} to={`/Livros-Update/${livro.id_Livro}`}>
                                <span className="material-icons">
                                    edit
                                </span>
                            </Link>
                            <button className="btn btn-danger" style={{ margin: '5px' }} onClick={() => deleteLivro(livro.id_Livro)}>
                                <span className="material-icons">
                                    delete
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}