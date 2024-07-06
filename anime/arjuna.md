
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like Arjuna</title>
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
        <script>const number = "812";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/1294/133834l.jpg" alt="Arjuna">
                <div>
                    <h2 id="title">Arjuna</h2>
                    <p>Drama</p>
                    <p>2001</p>
                    <br>
                    <p>Arjuna follows the story of Juna, a young girl who is destined to become the savior of the planet. After a tragic accident, Juna gains the ability to see the true form of Earth's suffering. Guided by Chris, a mysterious boy, Juna must harness her newfound powers to protect the planet from environmental disasters and otherworldly threats. As she navigates her role as the chosen one, Juna learns the importance of balance between humanity and nature.</p>
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
                                <span style="width: 11%;"></span>
                            </div>
                            <p>11% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/20750l.webp" alt="Blue Submarine No. 6">
                </div>
                <div class="details">
                    <a href="blue-submarine-no.-6"><h3>Blue Submarine No. 6</h3></a>
                    <p>Action</p>
                    <p>1998</p>
                    <br>
                    <p>In a dystopian future where the Earth is covered in water, human civilization is on the brink of collapse due to attacks from mutated sea creatures. The crew of Blue Submarine No. 6, a high-tech submarine, must embark on a dangerous mission to save humanity. As they face treacherous waters and powerful adversaries, they unravel dark secrets about the world they live in. Can they overcome the odds and secure a future for mankind?</p>
                </div>
            </div>

        </section>
    </main>
</body>
</html>
