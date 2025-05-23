import fs from "fs/promises";
import useEndLive from "./useEndLive.js";


const useClean = async (OUTPUT_DIR, processMap, S3_PREFIX, id) => {
    try {
        await useEndLive(OUTPUT_DIR, S3_PREFIX);
        await fs.rm(OUTPUT_DIR, { recursive: true, force: true });

        if (processMap[id]) {
            processMap[id]?.ffmpeg?.kill('SIGTERM');
            processMap[id]?.watcher?.close();
            delete processMap[id];
        }

    } catch (error) {
        console.log("error from useClean: ", error);
    }
}

export default useClean;
