/**
 * File management service
 */
import sdk from '@stackblitz/sdk';
import {javascriptProject} from "./template";
export async function embedProject() {
    await sdk.embedProject('embed', javascriptProject, {
        openFile: 'index.js', // TODO: make dependency on intial file automatically(dependent on proj-type: react, etc)
    });
}

/**
 *
 * @param files - [{name: string, content: string}]
 * @returns {Promise<void>}
 */
export async function createFiles(files) {
    const iframe = document.getElementById("embed")
    const vm = await sdk.connect(iframe);

    for (const file of files) {
        const dynamicKey = file.name;
        await vm.applyFsDiff({
            create: {
                [dynamicKey]  : `${file.content}`
            },
            destroy: []
        });
    }
}
export async function destroyFiles() {
//TODO
}