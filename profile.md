---
layout: page
title: Profile
permalink: /profile/
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
    body {
  text-align: center;
  padding-top: 64px;
}

.profile-picture-upload {
  display: inline;
}

.imagePreview {
  vertical-align: middle;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 8px;
  -webkit-box-shadow: 0px 3px 10px 2px rgba(0,0,0,0.35);
  -moz-box-shadow: 0px 3px 10px 2px rgba(0,0,0,0.35);
  box-shadow: 0px 3px 10px 2px rgba(0,0,0,0.35);
}

.hidden {
  position: absolute;
  width: 0px;
  height: 0px;
  left: -999999px;
}

.action-button {
  border: 1px solid black;
  background: none;
  padding: 8px;
  cursor: pointer;
  outline: 0;
  border-radius: 6px;
  
  &.mode-upload {
    color: #004085;
    border-color: #b8daff;
    background-color: #cce5ff;
  }
  
  &.mode-remove {
    color: #721c24;
    border: 1px solid #f5c6cb;
    background-color: #f8d7da;
  }
}
    </style>

    
</head>
<body>

<div class="profile-picture-upload">
  <img src="" alt="Profile picture preview" class="imagePreview">
  <button class="action-button mode-upload">Upload avatar</button>
  <input type="file" class="hidden" name="fileInput" />
</div>

<script>
  let picturePreview = document.querySelector(".imagePreview");
let actionButton = document.querySelector(".action-button");
let fileInput = document.querySelector("input[name='fileInput']");
let fileReader = new FileReader();

const DEFAULT_IMAGE_SRC = "https://www.drupal.org/files/profile_default.png";

actionButton.addEventListener("click", () => {
  if ( picturePreview.src !== DEFAULT_IMAGE_SRC ) {
    resetImage();
  } else {
    fileInput.click();
  }
});

fileInput.addEventListener("change", () => {
  refreshImagePreview();
});

function resetImage() {
  setActionButtonMode("upload");
  picturePreview.src = DEFAULT_IMAGE_SRC;
  fileInput.value = "";
}

function setActionButtonMode(mode) {
  let modes = {
    "upload": function() {
      actionButton.innerText = "Upload avatar";
      actionButton.classList.remove("mode-remove");
      actionButton.classList.add("mode-upload");
    },
    "remove": function() {
      actionButton.innerText = "Remove avatar";
      actionButton.classList.remove("mode-upload");
      actionButton.classList.add("mode-remove");
    }
  }
  return (modes[mode]) ? modes[mode]() : console.error("unknown mode");
}

function refreshImagePreview() {
  if ( picturePreview.src !== DEFAULT_IMAGE_SRC ) {
    picturePreview.src = DEFAULT_IMAGE_SRC;
  } else {
    if ( fileInput.files && fileInput.files.length > 0 ){
      fileReader.readAsDataURL(fileInput.files[0]);
      fileReader.onload = (e) => {
        picturePreview.src = e.target.result;
        setActionButtonMode("remove");
      }
    }
  }
}

refreshImagePreview();
  </script>
    
</body>
</html>