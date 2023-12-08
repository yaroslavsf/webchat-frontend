import axios, {create} from "axios";
import {createFiles} from "@/pages/build/main/file-service";

/**
 *
 * @param message - {actor: string, content: string}
 * @returns {Promise<void>}
 */
function extractStringBetweenSequences( str, startStr ,endStr) {
    const pos = str.indexOf(startStr) + startStr.length;
    return str.substring(pos, str.indexOf(endStr, pos));
}
export async function request(message) {

    const params = "you are not allowed to write plain text with explanation and markdown for code," +
        "the answer should be in following format: " +
        "file: write here name of the file; " +
        "content: write here content of the file."
    axios.post(`${process.env.NEXT_PUBLIC_SOMETHING}/generate`, {
        model: "codellama",
        prompt: params + message.content,
        stream: false
    })
        .then(function (response) {
            console.log(response.data.response);
            const file = extractStringBetweenSequences(response.data.response, "file:", "content:");
            const content = response.data.response.split('content:').pop();
            console.log(file)
            console.log(content)
            createFiles([{
                name: file,
                content: content
            }])
        })
        .catch(function (error) {
            console.log(error);
        });
}