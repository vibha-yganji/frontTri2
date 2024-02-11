---
layout: base
title: Profile Creation
permalink: /Profile/
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
            <h2> Profile</h2>
        </div>
        <div class="row clearfix">
            <div class="">
                <form class="purple-form">
                    <h2> General Information </h2>
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
                </form> <!-- Closing form tag added -->
            </div>
        </div>
    </div>
</div>