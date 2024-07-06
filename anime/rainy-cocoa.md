
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like Rainy Cocoa</title>
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
        <script>const number = "28981";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/1957/111714l.jpg" alt="Rainy Cocoa">
                <div>
                    <h2 id="title">Rainy Cocoa</h2>
                    <p>Comedy</p>
                    <p>2015</p>
                    <br>
                    <p>Rainy Cocoa follows the story of a young college student named Aoi Tokura who starts working at his family's café, Rainy Color. Aoi meets various charming and quirky customers, including his childhood friend Keiichi Iwase. Together, they navigate the ups and downs of running a café and forming new friendships. The series focuses on Aoi's experiences and interactions with the eclectic mix of characters who frequent Rainy Color.</p>
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
                                <span style="width: 93%;"></span>
                            </div>
                            <p>93% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1429/98887l.jpg" alt="Ame-iro Cocoa: Side G">
                </div>
                <div class="details">
                    <a href="ame-iro-cocoa%3A-side-g"><h3>Ame-iro Cocoa: Side G</h3></a>
                    <p>Comedy</p>
                    <p>2019</p>
                    <br>
                    <p>Ame-iro Cocoa: Side G follows Tokura, a high school student who starts working at the Rainy Color café as a part-timer. Alongside his friends, he navigates the ups and downs of working in the café, dealing with various customers and challenges that come their way. As they serve delicious coffee and desserts, they form new friendships and learn valuable lessons about life and hard work.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">2</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1033/116744l.jpg" alt="Alice or Alice">
                </div>
                <div class="details">
                    <a href="alice-or-alice"><h3>Alice or Alice</h3></a>
                    <p>Other Genre</p>
                    <p>2018</p>
                    <br>
                    <p>Alice or Alice follows the daily lives of twin sisters Alice and Rise as they navigate their close bond and sisterly antics. Despite being identical in appearance, their personalities are polar opposites, leading to a series of comedic situations and heartwarming moments. From sibling rivalry to sisterly support, the series explores the unique dynamics of their relationship as they experience the ups and downs of teenage life together.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">3</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 50%;"></span>
                            </div>
                            <p>50% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/77048l.jpg" alt="Anime de Training! Ex">
                </div>
                <div class="details">
                    <a href="anime-de-training%21-ex"><h3>Anime de Training! Ex</h3></a>
                    <p>Sports</p>
                    <p>2015</p>
                    <br>
                    <p>In 'Anime de Training! Ex', our protagonist meets a mysterious girl who introduces her to the world of female bodybuilding. Inspired by the girl's dedication, she decides to transform her lifestyle and pursue her own fitness goals. Along the way, she encounters various challenges and competitions that test her physical and mental strength. Will she be able to push through and achieve her dreams of becoming a strong and confident athlete?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">4</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 40%;"></span>
                            </div>
                            <p>40% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/9/81891l.jpg" alt="Cheating Craft">
                </div>
                <div class="details">
                    <a href="cheating-craft"><h3>Cheating Craft</h3></a>
                    <p>Action</p>
                    <p>2016</p>
                    <br>
                    <p>In a world where all aspects of life revolve around high-stakes exams, students enroll in the prestigious Windstorm School to master the art of Cheating Craft. The series follows the intense competition between students as they use every trick in the book, from advanced technology to good old-fashioned strategy, to outsmart their opponents and secure victory. Amidst the tension and thrill of the exams, friendships are tested and rivalries form, all in the pursuit of academic success.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">5</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 25%;"></span>
                            </div>
                            <p>25% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/77977l.jpg" alt="Active Raid">
                </div>
                <div class="details">
                    <a href="active-raid"><h3>Active Raid</h3></a>
                    <p>Action</p>
                    <p>2016</p>
                    <br>
                    <p>In a futuristic Tokyo, a special police unit called the Mobile Assault Division uses advanced technology and armor suits to combat crime and protect the city. Two new recruits join the team: the rule-abiding Asami Kazari and the reckless Haruka Hoshimiya. Together, they face off against various threats while navigating personal and professional challenges within the unit.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/11/86744l.jpg" alt="DIVE!!">
                </div>
                <div class="details">
                    <a href="dive%21%21"><h3>DIVE!!</h3></a>
                    <p>Sports</p>
                    <p>2017</p>
                    <br>
                    <p>DIVE!! follows the story of Tomoki Sakai, a talented diver who dreams of competing in the Olympics. He joins the Mizuki Diving Club and trains alongside his teammates, each with their own goals and struggles. As they face stiff competition and personal challenges, Tomoki must find the determination to overcome his fears and reach for his dream of becoming a world-class diver. The series explores the bonds formed through sports and the pursuit of excellence.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">7</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 8%;"></span>
                            </div>
                            <p>8% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/81430l.jpg" alt="Aooni The Blue Monster">
                </div>
                <div class="details">
                    <a href="aooni-the-blue-monster"><h3>Aooni The Blue Monster</h3></a>
                    <p>Comedy</p>
                    <p>2016</p>
                    <br>
                    <p>Aooni The Blue Monster follows a group of friends who decide to explore a mysterious abandoned mansion rumored to be haunted by a blue monster. As they navigate the eerie halls, they soon realize they are trapped inside with the creature. Together, they must uncover the mansion's secrets and find a way to escape before they become the monster's next victims.</p>
                </div>
            </div>

        </section>
    </main>
</body>
</html>
