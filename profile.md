---
layout: base
title: profile
permalink: /profile/
---
<html>
    <div class="purple-form">
        <h2>Exercise Profiles</h2>
        <label for="profileSelect">Select Profile:</label>
        <select id="profileSelect" onchange="updateProfile()">
            <option value="profile1">Profile 1</option>
            <option value="profile2">Profile 2</option>
            <option value="profile3">Profile 3</option>
            <option value="profile4">Profile 4</option>
            <option value="profile5">Profile 5</option>
        </select>
    </div>
    <div class="profileOption" id="profile1">
        ________
        |      |
        |      O
        |     /|\\
        |     / \\
        |_________
    </div>
    <div class="profileOption" id="profile2">
        \\    O
         \\   |\\
          \\  / \\
           \\/___\\
    </div>
    <div class="profileOption" id="profile3">
        __
        ( o>
        /)__)
        - \\ \\
           / /
    </div>
    <div class="profileOption" id="profile4">
        +----+
        |o o |
        | \\  |
        |  | |  
        +-----+
    </div>
    <div class="profileOption" id="profile5">
        \\_o< 
        | \\ 
        <_/ 
    </div>
    <div id="selectedAscii"></div>
    <div id="profileAscii"></div>
    <script>
    
</html>
