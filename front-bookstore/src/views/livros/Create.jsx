import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LivroService from "../../services/LivroService";
import AutorService from "../../services/AutorService";
import EditoraService from "../../services/EditoraService";

export default function Create() {
    const [titulo, setTitulo] = useState("");
    const [isbn, setIsbn] = useState("");
    const [preco, setPreco] = useState("");
    const [urlImg, setUrlImg] = useState("");
    const [autor, setAutor] = useState({ id_autor: "", nome: "", sobrenome: "" });
    const [editora, setEditora] = useState({ id_editora: "", nome: ""});
    const [autores, setAutores] = useState([]);
    const [editoras, setEditoras] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    const getAllAutores = () => {
        AutorService.getAllAutores()
            .then((response) => {
                setAutores(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };

    const getAllEditoras = () => {
        EditoraService.getAllEditoras()
        .then((response) => {
            setEditoras(response.data);
        }).catch((error) => {
            console.log(error);
        });
    };
    
    
    const createOrEditLivro = (e) => {
        e.preventDefault();
        const livro = { titulo, isbn, preco, urlImg, autor, editora };
        if (id) {
            LivroService.updateLivro(id, livro)
            .then((response) => {
                navigate("/Livros");
            });
        } else {
            LivroService.createLivro(livro)
            .then((response) => {
                navigate("/Livros");
            });
        }
    }
    
    useEffect(() => {
        getAllAutores();
    }, []);

    useEffect(() => {
        getAllEditoras();
    }, []);

    useEffect(() => {
        function getLivroById() {
            if (id) {
                LivroService.getLivroById(id)
                    .then((response) => {
                        setTitulo(response.data.titulo);
                        setIsbn(response.data.isbn);
                        setPreco(response.data.preco);
                        setUrlImg(response.data.urlImg);
                        setAutor({ id_autor: response.data.autor.id_autor, 
                                    nome: response.data.autor.nome,
                                    sobrenome: response.data.autor.sobrenome,});
                        setEditora({ id_editora: response.data.editora.id_editora,
                                    nome: response.data.editora.nome, });
                    }).catch((error) => {
                        console.log(error);
                    })
            }
        }
        getLivroById();
    }, [id]);

    return (
        <div className="container py-4 mt-5">
            <form>
                <fieldset>
                    <legend className="bg-dark rounded-3 p-3 text-light">
                        <h2 className="text-center">
                            {id ? "Editar Livro" : "Criar Livro"}
                        </h2>
                    </legend>
                    <div className="mb-3">
                        <label htmlFor="Titulo" className="form-label fw-bolder">Título</label>
                        <input type="text" id="Titulo" className="form-control" placeholder="Título"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="isbn" className="form-label fw-bolder">ISBN</label>
                        <input type="text" id="isbn" className="form-control" placeholder="ISBN"
                            value={isbn}
                            onChange={(e) => setIsbn(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="preco" className="form-label fw-bolder">Preço</label>
                        <input type="text" id="preco" className="form-control" placeholder="Preço"
                            value={preco}
                            onChange={(e) => setPreco(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="urlImg" className="form-label fw-bolder">Url da Imagem</label>
                        <input type="text" id="urlImg" className="form-control" placeholder="Url da imagem"
                            value={urlImg}
                            onChange={(e) => setUrlImg(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="autor" className="form-label fw-bolder">Autor</label>
                        <select className="form-select"
                            aria-label="Autor"
                            onChange={(e) => setAutor({ id_autor: Number.parseInt(e.target.value) })}>
                            <option value="default">{id ? autor.nome + " " + autor.sobrenome : "Escolha um autor"}</option>
                            {autores.map((autor) => (
                                <option key={autor.id_autor} value={autor.id_autor}>{autor.nome + " " + autor.sobrenome}</option>
                            ))};
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="editora" className="form-label fw-bolder">Editora</label>
                        <select className="form-select"
                            aria-label="Autor"
                            onChange={(e) => setEditora({ id_editora: Number.parseInt(e.target.value) })}>
                            <option value="default">{id ? editora.nome : "Escolha uma editora"}</option>
                            {editoras.map((editora) => (
                                <option key={editora.id_editora} value={editora.id_editora}>{editora.nome}</option>
                            ))};
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => createOrEditLivro(e)}>Enviar</button>
                    <Link to="/Livros" className="btn btn-danger" style={{ marginLeft: '10px' }}>Cancelar</Link>
                </fieldset>
            </form>
        </div>
    );
}
