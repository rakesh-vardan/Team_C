import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #007bff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const QRCodeImage = styled.img`
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const DownloadLink = styled.a`
  display: block;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

function App() {
  const [url, setUrl] = useState('');
  const [qr, setQr] = useState('');

  const generateQR = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/generate?url=${url}`);
      setQr(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <h1>QR Code Generator</h1>
      <Input type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder="Enter URL" />
      <Button onClick={generateQR} disabled={!url}>Generate QR Code</Button>
      {qr && (
        <>
          <QRCodeImage src={qr} alt="QR Code" />
          <DownloadLink href={qr} download="qrcode.png">Download QR Code</DownloadLink>
        </>
      )}
    </Container>
  );
}

export default App;