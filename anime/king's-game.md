
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like King's Game</title>
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
        <script>const number = "36027";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/3/88190l.webp" alt="King's Game">
                <div>
                    <h2 id="title">King's Game</h2>
                    <p>Mystery</p>
                    <p>2017</p>
                    <br>
                    <p>In the anime King's Game, high school students receive mysterious commands on their phones from a virtual king. They are forced to complete these tasks or face deadly consequences. As the rules of the game become increasingly sadistic and the body count rises, the students must band together to uncover the truth behind the King's Game and find a way to survive before it's too late.</p>
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
                                <span style="width: 16%;"></span>
                            </div>
                            <p>16% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/13/76576l.jpg" alt="Lance N' Masques">
                </div>
                <div class="details">
                    <a href="lance-n%27-masques"><h3>Lance N' Masques</h3></a>
                    <p>Other Genre</p>
                    <p>2015</p>
                    <br>
                    <p>In Lance N' Masques, a young boy named Yotaro Hanabusa becomes involved in a secret society of masked knights who fight to protect justice and maintain peace. Yotaro must navigate the dangerous world of masked knights as he learns about their history and traditions. As he becomes more involved, he uncovers dark secrets and faces powerful enemies who threaten everything he holds dear.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">2</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 6%;"></span>
                            </div>
                            <p>6% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/11/79757l.jpg" alt="Big Order (TV)">
                </div>
                <div class="details">
                    <a href="big-order-%28tv%29"><h3>Big Order (TV)</h3></a>
                    <p>Action</p>
                    <p>2016</p>
                    <br>
                    <p>In a world where individuals possess unique powers known as Orders, a young man named Eiji Hoshimiya holds the power to make his orders a reality on a large scale. With the ability to potentially reshape the world as he sees fit, Eiji finds himself embroiled in a dangerous conflict involving other Order users as he struggles to uncover the truth behind a devastating incident from his past. As he navigates complex relationships and confronts formidable foes, Eiji must come to terms with the consequences of his power.</p>
                </div>
            </div>

        </section>
    </main>
</body>
</html>
