
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like ENDRO!</title>
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
        <script>const number = "38062";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/1300/111361l.webp" alt="ENDRO!">
                <div>
                    <h2 id="title">ENDRO!</h2>
                    <p>Other Genre</p>
                    <p>2019</p>
                    <br>
                    <p>ENDRO! follows a group of young girls training to become heroes at a school for adventurers. The girls face various challenges in their quest to defeat the Demon Lord and bring peace to their land. With a mix of magic and friendship, they embark on whimsical and comedic adventures while learning important lessons along the way.</p>
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
                                <span style="width: 99%;"></span>
                            </div>
                            <p>99% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/7/75198l.jpg" alt="Seiyu's Life!">
                </div>
                <div class="details">
                    <a href="seiyu%27s-life%21"><h3>Seiyu's Life!</h3></a>
                    <p>Comedy</p>
                    <p>2015</p>
                    <br>
                    <p>Seiyu's Life! follows the journey of Futaba Ichinose, a rookie voice actress trying to navigate the competitive world of the Japanese voice acting industry. Alongside her friends and fellow voice actresses, Futaba experiences various challenges and growth in her career. As she auditions for roles, hones her skills, and forms new connections, Futaba strives to achieve her dream of becoming a successful voice actress.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">2</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 95%;"></span>
                            </div>
                            <p>95% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1051/93862l.jpg" alt="Anima Yell!">
                </div>
                <div class="details">
                    <a href="anima-yell%21"><h3>Anima Yell!</h3></a>
                    <p>Sports</p>
                    <p>2018</p>
                    <br>
                    <p>After being inspired by a cheerleading performance, high school student Kohane decides to start a cheerleading club with her friends. Determined to become top cheerleaders despite their initial lack of skills, the group faces challenges and works hard to improve, all while forming close bonds and supporting each other along the way. As they strive to reach new heights and participate in cheerleading competitions, the girls learn valuable lessons about teamwork, dedication, and friendship.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">3</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 91%;"></span>
                            </div>
                            <p>91% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1421/100770l.jpg" alt="Kengan Ashura">
                </div>
                <div class="details">
                    <a href="kengan-ashura"><h3>Kengan Ashura</h3></a>
                    <p>Action</p>
                    <p>2019</p>
                    <br>
                    <p>Kengan Ashura follows Tokita Ohma, a talented martial artist drawn into the world of underground fighting tournaments where corporate business leaders hire fighters to represent them in brutal gladiatorial combat. Ohma must prove his strength and skill in intense battles where only the strongest will survive. With high stakes and fierce competition, Ohma fights not only for victory but also to uncover the truth behind his mysterious past.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">4</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 88%;"></span>
                            </div>
                            <p>88% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1039/131684l.jpg" alt=""Ippon" again!">
                </div>
                <div class="details">
                    <a href="%22ippon%22-again%21"><h3>"Ippon" again!</h3></a>
                    <p>Sports</p>
                    <p>2023</p>
                    <br>
                    <p>Aspiring young judo practitioner, Kaito, dreams of becoming a national champion to honor his late father. With determination and hard work, he joins an elite judo team known for producing top athletes. Alongside his talented teammates, Kaito faces tough opponents and internal struggles on his journey to success. Through intense training and fierce competitions, he learns the true meaning of perseverance and the importance of teamwork in achieving his goals. Will Kaito's passion for judo lead him to victory?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">5</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 88%;"></span>
                            </div>
                            <p>88% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1851/96154l.jpg" alt="Ms. Vampire who lives in my neighborhood.">
                </div>
                <div class="details">
                    <a href="ms.-vampire-who-lives-in-my-neighborhood."><h3>Ms. Vampire who lives in my neighborhood.</h3></a>
                    <p>Comedy</p>
                    <p>2018</p>
                    <br>
                    <p>When high schooler Akari moves to a new town, she discovers her next-door neighbor Sophie is a vampire. Despite their differences, they form a close friendship along with other supernatural beings. Together, they navigate school life, friendship, and the challenges that arise from living in a world of both humans and monsters.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">6</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 85%;"></span>
                            </div>
                            <p>85% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/13/89885l.jpg" alt="Katana Maidens: Toji no Miko">
                </div>
                <div class="details">
                    <a href="katana-maidens%3A-toji-no-miko"><h3>Katana Maidens: Toji no Miko</h3></a>
                    <p>Action</p>
                    <p>2018</p>
                    <br>
                    <p>In a world where mysterious creatures called Aradama threaten humanity, specially trained shrine maidens known as Toji wield ancient swords to protect the people. The story follows Kanami and Hiyori, two young Toji from competing schools who must set aside their differences and unite against a common enemy. As they navigate through friendships, rivalries, and dangerous battles, they uncover dark secrets that could change everything they know about their world.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">7</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 83%;"></span>
                            </div>
                            <p>83% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/81471l.jpg" alt="Magic of Stella">
                </div>
                <div class="details">
                    <a href="magic-of-stella"><h3>Magic of Stella</h3></a>
                    <p>Comedy</p>
                    <p>2016</p>
                    <br>
                    <p>Magic of Stella follows a high school girl named Tamaki Honda who joins her school's game development club. Alongside her fellow club members, they work together to create their own video game. Together, they navigate the challenges of game design, deadlines, creativity, and teamwork. As they pour their hearts into their project, they form strong bonds and strive to showcase their passion for games.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">8</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 81%;"></span>
                            </div>
                            <p>81% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/13/79415l.jpg" alt="Three Leaves, Three Colors">
                </div>
                <div class="details">
                    <a href="three-leaves%2C-three-colors"><h3>Three Leaves, Three Colors</h3></a>
                    <p>Comedy</p>
                    <p>2016</p>
                    <br>
                    <p>Yoko, Futaba, and Teru meet at school and become friends despite their contrasting personalities. Yoko is outgoing yet sensitive, Futaba is shy but determined, and Teru is confident and a bit mischievous. Together, they navigate the ups and downs of school life, forming a bond that helps them overcome their individual challenges. From everyday adventures to heartwarming moments, Three Leaves, Three Colors follows the trio as they grow closer and support each other through thick and thin.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">9</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 81%;"></span>
                            </div>
                            <p>81% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1333/110595l.jpg" alt="A-Channel">
                </div>
                <div class="details">
                    <a href="a-channel"><h3>A-Channel</h3></a>
                    <p>Comedy</p>
                    <p>2011</p>
                    <br>
                    <p>Follow the high school lives of four girls - the energetic Tooru, the responsible Run, the shy Yuuko, and the caring Nagi - as they navigate friendship, school, and daily life together. From everyday activities to unexpected adventures, watch as their strong bond and individual personalities lead to heartwarming and hilarious moments.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">10</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 81%;"></span>
                            </div>
                            <p>81% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1623/95617l.jpg" alt="Release the Spyce">
                </div>
                <div class="details">
                    <a href="release-the-spyce"><h3>Release the Spyce</h3></a>
                    <p>Action</p>
                    <p>2018</p>
                    <br>
                    <p>In a world threatened by crime syndicates, high school girl Momo dreams of becoming a spy. When she discovers her schoolmate Yuki is a member of the Tsukikage organization, she joins her in the fight against evil. Together, they undergo intense training to hone their spy skills and protect their city from dangerous threats. With the power of Spyce, a special substance that enhances their abilities, the girls embark on thrilling missions filled with action and suspense.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">11</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 80%;"></span>
                            </div>
                            <p>80% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1394/95704l.webp" alt="Merc Storia: The Apathetic Boy and the Girl in a Bottle">
                </div>
                <div class="details">
                    <a href="merc-storia%3A-the-apathetic-boy-and-the-girl-in-a-bottle"><h3>Merc Storia: The Apathetic Boy and the Girl in a Bottle</h3></a>
                    <p>Action</p>
                    <p>2018</p>
                    <br>
                    <p>Yuu, an apathetic boy with the ability to heal others, discovers a mysterious girl trapped in a bottle. Determined to help her break free, Yuu embarks on a journey across the fantastical world of Merc with his friends, encountering various creatures and challenges along the way. As they delve deeper into the girl's origins, Yuu and his companions uncover secrets that may change their lives forever.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">12</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 78%;"></span>
                            </div>
                            <p>78% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/11/56247l.webp" alt="Gingitsune: Messenger Fox of the Gods">
                </div>
                <div class="details">
                    <a href="gingitsune%3A-messenger-fox-of-the-gods"><h3>Gingitsune: Messenger Fox of the Gods</h3></a>
                    <p>Other Genre</p>
                    <p>2013</p>
                    <br>
                    <p>In Gingitsune: Messenger Fox of the Gods, Makoto is a high school girl who can communicate with Gintaro, a fox spirit serving as the herald for a local shrine. Together, they assist the people in their community by conveying messages from the spiritual world. As Makoto navigates her duties as the shrine maiden and her everyday life, she learns about the importance of tradition, friendship, and the spirits that watch over them.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">13</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 76%;"></span>
                            </div>
                            <p>76% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1216/111637l.webp" alt="Diary of Our Days at the Breakwater">
                </div>
                <div class="details">
                    <a href="diary-of-our-days-at-the-breakwater"><h3>Diary of Our Days at the Breakwater</h3></a>
                    <p>Other Genre</p>
                    <p>2020</p>
                    <br>
                    <p>Hina Tsurugi moves to a coastal town and joins the Breakwater Club to make new friends and combat her fear of the ocean. With the help of her clubmates, she learns the art of saltwater fishing and immerses herself in the beauty of the ocean. Bonding over their shared love for fishing, the girls navigate the challenges of the sea and form strong friendships along the way.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">14</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 76%;"></span>
                            </div>
                            <p>76% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1934/128719l.webp" alt="The Little Lies We All Tell">
                </div>
                <div class="details">
                    <a href="the-little-lies-we-all-tell"><h3>The Little Lies We All Tell</h3></a>
                    <p>Comedy</p>
                    <p>2022</p>
                    <br>
                    <p>In a small town where everyone knows each other, a group of high school students finds themselves entangled in a web of lies and secrets. As their deceitful actions spiral out of control, they must navigate the consequences of their choices while trying to maintain their image. Friendships are tested, relationships are strained, and trust is shattered as the truth threatens to unravel their carefully constructed façade. Can they keep their lies hidden, or will the truth ultimately come to light?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">15</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 76%;"></span>
                            </div>
                            <p>76% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/9/86644l.jpg" alt="Clean Freak! Aoyama-kun">
                </div>
                <div class="details">
                    <a href="clean-freak%21-aoyama-kun"><h3>Clean Freak! Aoyama-kun</h3></a>
                    <p>Sports</p>
                    <p>2017</p>
                    <br>
                    <p>Soccer prodigy Aoyama is not just talented on the field but also known for his extreme cleanliness habits. Follow his endeavors as he navigates through the world of soccer, dealing with his obsessive-compulsive disorder while striving for victory. Aoyama's unique approach to the game sets him apart from his teammates, leading to amusing and inspiring situations both on and off the pitch.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">16</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 76%;"></span>
                            </div>
                            <p>76% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1869/95731l.jpg" alt="Takunomi">
                </div>
                <div class="details">
                    <a href="takunomi"><h3>Takunomi</h3></a>
                    <p>Comedy</p>
                    <p>2018</p>
                    <br>
                    <p>Takunomi follows the story of Michiru Amatsuki, a young woman who moves to Tokyo for work and ends up living in a share house with three other women. As they bond over their love for alcoholic beverages, the girls enjoy drinking together and sharing their experiences. Each episode explores different types of beverages and the shared moments that bring the housemates closer together. The series showcases their growing friendships and the everyday joys of living and drinking together.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">17</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/9/78701l.jpg" alt="Anne-Happy">
                </div>
                <div class="details">
                    <a href="anne-happy"><h3>Anne-Happy</h3></a>
                    <p>Other Genre</p>
                    <p>2016</p>
                    <br>
                    <p>Anne-Happy follows the unlucky students of Tennomifune Academy's Class 1-7, who are assigned to a special class for students with various misfortunes. The story focuses on the cheerful Anne and her classmates as they navigate their daily lives and try to overcome their bad luck with the help of their eccentric teacher. Through their adventures and mishaps, the girls form strong friendships and learn valuable life lessons.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">18</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1360/119608l.webp" alt="Slow Loop">
                </div>
                <div class="details">
                    <a href="slow-loop"><h3>Slow Loop</h3></a>
                    <p>Other Genre</p>
                    <p>2022</p>
                    <br>
                    <p>Hiyori, a reserved high school girl, unexpectedly finds herself learning the art of fishing from Koharu, a cheerful and experienced angler. As they bond over their shared love for fishing, they navigate the ups and downs of life and form a strong friendship. Through their fishing escapades, they discover the joys of friendship, nature, and personal growth.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">19</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1171/133777l.jpg" alt="Otaku Elf">
                </div>
                <div class="details">
                    <a href="otaku-elf"><h3>Otaku Elf</h3></a>
                    <p>Comedy</p>
                    <p>2023</p>
                    <br>
                    <p>In a world where elves and humans coexist, a young elf girl named Aria discovers her passion for all things otaku. Struggling to fit in with her traditional elf community, Aria immerses herself in anime, manga, and video games. Follow Aria's journey as she navigates the challenges of balancing her love for otaku culture with her responsibilities as an elf, all while forming new friendships and finding her place in both worlds.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">20</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/87919l.jpg" alt="Expelled from Paradise">
                </div>
                <div class="details">
                    <a href="expelled-from-paradise"><h3>Expelled from Paradise</h3></a>
                    <p>Action</p>
                    <p>2014</p>
                    <br>
                    <p>In a futuristic world where humans live in a virtual reality paradise, a skilled agent named Angela is tasked with tracking down a hacker threatening their existence. Forced to leave her digital utopia, Angela embarks on a dangerous journey to pursue her target in the harsh reality of the wasteland. As she uncovers shocking truths about her mission and the world she left behind, Angela must confront difficult decisions that will alter the course of humanity.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">21</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/4/89982l.jpg" alt="Slow Start">
                </div>
                <div class="details">
                    <a href="slow-start"><h3>Slow Start</h3></a>
                    <p>Comedy</p>
                    <p>2018</p>
                    <br>
                    <p>Hana Ichinose's high school life gets off to a rocky start after an illness causes her to miss the entrance exams. As she navigates the challenges of being a year behind her classmates, Hana discovers new friendships and opportunities to grow. With the support of her new friends and her own determination, she sets out to make the most of her slow start and find her place in both school and in life.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">22</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1142/111693l.webp" alt="Asteroid in Love">
                </div>
                <div class="details">
                    <a href="asteroid-in-love"><h3>Asteroid in Love</h3></a>
                    <p>Other Genre</p>
                    <p>2020</p>
                    <br>
                    <p>Mira Konohata dreams of finding a shooting star when she was young. Years later, she joins the Earth Sciences Club in high school where she meets a fellow student, Ao Manaka, who has a passion for astronomy. With a shared goal of watching a rare asteroid pass by Earth, the girls work together to overcome challenges and deepen their friendship through their love for space and the wonders of the universe.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">23</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1035/111624l.webp" alt="After School Dice Club">
                </div>
                <div class="details">
                    <a href="after-school-dice-club"><h3>After School Dice Club</h3></a>
                    <p>Comedy</p>
                    <p>2019</p>
                    <br>
                    <p>After School Dice Club follows a high school girl named Miki who discovers the joys of board games when she joins the school's gaming club. Alongside her friends, they explore various board games, from strategy-heavy ones to lighter, luck-based ones. As they play together, Miki not only learns about different games but also forms new friendships and grows as a person through the power of gaming.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">24</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 71%;"></span>
                            </div>
                            <p>71% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/4/71963l.webp" alt="Gourmet Girl Graffiti">
                </div>
                <div class="details">
                    <a href="gourmet-girl-graffiti"><h3>Gourmet Girl Graffiti</h3></a>
                    <p>Other Genre</p>
                    <p>2015</p>
                    <br>
                    <p>Gourmet Girl Graffiti follows the story of Ryou, a high school girl who discovers the power of meals to bring joy and comfort. Through her passion for cooking, she forms deep connections with friends and family, exploring the feelings and memories that food can evoke. Together with her cousin, Kirin, they embark on a journey of culinary delights, learning valuable life lessons along the way. This heartwarming anime celebrates the simple joys of food and friendship.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">25</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 71%;"></span>
                            </div>
                            <p>71% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1924/95212l.jpg" alt="Harukana Receive">
                </div>
                <div class="details">
                    <a href="harukana-receive"><h3>Harukana Receive</h3></a>
                    <p>Sports</p>
                    <p>2018</p>
                    <br>
                    <p>Haruka moves to Okinawa to live with her cousin Kanata. Despite their height difference and Kanata's reluctance to play beach volleyball again, the two cousins decide to team up and compete in a local tournament. As they face off against various rivals and strive to improve their skills, they forge new friendships and deepen their bond as they aim to become top beach volleyball players.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">26</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 71%;"></span>
                            </div>
                            <p>71% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/2/84858l.jpg" alt="Hinako Note">
                </div>
                <div class="details">
                    <a href="hinako-note"><h3>Hinako Note</h3></a>
                    <p>Other Genre</p>
                    <p>2017</p>
                    <br>
                    <p>Hinako Note follows Hinako Sakuragi, a shy girl with a fear of talking to strangers. She moves to the countryside to attend high school and decides to join a theater company to overcome her shyness. With the help of her eccentric new friends, Hinako navigates her fear of people while discovering the joy of performing on stage.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">27</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 71%;"></span>
                            </div>
                            <p>71% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/50395l.webp" alt="Hanamaru Kindergarten">
                </div>
                <div class="details">
                    <a href="hanamaru-kindergarten"><h3>Hanamaru Kindergarten</h3></a>
                    <p>Comedy</p>
                    <p>2010</p>
                    <br>
                    <p>Hanamaru Kindergarten follows Anzu, a playful and imaginative young girl who starts attending a kindergarten where her crush, the teacher Tsuchida, works. Alongside her friends, the mischievous Hiiragi and the level-headed Koume, Anzu embarks on various adventures and schemes to capture Tsuchida's attention. The series explores the daily lives and whimsical antics of the children at Hanamaru Kindergarten, filled with laughter, friendship, and innocent romance.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">28</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 71%;"></span>
                            </div>
                            <p>71% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1329/135096l.jpg" alt="Saint Cecilia and Pastor Lawrence">
                </div>
                <div class="details">
                    <a href="saint-cecilia-and-pastor-lawrence"><h3>Saint Cecilia and Pastor Lawrence</h3></a>
                    <p>Romance</p>
                    <p>2023</p>
                    <br>
                    <p>In a small town, a renowned musician named Cecilia seeks solace from her fame by taking refuge in a local church. There, she meets Lawrence, a kind pastor who helps her rediscover her passion for music and faith. As they bond over their shared love for music and desire to make a positive impact on the community, Cecilia and Lawrence navigate challenges together, inspiring those around them with their genuine connection and uplifting performances.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">29</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/6/84119l.webp" alt="Urara Meirocho">
                </div>
                <div class="details">
                    <a href="urara-meirocho"><h3>Urara Meirocho</h3></a>
                    <p>Comedy</p>
                    <p>2017</p>
                    <br>
                    <p>Chiya leaves her countryside home to become the top fortune teller in the bustling town of Meirocho. Along with three other girls, she navigates the town's mystical labyrinth in search of her missing mother. As they train to become fortune tellers, Chiya and her friends uncover secrets about their pasts and form unbreakable bonds. With each step in their magical journey, they grow closer to finding the answers they seek.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">30</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/12/65309l.jpg" alt="Locodol">
                </div>
                <div class="details">
                    <a href="locodol"><h3>Locodol</h3></a>
                    <p>Comedy</p>
                    <p>2014</p>
                    <br>
                    <p>High school student Nanako is unexpectedly recruited to become a local idol in her hometown by her uncle, a manager of a small talent agency. Together with her best friend Yukari, they form a duo and aim to promote the town and its attractions through various performances. As Nanako navigates the world of being an idol, she discovers the importance of community and friendship in their journey to bring joy to the town's residents.</p>
                </div>
            </div>

        </section>
    </main>
</body>
</html>
