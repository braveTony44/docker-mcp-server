import docker from "../config/docker.config.js";

async function isImageAvailable(image_name, tag) {
    const images = await docker.listImages(); 
    for (let image of images) {
       
        const [repoTag] = image.RepoTags || []; 
        if (!repoTag) continue;
        
        const [imageName, imageTag] = repoTag.split(':');
        
        if (imageName === image_name && imageTag === tag) {
            return true; 
        }
    }
    return false; 
}

async function pullImageByNameAndTag(image_name, tag) {
    const imageTag = `${image_name}:${tag}`;

    try {
        // Start pulling the image, it returns a stream
        const stream = await docker.pull(imageTag);

        // Follow the progress of the image pull
        return new Promise((resolve, reject) => {
            docker.modem.followProgress(stream, (err, result) => {
                if (err) {
                    reject(`Error pulling image ${imageTag}: ${err.message}`);
                } else {
                    resolve(`Image ${imageTag} pulled successfully!`);
                }
            });
        });

    } catch (err) {
        
        throw new Error(`Failed to pull image ${imageTag}: ${err.message}`);
    }
}


export  {isImageAvailable,pullImageByNameAndTag}