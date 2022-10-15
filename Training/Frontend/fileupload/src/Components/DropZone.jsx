import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
export default function DropZone() {
    const [imgUrl, setUrl] = useState("images/placeholder.webp")
    const [msg, setMsg] = useState("Please select a file")
    const [dropZoneStyle, setDropZoneStyle] = useState({
        fontFamily: "verdana",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 0px 5px grey",
        height: "400px",
        margin: "auto"
    })
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        // console.log(acceptedFiles)
    }, [])

    const onDropRejected = useCallback(
        () => {
            setDropZoneStyle(
                {
                    ...dropZoneStyle,
                    border: "1px red solid"
                }
            )
            setMsg("This file is not allowed")
            setUrl("images/placeholder.webp")
        },
        []
    )

    const onDropAccepted = useCallback(
        (acceptedFiles) => {
            setDropZoneStyle(
                {
                    ...dropZoneStyle,
                    border: "none"
                }
            )
            // acceptedFiles.forEach(file => {
            //     console.log(file);
            //     imageToBase64(file);
            // });
            imageToBase64(acceptedFiles[0]);
        }
    )

    const imageToBase64 = (file) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = (data) => {
            setUrl(data.target.result);
        }
        fileReader.onerror = () => {
            console.log("Some error");
        }
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone(
        {
            onDrop,
            multiple: false,
            accept: {
                'image/*': ['.png', '.gif', '.jpeg', '.jpg']
            },
            multiple: true,
            onDropRejected,
            onDropAccepted
        }
    )



    const imgStyle = {
        width: "50%"
    }

    // console.log();
    return (
        <>
            <div {...getRootProps()} style={dropZoneStyle}>
                <img src={imgUrl} alt="" style={imgStyle} />
                <p>{msg}</p>
                <input {...getInputProps()} />
            </div>
        </>
    )
}
