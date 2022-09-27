import "./App.css"
import QRCode from "qrcode";
import { useState } from "react";


function App() {
  const initialState = ""
  const [url, setUrl] = useState(initialState);
  const [qrcode, setQrcode] = useState('');
  const GenerateQRCode = () => {
    QRCode.toDataURL(url,{
       width:800,
       margin:2,
       color:{dark:'#335383ff',light:'#ffffffff'}
    }, (err, url) => {
      if (err) return console.log(err)
      console.log(url)
      setQrcode(url)
      setUrl(initialState)
    })
  }
  return (
    <div className="app">
      <h1>QR code Generaer</h1>
      <input type="text" placeholder='https://www.google.com/' value={url} onChange={(evt) => setUrl(evt.target.value)} />
      <button onClick={GenerateQRCode}>Generate</button>
      {
        qrcode &&
        <>
          <img src={qrcode} alt="" />
          <a href={qrcode} download='qrcode.png'>Download</a>
        </>
      }
    </div>
  );
}

export default App;
