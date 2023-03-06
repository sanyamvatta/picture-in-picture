const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// Prompt user to select a media stream,pass to video element and play

async function selectMediaStream(){
  try{
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = ()=>{
      videoElement.play();
    }
  }catch(e){
    console.log('Error')
  }
}

button.addEventListener('click', async()=>{
  // disable button
  button.disabled = true
  // start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disabled = false
})

// On laod
selectMediaStream()