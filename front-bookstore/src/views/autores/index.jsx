import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AutorService from "../../services/AutorService";

export default function Index() {
    const [autores, setAutores] = useState([]);
    const getAllAutores = () => {
        AutorService.getAllAutores()
            .then((response) => {
                setAutores(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllAutores();
    }, []);

    const deleteAutor = (autorId) => {
        if (window.confirm("Deseja realmente excluir este autor?")) {
            AutorService.deleteAutor(autorId)
                .then((response) => {
                    getAllAutores();
                }).catch((error) => {
                    console.log(error);
                    const { data } = error.response;
                    if (data.status === 500)
                        alert("Não é possível excluir!\nHá livros vinculados a este Autor!");
                });
        };
    };

    return (
        <div className="container py-4 mt-5">
            <Link className="btn btn-primary" style={{ marginBottom: '10px' }} to="/Autores-Create">
                Adicionar Autor
            </Link>
            <table className="table table-responsive table-hover table-striped">
                <thead>
                    <tr className="bg-dark text-light">
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {autores.map((autor) => (
                        <tr key={autor.id_autor}>
                            <td>{autor.id_autor}</td>
                            <td>{autor.nome}</td>
                            <td>{autor.sobrenome}</td>
                            <td>
                                <Link className="btn btn-warning" style={{ margin: '5px' }} to={`/Autores-Update/${autor.id_autor}`}>
                                    <span className="material-icons">
                                        edit
                                    </span>
                                </Link>
                                <button className="btn btn-danger" onClick={() => deleteAutor(autor.id_autor)} style={{ margin: '5px' }}>
                                    <span className="material-icons">
                                        delete
                                    </span>
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
}