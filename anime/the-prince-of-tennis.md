
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like The Prince of Tennis</title>
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
        <script>const number = "22";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/6/21624l.jpg" alt="The Prince of Tennis">
                <div>
                    <h2 id="title">The Prince of Tennis</h2>
                    <p>Sports</p>
                    <p>2001</p>
                    <br>
                    <p>The Prince of Tennis follows the story of Ryoma Echizen, a young tennis prodigy who joins the Seishun Academy tennis team. Despite his small stature, Ryoma possesses incredible skill and determination on the court as he navigates challenging matches and forms bonds with his teammates. With intense training and fierce competition, Ryoma aims to become one of the best tennis players in the country.</p>
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
                                <span style="width: 81%;"></span>
                            </div>
                            <p>81% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1056/109721l.jpg" alt="Getbackers">
                </div>
                <div class="details">
                    <a href="getbackers"><h3>Getbackers</h3></a>
                    <p>Mystery</p>
                    <p>2002</p>
                    <br>
                    <p>Ban Mido and Ginji Amano run a unique retrieval service called the Getbackers. With Ban's ability to create illusions and Ginji's control over electricity, they take on various jobs to recover lost or stolen items for their clients. Their reputation for always completing a job no matter how dangerous, leads them on thrilling adventures filled with action and mystery. Along the way, they uncover dark secrets and face formidable foes as they strive to complete each mission successfully.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">2</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 80%;"></span>
                            </div>
                            <p>80% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1380/139745l.jpg" alt="The Witch and the Beast">
                </div>
                <div class="details">
                    <a href="the-witch-and-the-beast"><h3>The Witch and the Beast</h3></a>
                    <p>Action</p>
                    <p>2024</p>
                    <br>
                    <p>In a world where witches and beasts coexist, a powerful witch seeks to eradicate all beasts to avenge her family. However, her plans take a turn when she encounters a mysterious, amnesiac beast who seems different from the others. As they embark on a journey together, they uncover dark secrets and face dangerous foes, forcing them to confront their own pasts and the true nature of their bond.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">3</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 76%;"></span>
                            </div>
                            <p>76% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1055/118890l.webp" alt="My Senpai is Annoying">
                </div>
                <div class="details">
                    <a href="my-senpai-is-annoying"><h3>My Senpai is Annoying</h3></a>
                    <p>Comedy</p>
                    <p>2021</p>
                    <br>
                    <p>Futaba Igarashi is a hard-working office employee who is constantly annoyed by her loud and childish senpai, Harumi Takeda. Despite her frustrations, Futaba finds herself developing a close friendship with Harumi as they navigate the ups and downs of office life together. Will Futaba learn to tolerate her annoying senpai, or will their contrasting personalities lead to even more chaos in the workplace?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">4</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1819/97947l.jpg" alt="The Quintessential Quintuplets">
                </div>
                <div class="details">
                    <a href="the-quintessential-quintuplets"><h3>The Quintessential Quintuplets</h3></a>
                    <p>Romance</p>
                    <p>2019</p>
                    <br>
                    <p>Futaro Uesugi, a high school student low on luck and money, is hired to tutor the wealthy and academically challenged Nakano quintuplets. Despite their varying personalities and disinterest in studying, Futaro is determined to help them succeed. As he navigates the challenges of teaching the quintuplets, he uncovers their family secrets and realizes there is more to them than meets the eye. Along the way, bonds are formed, and unexpected feelings develop.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">5</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1429/127983l.webp" alt="Beyblade">
                </div>
                <div class="details">
                    <a href="beyblade"><h3>Beyblade</h3></a>
                    <p>Sports</p>
                    <p>2001</p>
                    <br>
                    <p>In Beyblade, young bladers compete in intense battles using customizable spinning tops called Beyblades. The main character, Tyson, dreams of becoming the world's greatest Beyblade champion. Along with his friends Kai, Max, and Ray, they form the Bladebreakers and travel the world to hone their skills and compete in tournaments. As they face various opponents and challenges, they strive to perfect their techniques and teamwork to achieve victory.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">6</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
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
                        <div class="rank">7</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 71%;"></span>
                            </div>
                            <p>71% Similarity</p>
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
                        <div class="rank">8</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1444/131828l.webp" alt="Tomo-chan Is a Girl!">
                </div>
                <div class="details">
                    <a href="tomo-chan-is-a-girl%21"><h3>Tomo-chan Is a Girl!</h3></a>
                    <p>Romance</p>
                    <p>2023</p>
                    <br>
                    <p>Tomo Aizawa is a girl with a tomboyish personality and has been friends with her neighbor, Junichirou Kubota, since they were kids. Unbeknownst to Tomo, Jun has developed romantic feelings for her over the years. The series follows their everyday high school life filled with comedic misunderstandings, awkward situations, and Jun's attempts to confess his love to Tomo. Will Jun finally be able to express his feelings to Tomo, or will their friendship remain the same?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">9</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/76432l.jpg" alt="Yakitate!! Japan">
                </div>
                <div class="details">
                    <a href="yakitate%21%21-japan"><h3>Yakitate!! Japan</h3></a>
                    <p>Comedy</p>
                    <p>2004</p>
                    <br>
                    <p>Young baking prodigy, Kazuma Azuma, dreams of creating Ja-pan, a national bread for Japan. He joins the elite baking competition, Pantasia, to make his dream a reality. With his solar hands that can speed up fermentation, Kazuma battles formidable opponents and showcases his inventive bread-making skills. Along the way, he forms friendships, faces intense challenges, and strives to revolutionize the world of bread-making in Japan.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">10</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1079/133529l.webp" alt="Eyeshield 21">
                </div>
                <div class="details">
                    <a href="eyeshield-21"><h3>Eyeshield 21</h3></a>
                    <p>Sports</p>
                    <p>2005</p>
                    <br>
                    <p>Eyeshield 21 follows Sena, a shy and timid high school student who is recruited as the running back for the Deimon Devil Bats football team. To hide his identity and speed, Sena wears a helmet with a unique eyeshield. As the team enters the brutal world of high school football, Sena's incredible speed becomes their secret weapon. With new friendships and rivalries forming on and off the field, the Devil Bats aim to defy the odds and reach the Christmas Bowl.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">11</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1501/91916l.webp" alt="Forest of Piano">
                </div>
                <div class="details">
                    <a href="forest-of-piano"><h3>Forest of Piano</h3></a>
                    <p>Drama</p>
                    <p>2018</p>
                    <br>
                    <p>Forest of Piano follows the captivating story of two young piano prodigies from different backgrounds who form an unlikely friendship through their shared love of music. As they navigate the world of competitive music and face personal challenges, they find inspiration and growth in each other's talents. With the grand piano as their common ground, the two protagonists strive to reach new heights in their musical journey amidst fierce rivalry and unforeseen obstacles.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">12</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 68%;"></span>
                            </div>
                            <p>68% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1938/102796l.jpg" alt="Somali and the Forest Spirit">
                </div>
                <div class="details">
                    <a href="somali-and-the-forest-spirit"><h3>Somali and the Forest Spirit</h3></a>
                    <p>Drama</p>
                    <p>2020</p>
                    <br>
                    <p>In a world where humans are long gone, a golem, tasked with maintaining the forest, encounters a young human girl named Somali. Realizing that she is alone and in danger, the golem agrees to accompany her on a journey to find her kind. As they travel through various landscapes and encounter different creatures, their bond grows stronger while they navigate the challenges of a world that may not accept Somali's existence.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">13</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 68%;"></span>
                            </div>
                            <p>68% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/79409l.jpg" alt="Bungo Stray Dogs">
                </div>
                <div class="details">
                    <a href="bungo-stray-dogs"><h3>Bungo Stray Dogs</h3></a>
                    <p>Mystery</p>
                    <p>2016</p>
                    <br>
                    <p>Bungo Stray Dogs follows Atsushi Nakajima, a young man with a mysterious ability to transform into a white tiger. After getting kicked out of his orphanage, he joins the Armed Detective Agency, a group of gifted individuals with unique powers who solve supernatural cases. As Atsushi navigates this new world, he uncovers dark secrets from his past while facing powerful enemies and forming strong bonds with his colleagues. The series is filled with thrilling action scenes and captivating mysteries.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">14</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 68%;"></span>
                            </div>
                            <p>68% Similarity</p>
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
                        <div class="rank">15</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/5/53211l.jpg" alt="Yowamushi Pedal">
                </div>
                <div class="details">
                    <a href="yowamushi-pedal"><h3>Yowamushi Pedal</h3></a>
                    <p>Sports</p>
                    <p>2013</p>
                    <br>
                    <p>Sakamichi Onoda is a shy and anime-loving high school student who discovers a hidden talent for competitive cycling. After joining the school's cycling club, Onoda must navigate the world of intense races and fierce rivals as he strives to become a top cyclist. With his unwavering determination and sheer willpower, Onoda faces countless challenges on and off the road, pushing himself to the limit to achieve his dreams of success in the sport.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">16</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/8/83417l.jpg" alt="Interviews With Monster Girls">
                </div>
                <div class="details">
                    <a href="interviews-with-monster-girls"><h3>Interviews With Monster Girls</h3></a>
                    <p>Comedy</p>
                    <p>2017</p>
                    <br>
                    <p>Interviews With Monster Girls follows high school teacher Tetsuo Takahashi as he researches demi-humans - individuals with supernatural traits like vampires and succubi. Through interviews with his students who are demi-humans, Tetsuo aims to understand their daily struggles and experiences. As he digs deeper into their lives, he forges meaningful connections with these special girls and learns valuable lessons about acceptance and empathy.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">17</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1139/106986l.jpg" alt="BNA: Brand New Animal">
                </div>
                <div class="details">
                    <a href="bna%3A-brand-new-animal"><h3>BNA: Brand New Animal</h3></a>
                    <p>Action</p>
                    <p>2020</p>
                    <br>
                    <p>In a world where humans can transform into animals called Beastmen, a young high school student named Michiru suddenly discovers she is also a Beastman. Fleeing to Anima City where Beastmen live freely, Michiru teams up with a wolf Beastman named Shirou to uncover the mysteries surrounding her transformation. As they delve deeper into the city's secrets, they become entangled in a conflict that threatens to expose the truth behind the origins of Beastmen.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">18</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/10/80271l.webp" alt="Drifters">
                </div>
                <div class="details">
                    <a href="drifters"><h3>Drifters</h3></a>
                    <p>Action</p>
                    <p>2016</p>
                    <br>
                    <p>After being transported to a fantasy world, historical warriors known as Drifters must band together to fight against an evil group known as the Ends. With their unique skills and abilities, the Drifters form alliances with other fantastical beings in order to protect the innocent and ultimately bring an end to the chaos engulfing the land. As they navigate through battles and political intrigues, the Drifters face tough decisions that will determine the fate of this new world.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">19</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1974/95289l.webp" alt="Hinomaru Sumo">
                </div>
                <div class="details">
                    <a href="hinomaru-sumo"><h3>Hinomaru Sumo</h3></a>
                    <p>Sports</p>
                    <p>2018</p>
                    <br>
                    <p>Hinomaru Sumo follows Hinomaru Ushio, a small-statured high school student with a big dream of becoming a professional sumo wrestler. Despite his size, Hinomaru's determination, strength, and unwavering spirit inspire those around him as he faces off against rival wrestlers in fierce competitions. With the support of his teammates from Oodachi High School's sumo club, Hinomaru confronts various challenges in his quest to reach the pinnacle of the traditional Japanese sport.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">20</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/77055l.jpg" alt="Yu-Gi-Oh!">
                </div>
                <div class="details">
                    <a href="yu-gi-oh%21"><h3>Yu-Gi-Oh!</h3></a>
                    <p>Action</p>
                    <p>2000</p>
                    <br>
                    <p>Yu-Gi-Oh! follows Yugi Mutou, a shy high school student with a passion for games. When he solves an ancient Egyptian puzzle, he becomes host to a mysterious spirit who helps him master the game of Duel Monsters. Yugi and his friends face off against rivals in intense battles, using strategy, skill, and a touch of magic to prevail. As the stakes grow higher, Yugi must unlock the secrets of his other self to save the ones he cares about.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">21</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/9/75631l.jpg" alt="Nura: Rise of the Yokai Clan">
                </div>
                <div class="details">
                    <a href="nura%3A-rise-of-the-yokai-clan"><h3>Nura: Rise of the Yokai Clan</h3></a>
                    <p>Action</p>
                    <p>2010</p>
                    <br>
                    <p>Rikuo Nura, a middle school student, is part human and part yokai (demon). As the heir to the Nura Clan, he must come to terms with his dual nature and lead the yokai community. With escalating conflicts between yokai and humans, Rikuo must navigate his duties while protecting his loved ones from danger. Balancing his human and yokai sides, Rikuo must decide what kind of leader he wants to become.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">22</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/13/69455l.jpg" alt="My Love Story!!">
                </div>
                <div class="details">
                    <a href="my-love-story%21%21"><h3>My Love Story!!</h3></a>
                    <p>Romance</p>
                    <p>2015</p>
                    <br>
                    <p>My Love Story!! follows the heartwarming tale of Takeo Gouda, a kind-hearted and gentle giant who unexpectedly finds himself in a romantic relationship with Rinko Yamato, a sweet and petite girl. As they navigate the ups and downs of teenage love, the couple find themselves overcoming various challenges and insecurities, all while learning more about each other and deepening their bond. This sweet and funny anime explores the joys and complexities of first love.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">23</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1271/90136l.webp" alt="After the Rain">
                </div>
                <div class="details">
                    <a href="after-the-rain"><h3>After the Rain</h3></a>
                    <p>Romance</p>
                    <p>2018</p>
                    <br>
                    <p>After the Rain follows the story of a high school girl named Akira, who develops feelings for her middle-aged manager, Kondo, after her dreams of being a track star are shattered due to an injury. Despite the significant age gap, Akira finds solace in their shared experiences and a deep emotional connection develops between them. As they navigate their feelings, they both must confront societal expectations and personal desires.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/11/50453l.webp" alt="Kuroko's Basketball">
                </div>
                <div class="details">
                    <a href="kuroko%27s-basketball"><h3>Kuroko's Basketball</h3></a>
                    <p>Sports</p>
                    <p>2012</p>
                    <br>
                    <p>In Kuroko's Basketball, the Seirin High basketball team, led by skilled player Taiga Kagami and the seemingly invisible transfer student, Tetsuya Kuroko, competes to become the best in Japan. Despite Kuroko's lack of presence on the court, his exceptional passing skills and teamwork prove invaluable in taking down other powerful teams. The series follows their journey as they face fierce opponents and strive to win the Interhigh and Winter Cup championships.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/1454/122063l.jpg" alt="The Yakuza's Guide to Babysitting">
                </div>
                <div class="details">
                    <a href="the-yakuza%27s-guide-to-babysitting"><h3>The Yakuza's Guide to Babysitting</h3></a>
                    <p>Other Genre</p>
                    <p>2022</p>
                    <br>
                    <p>When a tough yakuza member suddenly becomes the guardian of a young child, he is completely out of his element. Forced to navigate the world of diapers and nap times, he must protect the adorable child from the dangers of his criminal world. As he struggles to balance his tough-as-nails reputation with the responsibilities of childcare, he begins to discover a softer side of himself he never knew existed.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/4/34949l.jpg" alt="You and Me.">
                </div>
                <div class="details">
                    <a href="you-and-me."><h3>You and Me.</h3></a>
                    <p>Other Genre</p>
                    <p>2011</p>
                    <br>
                    <p>You and Me follows the daily lives of a group of high school students who are part of the culture club. The story focuses on their friendships, humorous interactions, and the various activities they pursue together. Each episode explores the unique personalities of the characters as they navigate the challenges and joys of adolescence. Through their everyday experiences, the bonds between the club members grow stronger, leading to heartwarming moments and lasting memories.</p>
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
                        <div class="rank">28</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1471/99249l.jpg" alt="Digimon: Digital Monsters">
                </div>
                <div class="details">
                    <a href="digimon%3A-digital-monsters"><h3>Digimon: Digital Monsters</h3></a>
                    <p>Isekai</p>
                    <p>1999</p>
                    <br>
                    <p>A group of children is transported to the Digital World where they befriend creatures known as Digimon. Together, they must work to save both worlds from evil forces threatening their existence. With the power to digivolve, the Digimon and children form unbreakable bonds as they navigate challenges, battles, and mysteries to protect their homes.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/1722/99235l.webp" alt="Shaman King">
                </div>
                <div class="details">
                    <a href="shaman-king"><h3>Shaman King</h3></a>
                    <p>Action</p>
                    <p>2001</p>
                    <br>
                    <p>Shaman King follows Yoh Asakura, a laid-back and powerful shaman who strives to become the Shaman King, a title only given to the strongest of shamans who can communicate with spirits. Alongside his spirit partner Amidamaru, Yoh participates in the Shaman Fight, a tournament where shamans from around the world battle to become the Shaman King. Through fierce competitions and friendships forged, Yoh must face powerful adversaries and uncover the true meaning of being the Shaman King.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/3/28013l.jpg" alt="Beelzebub">
                </div>
                <div class="details">
                    <a href="beelzebub"><h3>Beelzebub</h3></a>
                    <p>Action</p>
                    <p>2011</p>
                    <br>
                    <p>In Beelzebub, delinquent high school student Tatsumi Oga stumbles upon a baby who turns out to be the son of the Demon Lord. Oga is tasked with raising the baby, whom he names Beelzebub, and hilariously chaotic situations ensue as he navigates his new role as a reluctant parent. Along the way, Oga discovers new enemies and allies in the world of demons and supernatural powers.</p>
                </div>
            </div>

        </section>
    </main>
</body>
</html>
