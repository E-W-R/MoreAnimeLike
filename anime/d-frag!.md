
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like D-Frag!</title>
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
        <script>const number = "20031";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/1662/112108l.jpg" alt="D-Frag!">
                <div>
                    <h2 id="title">D-Frag!</h2>
                    <p>Comedy</p>
                    <p>2014</p>
                    <br>
                    <p>Kazama is forcibly recruited into the Game Development Club, run by four eccentric girls. Despite his attempts to regain control, Kazama finds himself entangled in their crazy antics and bizarre games. As the club faces off against other clubs in strange challenges, Kazama navigates through friendships, rivalries, and unexpected twists. Will Kazama survive the chaos of the Game Development Club, or will he be forever changed by his new quirky companions?</p>
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
                                <span style="width: 83%;"></span>
                            </div>
                            <p>83% Similarity</p>
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
                        <div class="rank">2</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 80%;"></span>
                            </div>
                            <p>80% Similarity</p>
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
                        <div class="rank">3</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 78%;"></span>
                            </div>
                            <p>78% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/8/39333l.jpg" alt="Good Luck Girl!">
                </div>
                <div class="details">
                    <a href="good-luck-girl%21"><h3>Good Luck Girl!</h3></a>
                    <p>Comedy</p>
                    <p>2012</p>
                    <br>
                    <p>Good Luck Girl! follows the story of Ichiko Sakura, a girl who is blessed with good fortune and is followed by misfortune deities seeking to restore balance. When Ichiko encounters Momiji, a poverty god sent to take her fortune, their battles lead to unexpected consequences. Through their hilarious interactions, they both learn valuable lessons about luck, friendship, and the true meaning of happiness.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">4</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 78%;"></span>
                            </div>
                            <p>78% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/10/75249l.jpg" alt="Engaged to the Unidentified">
                </div>
                <div class="details">
                    <a href="engaged-to-the-unidentified"><h3>Engaged to the Unidentified</h3></a>
                    <p>Romance</p>
                    <p>2014</p>
                    <br>
                    <p>Engaged to the Unidentified follows the story of Kobeni, who finds out on her 16th birthday that she is engaged to a boy named Hakuya. However, things take an unexpected turn when Hakuya and his little sister Mashiro move in with Kobeni and her family. As Kobeni navigates her new relationship and living arrangements, she uncovers surprising secrets about Hakuya and Mashiro's past.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/4/37451l.webp" alt="Is This a Zombie? of the Dead">
                </div>
                <div class="details">
                    <a href="is-this-a-zombie%3F-of-the-dead"><h3>Is This a Zombie? of the Dead</h3></a>
                    <p>Action</p>
                    <p>2012</p>
                    <br>
                    <p>In Is This a Zombie? of the Dead, Ayumu continues his quest to become human again while dealing with new challenges and threats. With the addition of mysterious girls Eucliwood Hellscythe and Haruna, Ayumu faces even more chaos and comedic mishaps in his undead life. However, as they delve into the mysteries surrounding them, they uncover dark forces at play that put not only their lives but the entire world at risk.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/2/71801l.jpg" alt="THE IDOLM@STER MOVIE: BEYOND THE BRILLIANT FUTURE!">
                </div>
                <div class="details">
                    <a href="the-idolm%40ster-movie%3A-beyond-the-brilliant-future%21"><h3>THE IDOLM@STER MOVIE: BEYOND THE BRILLIANT FUTURE!</h3></a>
                    <p>Drama</p>
                    <p>2014</p>
                    <br>
                    <p>The members of 765 Production Studio are thrilled to be selected for the Idol Project mission, where they participate in various concerts and events to showcase their talents. However, as they face new challenges and opportunities, they must navigate the competitive world of idol stardom while staying true to themselves. With their friendships and bonds put to the test, the idols must strive for success and unity to reach beyond the brilliant future that awaits them.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/5/85435l.webp" alt="Amagi Brilliant Park">
                </div>
                <div class="details">
                    <a href="amagi-brilliant-park"><h3>Amagi Brilliant Park</h3></a>
                    <p>Comedy</p>
                    <p>2014</p>
                    <br>
                    <p>When the amusement park, Amagi Brilliant Park, is on the verge of being shut down due to poor performance, Seiya Kanie, a high school student, is tasked with reviving it. Despite his initial reluctance, Seiya soon discovers that the park's staff are actually magical creatures from a different realm who need the park's success to survive. With his business acumen and the help of the quirky staff, Seiya works towards attracting more visitors to the park while unraveling its magical secrets.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">8</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 76%;"></span>
                            </div>
                            <p>76% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/8/20596l.jpg" alt="The Law of Ueki">
                </div>
                <div class="details">
                    <a href="the-law-of-ueki"><h3>The Law of Ueki</h3></a>
                    <p>Action</p>
                    <p>2005</p>
                    <br>
                    <p>The Law of Ueki follows a middle school student named Kousuke Ueki who receives a unique power from a mysterious teacher. Ueki and his classmates are chosen to participate in a tournament where they must use their powers to compete against each other. However, Ueki decides to use his ability to turn trash into trees to do good deeds instead of fighting. As he faces various opponents with different abilities, Ueki learns valuable lessons about friendship, determination, and the true meaning of strength.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/1055/121956l.webp" alt="Vampire in the Garden">
                </div>
                <div class="details">
                    <a href="vampire-in-the-garden"><h3>Vampire in the Garden</h3></a>
                    <p>Action</p>
                    <p>2022</p>
                    <br>
                    <p>In a world where humans and vampires coexist, a young vampire girl and a human boy form an unlikely friendship that defies societal norms. Together, they navigate the challenges of their two worlds colliding while uncovering a hidden conspiracy that threatens the delicate balance between humans and vampires. As they delve deeper into the mystery, they must confront their own prejudices and find a way to prevent a war that could consume them all.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">10</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1139/104708l.jpg" alt="If My Favorite Pop Idol Made It to the Budokan, I Would Die">
                </div>
                <div class="details">
                    <a href="if-my-favorite-pop-idol-made-it-to-the-budokan%2C-i-would-die"><h3>If My Favorite Pop Idol Made It to the Budokan, I Would Die</h3></a>
                    <p>Comedy</p>
                    <p>2020</p>
                    <br>
                    <p>Eripiyo, an enthusiastic fan, is in love with the idol Momose. Determined to support her favorite idol, Eripiyo joins her small and unknown fan club. Through her devotion, Eripiyo hopes to bring Momose the fame she deserves. As the fan club grows, Eripiyo navigates the ups and downs of being an idol supporter while learning important life lessons along the way.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">11</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/12/50257l.jpg" alt="Love Lab">
                </div>
                <div class="details">
                    <a href="love-lab"><h3>Love Lab</h3></a>
                    <p>Romance</p>
                    <p>2013</p>
                    <br>
                    <p>In Love Lab, high school student Riko Kurahashi is known for her tough and mature demeanor. However, one day, her facade is shattered when she's caught giving romantic advice to student council president Natsuo Maki. Impressed by Riko's perceived expertise, Natsuo recruits her to join the school's Love Lab, where they conduct experiments on love and relationships. As Riko navigates her new role and the chaos that ensues, she finds herself learning more about love than she ever expected.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">12</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 71%;"></span>
                            </div>
                            <p>71% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/9/82590l.webp" alt="Gabriel DropOut">
                </div>
                <div class="details">
                    <a href="gabriel-dropout"><h3>Gabriel DropOut</h3></a>
                    <p>Comedy</p>
                    <p>2017</p>
                    <br>
                    <p>After graduating at the top of her angel class in heaven, Gabriel is sent down to Earth to make the world a better place. However, things don't go as planned when she becomes addicted to video games and loses her angelic ways. Along with her equally mischievous friends Vignette, Satanichia, and Raphiel, they navigate through hilarious and chaotic situations as they try to adapt to life on Earth. Gabriel DropOut is a delightful comedy filled with quirky characters and hilarious antics.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">13</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 71%;"></span>
                            </div>
                            <p>71% Similarity</p>
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
                        <div class="rank">14</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/9/80417l.jpg" alt="New Game!">
                </div>
                <div class="details">
                    <a href="new-game%21"><h3>New Game!</h3></a>
                    <p>Comedy</p>
                    <p>2016</p>
                    <br>
                    <p>Aoba Suzukaze begins her career in the video game industry as a character designer at a renowned company. Follow her journey as she navigates the challenges of the workplace, learns from her talented colleagues, and strives to meet deadlines while balancing friendships and the demands of game development. A heartwarming story filled with humor, teamwork, and the passion for creating video games.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">15</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/10/75262l.webp" alt="Wagnaria!!">
                </div>
                <div class="details">
                    <a href="wagnaria%21%21"><h3>Wagnaria!!</h3></a>
                    <p>Comedy</p>
                    <p>2010</p>
                    <br>
                    <p>Wagnaria!! follows the comedic daily lives of the quirky staff members working at the Wagnaria family restaurant. The story primarily focuses on the new hire, Sota, who finds himself surrounded by eccentric coworkers, leading to hilarious and chaotic situations in the workplace. As they navigate through their unique personalities and relationships, they learn about teamwork, friendship, and personal growth in this heartwarming comedy.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">16</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
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
                        <div class="rank">17</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 68%;"></span>
                            </div>
                            <p>68% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/4/75550l.webp" alt="Student Council Staff Members">
                </div>
                <div class="details">
                    <a href="student-council-staff-members"><h3>Student Council Staff Members</h3></a>
                    <p>Comedy</p>
                    <p>2010</p>
                    <br>
                    <p>In a prestigious high school, a group of dedicated students come together to form the Student Council. As they navigate the challenges of school life, from organizing events and addressing student concerns to balancing their personal lives, the council members develop deep friendships and discover the importance of working together to make a positive impact on their school community. Through dedication and teamwork, they strive to create a better environment for everyone.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">18</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 68%;"></span>
                            </div>
                            <p>68% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/50177l.jpg" alt="The Devil is a Part-Timer!">
                </div>
                <div class="details">
                    <a href="the-devil-is-a-part-timer%21"><h3>The Devil is a Part-Timer!</h3></a>
                    <p>Comedy</p>
                    <p>2013</p>
                    <br>
                    <p>After being defeated by the hero Emilia, the Demon Lord Satan finds himself stranded in modern-day Tokyo without his powers. Forced to take on a part-time job at a fast-food restaurant to survive, Satan, now known as Sadao Maou, navigates the human world alongside his loyal general Ashiya. As Sadao rises through the ranks at MgRonald's, he must also contend with threats from his past and new enemies who seek to disrupt his peaceful life on Earth.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">19</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 68%;"></span>
                            </div>
                            <p>68% Similarity</p>
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
                        <div class="rank">20</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 68%;"></span>
                            </div>
                            <p>68% Similarity</p>
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
                        <div class="rank">21</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1332/109356l.webp" alt="With a Dog AND a Cat, Every Day is Fun">
                </div>
                <div class="details">
                    <a href="with-a-dog-and-a-cat%2C-every-day-is-fun"><h3>With a Dog AND a Cat, Every Day is Fun</h3></a>
                    <p>Comedy</p>
                    <p>2020</p>
                    <br>
                    <p>This anime follows the adorable and humorous daily lives of a high-energy dog and a laid-back cat as they navigate their domestic adventures with their owner. From playful antics to heartwarming moments, each episode showcases the unique bond between the contrasting yet lovable duo. Get ready for a mix of comedy, companionship, and heartwarming moments in this delightful slice-of-life series.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">22</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1733/140802l.jpg" alt="The Wrong Way to Use Healing Magic">
                </div>
                <div class="details">
                    <a href="the-wrong-way-to-use-healing-magic"><h3>The Wrong Way to Use Healing Magic</h3></a>
                    <p>Isekai</p>
                    <p>2024</p>
                    <br>
                    <p>After accidentally killing a demon lord, novice healer Mitoshi is banished to a remote village. With no combat skills, he relies on his healing magic to survive, but there's a catch: he can only use it for destructive purposes. As he navigates his new life, Mitoshi must find a way to control his powers and protect those around him from the dangers that threaten the village.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/1329/142757l.webp" alt="Saekano: How to Raise a Boring Girlfriend">
                </div>
                <div class="details">
                    <a href="saekano%3A-how-to-raise-a-boring-girlfriend"><h3>Saekano: How to Raise a Boring Girlfriend</h3></a>
                    <p>Romance</p>
                    <p>2015</p>
                    <br>
                    <p>Tomoya Aki, an average high school student, is inspired to create a visual novel after meeting the beautiful and talented Eriri Spencer Sawamura and Utaha Kasumigaoka. With the help of his artistic cousin, Tomoya embarks on the unique journey of producing his game. As their group grows and they face various challenges, their relationships evolve, leading to unexpected twists and turns in both their personal and professional lives.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">24</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/13/75521l.jpg" alt="Is This a Zombie?">
                </div>
                <div class="details">
                    <a href="is-this-a-zombie%3F"><h3>Is This a Zombie?</h3></a>
                    <p>Action</p>
                    <p>2011</p>
                    <br>
                    <p>A normal high school boy is mistakenly resurrected as a zombie by a necromancer named Eucliwood Hellscythe. Now he must navigate the challenges of his undead existence while dealing with other supernatural beings, including a magical girl and a vampire ninja. With his new companions, he must battle evil forces while trying to understand the mysteries surrounding his resurrection. Juggling school life and fighting against dark forces, the boy embarks on a humorous and action-packed adventure.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">25</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/11/47677l.webp" alt="Blood Lad">
                </div>
                <div class="details">
                    <a href="blood-lad"><h3>Blood Lad</h3></a>
                    <p>Action</p>
                    <p>2013</p>
                    <br>
                    <p>Blood Lad follows Staz, a powerful vampire and leader of the Eastern District of Demon World. His world turns upside down when a human girl named Fuyumi accidentally wanders into Demon World and dies. Determined to bring her back to life, Staz embarks on a comedic and action-packed adventure, with help from his friends, to find a way to resurrect Fuyumi. Along the way, they face various challenges and encounter other supernatural beings.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">26</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1130/99458l.webp" alt="Hitoribocchi no Marumaru Seikatsu">
                </div>
                <div class="details">
                    <a href="hitoribocchi-no-marumaru-seikatsu"><h3>Hitoribocchi no Marumaru Seikatsu</h3></a>
                    <p>Comedy</p>
                    <p>2019</p>
                    <br>
                    <p>Hitori Bocchi suffers from extreme social anxiety and struggles to make friends. Her one and only friend from elementary school has transferred to a different school, giving Bocchi a mission to befriend her entire class before they reunite in high school. With her shy and awkward nature, Bocchi navigates various obstacles and humorous situations in her quest to overcome her social fears.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">27</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/87463l.webp" alt="Recovery of an MMO Junkie">
                </div>
                <div class="details">
                    <a href="recovery-of-an-mmo-junkie"><h3>Recovery of an MMO Junkie</h3></a>
                    <p>Romance</p>
                    <p>2017</p>
                    <br>
                    <p>30-year-old Moriko Morioka has quit her job to become a NEET and immerse herself in the world of online gaming. As the male character Hayashi, she meets a female character named Lily, forming a close friendship in the virtual world. Things get complicated when Moriko encounters a handsome and friendly man in real life who may have a connection to Lily. Balancing her virtual and real identities becomes a challenge as Moriko navigates the complexities of relationships both on and offline.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">28</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1189/111994l.webp" alt="Tanaka-kun is Always Listless">
                </div>
                <div class="details">
                    <a href="tanaka-kun-is-always-listless"><h3>Tanaka-kun is Always Listless</h3></a>
                    <p>Other Genre</p>
                    <p>2016</p>
                    <br>
                    <p>The series follows Tanaka, a high school student who is perpetually tired and unenthusiastic about everything. His goal is to live life as effortlessly as possible and avoid any form of exertion. Despite his apathetic demeanor, Tanaka's friends continue to involve him in various activities, leading to comedic situations and heartwarming moments as they navigate the ups and downs of high school life together.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">29</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1277/117155l.jpg" alt="Mieruko-chan">
                </div>
                <div class="details">
                    <a href="mieruko-chan"><h3>Mieruko-chan</h3></a>
                    <p>Comedy</p>
                    <p>2021</p>
                    <br>
                    <p>After gaining the ability to see horrifying supernatural creatures, high school girl Miko is determined to ignore them to live a normal life. However, she soon realizes that pretending they aren't there may not be as easy as she thought. With the help of her friend Hana, Miko navigates the terrifying world around her while trying to keep her unique gift a secret from everyone else.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">30</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/2/73700l.webp" alt="Yamada-kun and the Seven Witches">
                </div>
                <div class="details">
                    <a href="yamada-kun-and-the-seven-witches"><h3>Yamada-kun and the Seven Witches</h3></a>
                    <p>Mystery</p>
                    <p>2015</p>
                    <br>
                    <p>When high school delinquent Ryu Yamada discovers he can swap bodies with the studious Urara Shiraishi with just a kiss, they uncover a hidden world of paranormal powers at their school. Together, they must navigate the secrets and challenges of the seven witches, each with a unique ability, all while trying to keep their own powers under wraps. As their friendship deepens, they must unravel the mysteries surrounding the witches and their own pasts.</p>
                </div>
            </div>

        </section>
    </main>
</body>
</html>
