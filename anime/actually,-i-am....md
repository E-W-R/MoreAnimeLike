
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like Actually, I am...</title>
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
        <script>const number = "29785";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/8/74042l.jpg" alt="Actually, I am...">
                <div>
                    <h2 id="title">Actually, I am...</h2>
                    <p>Romance</p>
                    <p>2015</p>
                    <br>
                    <p>Actually, I Am is a charming anime about Asahi Kuromine, a high school student who is terrible at keeping secrets. One day, he discovers that his crush, Youko Shiragami, is actually a vampire. Determined to protect her secret, Asahi finds himself entangled with other classmates who also have supernatural identities. The series follows Asahi's efforts to keep these secrets while navigating the complexities of high school life, offering a mix of comedy, romance, and supernatural elements.</p>
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
                                <span style="width: 86%;"></span>
                            </div>
                            <p>86% Similarity</p>
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
                        <div class="rank">2</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 86%;"></span>
                            </div>
                            <p>86% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/7/73674l.webp" alt="Show By Rock!!">
                </div>
                <div class="details">
                    <a href="show-by-rock%21%21"><h3>Show By Rock!!</h3></a>
                    <p>Isekai</p>
                    <p>2015</p>
                    <br>
                    <p>Cyan, an introverted musician, is transported into a colorful world called Midi City, where music is everything. Joining the band Plasmagica, Cyan must navigate rival bands, Dark Monsters, and the pressure of music competitions. Through friendship and determination, Cyan and her bandmates aim to achieve musical stardom and protect Midi City from evil forces. Show By Rock!! is a lively and musical adventure filled with catchy tunes and adorable characters.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">3</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 83%;"></span>
                            </div>
                            <p>83% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/10/18299l.jpg" alt="Nyan Koi!">
                </div>
                <div class="details">
                    <a href="nyan-koi%21"><h3>Nyan Koi!</h3></a>
                    <p>Romance</p>
                    <p>2009</p>
                    <br>
                    <p>After breaking a cat statue, Junpei gains the ability to understand cats. In order to lift the curse, he must help 100 cats. Despite being allergic, he embarks on this quest while trying to keep his newfound talent a secret. With the assistance of his crush and fellow cat lover, Kaede, Junpei navigates between his affection for her and the chaos caused by the feline friends he finds himself surrounded by.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">4</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 83%;"></span>
                            </div>
                            <p>83% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/2/74878l.jpg" alt="Wakaba Girl">
                </div>
                <div class="details">
                    <a href="wakaba-girl"><h3>Wakaba Girl</h3></a>
                    <p>Other Genre</p>
                    <p>2015</p>
                    <br>
                    <p>Wakaba Girl follows the everyday life of four high school girls— Wakaba, Moeko, Mao, and Nao— as they navigate school, friendship, and their individual interests. Despite their contrasting personalities, the girls form a close bond and support each other through the ups and downs of adolescence. The series focuses on the comedic and heartwarming moments that arise from their interactions and experiences as they grow and learn together.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">5</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 83%;"></span>
                            </div>
                            <p>83% Similarity</p>
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

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">6</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 80%;"></span>
                            </div>
                            <p>80% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/9/75230l.jpg" alt="A Good Librarian Like a Good Shepherd">
                </div>
                <div class="details">
                    <a href="a-good-librarian-like-a-good-shepherd"><h3>A Good Librarian Like a Good Shepherd</h3></a>
                    <p>Romance</p>
                    <p>2014</p>
                    <br>
                    <p>Kyoutarou Kakei is a high school guy who works as a librarian. One day, he meets a mysterious girl named Tsugumi Shirasaki, who has lost all her memories. Kyoutarou decides to help her uncover her past and they both get involved in a series of adventures filled with books, secrets, and supernatural occurrences. As they navigate through challenges and mysteries, they form a deep bond that transcends their initial meeting.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">7</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 80%;"></span>
                            </div>
                            <p>80% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1174/113554l.webp" alt="Selection Project">
                </div>
                <div class="details">
                    <a href="selection-project"><h3>Selection Project</h3></a>
                    <p>Other Genre</p>
                    <p>2021</p>
                    <br>
                    <p>Selection Project follows a group of aspiring idols who compete in a prestigious singing competition to achieve their dreams of stardom. As they navigate through various challenges and training sessions, the contestants form friendships and rivalries while showcasing their talents on stage. With each episode bringing new performances and emotional moments, the series captures the passion and dedication of these young performers as they strive to stand out and make their mark in the competitive world of idol entertainment.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">8</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 78%;"></span>
                            </div>
                            <p>78% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/9/84266l.webp" alt="Love Tyrant">
                </div>
                <div class="details">
                    <a href="love-tyrant"><h3>Love Tyrant</h3></a>
                    <p>Romance</p>
                    <p>2017</p>
                    <br>
                    <p>When an angelic cupid mistakenly marks high school student Seiji as a love tyrant, his life is turned upside down. He is now forced to kiss his classmate Guri, a clumsy cupid, or face deadly consequences. As Seiji navigates his unusual new love life, he is introduced to other supernatural beings and in the process realizes the true meaning of love and relationships. Join Seiji and Guri in this wacky romantic comedy full of unexpected twists and hilarious encounters.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">9</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 78%;"></span>
                            </div>
                            <p>78% Similarity</p>
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
                        <div class="rank">10</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 78%;"></span>
                            </div>
                            <p>78% Similarity</p>
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

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">11</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 78%;"></span>
                            </div>
                            <p>78% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/79414l.webp" alt="And you thought there is never a girl online?">
                </div>
                <div class="details">
                    <a href="and-you-thought-there-is-never-a-girl-online%3F"><h3>And you thought there is never a girl online?</h3></a>
                    <p>Romance</p>
                    <p>2016</p>
                    <br>
                    <p>In the anime And you thought there is never a girl online?, a high school student named Hideki Nishimura, who is obsessed with online RPGs, falls in love with a female character in the game. Upon discovering that his in-game wife is actually a man in real life, he vows to never trust a girl online again. However, he later meets three girls in his school's gaming club who challenge his beliefs about online relationships.</p>
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
                        <div class="rank">13</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 78%;"></span>
                            </div>
                            <p>78% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1462/98802l.jpg" alt="Yuuna and the Haunted Hot Springs">
                </div>
                <div class="details">
                    <a href="yuuna-and-the-haunted-hot-springs"><h3>Yuuna and the Haunted Hot Springs</h3></a>
                    <p>Romance</p>
                    <p>2018</p>
                    <br>
                    <p>Fuyuzora Kogarashi is a high school student haunted by spirits. In search of affordable housing, he moves into Yuragi-sou, a hot springs inn rumored to be haunted. There, he meets Yuuna, a sweet ghost unable to move on. Determined to help her pass on peacefully, Kogarashi decides to stay and protect the inn's residents from supernatural dangers. Along the way, he forms bonds with fellow tenants and discovers the secrets of Yuragi-sou.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/9/76542l.jpg" alt="Shomin Sample">
                </div>
                <div class="details">
                    <a href="shomin-sample"><h3>Shomin Sample</h3></a>
                    <p>Romance</p>
                    <p>2015</p>
                    <br>
                    <p>Kimito Kagurazaka is an ordinary high school student until he is kidnapped and transferred to an elite all-girls school where the students have no knowledge of the outside world. To prevent panic, Kimito must pretend to be a commoner and teach the girls about life beyond their sheltered environment. With challenges and misunderstandings aplenty, Kimito navigates his unusual situation while trying to uphold his secret and keep the girls from finding out the truth.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/4/56141l.jpg" alt="Unbreakable Machine-Doll">
                </div>
                <div class="details">
                    <a href="unbreakable-machine-doll"><h3>Unbreakable Machine-Doll</h3></a>
                    <p>Action</p>
                    <p>2013</p>
                    <br>
                    <p>In an alternate Steampunk world, puppeteer students at Walpurgis Royal Academy control humanoid automatons to battle each other. Raishin Akabane, a skilled puppeteer with a mysterious past, seeks revenge against those responsible for his family's downfall. With his doll Yaya by his side, Raishin enters the Mage's Society's prestigious Night Party tournament to confront his enemies and uncover dark secrets. The competition is fierce as Raishin faces formidable opponents, testing his skills and determination to emerge victorious.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">16</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
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
                        <div class="rank">17</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/12/78265l.jpg" alt="My Wife is the Student Council President OVA">
                </div>
                <div class="details">
                    <a href="my-wife-is-the-student-council-president-ova"><h3>My Wife is the Student Council President OVA</h3></a>
                    <p>Romance</p>
                    <p>2016</p>
                    <br>
                    <p>In My Wife is the Student Council President OVA, follow the comedic and slightly spicy adventures of Hayato Izumi and Ui Wakana as they navigate their roles as student council president and vice president, and deal with the challenges and misunderstandings that come with their positions. With the school's strict rules and the unexpected situations they find themselves in, Hayato and Ui must work together to keep the student council running smoothly while trying to keep their relationship a secret.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/1443/110157l.jpg" alt="Dr. Ramune -Mysterious Disease Specialist-">
                </div>
                <div class="details">
                    <a href="dr.-ramune--mysterious-disease-specialist-"><h3>Dr. Ramune -Mysterious Disease Specialist-</h3></a>
                    <p>Mystery</p>
                    <p>2021</p>
                    <br>
                    <p>Dr. Ramune is a brilliant and eccentric doctor who specializes in treating patients with mysterious and supernatural illnesses. Alongside his reluctant assistant, Kero, he encounters a variety of unusual cases that cannot be explained by modern medicine. With his unorthodox methods and compassionate approach, Dr. Ramune delves into the heart of each patient's affliction to uncover the underlying cause and provide healing in ways that go beyond the physical realm.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">19</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/83995l.jpg" alt="Armed Girl's Machiavellism">
                </div>
                <div class="details">
                    <a href="armed-girl%27s-machiavellism"><h3>Armed Girl's Machiavellism</h3></a>
                    <p>Action</p>
                    <p>2017</p>
                    <br>
                    <p>Fudo Nomura enrolls in Aichi Coexist Academy, where girls carry weapons to control the male students. Refusing to conform, Nomura challenges the Supreme Five Swords in duels to maintain his independence and protect his friends. As he faces powerful opponents with unique combat styles, he uncovers the truth behind the academy's strict rules and seeks to bring about change while navigating complex relationships.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">20</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
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
                        <div class="rank">21</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/6/76211l.webp" alt="Anti-Magic Academy: The 35th Test Platoon">
                </div>
                <div class="details">
                    <a href="anti-magic-academy%3A-the-35th-test-platoon"><h3>Anti-Magic Academy: The 35th Test Platoon</h3></a>
                    <p>Action</p>
                    <p>2015</p>
                    <br>
                    <p>In a world where magic is feared, Takeru Kusanagi leads the Anti-Magic Academy's weakest platoon. As they work to improve their skills and reputation, a powerful witch threatens their school. Takeru and his teammates must band together to overcome their differences and harness their unique strengths to protect the academy from the looming threat.</p>
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
                        <div class="rank">23</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
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
                        <div class="rank">24</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/6/20621l.jpg" alt="Samurai Harem">
                </div>
                <div class="details">
                    <a href="samurai-harem"><h3>Samurai Harem</h3></a>
                    <p>Action</p>
                    <p>2009</p>
                    <br>
                    <p>After losing his mother, a high school student is sent to live at a martial arts dojo run by his grandfather. Surrounded by a group of skilled and beautiful female fighters, he must navigate the challenges of mastering the way of the sword while dealing with the affections of his new classmates. As he hones his skills and forms unexpected bonds, he discovers a deeper connection to his family's samurai legacy.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">25</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
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
                        <div class="rank">26</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 71%;"></span>
                            </div>
                            <p>71% Similarity</p>
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
                        <div class="rank">27</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 71%;"></span>
                            </div>
                            <p>71% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1456/94897l.jpg" alt="Sirius the Jaeger">
                </div>
                <div class="details">
                    <a href="sirius-the-jaeger"><h3>Sirius the Jaeger</h3></a>
                    <p>Action</p>
                    <p>2018</p>
                    <br>
                    <p>In Sirius the Jaeger, a group of vampire hunters called Jaegers is on a mission to hunt down vampires that have infiltrated Tokyo. Yuliy, a young werewolf and one of the last surviving members of the Sirius werewolf tribe, joins forces with the Jaegers to seek revenge against the vampires responsible for the destruction of his home. As the intense battle between the Jaegers and vampires escalates, dark secrets and ancient prophecies are revealed.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/1083/124088l.webp" alt="Phantom of the Idol">
                </div>
                <div class="details">
                    <a href="phantom-of-the-idol"><h3>Phantom of the Idol</h3></a>
                    <p>Comedy</p>
                    <p>2022</p>
                    <br>
                    <p>In a world where idols are cultural icons, a mysterious figure known as the Phantom of the Idol appears, sabotaging the careers of top idols. Aspiring idol Hikari sets out to uncover the truth behind the phantom's actions, only to find herself entangled in a web of deception and rivalry within the competitive idol industry. With the help of her friends and fellow idols, Hikari must navigate this treacherous world to protect her dreams and uncover the identity of the phantom.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">29</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 71%;"></span>
                            </div>
                            <p>71% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/7/46119l.jpg" alt="Sola">
                </div>
                <div class="details">
                    <a href="sola"><h3>Sola</h3></a>
                    <p>Romance</p>
                    <p>2007</p>
                    <br>
                    <p>High school student Yorito meets a mysterious girl named Matsuri who has the power to control the weather. As they become closer, he discovers her tragic past and the dark secret surrounding her existence. Their bond is tested as they try to protect each other from dangerous forces and unravel the mysteries of Matsuri's supernatural abilities. Friendship, sacrifice, and the power of memories are at the core of this emotional tale.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">30</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 71%;"></span>
                            </div>
                            <p>71% Similarity</p>
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

        </section>
    </main>
</body>
</html>
