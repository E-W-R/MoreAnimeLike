
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like A Sister's All You Need</title>
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
        <script>const number = "35413";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/10/88472l.jpg" alt="A Sister's All You Need">
                <div>
                    <h2 id="title">A Sister's All You Need</h2>
                    <p>Romance</p>
                    <p>2017</p>
                    <br>
                    <p>Itsuki Hashima is a popular light novel author with a unique quirk - he's obsessed with little sisters. Alongside his group of friends in the publishing industry, Itsuki navigates the ups and downs of the creative process, relationships, and personal growth. As they support each other in their careers and personal lives, they discover the true meaning of friendship and family.</p>
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
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/7/75191l.jpg" alt="Kekkaishi">
                </div>
                <div class="details">
                    <a href="kekkaishi"><h3>Kekkaishi</h3></a>
                    <p>Action</p>
                    <p>2006</p>
                    <br>
                    <p>Yoshimori Sumimura and Tokine Yukimura are young kekkaishi, warriors with the ability to create barriers to eliminate evil creatures. Tasked with protecting Karasumori, a powerful and mysterious land, they must battle Ayakashi, supernatural beings drawn to its energy. As they face increasing threats and uncover the secrets of Karasumori, the two cousins must navigate their responsibilities as kekkaishi and the challenges of their own complicated relationship.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/5/37533l.jpg" alt="Moyashimon">
                </div>
                <div class="details">
                    <a href="moyashimon"><h3>Moyashimon</h3></a>
                    <p>Comedy</p>
                    <p>2007</p>
                    <br>
                    <p>Moyashimon follows Tadayasu Sawaki, a college student who has the unique ability to see and communicate with microorganisms. Enrolling in an agricultural university, he befriends a group of eccentric individuals and uses his special talent to help solve various agricultural mysteries. As Tadayasu navigates the challenges of university life and builds lasting friendships, he continues to explore the fascinating world of microbes and their impact on the environment.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">3</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1429/115664l.jpg" alt="Corpse Princess: Aka">
                </div>
                <div class="details">
                    <a href="corpse-princess%3A-aka"><h3>Corpse Princess: Aka</h3></a>
                    <p>Action</p>
                    <p>2008</p>
                    <br>
                    <p>Makina Hoshimura is a Corpse Princess, a dead girl resurrected to hunt down evil undead creatures known as Shikabane. Driven by vengeance for her own murder, she teams up with a monk named Keisei in their quest for redemption and to eliminate the Shikabane threatening the living. As they face powerful enemies and uncover dark secrets, Makina's resolve is tested in a battle between her undead nature and her humanity.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">4</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/9/75225l.jpg" alt="Whispered Words">
                </div>
                <div class="details">
                    <a href="whispered-words"><h3>Whispered Words</h3></a>
                    <p>Comedy</p>
                    <p>2009</p>
                    <br>
                    <p>Whispered Words follows the story of two high school girls, Sumika and Ushio. Sumika is in love with Ushio, but Ushio is oblivious to Sumika's feelings and has a crush on cute boys instead. As Sumika struggles to navigate her unrequited love, the two girls grow closer and their friendship deepens. Through laughter and tears, they support each other through the ups and downs of adolescence, discovering more about themselves and each other along the way.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">5</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
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
                        <div class="rank">6</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
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
                        <div class="rank">7</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 68%;"></span>
                            </div>
                            <p>68% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1908/93416l.jpg" alt="Boarding School Juliet">
                </div>
                <div class="details">
                    <a href="boarding-school-juliet"><h3>Boarding School Juliet</h3></a>
                    <p>Romance</p>
                    <p>2018</p>
                    <br>
                    <p>In a world where two rival factions of students, the Black Dogs and the White Cats, vie for power, two star-crossed lovers find themselves caught in the middle. Romio, the leader of the Black Dogs, and Juliet, the leader of the White Cats, must hide their forbidden relationship from their peers while navigating the dangerous waters of high school politics. Will their love overcome the divide between their warring factions?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">8</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/2/62655l.jpg" alt="Invaders of the Rokujyoma!?">
                </div>
                <div class="details">
                    <a href="invaders-of-the-rokujyoma%21%3F"><h3>Invaders of the Rokujyoma!?</h3></a>
                    <p>Comedy</p>
                    <p>2014</p>
                    <br>
                    <p>After finding a perfect and affordable apartment, high schooler Kotaro moves in, only to realize his new home is already crowded – with a ghost, a magical girl, an alien princess, a girl with superhuman strength, and a underground dweller. As they all claim the apartment as their own, Kotaro finds himself in the middle of a cosmic conflict over the living space. Despite the chaos, they must learn to coexist and navigate their differences to live peacefully.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">9</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1263/119511l.jpg" alt="The Genius Prince's Guide to Raising a Nation Out of Debt">
                </div>
                <div class="details">
                    <a href="the-genius-prince%27s-guide-to-raising-a-nation-out-of-debt"><h3>The Genius Prince's Guide to Raising a Nation Out of Debt</h3></a>
                    <p>Comedy</p>
                    <p>2022</p>
                    <br>
                    <p>In a fantasy world where princes are expected to slay monsters, Prince Wein is different - he's a strategic genius. When the kingdom faces crippling debt, Wein proposes an unconventional solution: using his intelligence to navigate political intrigue and economic challenges in order to steer the nation towards prosperity. Will his brains be enough to save the kingdom, or will traditionalists stand in his way?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">10</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
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
                        <div class="rank">11</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
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
                        <div class="rank">12</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
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
                        <div class="rank">13</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1484/109365l.jpg" alt="The Gymnastics Samurai">
                </div>
                <div class="details">
                    <a href="the-gymnastics-samurai"><h3>The Gymnastics Samurai</h3></a>
                    <p>Sports</p>
                    <p>2020</p>
                    <br>
                    <p>The Gymnastics Samurai follows Jotaro Aragaki, a former Olympic gymnast who decides to make a comeback at an older age. Determined to defy expectations and prove his worth, Jotaro faces challenges both in and out of the gym as he navigates his relationships with his daughter and coach. With the support of his loved ones, Jotaro strives to achieve his ultimate goal while inspiring those around him with his passion and dedication to the sport.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">14</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
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
                        <div class="rank">15</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/60475l.jpg" alt="Nanana's Buried Treasure">
                </div>
                <div class="details">
                    <a href="nanana%27s-buried-treasure"><h3>Nanana's Buried Treasure</h3></a>
                    <p>Mystery</p>
                    <p>2014</p>
                    <br>
                    <p>In Nanana's Buried Treasure, Juugo Yama moves to an artificial island in search of a new life, only to discover it's filled with mysteries. Juugo encounters the ghost of Nanana, a former resident, who leads him on a quest to find her hidden treasures. Alongside other eccentric treasure hunters, Juugo delves into ancient ruins and faces formidable challenges in the race to uncover Nanana's valuable possessions.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">16</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
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
                        <div class="rank">17</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/2/74998l.jpg" alt="Muromi-san">
                </div>
                <div class="details">
                    <a href="muromi-san"><h3>Muromi-san</h3></a>
                    <p>Comedy</p>
                    <p>2013</p>
                    <br>
                    <p>Muromi-san follows the comedic adventures of Takurou Mukoujima, a high school boy who encounters Muromi, a mermaid with a mischievous personality. Despite their differing attitudes towards humans and the ocean, the two develop an unlikely friendship as they navigate various absurd and surreal situations together. With a mix of humor and fantasy, Muromi-san explores the quirky interactions between land and sea creatures in a lighthearted manner.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">18</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/8/2357l.webp" alt="Sumomomo Momomo: Chijou Saikyou no Yome">
                </div>
                <div class="details">
                    <a href="sumomomo-momomo%3A-chijou-saikyou-no-yome"><h3>Sumomomo Momomo: Chijou Saikyou no Yome</h3></a>
                    <p>Romance</p>
                    <p>2006</p>
                    <br>
                    <p>In Sumomomo Momomo: Chijou Saikyou no Yome, a powerful martial arts practitioner trains his son to take over the family dojo. However, his plans are turned upside down when he arranges for his son to marry a skilled but clumsy girl from a rival family. As the mismatched couple navigates their complicated relationship, they find themselves caught in a web of family politics, rivalries, and dangerous martial arts competitions. Can their love survive amidst the chaos?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">19</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1667/135309l.jpg" alt="X&Y">
                </div>
                <div class="details">
                    <a href="x%26y"><h3>X&Y</h3></a>
                    <p>Mystery</p>
                    <p>2023</p>
                    <br>
                    <p>In a world where humans coexist with supernatural beings known as Yōkai, a young guardian-in-training named Aiko unexpectedly forms a pact with a powerful Yōkai named Kaito. As they navigate the dangerous streets of their city, they uncover a conspiracy that threatens the balance between humans and Yōkai. With their bond growing stronger, Aiko and Kaito must confront their own pasts and face the challenges ahead to protect both worlds.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">20</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
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
                        <div class="rank">21</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/2/56939l.jpg" alt="The Pilot's Love Song">
                </div>
                <div class="details">
                    <a href="the-pilot%27s-love-song"><h3>The Pilot's Love Song</h3></a>
                    <p>Romance</p>
                    <p>2014</p>
                    <br>
                    <p>In a world divided by the mysterious End of the Sky, students at a prestigious flying academy must navigate the dangers that lie beyond the clouds. As the young pilot Karl finds himself entangled in a web of political intrigue and conflicting loyalties, he sets off on a journey to uncover the truth behind his family's past and the secrets of the enigmatic girl known as Claire. Will they discover the truth that lies hidden in the skies?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">22</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/7/54343l.jpg" alt="Outbreak Company">
                </div>
                <div class="details">
                    <a href="outbreak-company"><h3>Outbreak Company</h3></a>
                    <p>Isekai</p>
                    <p>2013</p>
                    <br>
                    <p>Shinichi Kanou, a hardcore otaku, is recruited by the Japanese government to promote otaku culture in a fantasy world. He must navigate political intrigue, cultural differences, and a language barrier to spread his love for anime, manga, and video games. As he immerses himself in this new world, Shinichi learns valuable lessons about acceptance, diversity, and the power of pop culture.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">23</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
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
                        <div class="rank">24</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/13/68705l.jpg" alt="Denki-gai">
                </div>
                <div class="details">
                    <a href="denki-gai"><h3>Denki-gai</h3></a>
                    <p>Comedy</p>
                    <p>2014</p>
                    <br>
                    <p>Denki-gai follows the daily lives of a group of quirky employees working at the manga store, Umanohone. As they navigate the challenges and joys of their jobs, they also develop close friendships and pursue their dreams in the world of manga. From eccentric customers to bizarre situations, the staff of Umanohone must band together to overcome obstacles and find happiness in their unique workplace.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">25</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/8/67047l.jpg" alt="When Supernatural Battles Became Commonplace">
                </div>
                <div class="details">
                    <a href="when-supernatural-battles-became-commonplace"><h3>When Supernatural Battles Became Commonplace</h3></a>
                    <p>Comedy</p>
                    <p>2014</p>
                    <br>
                    <p>Five high school students gain supernatural abilities, but soon realize they're not as exciting as they had hoped. As they try to navigate their new powers in their everyday lives, they uncover more about each other and themselves. With the sudden emergence of these abilities, the students must come to terms with the responsibilities that come with them and figure out how to use their powers for good.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">26</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/12/83157l.webp" alt="Garo Movie: Divine Flame">
                </div>
                <div class="details">
                    <a href="garo-movie%3A-divine-flame"><h3>Garo Movie: Divine Flame</h3></a>
                    <p>Action</p>
                    <p>2016</p>
                    <br>
                    <p>In Garo Movie: Divine Flame, León and Alfonso, Makai Knights tasked with protecting humanity from Horrors, face a new threat when a powerful Horror reemerges. As they work together to stop the creature's reign of terror, they are forced to confront their pasts and make difficult decisions to save the kingdom. With the fate of the world at stake, the two knights must muster all their strength and courage to emerge victorious.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">27</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/11/39249l.jpg" alt="The Ambition of Oda Nobuna">
                </div>
                <div class="details">
                    <a href="the-ambition-of-oda-nobuna"><h3>The Ambition of Oda Nobuna</h3></a>
                    <p>Action</p>
                    <p>2012</p>
                    <br>
                    <p>In The Ambition of Oda Nobuna, a high school student named Yoshiharu Sagara finds himself transported back in time to the Sengoku period. He encounters historical figures such as the famous warlord Oda Nobunaga, who in this alternate timeline is portrayed as a young girl named Nobuna. Yoshiharu decides to help Nobuna in her quest for power and unification of Japan, using his knowledge of history to change the course of events.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">28</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1444/140760l.jpg" alt="Comic Girls">
                </div>
                <div class="details">
                    <a href="comic-girls"><h3>Comic Girls</h3></a>
                    <p>Other Genre</p>
                    <p>2018</p>
                    <br>
                    <p>Four aspiring female manga artists live together in a dormitory to improve their skills and chase their dreams of becoming successful mangaka. Despite their different personalities and drawing styles, they navigate the challenges of the competitive industry, offering each other support and inspiration along the way. As they work hard to achieve their goals, they also bond over their shared passion for creating manga and form lasting friendships.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">29</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1711/133585l.webp" alt="Katte ni Kaizou">
                </div>
                <div class="details">
                    <a href="katte-ni-kaizou"><h3>Katte ni Kaizou</h3></a>
                    <p>Comedy</p>
                    <p>2011</p>
                    <br>
                    <p>Katte ni Kaizou follows the eccentric high school student Kaizou Katsuragi who is obsessed with modifying and enhancing everyday objects. With his outlandish inventions, Kaizou tries to make the world a better place but often ends up causing chaos instead. Along with his classmates and a mysterious girl named Umi, they embark on wacky misadventures while dealing with the repercussions of Kaizou's inventions.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">30</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 61%;"></span>
                            </div>
                            <p>61% Similarity</p>
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

        </section>
    </main>
</body>
</html>
