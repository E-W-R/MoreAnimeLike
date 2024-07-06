
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like Given</title>
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
        <script>const number = "39533";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/1666/102238l.jpg" alt="Given">
                <div>
                    <h2 id="title">Given</h2>
                    <p>Drama</p>
                    <p>2019</p>
                    <br>
                    <p>In a post-apocalyptic world where humanity lives in fear of mysterious creatures known as Ophanims, a group of skilled individuals known as Givers risk their lives to deliver supplies between the few remaining human settlements. Among them, a young and determined Giver named Sora discovers a dark secret that could change everything. As Sora and his companions embark on dangerous missions and uncover the truth behind the Ophanims, they must confront their pasts and face the harsh reality of their world.</p>
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
                                <span style="width: 96%;"></span>
                            </div>
                            <p>96% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1583/108598l.jpg" alt="The Legend of Hei">
                </div>
                <div class="details">
                    <a href="the-legend-of-hei"><h3>The Legend of Hei</h3></a>
                    <p>Drama</p>
                    <p>2019</p>
                    <br>
                    <p>The Legend of Hei follows a powerful yet playful cat spirit as he befriends a kind-hearted human girl. As they journey together through a world filled with magic and danger, they must confront dark forces and protect the balance of nature. With stunning animation and thrilling action sequences, this anime explores the bond between humans and spirits in a captivating and enchanting way.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">2</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1464/108330l.jpg" alt="Moriarty the Patriot">
                </div>
                <div class="details">
                    <a href="moriarty-the-patriot"><h3>Moriarty the Patriot</h3></a>
                    <p>Mystery</p>
                    <p>2020</p>
                    <br>
                    <p>In Moriarty the Patriot, a young William James Moriarty roams the streets of London, using his brilliant mind to orchestrate elaborate schemes to bring justice to those failed by the corrupt British government. With his loyal companions, he navigates through the aristocratic society, challenging the oppressive class system in place. As his reputation grows, Moriarty's schemes become increasingly intricate, leading him on a path towards uncovering dark truths and secrets hidden within society.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">3</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1549/119195l.webp" alt="SK8 the Infinity">
                </div>
                <div class="details">
                    <a href="sk8-the-infinity"><h3>SK8 the Infinity</h3></a>
                    <p>Sports</p>
                    <p>2021</p>
                    <br>
                    <p>Reki, a high school student who loves skateboarding, meets a transfer student named Langa, who is a snowboarder. The two form an unlikely bond and get drawn into the underground skateboard racing scene known as S. With intense races, unique skateboard designs, and rivalries aplenty, Reki and Langa set out to conquer the dangerous downhill courses and become the best skateboarders in the world.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">4</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1319/109301l.jpg" alt="Heaven Official's Blessing">
                </div>
                <div class="details">
                    <a href="heaven-official%27s-blessing"><h3>Heaven Official's Blessing</h3></a>
                    <p>Action</p>
                    <p>2020</p>
                    <br>
                    <p>Heaven Official's Blessing follows Xie Lian, a once-revered prince who has been banished to the mortal realm. Despite his fall from grace, Xie Lian remains dedicated to helping others and fighting evil spirits. When he meets mysterious demon king Hua Cheng, they embark on a journey filled with supernatural challenges, dangerous enemies, and deepening emotions. Together, they must navigate a treacherous world to uncover dark secrets and protect the innocent.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">5</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 58%;"></span>
                            </div>
                            <p>58% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1253/93893l.jpg" alt="The Founder of Diabolism">
                </div>
                <div class="details">
                    <a href="the-founder-of-diabolism"><h3>The Founder of Diabolism</h3></a>
                    <p>Action</p>
                    <p>2018</p>
                    <br>
                    <p>Wei Wuxian, a talented cultivator ostracized by his peers, returns from death to unravel mysteries and fight evil spirits with his former rival, Lan Wangji. Together, they navigate politics and dark secrets in a world plagued by darkness. As they confront their past and enemies, they strive to restore peace and justice.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">6</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 56%;"></span>
                            </div>
                            <p>56% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1864/93518l.jpg" alt="Wotakoi: Love is Hard for Otaku">
                </div>
                <div class="details">
                    <a href="wotakoi%3A-love-is-hard-for-otaku"><h3>Wotakoi: Love is Hard for Otaku</h3></a>
                    <p>Romance</p>
                    <p>2018</p>
                    <br>
                    <p>After discovering they are both otaku, childhood friends Narumi and Hirotaka navigate the ups and downs of dating while working at the same company. Their unique bond grows as they explore their shared interests in video games, manga, and cosplay. Alongside their quirky friends, they learn that love can be challenging even for two people who seem to understand each other so well.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">7</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 55%;"></span>
                            </div>
                            <p>55% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1518/138730l.jpg" alt="Skip and Loafer">
                </div>
                <div class="details">
                    <a href="skip-and-loafer"><h3>Skip and Loafer</h3></a>
                    <p>Drama</p>
                    <p>2023</p>
                    <br>
                    <p>Skip and Loafer follows the story of Mitsumi Iwakura, a small-town girl with big dreams of attending a prestigious high school in Tokyo. As she navigates the challenges of city life and high school, she meets Sousuke Shima, a laid-back and popular classmate. Despite their contrasting personalities, the two form an unlikely friendship, supporting each other through the ups and downs of teenage life. The series explores themes of ambition, friendship, and self-discovery, blending humor and heartfelt moments.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">8</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 55%;"></span>
                            </div>
                            <p>55% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1764/142001l.jpg" alt="Romantic Killer">
                </div>
                <div class="details">
                    <a href="romantic-killer"><h3>Romantic Killer</h3></a>
                    <p>Romance</p>
                    <p>2022</p>
                    <br>
                    <p>In Romantic Killer, detective Kaito must track down a mysterious assassin known as The Rose who leaves behind a single red rose at every crime scene. Things take a surprising turn when Kaito discovers that The Rose has a romantic connection to each of their targets. As the body count rises, Kaito must confront his own feelings for a woman who may be more than she seems. Can love bloom even in the midst of danger and death?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">9</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 55%;"></span>
                            </div>
                            <p>55% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1854/106930l.jpg" alt="All Saints Street">
                </div>
                <div class="details">
                    <a href="all-saints-street"><h3>All Saints Street</h3></a>
                    <p>Comedy</p>
                    <p>2020</p>
                    <br>
                    <p>All Saints Street follows the daily life of a group of supernatural beings living amongst humans in a bustling city. As they navigate through quirky adventures, mysterious incidents, and heartwarming moments, they form bonds and uncover the secrets of their existence. The series combines elements of comedy, supernatural, and slice of life genres, showcasing the unique dynamics between humans and otherworldly creatures in an urban setting.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">10</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 53%;"></span>
                            </div>
                            <p>53% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/6/81149l.webp" alt="Yuri!!! On ICE">
                </div>
                <div class="details">
                    <a href="yuri%21%21%21-on-ice"><h3>Yuri!!! On ICE</h3></a>
                    <p>Sports</p>
                    <p>2016</p>
                    <br>
                    <p>After suffering a crushing defeat in figure skating, Yuri Katsuki decides to take a break from the sport. When his idol, world champion Victor Nikiforov, arrives at his hometown, everything changes. Victor offers to coach Yuri and help him make a comeback. As they train together, their bond grows stronger, and they face fierce competition from other skaters aiming for glory at the Grand Prix. Will Yuri be able to conquer his self-doubt and claim victory on the ice?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">11</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 53%;"></span>
                            </div>
                            <p>53% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1123/134677l.jpg" alt="Play It Cool, Guys">
                </div>
                <div class="details">
                    <a href="play-it-cool%2C-guys"><h3>Play It Cool, Guys</h3></a>
                    <p>Other Genre</p>
                    <p>2022</p>
                    <br>
                    <p>In Play It Cool, Guys, a group of high school friends navigates the ups and downs of teenage life while juggling their various personalities and interests. From school projects and crushes to friendships and rivalries, the group must find a way to balance it all and stay true to themselves as they grow and learn more about each other. Bonding over their shared experiences, they bring out the best in each other and form unbreakable connections that shape their futures.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">12</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 53%;"></span>
                            </div>
                            <p>53% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1190/93472l.jpg" alt="Banana Fish">
                </div>
                <div class="details">
                    <a href="banana-fish"><h3>Banana Fish</h3></a>
                    <p>Action</p>
                    <p>2018</p>
                    <br>
                    <p>Banana Fish follows the story of Ash Lynx, a young gang leader in New York City, and Eiji Okumura, a Japanese photographer. Their lives become intertwined as they uncover the dark secrets behind a mysterious drug called Banana Fish. Together, they navigate through the dangerous underground world of organized crime and corruption, as they seek to unravel the truth behind the conspiracy and protect each other from those who wish to silence them.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">13</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 53%;"></span>
                            </div>
                            <p>53% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1862/121020l.jpg" alt="Kotaro Lives Alone">
                </div>
                <div class="details">
                    <a href="kotaro-lives-alone"><h3>Kotaro Lives Alone</h3></a>
                    <p>Other Genre</p>
                    <p>2022</p>
                    <br>
                    <p>Kotaro Lives Alone is a heartwarming and humorous anime about Kotaro Sato, a remarkably independent four-year-old boy who moves into an apartment complex on his own. Despite his young age, Kotaro is mature beyond his years and quickly befriends his neighbors, including the struggling manga artist Shin Karino. Through their interactions, the series explores themes of resilience, community, and the unexpected ways people can support and care for one another.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">14</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 53%;"></span>
                            </div>
                            <p>53% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1985/95103l.jpg" alt="Planet With">
                </div>
                <div class="details">
                    <a href="planet-with"><h3>Planet With</h3></a>
                    <p>Action</p>
                    <p>2018</p>
                    <br>
                    <p>When a high school student named Souya is drawn into a battle between seven super-powered individuals and a mysterious alien force, he discovers he has forgotten his own memories. Forced to confront his past and choose between revenge and forgiveness, Souya must navigate complex relationships and unearth the truth behind the conflict threatening Earth. With the help of his eccentric allies and a powerful mech, he must confront his own inner turmoil to protect the planet.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">15</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 53%;"></span>
                            </div>
                            <p>53% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1360/93571l.jpg" alt="Tsurune: Kazemai High School Kyudo Club">
                </div>
                <div class="details">
                    <a href="tsurune%3A-kazemai-high-school-kyudo-club"><h3>Tsurune: Kazemai High School Kyudo Club</h3></a>
                    <p>Sports</p>
                    <p>2018</p>
                    <br>
                    <p>Kazemai High School's Kyudo Club, once a powerhouse, is struggling to regain its former glory. Minato Narumiya, a former archery prodigy who lost his passion for the sport, joins the club alongside his childhood friends. Together, they work to overcome their individual struggles and aim for success in the upcoming tournament. Through dedication, friendship, and self-discovery, the members of the Kyudo Club learn valuable lessons both on and off the archery range.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">16</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 51%;"></span>
                            </div>
                            <p>51% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1145/90880l.jpg" alt="Golden Kamuy">
                </div>
                <div class="details">
                    <a href="golden-kamuy"><h3>Golden Kamuy</h3></a>
                    <p>Action</p>
                    <p>2018</p>
                    <br>
                    <p>In Golden Kamuy, a tale set in early 20th-century Japan, Sugimoto, a veteran from the Russo-Japanese war, teams up with an Ainu girl named Asirpa to search for hidden Ainu gold. The treasure's location is split into pieces, each marked on a convict's body as tattoos. Together, they navigate dangers, including rival treasure hunters and harsh terrain. Through their journey, they uncover secrets of the past and form unlikely alliances to survive in the unforgiving wilderness.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">17</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 51%;"></span>
                            </div>
                            <p>51% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/7/72531l.webp" alt="Miss Hokusai">
                </div>
                <div class="details">
                    <a href="miss-hokusai"><h3>Miss Hokusai</h3></a>
                    <p>Drama</p>
                    <p>2015</p>
                    <br>
                    <p>Miss Hokusai follows the life of O-Ei, the talented daughter of the renowned Japanese artist Hokusai. Set in the vibrant city of Edo (now Tokyo) in the 19th century, the film explores O-Ei's struggles and triumphs as an artist in her own right, navigating her complicated relationship with her father and the dynamic world of art around her. Through her unique perspective, O-Ei uncovers the beauty and complexities of the world through her stunning artwork.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">18</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 50%;"></span>
                            </div>
                            <p>50% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1015/90727l.jpg" alt="Yotsuiro Biyori">
                </div>
                <div class="details">
                    <a href="yotsuiro-biyori"><h3>Yotsuiro Biyori</h3></a>
                    <p>Other Genre</p>
                    <p>2018</p>
                    <br>
                    <p>Yotsuiro Biyori follows the story of four men who run a traditional Japanese tea house in Kyoto. Each episode focuses on different customers who visit the tea house seeking comfort and solace from their everyday lives. The tea house becomes a serene escape where customers can reflect on their past, present, and future. As the four men provide warm hospitality and delicious tea, they also offer a listening ear and heartfelt advice to help those who seek their guidance.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">19</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 50%;"></span>
                            </div>
                            <p>50% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1009/103187l.jpg" alt="Welcome to Demon School! Iruma-kun">
                </div>
                <div class="details">
                    <a href="welcome-to-demon-school%21-iruma-kun"><h3>Welcome to Demon School! Iruma-kun</h3></a>
                    <p>Isekai</p>
                    <p>2019</p>
                    <br>
                    <p>Iruma Suzuki, a kind-hearted and overworked teenage boy, finds himself sold to a demon by his irresponsible parents. To his surprise, the demon he is sent to live with, Sullivan, is caring and enrolls him in the demon school. Trying to keep his human identity a secret, Iruma navigates the challenges of demon school life while making friends and unintentionally becoming popular. Follow his hilarious and heartwarming adventures as he discovers his place in the demon world.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">20</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 50%;"></span>
                            </div>
                            <p>50% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1424/113342l.jpg" alt="Shadows House">
                </div>
                <div class="details">
                    <a href="shadows-house"><h3>Shadows House</h3></a>
                    <p>Mystery</p>
                    <p>2021</p>
                    <br>
                    <p>In Shadows House, living dolls serve as the faces for the shadow aristocrats, who are beings made of soot and ash. A young living doll named Emilico begins serving Kate, a shadow aristocrat who seems to hide many secrets within the mysterious mansion they both reside in. As Emilico navigates her duties and uncovers the truth behind the shadows, she learns more about her own identity and the dark history of the Shadows Household.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">21</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 48%;"></span>
                            </div>
                            <p>48% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/7/48723l.webp" alt="Saint☆Young Men (Movie)">
                </div>
                <div class="details">
                    <a href="saint%E2%98%86young-men-%28movie%29"><h3>Saint☆Young Men (Movie)</h3></a>
                    <p>Comedy</p>
                    <p>2013</p>
                    <br>
                    <p>Saint☆Young Men follows the comedic daily life adventures of Jesus Christ and Gautama Buddha as they take a vacation on Earth and live together in a small apartment in Tokyo. Despite their divine backgrounds, they attempt to blend in with human society while dealing with the challenges and hilarity that come with it. The movie explores the unique dynamics of their friendship and the humorous situations that arise as they navigate modern life in Japan.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">22</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 48%;"></span>
                            </div>
                            <p>48% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1048/128385l.webp" alt="Kakushigoto">
                </div>
                <div class="details">
                    <a href="kakushigoto"><h3>Kakushigoto</h3></a>
                    <p>Comedy</p>
                    <p>2020</p>
                    <br>
                    <p>Kakushi Goto is a heartwarming slice-of-life anime following the secret life of a famous manga artist and his young daughter, Hime. Despite his success, Kakushi works hard to keep his job hidden from Hime to protect her innocence. As he navigates the challenges of fatherhood and the pressures of his profession, Kakushi must juggle his double life while cherishing the precious moments he shares with his beloved daughter.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">23</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 48%;"></span>
                            </div>
                            <p>48% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1298/134178l.jpg" alt="My Love Story with Yamada-kun at Lv999">
                </div>
                <div class="details">
                    <a href="my-love-story-with-yamada-kun-at-lv999"><h3>My Love Story with Yamada-kun at Lv999</h3></a>
                    <p>Romance</p>
                    <p>2023</p>
                    <br>
                    <p>In this heartwarming romantic comedy, a high school boy named Yamada unexpectedly finds himself in an online game world where he meets a powerful female player named Lv999. Despite their different backgrounds and in-game levels, the two form a unique bond and set off on a virtual adventure together. As Yamada and Lv999 navigate challenges and quests, their connection deepens, leading to unexpected developments both in the game and in the real world.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">24</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 48%;"></span>
                            </div>
                            <p>48% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1464/99881l.webp" alt="Kono Oto Tomare!: Sounds of Life">
                </div>
                <div class="details">
                    <a href="kono-oto-tomare%21%3A-sounds-of-life"><h3>Kono Oto Tomare!: Sounds of Life</h3></a>
                    <p>Drama</p>
                    <p>2019</p>
                    <br>
                    <p>After the koto club's reputation is tarnished, a new member joins to change their fortunes. Hozuki, a stoic and talented player, helps the club heal and grow as they aim to compete in national competitions. Together, they confront their pasts, navigate friendships, and strive to create beautiful music with the koto, a traditional Japanese string instrument. Through harmony and dedication, the club members find solace, purpose, and connection in the sounds of their music.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">25</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 48%;"></span>
                            </div>
                            <p>48% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1630/138388l.jpg" alt="My New Boss Is Goofy">
                </div>
                <div class="details">
                    <a href="my-new-boss-is-goofy"><h3>My New Boss Is Goofy</h3></a>
                    <p>Other Genre</p>
                    <p>2023</p>
                    <br>
                    <p>When Kira Maruyama starts her dream job at a prestigious company, she is shocked to discover that her new boss is none other than Takumi Kato, a playful and carefree man known for his goofy antics. Despite their contrasting personalities, Kira is determined to prove herself as a capable employee. As they navigate the challenges of the workplace together, they form an unexpected bond that transcends their initial impressions.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">26</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 48%;"></span>
                            </div>
                            <p>48% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/8/89978l.jpg" alt="School Babysitters">
                </div>
                <div class="details">
                    <a href="school-babysitters"><h3>School Babysitters</h3></a>
                    <p>Other Genre</p>
                    <p>2018</p>
                    <br>
                    <p>After losing their parents in a tragic accident, two brothers are taken in by the chairman of a prestigious academy under the condition that the older brother join the school's daycare program. With an eccentric group of toddlers under their care, the brothers navigate the challenges of balancing school life, babysitting duties, and their own personal struggles. Through heartwarming moments and unexpected friendships, they learn valuable lessons about love, family, and responsibility.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">27</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 46%;"></span>
                            </div>
                            <p>46% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1447/99827l.webp" alt="Fruits Basket 1st Season">
                </div>
                <div class="details">
                    <a href="fruits-basket-1st-season"><h3>Fruits Basket 1st Season</h3></a>
                    <p>Romance</p>
                    <p>2019</p>
                    <br>
                    <p>Tohru Honda, an orphaned high school student, decides to live in a tent in the woods after her mother's passing. She is discovered by the mysterious Soma family, who offers her a place to stay in exchange for housekeeping. Tohru soon discovers the family's secret: they are cursed by the Chinese zodiac animals, turning into them when hugged by the opposite gender. As she becomes closer with the Somas, she uncovers their emotional baggage and strives to break the curse.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">28</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 46%;"></span>
                            </div>
                            <p>46% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/10/82343l.jpg" alt="Poco's Udon World">
                </div>
                <div class="details">
                    <a href="poco%27s-udon-world"><h3>Poco's Udon World</h3></a>
                    <p>Other Genre</p>
                    <p>2016</p>
                    <br>
                    <p>After the death of his father, Souta returns to his hometown to close the family udon shop. When he discovers a mysterious boy named Poco with supernatural abilities hiding in the shop, Souta decides to take care of him. As Souta juggles between managing the shop and unraveling Poco's secrets, he learns valuable life lessons and the true importance of family bonds.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">29</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 46%;"></span>
                            </div>
                            <p>46% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/9/64225l.webp" alt="Yona of the Dawn">
                </div>
                <div class="details">
                    <a href="yona-of-the-dawn"><h3>Yona of the Dawn</h3></a>
                    <p>Romance</p>
                    <p>2014</p>
                    <br>
                    <p>After her father, the king, is killed, Princess Yona is forced to flee for her life with her loyal bodyguard, Hak. Determined to reclaim her throne, Yona sets out on a journey to find the four legendary dragon warriors who can help her. Along the way, she discovers courage, love, and the true meaning of strength. Yona's quest for justice and redemption unfolds in a tale of action, adventure, and self-discovery in Yona of the Dawn.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">30</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 46%;"></span>
                            </div>
                            <p>46% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1401/118483l.jpg" alt="The Case Study of Vanitas">
                </div>
                <div class="details">
                    <a href="the-case-study-of-vanitas"><h3>The Case Study of Vanitas</h3></a>
                    <p>Mystery</p>
                    <p>2021</p>
                    <br>
                    <p>In a world where vampires and humans coexist, a young vampire named Noé is searching for a mysterious grimoire known as The Book of Vanitas that is said to bring chaos to the vampire society. With the help of a human doctor named Vanitas, who claims to be a vampire expert, they embark on a journey filled with dark secrets, supernatural creatures, and unexpected alliances. As they delve deeper into the truth behind the book, they unravel a conspiracy that threatens the balance between humans and vampires.</p>
                </div>
            </div>

        </section>
    </main>
</body>
</html>
