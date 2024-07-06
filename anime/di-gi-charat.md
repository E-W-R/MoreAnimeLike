
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like Di Gi Charat</title>
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
        <script>const number = "293";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/6/18815l.jpg" alt="Di Gi Charat">
                <div>
                    <h2 id="title">Di Gi Charat</h2>
                    <p>Comedy</p>
                    <p>1999</p>
                    <br>
                    <p>Di Gi Charat follows the mischievous alien princess named Dejiko who travels to Earth with her companions to become a top idol. Despite their best efforts, they struggle to achieve fame and fortune, often getting into hilarious situations along the way. With a mix of comedy, adventure, and a touch of friendship, the series showcases Dejiko's journey to stardom while adapting to life on Earth.</p>
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
                                <span style="width: 45%;"></span>
                            </div>
                            <p>45% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/2/84598l.jpg" alt="Alice & Zoroku">
                </div>
                <div class="details">
                    <a href="alice-%26-zoroku"><h3>Alice & Zoroku</h3></a>
                    <p>Mystery</p>
                    <p>2017</p>
                    <br>
                    <p>Alice & Zoroku follows a mysterious young girl named Alice with powerful psychic abilities who escapes from a research facility. She crosses paths with an elderly man named Zoroku, who takes her in despite his skepticism of her powers. As they bond, Alice discovers the true meaning of family and friendship while navigating the dangers posed by those who seek to exploit her abilities. Together, they embark on a heartwarming journey of self-discovery and mutual understanding.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">2</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 28%;"></span>
                            </div>
                            <p>28% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1732/96096l.jpg" alt="Cencoroll">
                </div>
                <div class="details">
                    <a href="cencoroll"><h3>Cencoroll</h3></a>
                    <p>Action</p>
                    <p>2009</p>
                    <br>
                    <p>In Cencoroll, a high school student named Tetsu encounters a mysterious shape-shifting creature named Cenco. As they develop a unique bond, they find themselves drawn into a series of unexpected events involving other creatures like Cenco. Tetsu must navigate these challenges while uncovering the truth behind Cenco's existence and the secrets of their town. Action-packed and full of unexpected twists, Cencoroll delves into the thrilling adventures of Tetsu and Cenco as they face unknown dangers together.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">3</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 13%;"></span>
                            </div>
                            <p>13% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/4/60699l.webp" alt="Aiura">
                </div>
                <div class="details">
                    <a href="aiura"><h3>Aiura</h3></a>
                    <p>Other Genre</p>
                    <p>2013</p>
                    <br>
                    <p>Aiura follows the everyday lives of three high school girls: the energetic and ambitious Kanaka, the calm and collected Saki, and the playful and slightly airheaded Ayuko. As they navigate through school, summer break, and ordinary activities, the trio experiences amusing moments and deepens their friendship. With its light-hearted and comedic tone, Aiura offers a glimpse into the charming interactions and misadventures of these endearing characters.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">4</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 13%;"></span>
                            </div>
                            <p>13% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/11/2769l.jpg" alt="Gunsmith Cats">
                </div>
                <div class="details">
                    <a href="gunsmith-cats"><h3>Gunsmith Cats</h3></a>
                    <p>Action</p>
                    <p>1995</p>
                    <br>
                    <p>Gunsmith Cats follows the adventures of two young women, Rally Vincent and Minnie May Hopkins, who run a gun shop in Chicago by day and work as bounty hunters by night. With their expert marksmanship and combat skills, they take on dangerous missions to catch criminals and bring them to justice. As they navigate the world of illegal arms dealers and high-octane car chases, Rally and Minnie May form an unlikely but formidable duo in the world of law enforcement.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">5</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 10%;"></span>
                            </div>
                            <p>10% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1799/114806l.webp" alt="Ground Control to Psychoelectric Girl">
                </div>
                <div class="details">
                    <a href="ground-control-to-psychoelectric-girl"><h3>Ground Control to Psychoelectric Girl</h3></a>
                    <p>Comedy</p>
                    <p>2011</p>
                    <br>
                    <p>After a dull high school boy discovers a girl claiming to be an alien living in his house, his mundane life takes a bizarre turn. As he gets to know her eccentricities, he is thrust into a world of peculiar occurrences and inexplicable events. Together, they navigate the complexities of friendship, family, and the blurred lines between reality and imagination in this whimsical and heartwarming slice-of-life anime.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">6</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 8%;"></span>
                            </div>
                            <p>8% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/75788l.jpg" alt="The "Hentai" Prince and the Stony Cat.">
                </div>
                <div class="details">
                    <a href="the-%22hentai%22-prince-and-the-stony-cat."><h3>The "Hentai" Prince and the Stony Cat.</h3></a>
                    <p>Romance</p>
                    <p>2013</p>
                    <br>
                    <p>Youto Yokodera desires to be more honest with his feelings. After encountering a strange statue that promises to grant his wish, he finds himself in a series of comedic and unpredictable situations involving a mysterious girl with a similar request. As their wishes intertwine, Youto navigates the unexpected consequences of having his inner thoughts and desires exposed to others, all while trying to uncover the truth behind the statue's powers.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">7</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 6%;"></span>
                            </div>
                            <p>6% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1893/133786l.jpg" alt="Hidamari Sketch">
                </div>
                <div class="details">
                    <a href="hidamari-sketch"><h3>Hidamari Sketch</h3></a>
                    <p>Other Genre</p>
                    <p>2007</p>
                    <br>
                    <p>Hidamari Sketch follows the daily lives of art students living in the Hidamari Apartments. The series explores their friendships, struggles, and growth as they navigate the ups and downs of school and everyday life. With a focus on creativity and self-discovery, the characters find inspiration and support in each other as they pursue their dreams in the world of art and beyond.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">8</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 5%;"></span>
                            </div>
                            <p>5% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/12/21741l.webp" alt="The Garden of Sinners Chapter 1: Overlooking View">
                </div>
                <div class="details">
                    <a href="the-garden-of-sinners-chapter-1%3A-overlooking-view"><h3>The Garden of Sinners Chapter 1: Overlooking View</h3></a>
                    <p>Mystery</p>
                    <p>2007</p>
                    <br>
                    <p>In The Garden of Sinners Chapter 1: Overlooking View, Mikiya investigates a series of mysterious suicides happening in the city. He meets Shiki, a girl with a unique ability to see the death of things as lines. Together, they uncover a dark connection between the victims and a paranormal presence. As they delve deeper into the investigation, they become entangled in a web of secrets and supernatural forces that threaten their lives.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">9</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 5%;"></span>
                            </div>
                            <p>5% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1538/95686l.webp" alt="Dagashi Kashi">
                </div>
                <div class="details">
                    <a href="dagashi-kashi"><h3>Dagashi Kashi</h3></a>
                    <p>Comedy</p>
                    <p>2016</p>
                    <br>
                    <p>In Dagashi Kashi, Kokonotsu Shikada is trying to decide whether to take over his family's dagashi (Japanese snack) store. His peaceful life is disrupted when a quirky girl named Hotaru Shidare appears, determined to recruit his father to work at her family's big candy company. To convince Kokonotsu's father, she challenges Kokonotsu to learn more about the world of dagashi. As Kokonotsu learns about different snacks, he also grows closer to Hotaru.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">10</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 5%;"></span>
                            </div>
                            <p>5% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/11/47677l.webp" alt="Blood Lad">
                </div>
                <div class="details">
                    <a href="blood-lad"><h3>Blood Lad</h3></a>
                    <p>Action</p>
                    <p>2013</p>
                    <br>
                    <p>Blood Lad follows Staz, a powerful vampire and leader of the Eastern District of Demon World. His world turns upside down when a human girl named Fuyumi accidentally wanders into Demon World and dies. Determined to bring her back to life, Staz embarks on a comedic and action-packed adventure, with help from his friends, to find a way to resurrect Fuyumi. Along the way, they face various challenges and encounter other supernatural beings.</p>
                </div>
            </div>

        </section>
    </main>
</body>
</html>
