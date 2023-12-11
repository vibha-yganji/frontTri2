---
layout: page
title: Steganography
permalink: /Steganography/
---
<style>
    .image-container {
        display: flex;
        justify-content: space-between;
        margin: 20px;
    }

    .image-container img {
        width: 48%;
        max-width: 100%;
        height: auto;
    }
</style>

# What's the difference between these 2 pictures?

<div class="image-container">
    <img src="{{site.baseurl}}/images/broccoli_thouse.png" alt="Original">
    <img src="{{site.baseurl}}/images/broccoli_thouse_lsb_embeded.png" alt="Embeded">
</div>

# Why can't you see a difference?

- # Pixel Values:
    In the steganographic image, the pixel values may have been subtly altered to embed the hidden information. These changes might be minimal to avoid detection but can be identified through careful analysis of the pixel values.
    
- # File Size:

    The file size of the images may differ. The steganographic image might be slightly larger due to the additional data encoded within it.

- # Histogram Analysis:

    Histograms represent the distribution of pixel values in an image. A careful analysis of histograms may reveal variations between the two images, especially if steganography has been used.

- # Statistical Analysis:

    Advanced statistical techniques can be applied to analyze patterns and correlations within the image data. Steganographic techniques may introduce statistical anomalies that can be detected through mathematical analysis.

- # Noise Patterns:

    Steganographic techniques might introduce subtle changes in the noise patterns of an image. Noise refers to random variations in pixel values, and any alterations made during steganography could affect these patterns.

- # Visual Inspection:

    While the human eye may not easily detect changes, detailed visual inspection, zooming in on specific areas, and comparing pixel values can reveal the differences.

- # Specialized Tools:

    Specialized steganalysis tools can be used to analyze images for hidden information. These tools employ various algorithms to detect patterns associated with steganography.



# What is Steganography
The primary purpose of steganography is to conceal the existence of a secret message or information within a seemingly innocuous carrier medium, such as an image, audio file, or text. Unlike encryption, which focuses on securing the content of a message, steganography aims to hide the fact that a message is being communicated in the first place.
- This can serve various purposes, including:
    - Covert Communication
    - Security and Espionage
    - Digital Watermarking
    - Anti-Forensics
    - Pranks and Puzzles


# Why you should use a .png over a .jpg or .jpeg for encoding and decoding

- # PNG:

    - # Lossless Compression:

        PNG uses lossless compression, which means that it retains all the original image data without any loss of quality. This can be advantageous for steganography, as there is no loss of information during compression.

    - # Transparency Support:

        PNG supports transparency, allowing for an alpha channel. This additional channel can be utilized for steganographic purposes, potentially providing extra capacity for hiding information.

    - # No Artifacts:

        PNG compression does not introduce compression artifacts, making it suitable for situations where preserving the exact pixel values is crucial.

- # JPEG:

    - # Lossy Compression:

        JPEG uses lossy compression, which results in smaller file sizes but may introduce compression artifacts. While the loss of some image data occurs, it is often visually imperceptible at higher quality settings.

    - # Widespread Compatibility:

        JPEG is a widely supported format, and many devices and software applications can open and display JPEG images. This can be an advantage if the steganographically modified image needs to be accessible across different platforms.

    - # Smaller File Sizes:

        JPEG typically produces smaller file sizes compared to PNG, which can be useful when dealing with limited storage or bandwidth constraints.




# Code Used

## Encoding
<center>
    <img src="{{site.baseurl}}/images/encode.png" width="900" height=120>
</center>
- python encode.py './images/broccoli_thouse.png' 'skirt'
- code being enabled in screenshot below
<pre>
import sys
import math
from os import path

import cv2 #pip install opencv-python
import numpy as np

# Embed secret in the n least significant bit.
# Lower n make picture less loss but lesser storage capacity.
BITS = 2

HIGH_BITS = 256 - (1 << BITS)
LOW_BITS = (1 << BITS) - 1
BYTES_PER_BYTE = math.ceil(8 / BITS)
FLAG = '%'


