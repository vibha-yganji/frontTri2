---
layout: base
permalink: /profile_set_up/
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Your website description here">
    <meta name="keywords" content="your, keywords, here">
</head>

<body>

<div class="form_wrapper">
    <div class="form_container">
        <div class="title_container">
            <h2> Profile Set-Up </h2>
        </div>
        <div class="row clearfix">
            <div class="">
                <form class="purple-form">
                    <h2> General Information </h2>

                    <div class="input_field">
                        <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                        <input type="email" name="email" placeholder="Email" required/>
                    </div>

                    <div class="input_field">
                        <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                        <input type="password" name="password" placeholder="Password" required />
                    </div>

                    <div class="input_field">
                        <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                        <input type="password" name="password" placeholder="Re-type Password" required />
                    </div>

                    <div class="">
                        <div class="">
                            <div class="input_field">
                                <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                <input type="text" name="name" placeholder="Preferred Name" />
                            </div>
                        </div>
                        <div class="col_half">
                            <div class="input_field">
                                <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                <input type="text" name="name" placeholder="Username" required />
                            </div>
                        </div>
                    </div>

                    <div class="input_field radio_option">
                        <input type="radio" name="gender" id="male" checked>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female">
                        <label for="female">Female</label>
                    </div>

                    <hr>
                    <h2> Health Information </h2>

                    <div class="input_field select_option">
                        <select>
                            <option>How many cups of water do you drink daily?</option>
                            <option> 1 cup </option>
                            <option> 2 cups </option>
                            <option> 3 cups </option>
                            <option> 4 cups </option>
                            <option> 5 cups </option>
                            <option> 6 cups </option>
                            <option> 7 cups </option>
                            <option> 8 cups </option>
                            <option> 9 cups </option>
                        </select>
                        <div class="select_arrow"></div>
                    </div>

                    <div class="input_field select_option">
                        <select>
                            <option>How many calories do you eat in a given day?</option>
                            <option> 100-200 </option>
                            <option> 200-500</option>
                            <option> 500-1000 </option>
                            <option> 1000-1400 </option>
                            <option> 1400-1900 </option>
                        </select>
                        <div class="select_arrow"></div>
                    </div>

                    <div class="input_field select_option">
                        <select>
                            <option>How many hours of cardiovascular activity do you get in a given week??</option>
                            <option> 0-1 </option>
                            <option> 1-3 </option>
                            <option> 5-7 </option>
                            <option> 8-10 </option>
                            <option> 10+ </option>
                        </select>
                        <div class="select_arrow"></div>
                    </div>

                    <form>

                    <hr>
                    <h2> Profile Picture Selection </h2>
                    <input
                        name="file"
                        type="file"
                        multiple
                        accept="image/webp, image/jpeg, image/png"
                    />
                    <button class="btn">Upload</button>
                    </form>

                    <progress value="0" max="100"></progress>

                    <p>
                        <strong>Uploading status:</strong>
                        <span id="statusMessage"> Nothing's uploaded</span>
                    </p>

                    <ul id="fileListMetadata"></ul>

                    <script>
                        const form = document.querySelector('form');
                        const statusMessage = document.getElementById('statusMessage');
                        const submitButton = document.querySelector('button');
                        const fileInput = document.querySelector('input');
                        const progressBar = document.querySelector('progress');
                        const fileNum = document.getElementById('fileNum');
                        const fileListMetadata = document.getElementById('fileListMetadata');

                        form.addEventListener('submit', handleSubmit);
                        fileInput.addEventListener('change', handleInputChange);

                        function handleSubmit(event) {
                            event.preventDefault();
                            showPendingState();
                            uploadFiles();
                        }

                        function handleInputChange() {
                            resetFormState();
                            try {
                                assertFilesValid(fileInput.files);
                            } catch (err) {
                                updateStatusMessage(err.message);
                                return;
                            }
                            submitButton.disabled = false;
                        }

                        function uploadFiles() {
                            const url = 'https://httpbin.org/post';
                            const method = 'post';
                            const xhr = new XMLHttpRequest();
                            const data = new FormData(form);
                            xhr.upload.addEventListener('progress', (event) => {
                                updateStatusMessage(`⏳ Uploaded ${event.loaded} bytes of ${event.total}`);
                                updateProgressBar(event.loaded / event.total);
                            });

                            xhr.addEventListener('loadend', () => {
                                if (xhr.status === 200) {
                                    updateStatusMessage('✅ Success');
                                    renderFilesMetadata(fileInput.files);
                                }
                                else {
                                    updateStatusMessage('❌ Error');
                                }

                                updateProgressBar(0);
                            });

                            xhr.open(method, url);
                            xhr.send(data);
                        }

                        function updateStatusMessage(text) {
                            statusMessage.textContent = text;
                        }

                        function showPendingState() {
                            submitButton.disabled = true;
                            updateStatusMessage('⏳ Pending...');
                        }

                        function resetFormState() {
                            submitButton.disabled = true;
                            updateStatusMessage(`🤷‍♂ Nothing's uploaded`);

                            fileListMetadata.textContent = '';
                            fileNum.textContent = '0';
                        }

                        function updateProgressBar(value) {
                            const percent = value * 100;
                            progressBar.value = Math.round(percent);
                        }

                        function renderFilesMetadata(fileList) {
                            fileNum.textContent = fileList.length;

                            fileListMetadata.textContent = '';

                            for (const file of fileList) {
                                const name = file.name;
                                const type = file.type;
                                const size = file.size;

                                fileListMetadata.insertAdjacentHTML(
                                    'beforeend',
                                    `
                                        <li>
                                          <p><strong>Name:</strong> ${name}</p>
                                          <p><strong>Type:</
