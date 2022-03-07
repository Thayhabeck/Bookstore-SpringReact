import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditoraService from "../../services/EditoraService";

export default function Index() {
    const [editora, setEditora] = useState([]);
    const getAllEditoras = () => {
        EditoraService.getAllEditoras()
            .then((response) => {
                setEditora(response.data);
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllEditoras();
    }, []);

    const deleteEditora = (editoraId) => {
        if (window.confirm("Deseja realmente excluir este autor?")) {
            EditoraService.deleteEditora(editoraId)
                .then((response) => {
                    getAllEditoras();
                }).catch((error) => {
                    console.log(error);
                    const { data } = error.response;
                    if (data.status === 500)
                        alert("Não é possível excluir!\nHá livros vinculados a esta Editora! ");
                });
        };
    };

    return (
        <div className="container py-3">
            <Link className="btn btn-primary" style={{ marginBottom: '10px' }} to="/Editoras-Create">
                Adicionar Editora
            </Link>
            <table className="table table-responsive table-hover table-striped">
                <thead>
                    <tr className="bg-dark text-light">
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {editora.map((editora) => (
                        <tr key={editora.id_editora}>
                            <td>{editora.id_editora}</td>
                            <td>{editora.nome}</td>
                            <td>
                                <Link className="btn btn-warning" style={{ margin: '5px' }} to={`/Editoras-Update/${editora.id_editora}`}>
                                    <span className="material-icons">
                                        edit
                                    </span>
                                </Link>
                                <button className="btn btn-danger" onClick={() => deleteEditora(editora.id_editora)} style={{ marginLeft: '10px' }}>
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