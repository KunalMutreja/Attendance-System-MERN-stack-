import React, { useEffect, useRef } from "react";
import axios from 'axios';
import useGeoLocation from './useGeolocation';
import "./buttondesign.css"
const FaceRecoginition = () => {
    let videoRef = useRef(null);
 
    let photoRef = useRef(null)   //photo which is captured
   

    //getting access to user camera
    const getVideo = () => {
      navigator.mediaDevices
        .getUserMedia({
          video: true
        })
        .then((stream) => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => {
          console.error(err);
        });
    };
   
    //capturing pitcure
    const takePicture = () => {
      const width = 400
      const height = width / (16 / 9)
      
      let video = videoRef.current
   
      let photo = photoRef.current
   
      photo.width = width
   
      photo.height = height
   
      let ctx = photo.getContext('2d')
   
      ctx.drawImage(video, 0, 0, width, height)
      
    }
   
    //Clear Image to Retake 
    const clearImage = () => {
      let photo = photoRef.current
   
      let ctx = photo.getContext('2d')
   
      ctx.clearRect(0,0,photo.width,photo.height)
    }
     

    //Getting location
    const location= useGeoLocation();
    let currentlocation =JSON.stringify(location);

    
    const uploadHandler = () => {
      
      //Getting current Date and time
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

        const formData = new FormData()
        formData.append(
          'image',
          photoRef
        )

        formData.append(
          "location",currentlocation
        )

        formData.append(
          "Date",date
        )

        formData.append(
          "Time",time
        )

        axios.post('my-domain.com/file-upload', formData)
      }
   
    useEffect(() => {
      getVideo();
    }, [videoRef]);
   
    return (
      <div className="container">
        <h1 className="text-center">Facial Recoginiton Attendance</h1>
   
        <video ref={videoRef} className="container"></video>
   
        <button onClick={takePicture} className="btn btn-danger container">Take Picture</button>
   
        <canvas className="container" ref={photoRef}></canvas>
        <div className="text-center">
        <button onClick={clearImage} className="btn btn-primary w-25 ">Retake</button>
        <button className="btn btn-primary w-25 mx-2 " onClick={uploadHandler}>Submit</button>
        </div>
   
        <br/><br/>
      </div>
    );
}

export default FaceRecoginition