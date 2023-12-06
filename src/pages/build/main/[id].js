import {useEffect, useState} from 'react';
import {createFiles, embedProject} from "./service";




export default function main() {
    //chat UI state
    const [chat, setChat] = useState([]);
    const [currentChatMessage, setCurrentChatMessage] = useState('');

    useEffect(() => {
        embedProject();
    }, [])

    async function sendMessage() {
        setChat([...chat, currentChatMessage]);
        setCurrentChatMessage('');
        //1)TODO: send req to AI and get files
        /// pay attention to file structure: [{name:n, content:n}, ...]
        const files = [
            {
                name: "index2.js",
                content: "console.log(fukumean)"
            }
        ]
        //2) create/delete files
        createFiles(files);
    }

    return (
        <div className="flex h-screen">
            <div className="w-1/3 h-screen flex flex-col justify-end dark:bg-gray-600">
                <div>
                    {chat.map((message, index) => (
                        <div key={index} className="flex items-center px-3 py-2 dark:bg-gray-650">
                            <div className="flex flex-col">
                                <span className="font-semibold text-gray-900 dark:text-white">User</span>
                            </div>
                            <p className="ml-3 text-sm text-gray-900 dark:text-white">{message}</p>
                        </div>
                    ))}
                </div>
                <form onSubmit={(e) => { e.preventDefault(); sendMessage();}}>
                    <label htmlFor="chat" className="sr-only">Your message</label>
                    <div className="flex items-center px-3 py-2 bg-gray-50 dark:bg-gray-700">
                        <textarea
                            id="chat"
                            rows="1"
                            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Your message..."
                            value={currentChatMessage}
                            onChange={(e) => setCurrentChatMessage(e.target.value)}
                            onKeyDown={(e) => {if (e.keyCode === 13) { e.preventDefault(); sendMessage() }}}
                        ></textarea>
                        <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                            <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                            </svg>
                            <span className="sr-only">Send message</span>
                        </button>
                    </div>
                </form>

            </div>

            <div className="w-2/3 bg-gray-200 h-screen" id="embed">
            {/*  Embeded stackblitz project is here.. */}
            </div>
        </div>
    );
}

