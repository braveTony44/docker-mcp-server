import docker from "../config/docker.config.js";
import { isImageAvailable, pullImageByNameAndTag } from "../utils/helpers.js";

async function createConatiner(image_name, tag) {
  try {
    if (!tag) {
        tag = "latest";
      }
      const isAvaiable = await isImageAvailable(image_name, tag);
      if (!isAvaiable) {
        console.log("pulling....")
        await pullImageByNameAndTag(image_name, tag);
      }
      
      const conatiner = await docker.createContainer({
        Image: `${image_name}:${tag}`,
      });
    return {status:"success",message:"container successfully created",container_id:conatiner.id};
  } catch (error) {
   
    return {status:"system error",message:error.message}
  }
}

async function getConatinerById(container_id){
  try {
    if(!container_id){
      return {status:"invalid arguments",message:"container_id is required"}
    }
    const conatiner = await docker.getContainer(container_id).inspect();
    return {status:"success",message:"container details",container_id:conatiner.Id,conatiner_details:conatiner};
  } catch (error) {
     return {status:"system error",message:error.message}
  }
}


async function getConatinerStatus(container_id){
  try {
    const conatiner = await docker.getContainer(container_id).inspect();
  return {status:"success",message:"container status",container_id:conatiner.Id,conatiner_status:conatiner.State}
  } catch (error) {
    return {status:"system error",message:error.message}
  }
}


async function startPauseKill(container_id, desired_state) {
  try {
    const container = await docker.getContainer(container_id).inspect();
    const cont = docker.getContainer(container_id);

    // Handle 'start' operation
    if (desired_state === 'start') {
      if (!container.State.Running) {
        await cont.start();
        return { status: 'success', message: 'Container started successfully' };
      } else {
        return { status: 'error', message: 'Container already running' };
      }
    }

    // Handle 'pause' and 'stop' operations
    if (desired_state === 'pause') {
      if (!container.State.Paused) {
        await cont.pause();
        return { status: 'success', message: 'Container paused successfully' };
      } else {
        return { status: 'error', message: 'Container already paused' };
      }
    }

    if (desired_state === 'stop') {
      if (container.State.Running) {
        await cont.stop();
        return { status: 'success', message: 'Container stopped successfully' };
      } else {
        return { status: 'error', message: 'Container already stopped' };
      }
    }

    if (desired_state === 'kill' || desired_state === 'terminate') {
      if (!container.State.Dead) {
        // If it's not already stopped, stop it first
        if (container.State.Running || container.State.Paused) {
          await cont.stop();
        }
        await cont.remove();
        return { status: 'success', message: 'Container killed successfully' };
      } else {
        return { status: 'error', message: 'Container already killed' };
      }
    }
    return { status: 'error', message: 'Invalid desired_state' };
  } catch (error) {
    return { status: 'system error', message: error.message };
  }
}

export {createConatiner,getConatinerById,startPauseKill,getConatinerStatus}