def insert(img_path, msg):
    img = cv2.imread(img_path, cv2.IMREAD_ANYCOLOR)
    # Save origin shape to restore image
    ori_shape = img.shape
    print(ori_shape)
    max_bytes = ori_shape[0] * ori_shape[1] // BYTES_PER_BYTE
    # Encode message with length
    msg = '{}{}{}'.format(len(msg), FLAG, msg)
    assert max_bytes >= len(
        msg), "Message greater than capacity:{}".format(max_bytes)
    data = np.reshape(img, -1)
    for (idx, val) in enumerate(msg):
        encode(data[idx*BYTES_PER_BYTE: (idx+1) * BYTES_PER_BYTE], val)

    img = np.reshape(data, ori_shape)
    filename, _ = path.splitext(img_path)
    filename += '_lsb_embeded' + ".png"
    cv2.imwrite(filename, img)
    return filename

def encode(block, data):
    # returns the Unicode code from a given character
    data = ord(data)
    for idx in range(len(block)):
        block[idx] &= HIGH_BITS
        block[idx] |= (data >> (BITS * idx)) & LOW_BITS

if __name__ == '__main__':

    if len(sys.argv) == 3:
        img_path = sys.argv[1]
        msg = sys.argv[2]
    else:
        img_path = "./images/broccoli_thouse.png"
        msg = 'We got our man. Leave from the shipping port, gate B by Friday evening.'
    
    res_path = insert(img_path, msg)
    print("Successfully embedded.")
</pre>
- This code allows the command to run and chooses the picture file and then the text that will be embeded into the image.
    - The message written in the code doesn't matter and can be changed when running the command with whatever word.
        - word written in example is 'yellow' and can be changed to 'green' for example



<!-- To break up the 2 since they're so long and big that it's hard to navigate while changing things around in .md-->



## Decoding
<center>
    <img src="{{site.baseurl}}/images/decode.png" width="900" height=120>
</center>
- python decode.py './images/broccoli_thouse_lsb_embeded.png'
- code being enabled in screenshot below
<pre>
import sys

import cv2 #pip install opencv-python
import math
import numpy as np

# Embed secret in the n least significant bit.
# Lower n make picture less loss but lesser storage capacity.
BITS = 2

LOW_BITS = (1 << BITS) - 1
BYTES_PER_BYTE = math.ceil(8 / BITS)
FLAG = '%'


def extract(path):
    img = cv2.imread(path, cv2.IMREAD_ANYCOLOR)
    data = np.reshape(img, -1)
    total = data.shape[0]
    res = ''
    idx = 0
    # Decode message length
    while idx < total // BYTES_PER_BYTE:
        ch = decode(data[idx*BYTES_PER_BYTE: (idx+1)*BYTES_PER_BYTE])
        idx += 1
        if ch == FLAG:
            break
        res += ch
    end = int(res) + idx
    assert end <= total // BYTES_PER_BYTE, "Input image isn't correct."

    secret = ''
    while idx < end:
        secret += decode(data[idx*BYTES_PER_BYTE: (idx+1)*BYTES_PER_BYTE])
        idx += 1
        # print(secret)
    return secret


def decode(block):
    val = 0
    for idx in range(len(block)):
        val |= (block[idx] & LOW_BITS) << (idx * BITS)
    return chr(val)


if __name__ == '__main__':
    if len(sys.argv) == 2:
        img_path = sys.argv[1]
    else:
        img_path = "./images/broccoli_thouse_lsb_embeded.png"
    
    msg = extract(img_path)
    print(msg)
</pre>
- This code allows the command to run and uses the file image as a reference and then decodes the message within.




# Conclusion
Steganography involves concealing a secret message within another message, and one method to achieve this is through binary conversion. Picture a regular text message where each character is represented by a binary code of 1s and 0s. In steganography, you subtly modify the binary representation by, for instance, altering the least significant bits of the characters to encode a hidden message. To an observer unaware of the encoding, the modified binary appears as standard text, making steganography akin to hiding information in plain sight by discreetly manipulating the binary structure of visible data.


# Source
<a href="https://www.youtube.com/watch?app=desktop&v=ZFGlJGwaN2w">Steganography Explanation and Code Examples (Least Significant Bit) by Samuel Chan</a>