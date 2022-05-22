import React from 'react';
import "./MediaUpload.css"
import { useRef, useState } from "react";
import InputFile from '../../../components/InputFile/InputFile';


function MediaUpload({setMediaUpload, mediaUpload}) {
    const [showMenu, setShowMenu] = useState(false)
    
    return (
        <>
             <button onClick={() =>setShowMenu(prev => !prev)} className="no-border">
              <svg className="media-button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
              </svg>
            </button>
{showMenu &&
            (<ul className="list-group mediaButtonsBar" id="mediaUpload">
                <label for={`file_input-image`} style={{width: 'fit-content', borderRadius:"30px"}}>
                <li className="list-group-item uploadButton camera" >
                    <i className="bi bi-camera-fill"></i><InputFile type="image" setMediaUpload={setMediaUpload}/>
                </li>
                </label>
                <label for="file_input-video" style={{width: 'fit-content', borderRadius:"30px"}}>
                <li className="list-group-item uploadButton video">
                <i class="bi bi-camera-reels-fill"><InputFile type="video" setMediaUpload={setMediaUpload}/></i>
                </li>
                </label>
                <label>
                <li className="list-group-item uploadButton record">
                    <i class="bi bi-mic-fill"></i><InputFile type="audio" setMediaUpload={setMediaUpload} />
                </li>
                </label>
            </ul>)
}

        </>
    );
}

export default MediaUpload;
