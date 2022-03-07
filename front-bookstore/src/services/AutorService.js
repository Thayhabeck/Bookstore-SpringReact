import axios from "axios";

const AUTOR_API_URL = "http://localhost:8080/autores";

class AutorService {
    getAllAutores() {
        return axios.get(AUTOR_API_URL);
    }

    createAutor(autor) {
        return axios.post(AUTOR_API_URL, autor);
    }

    getAutorById(autorId) {
        return axios.get(AUTOR_API_URL + "/" + autorId);
    }

    updateAutor(autorId, autor) {
        return axios.put(AUTOR_API_URL + "/" + autorId, autor);
    }

    deleteAutor(autorId) {
        return axios.delete(AUTOR_API_URL + "/" + autorId);
    }
}

export default new AutorService();