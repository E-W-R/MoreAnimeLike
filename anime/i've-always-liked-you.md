
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like I've Always Liked You</title>
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
        <script>const number = "31245";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/3/82121l.webp" alt="I've Always Liked You">
                <div>
                    <h2 id="title">I've Always Liked You</h2>
                    <p>Romance</p>
                    <p>2016</p>
                    <br>
                    <p>I've Always Liked You follows the story of a group of high school friends who navigate the complexities of young love and friendships. As secrets are revealed and emotions come to the surface, the characters must confront their feelings for each other and decide whether to take a chance on romance. Will these childhood friends find the courage to express their true feelings and potentially change the dynamics of their relationships forever?</p>
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
                                <span style="width: 80%;"></span>
                            </div>
                            <p>80% Similarity</p>
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
                        <div class="rank">2</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 78%;"></span>
                            </div>
                            <p>78% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1739/124338l.jpg" alt="Tales of Zestiria the X">
                </div>
                <div class="details">
                    <a href="tales-of-zestiria-the-x"><h3>Tales of Zestiria the X</h3></a>
                    <p>Action</p>
                    <p>2016</p>
                    <br>
                    <p>In a world where humans and supernatural beings coexist, a young man named Sorey discovers his destiny as the Shepherd, a legendary figure said to bring peace to the land. With newfound companions, Sorey embarks on a journey to purify the malevolent beings known as Hellions and save the world from a looming darkness. As he uncovers the secrets of his past and the true nature of the world around him, Sorey must overcome numerous challenges to fulfill his role as the Shepherd.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">3</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 78%;"></span>
                            </div>
                            <p>78% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1140/120215l.jpg" alt="Salaryman's Club">
                </div>
                <div class="details">
                    <a href="salaryman%27s-club"><h3>Salaryman's Club</h3></a>
                    <p>Sports</p>
                    <p>2022</p>
                    <br>
                    <p>Salaryman's Club follows a group of office workers who form an after-hours club to destress and bond over their hectic work lives. As they navigate the challenges of the corporate world, they find solace in the support and camaraderie of their fellow club members. Together, they learn valuable lessons about friendship, teamwork, and the importance of work-life balance.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">4</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 76%;"></span>
                            </div>
                            <p>76% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/8/74945l.jpg" alt="Ushio & Tora (2015)">
                </div>
                <div class="details">
                    <a href="ushio-%26-tora-%282015%29"><h3>Ushio & Tora (2015)</h3></a>
                    <p>Action</p>
                    <p>2015</p>
                    <br>
                    <p>When a young boy named Ushio stumbles upon a basement filled with ancient weapons, he unknowingly frees a powerful demon named Tora. Forced to team up to battle malevolent spirits known as Youkai, they form an unlikely bond. As they navigate a dangerous world filled with supernatural threats, they must learn to trust each other and work together to protect humanity from impending doom.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">5</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 76%;"></span>
                            </div>
                            <p>76% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1720/139131l.webp" alt="I'm Giving the Disgraced Noble Lady I Rescued a Crash Course in Naughtiness">
                </div>
                <div class="details">
                    <a href="i%27m-giving-the-disgraced-noble-lady-i-rescued-a-crash-course-in-naughtiness"><h3>I'm Giving the Disgraced Noble Lady I Rescued a Crash Course in Naughtiness</h3></a>
                    <p>Romance</p>
                    <p>2023</p>
                    <br>
                    <p>After rescuing a noble lady from a precarious situation, a kind-hearted individual decides to teach her the ways of the world. Through a series of misadventures and amusing encounters, the once sheltered lady learns about the ways of society and discovers her own desires. As the two grow closer, they navigate the complexities of relationships and self-discovery, all while facing the challenges of their conflicting backgrounds.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">6</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 76%;"></span>
                            </div>
                            <p>76% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1418/108748l.jpg" alt="Love Me, Love Me Not">
                </div>
                <div class="details">
                    <a href="love-me%2C-love-me-not"><h3>Love Me, Love Me Not</h3></a>
                    <p>Romance</p>
                    <p>2020</p>
                    <br>
                    <p>Love Me, Love Me Not follows the intertwined stories of four high school students as they navigate the complexities of love and friendship. Yuna and Akari have opposite views on romance, while Rio is dealing with a one-sided crush and Kazuomi tries to decipher his feelings for a friend. As they support and confide in each other, their relationships and emotions become intertwined in unexpected ways.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">7</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 76%;"></span>
                            </div>
                            <p>76% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1818/121071l.webp" alt="Fastest Finger First">
                </div>
                <div class="details">
                    <a href="fastest-finger-first"><h3>Fastest Finger First</h3></a>
                    <p>Other Genre</p>
                    <p>2017</p>
                    <br>
                    <p>Fastest Finger First follows the story of a high school student named Shiki Koshiyama, who is unexpectedly drawn into the world of quiz bowl competitions. With his vast knowledge and quick thinking, Shiki becomes a key member of his school's quiz bowl team. As they aim to compete at the national level, Shiki and his teammates navigate intense rivalries, friendships, and challenges in their quest for victory.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">8</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
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
                        <div class="rank">9</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
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
                        <div class="rank">10</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/80688l.jpg" alt="This Art Club Has a Problem!">
                </div>
                <div class="details">
                    <a href="this-art-club-has-a-problem%21"><h3>This Art Club Has a Problem!</h3></a>
                    <p>Romance</p>
                    <p>2016</p>
                    <br>
                    <p>Mizuki Usami is a talented artist who just wants to enjoy her peaceful art club, but things take a chaotic turn when the club gains an eccentric new member, Subaru Uchimaki. Subaru's only interest is drawing the perfect 2D waifu, much to Mizuki's dismay. As the two navigate their unique artistic visions and quirky club members, hilarious and heartwarming moments ensue in This Art Club Has a Problem!</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">11</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/11/82559l.jpg" alt="Castle Town Dandelion">
                </div>
                <div class="details">
                    <a href="castle-town-dandelion"><h3>Castle Town Dandelion</h3></a>
                    <p>Comedy</p>
                    <p>2015</p>
                    <br>
                    <p>In Castle Town Dandelion, the royal family's daily lives are broadcasted on television due to their supernatural powers, which they must use to win the public's support for the next ruler. The story follows Akane, a shy princess with the power to manipulate gravity, as she navigates the challenges of balancing her royal duties with her desire for a normal life. As the siblings showcase their powers, they learn more about each other and themselves in this heartwarming and humorous tale.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">12</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1602/100510l.jpg" alt="We Never Learn: BOKUBEN">
                </div>
                <div class="details">
                    <a href="we-never-learn%3A-bokuben"><h3>We Never Learn: BOKUBEN</h3></a>
                    <p>Romance</p>
                    <p>2019</p>
                    <br>
                    <p>We Never Learn: BOKUBEN follows Nariyuki Yuiga, a hardworking high school student tasked with tutoring three genius girls in different subjects to secure a scholarship. However, each girl excels in areas outside their specialty, leading to comedic and heartwarming mishaps as Nariyuki helps them navigate their academic and personal struggles. As he forms close bonds with the girls, Nariyuki realizes there might be more to teaching and learning than just books and exams.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">13</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1173/131830l.jpg" alt="Malevolent Spirits: Mononogatari">
                </div>
                <div class="details">
                    <a href="malevolent-spirits%3A-mononogatari"><h3>Malevolent Spirits: Mononogatari</h3></a>
                    <p>Action</p>
                    <p>2023</p>
                    <br>
                    <p>In a small village plagued by malevolent spirits, a young priestess with the ability to communicate with the supernatural becomes the last hope for its inhabitants. Together with a group of outcast warriors, she embarks on a dangerous journey to uncover the source of the spirits' anger and put an end to the curse that has haunted the village for generations. Amidst betrayal and dark secrets, they must face their own inner demons to save the village from doom.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">14</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1008/140287l.jpg" alt="The Unwanted Undead Adventurer">
                </div>
                <div class="details">
                    <a href="the-unwanted-undead-adventurer"><h3>The Unwanted Undead Adventurer</h3></a>
                    <p>Action</p>
                    <p>2024</p>
                    <br>
                    <p>After mysteriously dying, warrior Fukamori regains consciousness in a dark cave. Realizing he's become an undead, he struggles to cope with his new existence. Determined to uncover the truth behind his resurrection, Fukamori sets off on a journey filled with danger and surprises. With his new companion, a healer named Alice, by his side, Fukamori faces otherworldly creatures and challenges, all while trying to make sense of his undead status.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">15</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/19934l.jpg" alt="KimiKiss: Pure Rouge">
                </div>
                <div class="details">
                    <a href="kimikiss%3A-pure-rouge"><h3>KimiKiss: Pure Rouge</h3></a>
                    <p>Romance</p>
                    <p>2007</p>
                    <br>
                    <p>Kouichi is a high school student who crosses paths with several girls, leading to feelings of love and friendship. As relationships form and bonds deepen, Kouichi must navigate the complexities of young romance and understanding his own emotions. With a mix of heartwarming moments and emotional conflicts, KimiKiss: Pure Rouge explores the beauty and challenges of adolescent relationships.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">16</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/8/76691l.jpg" alt="Rainbow Days">
                </div>
                <div class="details">
                    <a href="rainbow-days"><h3>Rainbow Days</h3></a>
                    <p>Romance</p>
                    <p>2016</p>
                    <br>
                    <p>Rainbow Days follows the lives of four high school boys as they navigate the ups and downs of adolescence, friendship, and first loves. Natsuki, Tomoya, Keiichi, and Tsuyoshi each have their own unique personalities and love interests, leading to comedic and heartwarming situations. Through their experiences, the boys learn valuable lessons about relationships and the importance of friendship. Join them on their journey of self-discovery and youthful adventures in this light-hearted slice-of-life anime.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">17</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/13/51579l.jpg" alt="Servant x Service">
                </div>
                <div class="details">
                    <a href="servant-x-service"><h3>Servant x Service</h3></a>
                    <p>Comedy</p>
                    <p>2013</p>
                    <br>
                    <p>Servant x Service follows the daily lives of a group of quirky civil servants working in a government office. Led by the diligent Lucy Yamagami, the team navigates through various challenges, bureaucracy, and eccentric coworkers while striving to make a difference in their community. As they bond over their shared experiences and personal lives, hilarious antics ensue in this heartwarming workplace comedy.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">18</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 71%;"></span>
                            </div>
                            <p>71% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1927/132758l.jpg" alt="The Ice Guy and His Cool Female Colleague">
                </div>
                <div class="details">
                    <a href="the-ice-guy-and-his-cool-female-colleague"><h3>The Ice Guy and His Cool Female Colleague</h3></a>
                    <p>Romance</p>
                    <p>2023</p>
                    <br>
                    <p>In a world where superpowers are common, a reserved man with the ability to manipulate ice joins forces with a carefree woman who can control water. As they work together as colleagues at a top secret agency, they find themselves facing dangerous missions and powerful enemies. Despite their contrasting personalities, they must learn to trust each other's abilities and form a strong partnership to protect their city from impending threats.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">19</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 71%;"></span>
                            </div>
                            <p>71% Similarity</p>
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
                        <div class="rank">20</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1648/126110l.jpg" alt="I'm the Villainess, So I'm Taming the Final Boss">
                </div>
                <div class="details">
                    <a href="i%27m-the-villainess%2C-so-i%27m-taming-the-final-boss"><h3>I'm the Villainess, So I'm Taming the Final Boss</h3></a>
                    <p>Isekai</p>
                    <p>2022</p>
                    <br>
                    <p>After reincarnating as the villainess in her favorite otome game, Aria is determined to avoid her doom by taming the final boss, Lancelot. As Aria tries to manipulate the game's events, she finds herself falling for Lancelot. With the fate of the world at stake, Aria must navigate her feelings while altering the game's course. Will she succeed in changing her destiny and finding love in this romantic comedy?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">21</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1805/132335l.jpg" alt="Handyman Saitou in Another World">
                </div>
                <div class="details">
                    <a href="handyman-saitou-in-another-world"><h3>Handyman Saitou in Another World</h3></a>
                    <p>Isekai</p>
                    <p>2023</p>
                    <br>
                    <p>After a freak accident, repairman Saitou finds himself transported to a fantasy world where his skills with machines and tools are in high demand. Embracing his new role as a handyman, Saitou navigates through the challenges of this magical realm, using his expertise to help those in need while also learning about the unique customs and creatures that inhabit the world. Join Saitou on his journey as he fixes more than just broken objects in this captivating new world.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">22</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1547/125900l.jpg" alt="The Reincarnation of the Strongest Exorcist in Another World">
                </div>
                <div class="details">
                    <a href="the-reincarnation-of-the-strongest-exorcist-in-another-world"><h3>The Reincarnation of the Strongest Exorcist in Another World</h3></a>
                    <p>Isekai</p>
                    <p>2023</p>
                    <br>
                    <p>After dying in his world, Kaito is reincarnated in a fantasy realm as the strongest exorcist. With his new powers, he sets out to vanquish demons plaguing the land. As he uncovers the truth about his past and the reason for his reincarnation, Kaito discovers that his role in this new world is more significant than he could have ever imagined. Follow his journey as he battles dark forces and comes to terms with his newfound destiny.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">23</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1011/111811l.webp" alt="Edens Zero">
                </div>
                <div class="details">
                    <a href="edens-zero"><h3>Edens Zero</h3></a>
                    <p>Action</p>
                    <p>2021</p>
                    <br>
                    <p>In Edens Zero, Shiki Granbell, a human raised by robots on the deserted Granbell Kingdom, embarks on a journey through space with his friends, Rebecca and Happy, aboard the spaceship Edens Zero. Seeking new adventures and forming bonds with different creatures, they explore various planets while searching for the elusive goddess known as Mother. Along the way, they encounter different challenges and adversaries, uncovering the mysteries of the cosmos.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">24</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1066/106556l.jpg" alt="The Millionaire Detective – Balance: UNLIMITED">
                </div>
                <div class="details">
                    <a href="the-millionaire-detective-%E2%80%93-balance%3A-unlimited"><h3>The Millionaire Detective – Balance: UNLIMITED</h3></a>
                    <p>Mystery</p>
                    <p>2020</p>
                    <br>
                    <p>When elite detective Daisuke Kambe joins the Modern Crime Prevention Task Force, his unorthodox methods clash with his partner Haru Kato's sense of justice. Together, they solve bizarre cases in the bustling city of Tokyo. But as they delve deeper into the mysteries surrounding Daisuke's fortune, they uncover a web of corruption and secrets that will test their partnership and values.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">25</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1446/91841l.jpg" alt="Tada Never Falls in Love">
                </div>
                <div class="details">
                    <a href="tada-never-falls-in-love"><h3>Tada Never Falls in Love</h3></a>
                    <p>Romance</p>
                    <p>2018</p>
                    <br>
                    <p>Tada Never Falls in Love follows Mitsuyoshi Tada, a high school student with a passion for photography. His life takes an unexpected turn when he meets Teresa Wagner, a foreign exchange student from Luxembourg. The two develop a close friendship as they navigate the complexities of their personal lives and relationships. As their bond strengthens, they discover the true meaning of love and friendship amidst various challenges and emotions.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">26</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/6/88286l.webp" alt="BLEND-S">
                </div>
                <div class="details">
                    <a href="blend-s"><h3>BLEND-S</h3></a>
                    <p>Comedy</p>
                    <p>2017</p>
                    <br>
                    <p>Maika Sakuranomiya is a high school student with a sadistic look in her eyes that often scares others away. Desperate to find a part-time job, she lands a position at Café Stile, a unique café where the waitresses play specific character roles. Despite her intimidating appearance, Maika is assigned the role of a sweet and submissive waitress, leading to amusing and chaotic interactions with her eccentric coworkers as they navigate the ups and downs of working in the service industry.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">27</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1799/137123l.webp" alt="Ron Kamonohashi's Forbidden Deductions">
                </div>
                <div class="details">
                    <a href="ron-kamonohashi%27s-forbidden-deductions"><h3>Ron Kamonohashi's Forbidden Deductions</h3></a>
                    <p>Mystery</p>
                    <p>2023</p>
                    <br>
                    <p>In this mystery anime, Ron Kamonohashi, a brilliant detective with a hidden past, is tasked with solving various enigmatic cases that are shrouded in secrecy. Using his exceptional deductive skills, Ron delves deep into the mysteries surrounding each case, unraveling the truth behind them one deduction at a time. As he uncovers the hidden motives and dark secrets of those involved, Ron must navigate through intricate webs of deceit and betrayal to bring justice to the truth.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">28</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/13/75653l.webp" alt="Hamatora The Animation">
                </div>
                <div class="details">
                    <a href="hamatora-the-animation"><h3>Hamatora The Animation</h3></a>
                    <p>Mystery</p>
                    <p>2014</p>
                    <br>
                    <p>Hamatora The Animation follows a group of individuals with superhuman abilities known as Minimum Holders. These individuals run a detective agency and take on various cases using their unique powers. As they delve deeper into their investigations, they uncover a dark conspiracy that threatens the balance of their world. With action-packed sequences and unexpected twists, the members of Hamatora must use their abilities to unravel the mysteries surrounding them.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/1346/141203l.jpg" alt="An Archdemon's Dilemma: How to Love Your Elf Bride">
                </div>
                <div class="details">
                    <a href="an-archdemon%27s-dilemma%3A-how-to-love-your-elf-bride"><h3>An Archdemon's Dilemma: How to Love Your Elf Bride</h3></a>
                    <p>Romance</p>
                    <p>2024</p>
                    <br>
                    <p>In a world where humans and demons coexist, the powerful archdemon named Zagan finds himself betrothed to an elf named Nephy. Despite their differences in race and nature, Zagan is determined to make their arranged marriage work. As they navigate through challenges and cultural clashes, Zagan must also protect Nephy from those who seek to harm her. Through their journey, they both discover the true meaning of love and companionship.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">30</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 68%;"></span>
                            </div>
                            <p>68% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/8/64897l.jpg" alt="Inari Kon Kon">
                </div>
                <div class="details">
                    <a href="inari-kon-kon"><h3>Inari Kon Kon</h3></a>
                    <p>Romance</p>
                    <p>2014</p>
                    <br>
                    <p>In Inari Kon Kon, a young girl named Inari saves a fox spirit from danger and is granted the ability to transform into anyone she wants. With her newfound power, Inari navigates her daily life, learning valuable lessons about friendship and self-acceptance along the way. As she tries to balance her ordinary life with extraordinary abilities, Inari must also come to terms with her own desires and insecurities.</p>
                </div>
            </div>

        </section>
    </main>
</body>
</html>
