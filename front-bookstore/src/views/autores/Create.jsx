import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AutorService from "../../services/AutorService";

export default function Create() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const createOrEditAutor = (e) => {
        e.preventDefault();
        const autor = {nome, sobrenome};
        if (id) {
            AutorService.updateAutor(id, autor)
            .then((response) => {
                navigate("/Autores");
            });
        } else {
            AutorService.createAutor(autor)
            .then((response) => {
                navigate("/Autores");
            });
        }
    }

    useEffect(() => {
        function getAutorById() {
            if (id){
                AutorService.getAutorById(id)
                .then((response) => {
                    setNome(response.data.nome);
                    setSobrenome(response.data.sobrenome);
                }).catch((error) => {
                    console.log(error);
                })
            }
        }
        getAutorById();
    }, [id]);

return (
    <div className="container py-4 mt-5">
        <form>
            <fieldset>
                <legend className="bg-dark rounded-3 p-3 text-light">
                <h2 className="text-center">
                    {id ? "Editar Autor" : "Adicionar Autor"}
                </h2>
                </legend>
                <div className="mb-3">
                    <label htmlFor="Nome" className="form-label fw-bolder">Nome</label>
                    <input type="text" id="Nome" className="form-control" placeholder="Nome" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Sobrenome" className="form-label fw-bolder">Sobrenome</label>
                    <input type="text" id="Sobrenome" className="form-control" placeholder="Sobrenome" 
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => createOrEditAutor(e)}>Enviar</button>
                <Link to="/Autores" className="btn btn-danger" style={{marginLeft: '10px'}}>Cancelar</Link>
            </fieldset>
        </form>
    </div>
);
}
