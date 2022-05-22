import { Button } from 'react-bootstrap';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const InputFile = ({type, setMediaUpload, mediaUpload}) => {
    const [mediaRecorderStarted, setMediaRecorderState] = useState(false)
    const [recordingTime, setRecordingTime ] = useState(0)
    let mediaRecorder;
    const onChange = (e) => {
        const [file] = e.target.files;
        console.log(file);
        if(type === 'image'){
        const FR = new FileReader()
        FR.onload = () =>{
                setMediaUpload(prev => ({image: FR.result}))
            console.log(FR.result)
        }
        FR.readAsDataURL(file);
    }
    if(type === 'video'){
        const FR = new FileReader()
        FR.onload = () => {
            setMediaUpload({video: FR.result})
            console.log(FR.result)
        }
        FR.readAsDataURL(file);
} }
        useEffect(() => {
        let intervalRef;
        if(mediaRecorderStarted){
            setRecordingTime(0)
            intervalRef = setInterval(() => setRecordingTime(prev => prev+1), 1000);
        }
            return () => {
                clearInterval(intervalRef)
        }
        },[mediaRecorderStarted])

    const onRecord = async() => {
        let stream = await navigator.mediaDevices.getUserMedia({audio: true, video: false});
        mediaRecorder = new MediaRecorder(stream);
        
        mediaRecorder.start();
        let chunks = [];
        mediaRecorder.ondataavailable = (e)=>{
             chunks.push(e.data);
        }
        mediaRecorder.onerror = (e)=>{
             alert(e.error);
        }
        mediaRecorder.onstop = (e) => {
            let blob = new Blob(chunks);
             let url = URL.createObjectURL(blob);
             console.log(url)
             setMediaUpload(prev => ({audio: url}))
        }
    }
    const onStop = () => {
        console.log("stopped")
        if(mediaRecorder)
        {mediaRecorder.stop()
        }
    }
    if(type ==='audio'){
        return(
            <div>
            <Button style={{marginInline: "0.5rem"}} onClick={async() =>{ await onRecord();}} >Record</Button>
             <Button style={{marginInline: "0.5rem"}} onClick={() => onStop()} >stop</Button>
            {recordingTime}
            </div>
        )
    }
  return (
    <input id={`file_input-${type}`} type="file" style={{display:'none'}} onChange={onChange} accept={type === 'video' ? "video/*" : 'image/*'} />
  )
}

export default InputFile