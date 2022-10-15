import { useRef, useState } from "react"

function App() {
  const [imgUrl, setUrl] = useState("images/placeholder.webp")

  const inputFile = useRef()

  const fileHandler = (e) => {
    console.log(e.target.files);
    // imageToBase64(e.target.files[0])
    // e.target.files.foreach(
    //   (img) => imageToBase64(img)
    // )
  }

  const imageToBase64 = (file) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file) // base64 convert
    // console.log(fileReader);
    fileReader.onload = (data) => {
      setUrl(data.target.result);
    }

    fileReader.onerror = () => {
      console.log("Some error");
    }
  }

  const imageHandler = () => {
    inputFile.current.click()
  }

  return (
    <>
      <div style={
        {
          width: "80%",
          margin: "50px auto",
          textAlign: "center"
        }
      }>
        <input type="file" ref={inputFile} onChange={(e) => fileHandler(e)} hidden multiple />
        <div>
          <img style={{ marginTop: 10 }} src={imgUrl} alt="" width={500} height={500} onClick={imageHandler} />
          <p> Click here to select an image </p>
        </div>
      </div>
    </>
  );
}

export default App;
