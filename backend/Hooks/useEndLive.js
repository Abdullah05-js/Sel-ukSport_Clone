import { ListObjectsV2Command, DeleteObjectsCommand } from "@aws-sdk/client-s3";
import { bucket_Name } from "./useLive.js"
import { s3 } from "./useLive.js";
const useEndLive = async (OUTPUT_DIR, S3_PREFIX) => {
    try {

        const listParams = {
            Bucket: bucket_Name,
            Prefix: S3_PREFIX,
        };
        const listedObjects = await s3.send(new ListObjectsV2Command(listParams));

        if (!listedObjects.Contents || listedObjects.Contents.length === 0) {
            console.log("No objects found with prefix:", prefix);
            return;
        }

        const deleteParams = {
            Bucket: bucket_Name,
            Delete: {
                Objects: listedObjects.Contents.map(({ Key }) => ({ Key })),
            },
        };

        const deleteResponse = await s3.send(new DeleteObjectsCommand(deleteParams));
        console.log("Deleted objects from S3:", deleteResponse);

        if (listedObjects.IsTruncated) { // başka silenecek varsa devam 
            await useEndLive(OUTPUT_DIR, S3_PREFIX);
        }


    } catch (error) {

        console.log("error from useEndLive: ", error);
    }
}

export default useEndLive;