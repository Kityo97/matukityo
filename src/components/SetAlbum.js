import React from "react";

function SetAlbum() {
  // Function to create upload button
  function createUploadButton() {
    const uploadButton = document.createElement('input');
    uploadButton.type = 'file';
    uploadButton.multiple = true;
    uploadButton.id = 'uploadButton';
    document.body.appendChild(uploadButton);
  }

  return (
    <div>
      <button onClick={createUploadButton}>Upload photos</button>
      <div>setAlbum</div>
    </div>
  );
}

export default SetAlbum;
