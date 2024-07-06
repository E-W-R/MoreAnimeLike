
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like Yo-kai Watch</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link id="stylesheet" rel="stylesheet" href="page.css">
    <link rel="icon" href="../favicon.png" type="image/png">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
    <script src="page.js"></script>
</head>
<body>
    <header>
        <script>const number = "19157";</script>
        <a href="../index" class="home-icon"><i class="fas fa-home"></i></a>
        <a href="javascript:void(0);" class="home-icon", id="randomPageLink"><i class="fas fa-random"></i></a>
        <div class="header-content">
            <h1>Find more anime like: </h1>
            <div class="search-container">
                <input type="text" id="searchBox" class="searchBox" placeholder="Search">
                <div id="autocomplete-list" class="autocomplete-items"></div>
            </div>
        </div>
        <label class="switch">
            <input type="checkbox" id="themeToggle">
            <span class="slider round"></span>
        </label>
    </header>
    <p id="tagline"><a href="../about">Discover more anime like your favorites based on the experiences of over one hundred thousand others.</a></p>
    <div class="black-bar"></div>
    <main>
        <section id="main-anime">
            <div class="anime-details">
                <img src="https://cdn.myanimelist.net/images/anime/6/58137l.jpg" alt="Yo-kai Watch">
                <div>
                    <h2 id="title">Yo-kai Watch</h2>
                    <p>Comedy</p>
                    <p>2014</p>
                    <br>
                    <p>When young Nate releases a mischievous Yo-kai from a mysterious capsule, he gains a special watch that allows him to see and befriend various Yo-kai. Together, they solve problems and mysteries caused by other mischievous Yo-kai, while also dealing with the daily struggles of school and friendships. Join Nate and his hilarious Yo-kai friends on their wacky adventures in this fun and heartwarming supernatural comedy anime.</p>
                </div>
            </div>
            <canvas id="myPolarAreaChart" width="40px" height="40px"></canvas>
        </section>
        <br>
        <section id="recommendations">

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">1</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 18%;"></span>
                            </div>
                            <p>18% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/12/83709l.jpg" alt="Masamune-kun's Revenge">
                </div>
                <div class="details">
                    <a href="masamune-kun%27s-revenge"><h3>Masamune-kun's Revenge</h3></a>
                    <p>Romance</p>
                    <p>2017</p>
                    <br>
                    <p>After being rejected by a girl named Aki Adagaki in the past, Masamune Makabe undergoes a major transformation and transfers to her school with the goal of making her fall for him. Masamune plans to break her heart as payback for her rejection. However, as he gets to know Aki better, he begins to question his motives and develops conflicting feelings towards her. The series follows their complicated relationship and the challenges they face.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">2</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 10%;"></span>
                            </div>
                            <p>10% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1218/135107l.webp" alt="Mashle: Magic and Muscles">
                </div>
                <div class="details">
                    <a href="mashle%3A-magic-and-muscles"><h3>Mashle: Magic and Muscles</h3></a>
                    <p>Action</p>
                    <p>2023</p>
                    <br>
                    <p>In a world where magic is everything, Mash Vandead is born without the ability to use it. Despite this, he trains his body to the peak of human ability. When he enrolls in the prestigious Easton Magic Academy, Mash must rely on his incredible strength to survive the challenges and dangers that come his way. Through his unmatched physical prowess and unwavering determination, Mash begins to unravel the mysteries of this magical world.</p>
                </div>
            </div>

        </section>
    </main>
</body>
</html>
