import React, { useRef, useCallback } from 'react';
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from '../features/cameraSlice';
import { useHistory } from 'react-router-dom';
import '../ScreensCSS/WebcamCapture.css'

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
}

function WebcamCapture() {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();


    const capture = useCallback(() => {
        const imageScr = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageScr));
        history.push('/preview');

     }, [webcamRef])

    return( 
        <div className="webcamCapture">
          <Webcam 
            audio={false} 
            height={videoConstraints.height}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={videoConstraints.width}
            videoConstraints={videoConstraints}
          />

          <RadioButtonUncheckedIcon
          className="webcamCapture__button"
          onClick={capture}
          fontSize="large" 
          />
        </div>
        );
    
}

export default WebcamCapture;