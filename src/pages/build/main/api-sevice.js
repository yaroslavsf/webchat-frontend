import axios from "axios";

/**
 *
 * @param message - {actor: string, content: string}
 * @returns {Promise<void>}
 */
export async function request(message) {


    axios.post(`${process.env.REACT_APP_AI_URL}/generate`, {
        model: "codellama",
        prompt: message.content,
        stream: false
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}