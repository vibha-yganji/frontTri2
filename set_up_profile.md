---
layout: page
title: Set Up Profile
permalink: /set_up_profile/
---

!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" type="text/css" href="style.css">
   <title>Developer's Survey Form</title>

   <style>
    html{
    font-size: 16px;
}

body{
    margin: 0;
}

.container{
  width: 100%;
  margin: 3.2rem auto 0 auto;
}

@media(min-width: 576px){
  .container{
    max-width: 540px;
  }
}

@media(min-width: 768px){
  .container{
    max-width: 720px
  }
}

header{
    text-align: center;
    margin-bottom: 1.5rem;
}

h1{
  font-weight: 400;
}

#description{
  font-weight: 200;
  font-style: italic;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5)

  
}


#survey-form{
   background: rgb(191, 103, 85);
   padding: 2.3rem 0.5rem;
   border-radius: 0.3rem;
}

.form-input{
   margin: 0 2.5rem 1.2rem 2rem;
}

.form-input-size{
   display: block;
   width: 100%;
   height: 1.5rem;
   padding: 0.3rem 0.4rem;
   border-radius: 0.2rem;
   outline: 0;
   border-style: none;
   margin-top: 0.4rem;  
}

p{
 font-size: 1.12rem;
}

#radio-btn,
#check-box {
 margin-right: 0.5rem;
 min-height: 1.2rem;
 min-width: 1.2rem;
}

label {
 display: flex;
 align-items: center;
 font-size: 1.125rem;
 margin-bottom: 0.5rem;
}


textarea{
 width: 100%;
 min-height: 6rem;
 resize: vertical;
 padding: 0.5rem 0 0 0.5rem;
}

#submit{
 width: 100%;
 padding: 0.8rem;
 background: rgb(7, 173, 7);
 color: white;
 border-radius: 0.2rem;
 cursor: pointer;
 border: none;
}

.upload-container {
      text-align: center;
    }

    .upload-button {
      cursor: pointer;
      padding: 10px 15px;
      background-color: rgb(163, 67, 125);
      color: black;
      border-radius: 5px;
      font-size: 16px;
    }

    #upload-input {
      display: none;
    }

    #preview {
      max-width: 300px;
      margin-top: 20px;
    }

    #general, #health {
    border: 1px solid black;
    width: 300px;
    height: 200px;
}

#panel2 {
    display: none;
}

    </style>
<script type="text/javascript" src="jquery.2.1.0.js">
    $('#btnNext').click(function() {
    $('#general').hide();
    $('#health').show();

});
</script>
</head>
<body>
   <div class="container">
       <header>
           <h1 id='title'> Profile Set-Up</h1>
       </header>
       <form id='survey-form' method = "post>
       <div id = 'general'>
           <div class='form-input'>
               <label id='name-label'>Name</label>
               <input type='text' id='name' placeholder='Enter your name' class='form-input-size' required />
           </div>
           <div class='form-input'>
               <label id='email-label'>Email</label>
               <input type='email' id='email' placeholder='Enter your email' class='form-input-size' required />
           </div>
           <div class='form-input'>
               <label id='number-label'>Age
               </label>
               <input type='number' id='number' placeholder='25' min='0' max='80' class='form-input-size' />
           </div>
           <div class='form-input'>
               <p>Which option best describes your current role?</p>
               <select id='dropdown' class='form-input-size' required>
                   <option disabled selected value> Country of Residence</option>
                   <option value='Student'>Student</option>
                   <option value='USA'> USA </option>
                   <option value='Germany'> Germany</option>
                   <option value='Prefer not to say'>Prefer not to answer</option>
                   <option value='Other'>Other</option>
               </select>
           </div>
           <div class='form-input'>
               <p>Would you be comfortable sharing your anonymous health information for crowdsourcing?</p>
               <input type='radio' name='answer' id='radio-btn' value='Definately' checked /> Definately    </br>
               <input type='radio' name='answer' id='radio-btn' value='Maybe' />Maybe </br>
               <input type='radio' name='answer' id='radio-btn' value='Not sure' />No</br>
           </div>
           <button type= "button" id="btnNext">Next</button>
</div>

<div id = 'health'>
           <div class='form-input'>
               <p>How much water (in oz) do you drink daily?
                   <span>(Check all that apply)</span>
               </p>
               <label><input type='checkbox' id='check-box' value='Ruby on Rails'>Ruby on Rails</label>
               <label><input type='checkbox' id='check-box' value='JavaScript'>JavaScript</label>
               <label><input type='checkbox' id='check-box' value='React'>React</label>
               <label><input type='checkbox' id='check-box' value='Python'>Python</label>
               <label><input type='checkbox' id='check-box' value='Java'>Java</label>
               <label><input type='checkbox' id='check-box' value='PHP'>PHP</label>
               <label><input type='checkbox' id='check-box' value='Angular'>Angular</label>
               <label><input type='checkbox' id='check-box' value='Vue'>Vue</label>
               <label><input type='checkbox' id='check-box' value='Swift'>Swift</label>
               <label><input type='checkbox' id='check-box' value='HTML'>HTML</label>
               <label><input type='checkbox' id='check-box' value='CSS'>CSS</label>
               <label><input type='checkbox' id='check-box' value='Other'>Other</label>
           </div>

           <div class="upload-container">
    <input type="file" id="upload-input" accept="image/*">
    <label for="upload-input" class="upload-button">Upload Profile Image</label>
    <img id="preview" src="#" alt="Preview">
  </div>
  </div>

  <script>
    document.getElementById('upload-input').addEventListener('change', function() {
      const fileInput = this;
      const previewImg = document.getElementById('preview');

      if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
          previewImg.src = e.target.result;
        };

        reader.readAsDataURL(fileInput.files[0]);
      }
    });
  </script>

           

           <div class='form-input'>
               <p>Any comments or suggestions to a new Web Developers?</p>
               <textarea type='text' placeholder='Enter your comment here...'></textarea>
           </div>

           <div class='form-input'>
               <button type='submit' id='submit'>Submit</button>
           </div>

           
       </form>
   </div>

   

</body>
</html>

