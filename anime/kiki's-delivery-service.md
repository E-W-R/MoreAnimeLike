
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like Kiki's Delivery Service</title>
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
        <script>const number = "512";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/1579/140483l.jpg" alt="Kiki's Delivery Service">
                <div>
                    <h2 id="title">Kiki's Delivery Service</h2>
                    <p>Drama</p>
                    <p>1989</p>
                    <br>
                    <p>Kiki's Delivery Service follows the story of a young witch named Kiki who sets out on a journey to a new town as part of her traditional training. She starts a delivery service using her flying broomstick and befriends a kind baker and an artist along the way. As Kiki faces challenges and self-doubt, she learns valuable lessons about independence, friendship, and finding her own unique talents.</p>
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
                                <span style="width: 88%;"></span>
                            </div>
                            <p>88% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/4/75923l.webp" alt="My Neighbor Totoro">
                </div>
                <div class="details">
                    <a href="my-neighbor-totoro"><h3>My Neighbor Totoro</h3></a>
                    <p>Other Genre</p>
                    <p>1988</p>
                    <br>
                    <p>Two young sisters move to the countryside with their father to be closer to their mother, who is recovering from an illness at a nearby hospital. As they explore their new home, they encounter friendly forest spirits, including Totoro, a giant cuddly creature. Together, they embark on magical adventures and form a special bond with the whimsical creatures of the forest.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">2</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 88%;"></span>
                            </div>
                            <p>88% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1764/138714l.webp" alt="Whisper of the Heart">
                </div>
                <div class="details">
                    <a href="whisper-of-the-heart"><h3>Whisper of the Heart</h3></a>
                    <p>Romance</p>
                    <p>1995</p>
                    <br>
                    <p>Whisper of the Heart follows the story of a young girl named Shizuku Tsukishima who discovers a mysterious antique cat statue in a shop. Inspired by the statue's backstory, she sets out on a journey of self-discovery and creativity. Through her passion for writing and determination to follow her dreams, Shizuku navigates the challenges of adolescence and learns valuable lessons about love, friendship, and the pursuit of one's aspirations.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">3</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 85%;"></span>
                            </div>
                            <p>85% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/5/37799l.jpg" alt="Castle in the Sky">
                </div>
                <div class="details">
                    <a href="castle-in-the-sky"><h3>Castle in the Sky</h3></a>
                    <p>Romance</p>
                    <p>1986</p>
                    <br>
                    <p>Castle in the Sky follows a young girl named Sheeta who possesses a mysterious crystal necklace that pirates and the government seek to control. She teams up with a boy named Pazu to unravel the secret of a legendary floating castle that could hold the key to her identity. Together, they navigate through various obstacles and encounters to uncover the truth behind the castle's ancient technology and the forces determined to exploit it.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/1084/119096l.jpg" alt="Nodame Cantabile Finale">
                </div>
                <div class="details">
                    <a href="nodame-cantabile-finale"><h3>Nodame Cantabile Finale</h3></a>
                    <p>Romance</p>
                    <p>2010</p>
                    <br>
                    <p>Nodame Cantabile Finale continues the story of piano prodigy Shinichi Chiaki and eccentric pianist Megumi Noda as they navigate the challenges of pursuing their musical dreams while facing personal and professional hurdles. As they strive for greatness in the competitive world of classical music, their relationship deepens, leading to moments of joy, heartache, and growth. Through dedication, passion, and perseverance, Chiaki and Nodame inspire each other to reach new heights in their musical careers.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/1974/116417l.webp" alt="The Secret World of Arrietty">
                </div>
                <div class="details">
                    <a href="the-secret-world-of-arrietty"><h3>The Secret World of Arrietty</h3></a>
                    <p>Other Genre</p>
                    <p>2010</p>
                    <br>
                    <p>The Secret World of Arrietty follows the adventures of a tiny Borrower named Arrietty who lives beneath the floorboards of a house. When she is discovered by a human boy named Shawn, their unlikely friendship blossoms despite the dangers posed by their difference in size. As they navigate the challenges of their respective worlds, they must find a way to protect Arrietty's family secret while forging a bond that transcends their physical disparities.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">6</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 71%;"></span>
                            </div>
                            <p>71% Similarity</p>
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
                        <div class="rank">7</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
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
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/6/17529l.jpg" alt="Future Boy Conan">
                </div>
                <div class="details">
                    <a href="future-boy-conan"><h3>Future Boy Conan</h3></a>
                    <p>Drama</p>
                    <p>1978</p>
                    <br>
                    <p>In a post-apocalyptic world, a young boy named Conan discovers a girl named Lana who has been saved in a secret underground city. Together, they set out on a journey to find other survivors and uncover the truth behind their world's destruction. As they face various challenges and make new friends along the way, Conan and Lana must confront powerful enemies who will stop at nothing to maintain control over the world.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">9</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 68%;"></span>
                            </div>
                            <p>68% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1331/138727l.webp" alt="Ponyo">
                </div>
                <div class="details">
                    <a href="ponyo"><h3>Ponyo</h3></a>
                    <p>Other Genre</p>
                    <p>2008</p>
                    <br>
                    <p>Ponyo follows the magical journey of a goldfish princess named Ponyo who dreams of becoming human after meeting a young boy named Sosuke. As their friendship blossoms, Ponyo's magical powers inadvertently cause a dangerous imbalance in the world. Sosuke and Ponyo must navigate through obstacles to restore order and be together. With themes of love, friendship, and environmental harmony, Ponyo is a heartwarming tale of adventure and wonder.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">10</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 68%;"></span>
                            </div>
                            <p>68% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/10/75914l.jpg" alt="Nausicaä of the Valley of the Wind">
                </div>
                <div class="details">
                    <a href="nausica%C3%A4-of-the-valley-of-the-wind"><h3>Nausicaä of the Valley of the Wind</h3></a>
                    <p>Other Genre</p>
                    <p>1984</p>
                    <br>
                    <p>In a post-apocalyptic world, Nausicaä, a young princess, strives to protect her people and their lands from the toxic jungle filled with giant insects. As she uncovers the truth behind the environmental devastation of the world, she embarks on a journey to prevent further destruction and bring about harmony between nature and humanity. Willing to risk everything to save her loved ones, Nausicaä showcases courage and compassion in a world in desperate need of hope.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">11</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 68%;"></span>
                            </div>
                            <p>68% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1728/138709l.webp" alt="Porco Rosso">
                </div>
                <div class="details">
                    <a href="porco-rosso"><h3>Porco Rosso</h3></a>
                    <p>Action</p>
                    <p>1992</p>
                    <br>
                    <p>Set in the Adriatic Sea during the 1920s, Porco Rosso follows the story of a former World War I fighter pilot who has been cursed with the appearance of a pig. Now working as a freelance bounty hunter, Porco Rosso must navigate the dangers of aerial dogfights and the challenges of his own personal demons. When he crosses paths with an ambitious American pilot, tensions rise and the true test of his skills and courage begins.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/5/26182l.jpg" alt="Lupin III: The Castle of Cagliostro">
                </div>
                <div class="details">
                    <a href="lupin-iii%3A-the-castle-of-cagliostro"><h3>Lupin III: The Castle of Cagliostro</h3></a>
                    <p>Action</p>
                    <p>1979</p>
                    <br>
                    <p>Lupin III: The Castle of Cagliostro follows master thief Arsène Lupin III as he embarks on a thrilling adventure to uncover the secrets of a counterfeit money operation. Along with his partner Jigen, Lupin infiltrates the enigmatic Cagliostro castle, where they encounter Princess Clarisse, leading them to confront a devious count. Filled with high-octane action and daring heists, Lupin must outwit his foes and unravel the mysteries surrounding the legendary treasure of Cagliostro.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/1141/112764l.jpg" alt="Fog Hill of Five Elements">
                </div>
                <div class="details">
                    <a href="fog-hill-of-five-elements"><h3>Fog Hill of Five Elements</h3></a>
                    <p>Action</p>
                    <p>2020</p>
                    <br>
                    <p>In a world where elemental warriors protect their land, a powerful demon threatens to bring chaos and destruction. To stop him, a young warrior must journey to the Fog Hill and awaken the remaining elemental warriors. With each warrior possessing unique abilities, they must work together to harness their powers and save their world from impending doom. But as secrets unravel and alliances are tested, the true extent of their enemies' strength becomes clear.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/6/49237l.webp" alt="Silver Spoon">
                </div>
                <div class="details">
                    <a href="silver-spoon"><h3>Silver Spoon</h3></a>
                    <p>Comedy</p>
                    <p>2013</p>
                    <br>
                    <p>Silver Spoon follows Yuugo Hachiken, a high school student from the city who enrolls in an agricultural school in rural Hokkaido to escape the high expectations of his family. As he navigates the challenges of farm life and befriends his classmates, he experiences personal growth and discovers a new perspective on hard work, friendship, and the true meaning of success.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/1470/138723l.jpg" alt="Howl's Moving Castle">
                </div>
                <div class="details">
                    <a href="howl%27s-moving-castle"><h3>Howl's Moving Castle</h3></a>
                    <p>Romance</p>
                    <p>2004</p>
                    <br>
                    <p>In Howl's Moving Castle, a young woman named Sophie is cursed by a wicked witch and transformed into an old woman. She seeks refuge in the mysterious moving castle owned by the handsome wizard Howl. As they embark on a magical journey to break the curse, Sophie discovers the secrets of the castle and the true nature of Howl's powers. Together, they must confront their pasts and overcome the challenges that threaten their world.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/8/52353l.jpg" alt="The Wind Rises">
                </div>
                <div class="details">
                    <a href="the-wind-rises"><h3>The Wind Rises</h3></a>
                    <p>Romance</p>
                    <p>2013</p>
                    <br>
                    <p>The Wind Rises follows the story of Jiro Horikoshi, a young aspiring aircraft designer with a passion for aviation. Set in Japan during the World War II era, Jiro navigates personal and professional challenges as he strives to create beautiful and innovative aircraft. Along the way, he encounters love, friendship, and the harsh realities of war. Balancing his dreams with the responsibilities of his creations, Jiro must confront the moral implications of his work as the world around him changes.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/1880/103168l.jpg" alt="Magical Circle">
                </div>
                <div class="details">
                    <a href="magical-circle"><h3>Magical Circle</h3></a>
                    <p>Comedy</p>
                    <p>2017</p>
                    <br>
                    <p>In a world where magic is outlawed, a group of young wizards form a secret magical circle to practice their abilities in hopes of restoring peace to their divided kingdom. As they navigate through challenges and enemies to harness their powers, they uncover a dark conspiracy threatening to plunge their homeland into chaos. With each member possessing unique abilities, they must unite their strengths to save their world from impending doom.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/9/11986l.jpg" alt="Nodame Cantabile">
                </div>
                <div class="details">
                    <a href="nodame-cantabile"><h3>Nodame Cantabile</h3></a>
                    <p>Romance</p>
                    <p>2007</p>
                    <br>
                    <p>Nodame Cantabile follows the story of Shinichi Chiaki, a talented musician with dreams of becoming a conductor. His path crosses with Noda Megumi, a quirky and free-spirited pianist known as Nodame. The two navigate their musical ambitions together while also exploring their feelings for each other. As they face various challenges in their personal and professional lives, they discover the true power of music in bringing people together.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/1680/110451l.jpg" alt="Keep Your Hands Off Eizouken!">
                </div>
                <div class="details">
                    <a href="keep-your-hands-off-eizouken%21"><h3>Keep Your Hands Off Eizouken!</h3></a>
                    <p>Comedy</p>
                    <p>2020</p>
                    <br>
                    <p>Three high school girls with a passion for anime come together to create their own animated films. As they navigate the challenges of school life and their individual strengths and weaknesses, they work tirelessly to bring their vibrant imaginations to life on the screen. Together, they push the boundaries of creativity and collaboration to make their dreams a reality.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/1970/122297l.webp" alt="Ya Boy Kongming!">
                </div>
                <div class="details">
                    <a href="ya-boy-kongming%21"><h3>Ya Boy Kongming!</h3></a>
                    <p>Comedy</p>
                    <p>2022</p>
                    <br>
                    <p>Ya Boy Kongming! is an entertaining anime about the legendary Chinese strategist Zhuge Liang Kongming, who is reincarnated in modern-day Tokyo. He meets Eiko Tsukimi, an aspiring singer, and uses his tactical genius to help her achieve her dreams of becoming a music star. The series blends historical elements with contemporary music and comedy, creating a delightful story about ambition, friendship, and pursuing one's dreams.</p>
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
                        <div class="rank">22</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 61%;"></span>
                            </div>
                            <p>61% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1480/132791l.webp" alt="Tokyo Godfathers">
                </div>
                <div class="details">
                    <a href="tokyo-godfathers"><h3>Tokyo Godfathers</h3></a>
                    <p>Drama</p>
                    <p>2003</p>
                    <br>
                    <p>Tokyo Godfathers follows a trio of homeless individuals - a former drag queen, a runaway teenager, and a middle-aged alcoholic - who discover an abandoned baby on Christmas Eve. Determined to reunite the child with its family, the unlikely group embarks on a heartwarming and sometimes humorous journey through the streets of Tokyo. Along the way, they confront their own pasts and form a unique bond as they navigate through various challenges and obstacles.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">23</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 61%;"></span>
                            </div>
                            <p>61% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/2/50501l.jpg" alt="Hidamari Sketch x Honeycomb">
                </div>
                <div class="details">
                    <a href="hidamari-sketch-x-honeycomb"><h3>Hidamari Sketch x Honeycomb</h3></a>
                    <p>Other Genre</p>
                    <p>2012</p>
                    <br>
                    <p>Hidamari Sketch x Honeycomb follows a group of high school girls attending an art school as they navigate through their daily lives, personal challenges, and artistic endeavors. Through their interactions with one another and their quirky neighbors, the girls form lasting friendships and support each other on their journeys of self-discovery and growth. With a focus on friendship, creativity, and the ups and downs of adolescence, the series showcases the girls' unique personalities and experiences in a heartwarming and comedic manner.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">24</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 61%;"></span>
                            </div>
                            <p>61% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1731/120871l.jpg" alt="Aoashi">
                </div>
                <div class="details">
                    <a href="aoashi"><h3>Aoashi</h3></a>
                    <p>Sports</p>
                    <p>2022</p>
                    <br>
                    <p>Aoashi follows the story of Masaki Hinaoka, a high school student with a passion for soccer. After a chance encounter with his childhood friend, Mio Kozue, who is now a professional soccer player, Masaki is inspired to join the school's soccer team. As he navigates the challenges of high school soccer and strives to reach his full potential, Masaki forms new friendships, faces tough opponents, and learns important lessons about teamwork and determination.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">25</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 61%;"></span>
                            </div>
                            <p>61% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/4/89877l.jpg" alt="Laid-Back Camp">
                </div>
                <div class="details">
                    <a href="laid-back-camp"><h3>Laid-Back Camp</h3></a>
                    <p>Other Genre</p>
                    <p>2018</p>
                    <br>
                    <p>High school student Rin Shima loves camping by herself to enjoy nature in solitude. When she meets the cheerful and outgoing Nadeshiko Kagamihara, her quiet camping trips take an unexpected turn. Together, they form new friendships, learn outdoor skills, and embark on adventures in the great outdoors, leading to heartwarming moments and unforgettable memories. Experience the joys of friendship and the beauty of nature in this relaxing and heartwarming slice-of-life anime.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">26</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 61%;"></span>
                            </div>
                            <p>61% Similarity</p>
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
                        <div class="rank">27</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 60%;"></span>
                            </div>
                            <p>60% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1580/93526l.webp" alt="Hinamatsuri">
                </div>
                <div class="details">
                    <a href="hinamatsuri"><h3>Hinamatsuri</h3></a>
                    <p>Comedy</p>
                    <p>2018</p>
                    <br>
                    <p>A psychic girl from another dimension suddenly appears in the living room of a stoic yakuza member, demanding his help. As the unlikely duo navigates their new living arrangement, they find themselves surrounded by a quirky cast of characters - including more psychic children and eccentric individuals with their own supernatural abilities. Together, they embark on hilarious and heartwarming adventures, learning valuable lessons about friendship and family along the way.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">28</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 60%;"></span>
                            </div>
                            <p>60% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/2/36607l.jpg" alt="Star Blazers: Space Battleship Yamato 2199">
                </div>
                <div class="details">
                    <a href="star-blazers%3A-space-battleship-yamato-2199"><h3>Star Blazers: Space Battleship Yamato 2199</h3></a>
                    <p>Action</p>
                    <p>2012</p>
                    <br>
                    <p>In Star Blazers: Space Battleship Yamato 2199, the remnants of humanity must journey to the distant planet of Iscandar in order to retrieve a device that can save Earth from extinction. The crew of the space battleship Yamato must navigate through treacherous space battles and face formidable enemies on their quest to ensure the survival of their species. Will they succeed in their mission against all odds and return home victorious?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">29</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 60%;"></span>
                            </div>
                            <p>60% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1/2432l.jpg" alt="The Girl Who Leapt Through Time">
                </div>
                <div class="details">
                    <a href="the-girl-who-leapt-through-time"><h3>The Girl Who Leapt Through Time</h3></a>
                    <p>Romance</p>
                    <p>2006</p>
                    <br>
                    <p>After discovering she has the ability to leap backwards in time, high schooler Makoto Konno uses her newfound power for everyday tasks and personal gain. However, as she continues to manipulate time, Makoto soon realizes that her actions have unforeseen consequences on the world around her. With the help of her friends, she must learn to make the right choices and confront the responsibility that comes with her extraordinary gift.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">30</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 60%;"></span>
                            </div>
                            <p>60% Similarity</p>
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

        </section>
    </main>
</body>
</html>
