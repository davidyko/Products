
<h1>MAZE Mercantile Reviews Service</h1>

MAZE Mercantile is an e-commerce clothing retailer. For this project I inherited front-end legacy code and built out an optimized back-end that could handle high web traffic. I worked with two other teammates, each of us focusing on a different microservice; I focused on the Product (product description) service.

<h2>Achievements and Optimizations</h2>
<ul>
  <li>Seeded a PostgreSQL database with over 100 million records.</li>
  <li>Optimized PostgreSQL query times by 99% through indexing.</li>
  <li>Exceeded goal of 1,000 rps on EC2 instance exponentially: 15,172 average rps (stretch goal: 10k rps).</li>
  <li>Experienced 425 ms average latency while aiming for under 2000 ms.</li>
</ul>

<h2>New Relic Stats Screenshot</h2>
![](file:///home/dk/Pictures/ScreenshotGHProducts.jpg)

<h2>Technologies Used</h2>
<ul>
  <li>React</li>
  <li>Node</li>
  <li>Express</li>
  <li>PostgreSQL</li>
  <li>AWS</li>
  <li>Artillery.io</li>
  <li>Loader.io</li>
  <li>New Relic</li>
</ul>

<h2>Usage</h2>
To run this repo, you will need to install dependencies and run appropriate scripts.

<h2>Requirements</h2>
<ul>
  <li>Node 6.13.0</li>
  <li>npm</li>
  <li>PostgreSQL</li>
</ul>

<h2>Development</h2>
Executing the code below will install dependencies, seed the database, start the server, and start webpack. Examine the package.json file for additional scripts.

    npm install
    npm start
