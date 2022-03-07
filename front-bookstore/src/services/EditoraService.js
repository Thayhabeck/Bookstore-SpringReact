import axios from "axios";

const EDITORA_API_URL = "http://localhost:8080/editoras";

class EditoraService {
    getAllEditoras() {
        return axios.get(EDITORA_API_URL);
    }

    createEditora(editora) {
        return axios.post(EDITORA_API_URL, editora);
    }

    getEditoraById(editoraId) {
        return axios.get(EDITORA_API_URL + "/" + editoraId);
    }

    updateEditora(editoraId, editora) {
        return axios.put(EDITORA_API_URL + "/" + editoraId, editora);
    }

    deleteEditora(editoraId) {
        return axios.delete(EDITORA_API_URL + "/" + editoraId);
    }
}

export default new EditoraService();