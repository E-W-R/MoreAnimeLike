
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like Your Lie in April</title>
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
        <script>const number = "23273";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/1405/143284l.jpg" alt="Your Lie in April">
                <div>
                    <h2 id="title">Your Lie in April</h2>
                    <p>Romance</p>
                    <p>2014</p>
                    <br>
                    <p>Your Lie in April follows piano prodigy Kousei Arima, who loses his ability to hear the music after the death of his mother. Years later, he meets a free-spirited violinist named Kaori Miyazono, who helps him rediscover his love for music and life. Together, they navigate the world of competitive music performances, pushing Kousei to confront his past and find his own voice on the piano.</p>
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
                                <span style="width: 60%;"></span>
                            </div>
                            <p>60% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1768/93291l.webp" alt="I Want To Eat Your Pancreas">
                </div>
                <div class="details">
                    <a href="i-want-to-eat-your-pancreas"><h3>I Want To Eat Your Pancreas</h3></a>
                    <p>Romance</p>
                    <p>2018</p>
                    <br>
                    <p>I Want To Eat Your Pancreas follows the story of a high school student who discovers a diary belonging to a terminally ill classmate. As they spend time together, their unlikely friendship blossoms, teaching them valuable lessons about life, love, and human connection. The emotional journey they embark on challenges their perspectives and leaves a lasting impact on both of their lives.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">2</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 58%;"></span>
                            </div>
                            <p>58% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/5/87048l.webp" alt="Your Name.">
                </div>
                <div class="details">
                    <a href="your-name."><h3>Your Name.</h3></a>
                    <p>Drama</p>
                    <p>2016</p>
                    <br>
                    <p>In Your Name, two high school students, Taki and Mitsuha, mysteriously swap bodies and start living each other's lives. As they navigate this newfound connection and try to communicate with each other, they develop a close bond. However, just as they begin to unravel the mystery behind their strange connection, a natural disaster threatens to tear them apart. The two must work together to find a way to save each other and the people they care about.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">3</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 53%;"></span>
                            </div>
                            <p>53% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1441/122795l.jpg" alt="Spy x Family">
                </div>
                <div class="details">
                    <a href="spy-x-family"><h3>Spy x Family</h3></a>
                    <p>Action</p>
                    <p>2022</p>
                    <br>
                    <p>In Spy x Family, a skilled spy named Twilight is tasked with a mission that requires him to pose as a married man with a family. In order to maintain his cover, he adopts a young girl named Anya and seeks out a wife, unknowingly choosing a highly skilled assassin named Yor Forger. As they navigate their double lives, the unlikely family forms a bond while trying to keep their secrets hidden from each other.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">4</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 53%;"></span>
                            </div>
                            <p>53% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1714/108892l.webp" alt="Josee, the Tiger and the Fish">
                </div>
                <div class="details">
                    <a href="josee%2C-the-tiger-and-the-fish"><h3>Josee, the Tiger and the Fish</h3></a>
                    <p>Romance</p>
                    <p>2020</p>
                    <br>
                    <p>Tsuneo, a university student, meets Josee, a young woman with a disability who spends her days secluded in her grandmother's house. Tsuneo becomes her caretaker and helps her experience the outside world. Through their time together, they form an unlikely bond, which leads them on a journey of self-discovery and personal growth.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">5</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 53%;"></span>
                            </div>
                            <p>53% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1122/96435l.jpg" alt="A Silent Voice">
                </div>
                <div class="details">
                    <a href="a-silent-voice"><h3>A Silent Voice</h3></a>
                    <p>Drama</p>
                    <p>2016</p>
                    <br>
                    <p>A Silent Voice follows the story of a former school bully seeking redemption by reconnecting with the deaf girl he used to torment. As he struggles with guilt and isolation, he sets out on a journey of forgiveness and self-discovery. Together, they navigate through the challenges of communication and acceptance, learning to confront their past actions and find solace in their growing bond.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">6</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 51%;"></span>
                            </div>
                            <p>51% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1795/95088l.jpg" alt="Violet Evergarden">
                </div>
                <div class="details">
                    <a href="violet-evergarden"><h3>Violet Evergarden</h3></a>
                    <p>Drama</p>
                    <p>2018</p>
                    <br>
                    <p>In the aftermath of a brutal war, former soldier Violet Evergarden starts a new life as an Auto Memory Doll, transcribing people's thoughts and feelings into letters. Tasked with understanding emotions she once ignored, Violet's journey leads her to unravel the mysteries of her own past while bringing solace to those around her through the power of words.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">7</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 50%;"></span>
                            </div>
                            <p>50% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/7/76014l.webp" alt="Haikyu!!">
                </div>
                <div class="details">
                    <a href="haikyu%21%21"><h3>Haikyu!!</h3></a>
                    <p>Sports</p>
                    <p>2014</p>
                    <br>
                    <p>Haikyu!! follows the journey of high school student Shoyo Hinata as he pursues his passion for volleyball. Despite his short stature, Hinata is determined to make a name for himself on the court. Teaming up with his new teammates, including the talented but brooding Tobio Kageyama, Hinata aims to lead his school team to victory against fierce competitors. Through hard work, dedication, and teamwork, the players strive to reach new heights in the exhilarating world of high school volleyball.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">8</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 50%;"></span>
                            </div>
                            <p>50% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1830/118780l.webp" alt="The Promised Neverland">
                </div>
                <div class="details">
                    <a href="the-promised-neverland"><h3>The Promised Neverland</h3></a>
                    <p>Mystery</p>
                    <p>2019</p>
                    <br>
                    <p>In The Promised Neverland, orphaned children Emma, Norman, and Ray discover a dark secret about their seemingly idyllic orphanage. They plot to escape and uncover the truth behind their existence, facing dangerous obstacles and enemies along the way. With their intelligence and cunning, they must outwit their caretaker and find a way to freedom while unraveling the mysteries of their world.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">9</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 50%;"></span>
                            </div>
                            <p>50% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1171/109222l.jpg" alt="Jujutsu Kaisen">
                </div>
                <div class="details">
                    <a href="jujutsu-kaisen"><h3>Jujutsu Kaisen</h3></a>
                    <p>Action</p>
                    <p>2020</p>
                    <br>
                    <p>Yuji Itadori, a high school student with incredible physical abilities, becomes involved in the world of sorcery after consuming a cursed object to save his friends from evil spirits. He joins forces with a group of Jujutsu sorcerers to hunt down dangerous curses and prevent them from harming the innocent. As Yuji trains to control his newfound powers and navigate the dangerous world of curses, he faces both powerful enemies and the moral dilemmas of using cursed energy.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">10</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 50%;"></span>
                            </div>
                            <p>50% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1812/134736l.jpg" alt="[Oshi No Ko]">
                </div>
                <div class="details">
                    <a href="%5Boshi-no-ko%5D"><h3>[Oshi No Ko]</h3></a>
                    <p>Drama</p>
                    <p>2023</p>
                    <br>
                    <p>Oshi no Ko is a captivating anime that delves into the darker side of the entertainment industry. It follows the story of a renowned idol named Ai Hoshino and her devoted fan, Gorou Amemiya, a doctor who is mysteriously reincarnated as her child. As Gorou navigates his new life in the world of showbiz, he uncovers the hidden truths and challenges behind the glamorous facade. The series combines elements of drama, mystery, and supernatural, exploring themes of ambition, identity, and the cost of fame.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">11</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 48%;"></span>
                            </div>
                            <p>48% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1120/120796l.jpg" alt="Summer Time Rendering">
                </div>
                <div class="details">
                    <a href="summer-time-rendering"><h3>Summer Time Rendering</h3></a>
                    <p>Mystery</p>
                    <p>2022</p>
                    <br>
                    <p>When Shinpei returns to his hometown for the funeral of his cousin's wife, he discovers unsettling secrets and mysteries surrounding the incident. As he delves deeper into the past, he uncovers long-buried family secrets and a connection to a string of mysterious deaths that may be linked to a supernatural phenomenon. With the help of his childhood friends, Shinpei must confront the truth and unravel the dark secrets of their hometown.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">12</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 48%;"></span>
                            </div>
                            <p>48% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/6/86733l.jpg" alt="Made in Abyss">
                </div>
                <div class="details">
                    <a href="made-in-abyss"><h3>Made in Abyss</h3></a>
                    <p>Mystery</p>
                    <p>2017</p>
                    <br>
                    <p>Made in Abyss follows the story of a young girl named Riko who befriends a robot boy named Reg. Together, they explore the enigmatic Abyss, a massive chasm that houses valuable relics and mysterious creatures. As they delve deeper into the Abyss in search of Riko's mother, they must confront various challenges and uncover the dark secrets hidden within this unfathomable abyss.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">13</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 48%;"></span>
                            </div>
                            <p>48% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1295/106551l.webp" alt="Kaguya-sama: Love is War">
                </div>
                <div class="details">
                    <a href="kaguya-sama%3A-love-is-war"><h3>Kaguya-sama: Love is War</h3></a>
                    <p>Psychological</p>
                    <p>2019</p>
                    <br>
                    <p>At the prestigious Shuchiin Academy, student council president Miyuki Shirogane and vice president Kaguya Shinomiya are both too proud to confess their feelings for each other. They engage in elaborate schemes and mind games to try to make the other person confess first, leading to hilarious and chaotic situations. As their battle of wits continues, their relationship deepens and they navigate the complexities of love together.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">14</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 46%;"></span>
                            </div>
                            <p>46% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/10/47347l.webp" alt="Attack on Titan">
                </div>
                <div class="details">
                    <a href="attack-on-titan"><h3>Attack on Titan</h3></a>
                    <p>Action</p>
                    <p>2013</p>
                    <br>
                    <p>In a world where humanity is on the brink of extinction due to giant humanoid creatures known as Titans, a young boy named Eren Yeager joins the battle against them after witnessing the destruction of his home. Alongside his friends Mikasa and Armin, Eren enlists in the military to seek vengeance and uncover the truth behind the Titans. As they face overwhelming odds and deep-rooted conspiracies, they discover the horrifying secrets that lie beyond the walls protecting humanity.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">15</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 46%;"></span>
                            </div>
                            <p>46% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1500/103005l.jpg" alt="Vinland Saga">
                </div>
                <div class="details">
                    <a href="vinland-saga"><h3>Vinland Saga</h3></a>
                    <p>Action</p>
                    <p>2019</p>
                    <br>
                    <p>Vinland Saga follows the young Thorfinn, who seeks revenge against the man who killed his father. Set in the brutal world of Vikings, Thorfinn finds himself caught in the midst of a complex web of political intrigue, power struggles, and battles for survival. As he matures and hones his skills as a warrior, Thorfinn's quest for vengeance becomes intertwined with his search for a greater purpose in a world rife with violence and ambition.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">16</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 43%;"></span>
                            </div>
                            <p>43% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1135/114867l.jpg" alt="Link Click">
                </div>
                <div class="details">
                    <a href="link-click"><h3>Link Click</h3></a>
                    <p>Mystery</p>
                    <p>2021</p>
                    <br>
                    <p>In a world where virtual reality games are a daily escape, one high school student, Xiao Feng, discovers a new game called Link Click. Enticed by its mysterious gameplay and advanced technology, he dives in. However, he soon realizes that this game is more than just entertainment as he gets tangled in a series of dangerous challenges that blur the lines between reality and the virtual world. With the help of his friends, Xiao Feng must navigate through this thrilling adventure to uncover the hidden secrets of Link Click.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">17</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 43%;"></span>
                            </div>
                            <p>43% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1958/132159l.jpg" alt="Blue Giant">
                </div>
                <div class="details">
                    <a href="blue-giant"><h3>Blue Giant</h3></a>
                    <p>Other Genre</p>
                    <p>2023</p>
                    <br>
                    <p>Blue Giant follows Dai Miyamoto, a high school delinquent who discovers a passion for playing the tenor saxophone. Determined to become a jazz musician, Dai navigates through challenges such as mastering his instrument, facing fierce competition, and balancing his personal life. As he strives towards his dream of performing on the global stage, Dai learns about the power of music in connecting people and shaping his own identity.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">18</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 43%;"></span>
                            </div>
                            <p>43% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1286/99889l.jpg" alt="Demon Slayer: Kimetsu no Yaiba">
                </div>
                <div class="details">
                    <a href="demon-slayer%3A-kimetsu-no-yaiba"><h3>Demon Slayer: Kimetsu no Yaiba</h3></a>
                    <p>Action</p>
                    <p>2019</p>
                    <br>
                    <p>Demon Slayer: Kimetsu no Yaiba follows Tanjiro Kamado, a kind-hearted boy who becomes a demon slayer after his family is slaughtered and his sister transformed into a demon. Determined to find a cure for his sister and avenge his family, Tanjiro embarks on a dangerous journey. Alongside a group of fellow demon slayers, including the hot-headed Inosuke and the timid Zenitsu, Tanjiro battles terrifying demons while searching for a way to restore his sister's humanity.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">19</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 43%;"></span>
                            </div>
                            <p>43% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/12/76049l.jpg" alt="One Punch Man">
                </div>
                <div class="details">
                    <a href="one-punch-man"><h3>One Punch Man</h3></a>
                    <p>Action</p>
                    <p>2015</p>
                    <br>
                    <p>One Punch Man follows the story of Saitama, a hero who can defeat any enemy with a single punch, making his battles boring and unfulfilling. Seeking a worthy opponent, Saitama joins the Hero Association to find stronger foes. Along the way, he befriends other heroes and faces various villains and monsters, all while struggling with his mundane everyday life.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">20</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 41%;"></span>
                            </div>
                            <p>41% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1448/127956l.jpg" alt="Bocchi the Rock!">
                </div>
                <div class="details">
                    <a href="bocchi-the-rock%21"><h3>Bocchi the Rock!</h3></a>
                    <p>Comedy</p>
                    <p>2022</p>
                    <br>
                    <p>Bocchi the Rock! follows the life of high school student Bocchi Hoshino, who dreams of becoming a famous rock star. Despite her initial lack of confidence and musical talent, she embarks on a journey to form a rock band with her quirky classmates. Together, they navigate the challenges of the music industry, face rival bands, and strive to make their mark in the world of rock music. Will Bocchi achieve her dreams and rock the stage with her friends?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">21</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 41%;"></span>
                            </div>
                            <p>41% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1880/101146l.webp" alt="Weathering with You">
                </div>
                <div class="details">
                    <a href="weathering-with-you"><h3>Weathering with You</h3></a>
                    <p>Romance</p>
                    <p>2019</p>
                    <br>
                    <p>In Weathering with You, a high school boy runs away to Tokyo and befriends a mysterious girl with the ability to control the weather. Together, they start a business offering sunshine on rainy days. As their bond deepens, they face the consequences of altering the natural order, leading to a decision that could change the course of their lives. Amidst romance and supernatural elements, they navigate the challenges of fate and sacrifice.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">22</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 41%;"></span>
                            </div>
                            <p>41% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/73178l.webp" alt="Parasyte: The Maxim">
                </div>
                <div class="details">
                    <a href="parasyte%3A-the-maxim"><h3>Parasyte: The Maxim</h3></a>
                    <p>Psychological</p>
                    <p>2014</p>
                    <br>
                    <p>Parasyte: The Maxim follows high school student Shinichi Izumi, whose right hand gets taken over by an alien parasite. Dubbed Migi, the parasite failed to take over Shinichi's brain and must coexist with him. As they encounter more of Migi's kind - dangerous creatures feeding on humans - they form an unlikely alliance to protect themselves and humanity from the growing threat. Shinichi must navigate a world filled with paranoia, danger, and ethical dilemmas as he faces the reality of his new existence.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">23</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 41%;"></span>
                            </div>
                            <p>41% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/5/79697l.webp" alt="Anohana: The Flower We Saw That Day">
                </div>
                <div class="details">
                    <a href="anohana%3A-the-flower-we-saw-that-day"><h3>Anohana: The Flower We Saw That Day</h3></a>
                    <p>Drama</p>
                    <p>2011</p>
                    <br>
                    <p>Anohana: The Flower We Saw That Day follows a group of childhood friends who have grown apart after the tragic death of one of their own. The ghost of their deceased friend appears to one of them, urging them to fulfill her final wish. As they come together to grant her wish, unresolved feelings and conflicts from their past resurface, leading to emotional revelations and healing as they navigate grief and friendship.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">24</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 41%;"></span>
                            </div>
                            <p>41% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1347/117616l.jpg" alt="Ranking of Kings">
                </div>
                <div class="details">
                    <a href="ranking-of-kings"><h3>Ranking of Kings</h3></a>
                    <p>Other Genre</p>
                    <p>2021</p>
                    <br>
                    <p>Ranking of Kings follows the story of Bojji, a young deaf prince who dreams of becoming a great king like his father. Despite his physical limitations and being underestimated by others, Bojji sets out on a journey to prove his worth with the help of his loyal friend Kage. Together, they face challenges, make allies, and uncover dark secrets hidden within the kingdom. Bojji's courage and determination are put to the test as he navigates the complex world of royalty and strives to fulfill his destiny.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">25</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 40%;"></span>
                            </div>
                            <p>40% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/9/35721l.jpg" alt="Wolf Children">
                </div>
                <div class="details">
                    <a href="wolf-children"><h3>Wolf Children</h3></a>
                    <p>Other Genre</p>
                    <p>2012</p>
                    <br>
                    <p>Wolf Children follows the life of a young woman named Hana who falls in love with a man who can transform into a wolf. The couple raises their half-human, half-wolf children in a rural area after the sudden death of their father. Hana's journey is one of love, sacrifice, and the challenges of raising unique children in a society that may not understand them.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">26</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 40%;"></span>
                            </div>
                            <p>40% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1818/126435l.jpg" alt="Cyberpunk: Edgerunners">
                </div>
                <div class="details">
                    <a href="cyberpunk%3A-edgerunners"><h3>Cyberpunk: Edgerunners</h3></a>
                    <p>Action</p>
                    <p>2022</p>
                    <br>
                    <p>In a dystopian future where technology and humanity intertwine, a group of outlaw hackers known as Edgerunners navigate the dangerous streets of Night City. Faced with corrupt corporations, rival gangs, and advanced AI, they must use their skills to survive and uncover the truth behind a dark conspiracy. As they delve deeper into the underworld of cybercrime, alliances will be tested, secrets will be revealed, and the fate of the city will hang in the balance.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">27</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 40%;"></span>
                            </div>
                            <p>40% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1032/135088l.webp" alt="Code Geass: Lelouch of the Rebellion">
                </div>
                <div class="details">
                    <a href="code-geass%3A-lelouch-of-the-rebellion"><h3>Code Geass: Lelouch of the Rebellion</h3></a>
                    <p>Action</p>
                    <p>2006</p>
                    <br>
                    <p>In an alternate world where the Holy Britannian Empire dominates and suppresses Japan, exiled prince Lelouch vi Britannia gains the power of Geass, allowing him to control others. Using his new ability, Lelouch takes on the identity of Zero and leads a rebellion against the Empire to seek vengeance for his past and create a better world for his sister Nunally. However, the path to revolution is filled with challenges and difficult choices.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">28</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 40%;"></span>
                            </div>
                            <p>40% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/11/73540l.jpg" alt="The Boy and the Beast">
                </div>
                <div class="details">
                    <a href="the-boy-and-the-beast"><h3>The Boy and the Beast</h3></a>
                    <p>Isekai</p>
                    <p>2015</p>
                    <br>
                    <p>When a lonely young boy stumbles into the beastly realm of beasts, he becomes the apprentice to a bear-like creature. As they train together in the ways of the beastly warriors, they form an unlikely bond that will be tested as they face dangerous enemies lurking in the shadows. Will the boy be able to prove himself as a true warrior and find his place in the beastly world?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">29</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 40%;"></span>
                            </div>
                            <p>40% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1426/111248l.jpg" alt="Barakamon">
                </div>
                <div class="details">
                    <a href="barakamon"><h3>Barakamon</h3></a>
                    <p>Other Genre</p>
                    <p>2014</p>
                    <br>
                    <p>After a calligraphy mishap, talented but uptight calligrapher Handa Seishu is exiled to a rural island. As he navigates the laid-back island life and befriends the quirky locals, Handa begins to discover his true self and find inspiration in the simplicity of his surroundings. Through heartwarming interactions and comedic mishaps, Barakamon follows Handa's journey of self-discovery and personal growth as he learns valuable life lessons from the people of the island.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">30</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 40%;"></span>
                            </div>
                            <p>40% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1806/126216l.jpg" alt="Chainsaw Man">
                </div>
                <div class="details">
                    <a href="chainsaw-man"><h3>Chainsaw Man</h3></a>
                    <p>Action</p>
                    <p>2022</p>
                    <br>
                    <p>Chainsaw Man follows Denji, a young demon hunter struggling to repay his late father's debt. After a tragic incident, Denji merges with his pet devil Pochita to become Chainsaw Man, a powerful being capable of regenerating from any injury. Denji joins the Public Safety Devil Hunters to eliminate devils in exchange for a normal life. As he battles terrifying foes, Denji forms bonds with fellow hunters and uncovers the truth behind his existence.</p>
                </div>
            </div>

        </section>
    </main>
</body>
</html>
