
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like A-Channel</title>
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
        <script>const number = "9776";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/1333/110595l.jpg" alt="A-Channel">
                <div>
                    <h2 id="title">A-Channel</h2>
                    <p>Comedy</p>
                    <p>2011</p>
                    <br>
                    <p>Follow the high school lives of four girls - the energetic Tooru, the responsible Run, the shy Yuuko, and the caring Nagi - as they navigate friendship, school, and daily life together. From everyday activities to unexpected adventures, watch as their strong bond and individual personalities lead to heartwarming and hilarious moments.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/4/79032l.jpg" alt="Sankarea OVA">
                </div>
                <div class="details">
                    <a href="sankarea-ova"><h3>Sankarea OVA</h3></a>
                    <p>Romance</p>
                    <p>2012</p>
                    <br>
                    <p>In Sankarea OVA, Chihiro Furuya is obsessed with zombies. When his cat, Babu, dies, he decides to try to revive him using a resurrection potion. Chihiro meets Rea Sanka, a girl who is fed up with her controlling father, and after a strange encounter, she becomes a zombie. Together, they navigate the challenges and complexities of Rea’s new undead existence.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">2</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 99%;"></span>
                            </div>
                            <p>99% Similarity</p>
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
                        <div class="rank">3</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 99%;"></span>
                            </div>
                            <p>99% Similarity</p>
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
                        <div class="rank">4</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 98%;"></span>
                            </div>
                            <p>98% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1949/112982l.jpg" alt="Witch Craft Works">
                </div>
                <div class="details">
                    <a href="witch-craft-works"><h3>Witch Craft Works</h3></a>
                    <p>Action</p>
                    <p>2014</p>
                    <br>
                    <p>In Witch Craft Works, high school student Honoka finds himself protected by his school's Princess Ayaka, a powerful witch. As he becomes entangled in the world of magic and witches, Honoka must navigate through various dangers and challenges alongside Ayaka, all while uncovering the secrets behind his own role in this mystical world. Together, they must face formidable adversaries and protect their school from dark forces threatening to destroy everything they hold dear.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">5</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 91%;"></span>
                            </div>
                            <p>91% Similarity</p>
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
                        <div class="rank">6</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 91%;"></span>
                            </div>
                            <p>91% Similarity</p>
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
                        <div class="rank">7</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 90%;"></span>
                            </div>
                            <p>90% Similarity</p>
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

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">8</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 86%;"></span>
                            </div>
                            <p>86% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1793/117610l.webp" alt="KINMOZA!">
                </div>
                <div class="details">
                    <a href="kinmoza%21"><h3>KINMOZA!</h3></a>
                    <p>Other Genre</p>
                    <p>2013</p>
                    <br>
                    <p>KINMOZA! follows the story of Shinobu Omiya, a Japanese high school girl who becomes close friends with Alice Cartelet, an English girl in her class. The anime explores the daily lives and adventures of Shinobu, Alice, and their friends as they navigate cultural differences and forge strong bonds of friendship through various heartwarming and humorous moments.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">9</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 85%;"></span>
                            </div>
                            <p>85% Similarity</p>
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
                        <div class="rank">10</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 83%;"></span>
                            </div>
                            <p>83% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1683/91888l.webp" alt="Umamusume: Pretty Derby">
                </div>
                <div class="details">
                    <a href="umamusume%3A-pretty-derby"><h3>Umamusume: Pretty Derby</h3></a>
                    <p>Sports</p>
                    <p>2018</p>
                    <br>
                    <p>Uma Musume: Pretty Derby follows Special Week, a young horse girl with dreams of becoming the greatest racehorse in Japan. She enrolls in the prestigious Tracen Academy, where she trains alongside other talented horse girls to compete in the Twinkle Series. Through friendship, rivalry, and hard work, Special Week strives to fulfill her late mother's wishes and reach the pinnacle of horse racing. With intense training and thrilling races, she embarks on a journey of growth and self-discovery in the competitive world of racing.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">11</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 81%;"></span>
                            </div>
                            <p>81% Similarity</p>
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
                        <div class="rank">12</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 81%;"></span>
                            </div>
                            <p>81% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1300/111361l.webp" alt="ENDRO!">
                </div>
                <div class="details">
                    <a href="endro%21"><h3>ENDRO!</h3></a>
                    <p>Other Genre</p>
                    <p>2019</p>
                    <br>
                    <p>ENDRO! follows a group of young girls training to become heroes at a school for adventurers. The girls face various challenges in their quest to defeat the Demon Lord and bring peace to their land. With a mix of magic and friendship, they embark on whimsical and comedic adventures while learning important lessons along the way.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">13</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 81%;"></span>
                            </div>
                            <p>81% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1963/128728l.jpg" alt="Management of a Novice Alchemist">
                </div>
                <div class="details">
                    <a href="management-of-a-novice-alchemist"><h3>Management of a Novice Alchemist</h3></a>
                    <p>Other Genre</p>
                    <p>2022</p>
                    <br>
                    <p>In a world where alchemy is a highly respected profession, a novice alchemist embarks on a journey to master the ancient art. With the help of skilled mentors and a dedicated team, they face challenges, uncover long-lost secrets, and strive to create the most powerful potions known to mankind. Along the way, they will encounter formidable adversaries and form unbreakable bonds, all while uncovering the true potential of their alchemical abilities.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">14</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 80%;"></span>
                            </div>
                            <p>80% Similarity</p>
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
                        <div class="rank">15</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 80%;"></span>
                            </div>
                            <p>80% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1671/120628l.webp" alt="In the Land of Leadale">
                </div>
                <div class="details">
                    <a href="in-the-land-of-leadale"><h3>In the Land of Leadale</h3></a>
                    <p>Isekai</p>
                    <p>2022</p>
                    <br>
                    <p>After a tragic accident, Keina Kagami finds herself trapped in the virtual reality game she used to play, now known as the Land of Leadale. Determined to uncover the secrets of this new world, Keina embarks on a journey filled with magic, adventure, and unexpected friendships. As she explores the vast landscapes and encounters various challenges, Keina begins to question the true nature of her reality and searches for a way to return home.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">16</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 78%;"></span>
                            </div>
                            <p>78% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1751/98216l.jpg" alt="Senryu Girl">
                </div>
                <div class="details">
                    <a href="senryu-girl"><h3>Senryu Girl</h3></a>
                    <p>Comedy</p>
                    <p>2019</p>
                    <br>
                    <p>Nanako Yukishiro, a shy high school girl who communicates through Senryu (a form of haiku poetry), befriends the ex-delinquent Eiji Busujima. As the two navigate school life together, they find comfort and friendship in each other's company. Through their interactions and written poetry, they learn more about each other and themselves. Senryu Girl explores the bond formed through shared experiences and the power of words to connect individuals.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">17</div>
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
                        <div class="rank">18</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 78%;"></span>
                            </div>
                            <p>78% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1517/125496l.webp" alt="Black Summoner">
                </div>
                <div class="details">
                    <a href="black-summoner"><h3>Black Summoner</h3></a>
                    <p>Isekai</p>
                    <p>2022</p>
                    <br>
                    <p>In Black Summoner, a talented but introverted gamer awakens in a mysterious fantasy world as a powerful summoner. With the ability to conjure and control mythical creatures, he sets out on an epic journey to discover the secrets of his new reality. Along the way, he forms alliances, battles formidable foes, and unravels the truth behind his summoning powers. With each challenge he faces, he grows stronger and closer to unlocking the full extent of his abilities.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">19</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 78%;"></span>
                            </div>
                            <p>78% Similarity</p>
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
                        <div class="rank">20</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 78%;"></span>
                            </div>
                            <p>78% Similarity</p>
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
                        <div class="rank">21</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 78%;"></span>
                            </div>
                            <p>78% Similarity</p>
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
                        <div class="rank">22</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 76%;"></span>
                            </div>
                            <p>76% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1486/93811l.webp" alt="How to Keep a Mummy">
                </div>
                <div class="details">
                    <a href="how-to-keep-a-mummy"><h3>How to Keep a Mummy</h3></a>
                    <p>Other Genre</p>
                    <p>2018</p>
                    <br>
                    <p>When high school student Sora receives a mysterious package from his adventurer father, he is surprised to find a tiny mummy inside! As Sora and his friends navigate the challenges of taking care of the cute but mischievous creature, they discover the importance of friendship, responsibility, and the joy of having a unique pet. Together, they embark on heartwarming adventures and uncover the secrets behind the supernatural creatures that have come into their lives.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">23</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 76%;"></span>
                            </div>
                            <p>76% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/5/75646l.jpg" alt="Tower of Druaga: The Aegis of Uruk">
                </div>
                <div class="details">
                    <a href="tower-of-druaga%3A-the-aegis-of-uruk"><h3>Tower of Druaga: The Aegis of Uruk</h3></a>
                    <p>Action</p>
                    <p>2008</p>
                    <br>
                    <p>In a world where a mysterious tower holds a powerful treasure at its peak, a young warrior named Jil sets out on a dangerous quest to conquer the Tower of Druaga. Alongside a diverse group of companions, Jil must battle monsters, navigate treacherous traps, and overcome his own doubts to reach the top. As the journey unfolds, secrets about the tower and its true purpose begin to surface, testing the group's resolve and bonds of friendship.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">24</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 76%;"></span>
                            </div>
                            <p>76% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1539/124746l.jpg" alt="Miss Caretaker of Sunohara-sou">
                </div>
                <div class="details">
                    <a href="miss-caretaker-of-sunohara-sou"><h3>Miss Caretaker of Sunohara-sou</h3></a>
                    <p>Comedy</p>
                    <p>2018</p>
                    <br>
                    <p>Yuzu Aizawa moves into the eccentric Sunohara-sou boarding house to attend high school. She soon discovers her caretaker, Ayaka Sunohara, is not only beautiful but also a playful sadist. Yuzu navigates her new life filled with over-the-top antics and eccentric residents, all while developing close bonds with her new friends and trying to adjust to the unique environment of Sunohara-sou.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">25</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1945/126130l.jpg" alt="When Will Ayumu Make His Move?">
                </div>
                <div class="details">
                    <a href="when-will-ayumu-make-his-move%3F"><h3>When Will Ayumu Make His Move?</h3></a>
                    <p>Romance</p>
                    <p>2022</p>
                    <br>
                    <p>Ayumu is a shy high school student who has feelings for his outgoing and popular classmate, Maki. With the help of his friends, he embarks on a journey to find the courage to confess his feelings to her. As Ayumu navigates through the challenges of school life and relationships, he must confront his own insecurities and fears in order to take a leap of faith and express his love for Maki.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">26</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/4/77694l.jpg" alt="Kamen no Maid Guy">
                </div>
                <div class="details">
                    <a href="kamen-no-maid-guy"><h3>Kamen no Maid Guy</h3></a>
                    <p>Action</p>
                    <p>2008</p>
                    <br>
                    <p>Kamen no Maid Guy follows the story of Naeka Fujiwara, a high school girl who inherits a vast fortune. To protect her, two over-the-top bodyguards are assigned to her: the stoic Fubuki and the maniacal Kogarashi. Despite their unorthodox methods and constant disruptions, Naeka must navigate her new life while dealing with the eccentric duo's antics. As the trio encounters various challenges, secrets from the past begin to unravel, further complicating their journey.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">27</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/10/83575l.jpg" alt="Tari Tari">
                </div>
                <div class="details">
                    <a href="tari-tari"><h3>Tari Tari</h3></a>
                    <p>Other Genre</p>
                    <p>2012</p>
                    <br>
                    <p>In Tari Tari, a group of high school students with a shared passion for music come together to form a choir club. They face various challenges and obstacles as they strive to reach their goal of performing in a music competition. Each member of the group has their own personal struggles and reasons for joining the club, leading to growth and bonding as they work towards a common dream.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">28</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/10/45995l.jpg" alt="GJ Club">
                </div>
                <div class="details">
                    <a href="gj-club"><h3>GJ Club</h3></a>
                    <p>Comedy</p>
                    <p>2013</p>
                    <br>
                    <p>In GJ Club, Kyoya Shinomiya is the sole male member of the GJ Club, a group of girls who spend their days having fun and engaging in random activities in their clubroom. As Kyoya gets to know each of the unique club members, a series of comedic and heartwarming events unfold, showcasing the bonds of friendship that form among the group. Through their eccentric interactions and daily shenanigans, the GJ Club members learn more about each other and themselves.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">29</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
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
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/8/64443l.jpg" alt="Magimoji Rurumo">
                </div>
                <div class="details">
                    <a href="magimoji-rurumo"><h3>Magimoji Rurumo</h3></a>
                    <p>Comedy</p>
                    <p>2014</p>
                    <br>
                    <p>Kota receives a mysterious book that grants him wishes with a price, assigned by a witch named Rurumo. Kota uses his wishes to help others while growing closer to Rurumo, discovering her tragic past. Together, they navigate magical mishaps and develop a heartwarming bond.</p>
                </div>
            </div>

        </section>
    </main>
</body>
</html>
