---
layout: page
title: Cards
permalink: /cards/
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
    @import url("https://unpkg.com/open-props/open-props.min.css");
@import url("https://unpkg.com/open-props/normalize.min.css");
@font-face {
  font-family: "Geist Sans";
  src: url("https://assets.codepen.io/605876/GeistVF.ttf") format("truetype");
}
*,
*:after,
*:before {
	box-sizing: border-box;
}

body {
	display: grid;
	place-items: center;
	min-height: 100vh;
	font-family:  'Geist Sans', sans-serif, system-ui;
  width: 100vw;
  overflow-x: hidden;
  font-weight: 80;
  background: hsl(0 0% 8%);
}

ul {
	--width: 100vw;
	width: var(--width);
	height: 100vh;
	padding: 0;
	margin: 0;
	list-style-type: none;
	display: grid;
	place-items: center;
	grid-auto-flow: column;
	gap: 1rem;
	overflow: auto;
	scroll-snap-type: x mandatory;
	padding: 0 calc((var(--width, 80vw) * 0.5) - (var(--card-size, 300px) * 0.5));
}

li {
	scroll-snap-align: center;
}

article {
	width: var(--card-size, 300px);
	aspect-ratio: 3 / 4;
	background: var(--surface-4);
	position: relative;
	overflow: hidden;
  border-radius: var(--radius-3);
  box-shadow:
    var(--shadow-5),
    0 1px inset white;
}

article::before {
  content: "";
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 2;
  border-radius: var(--radius-3);
  border: 6px solid hsl(0 0% 100% / 0.1);
}

/* .backdrop { */
article::after{
  content: "";
  z-index: -1;
	position: absolute;
	inset: 0;
  filter: grayscale(0.5);
	background-image: var(--bg);
	background-size: 200% 200%;
	background-position: 0% 50%;
}

.word {
	clip-path: inset(0 0 0 0);
}

span > span {
	display: inline-block;
}

/* char:nth-of-type(1) {
	animation-timeline: --item;
	animation: move-up both, move-out both;
	animation-delay: cover calc(50% - 300px), cover 50%;
	animation-end-delay: cover 50%, cover 70%;
}
.char:nth-of-type(2) {
	animation-timeline: --item;
	animation: move-up both, move-out both;
	animation-delay: cover 31%, cover 51%;
	animation-end-delay: cover 50%, cover 71%;
}
.char:nth-of-type(3) {
	animation-timeline: --item;
	animation: move-up both, move-out both;
	animation-delay: cover 32%, cover 52%;
	animation-end-delay: cover 50%, cover 72%;
}
.char:nth-of-type(4) {
	animation-timeline: --item;
	animation: move-up both, move-out both;
	animation-delay: cover 33%, cover 53%;
	animation-end-delay: cover 50%, cover 73%;
}
.char:nth-of-type(5) {
	animation-timeline: --item;
	animation: move-up both, move-out both;
	animation-delay: cover 34%, cover 54%;
	animation-end-delay: cover 50%, cover 74%;
}
.char:nth-of-type(6) {
	animation-timeline: --item;
	animation: move-up both, move-out both;
	animation-delay: cover 35%, cover 55%;
	animation-end-delay: cover 50%, cover 75%;
}
.char:nth-of-type(7) {
	animation-timeline: --item;
	animation: move-up both, move-out both;
	animation-delay: cover 36%, cover 56%;
	animation-end-delay: cover 50%, cover 76%;
} */

/* @keyframes move-up {
	to {
		translate: 0 0;
	}
}
@keyframes move-out {
	to {
		translate: 0 -100%;
	}
} */



a > span {
	background: hsl(0 0% 0% / 0.4);
	position: absolute;
	inset: 0;
	display: grid;
	place-items: center;
}

span {
	font-size: 2.5rem;
	font-weight: 80;
	letter-spacing: 0.5rem;
	text-transform: uppercase;
	color: var(--gray-0);
}

.sr-only {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border-width: 0;
}

@supports (animation-timeline: scroll()) {
  @media (prefers-reduced-motion: no-preference) {
    span > span {
      translate: 0 100%;
      animation: move-on-up both ease-in-out;
      animation-timeline: --item;
      animation-range: cover 40% cover 60%;
    }
    article {
      scale: 0.8;
      filter: grayscale(1);
      animation: colorify, scalify;
      animation-fill-mode: both;
      animation-timing-function: ease-in-out;
      view-timeline: --item inline;
      animation-timeline: view(inline);
      animation-range: cover 40% cover 60%;
    }
    article::after {
      animation: shift-bg both linear;
      animation-timeline: --item;
      animation-range: cover 40% cover 60%, contain;
    }
    @keyframes move-on-up {
      0% {
        translate: 0 100%;
      }
      50% {
        translate: 0 0;
      }
      100% {
        translate: 0 -100%;
      }
    }
    @keyframes colorify {
      50% {
        filter: grayscale(0);
      }
    }    
    @keyframes scalify {
      50% {
        scale: 1;
        background-position: 100% 100%;
      }
    }
    @keyframes shift-bg {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }
  }
}
    </style>
</head>
<body>

<main>
  <ul>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=0);">
        <a href="#">
          <span><span class="word"><span>EXPLORE</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=1);">
        <a href="#">
          <span><span class="word"><span>MOVE</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=2);">
        <a href="#">
          <span><span class="word"><span>BREATHE</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=3);">
        <a href="#">
          <span><span class="word"><span>LOVE</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=4);">
        <a href="#">
          <span><span class="word"><span>BUILD</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=5);">
        <a href="#">
          <span><span class="word"><span>RELAX</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=6);">
        <a href="#">
          <span><span class="word"><span>CREATE</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=7);">
        <a href="#">
          <span><span class="word"><span>EXPAND</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=8);">
        <a href="#">
          <span><span class="word"><span>TRAVEL</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=9);">
        <a href="#">
          <span><span class="word"><span>GROW</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=10);">
        <a href="#">
          <span><span class="word"><span>BELONG</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=11);">
        <a href="#">
          <span><span class="word"><span>COLLECT</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=12);">
        <a href="#">
          <span><span class="word"><span>BECOME</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=13);">
        <a href="#">
          <span><span class="word"><span>MAKE</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=14);">
        <a href="#">
          <span><span class="word"><span>HELP</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=15);">
        <a href="#">
          <span><span class="word"><span>ARISE</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=16);">
        <a href="#">
          <span><span class="word"><span>ADAPT</span></span></span>
        </a>
      </article>
    </li>
    <li>
      <article style="--bg: url(https\:\/\/picsum\.photos\/600\/800\?random\=17);">
        <a href="#">
          <span><span class="word"><span>LEARN</span></span></span>
        </a>
      </article>
    </li>
  </ul>
</main>
    
</body>
</html>