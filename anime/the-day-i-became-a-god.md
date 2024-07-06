
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like The Day I Became a God</title>
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
        <script>const number = "41930";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/1396/109465l.jpg" alt="The Day I Became a God">
                <div>
                    <h2 id="title">The Day I Became a God</h2>
                    <p>Drama</p>
                    <p>2020</p>
                    <br>
                    <p>After meeting a mysterious girl who claims to be a god, high school student Yota Narukami finds his life turned upside down as the self-proclaimed deity foretells that the world will end in 30 days. As the two embark on a series of unpredictable and heartwarming adventures, Yota must grapple with the impending chaos while trying to understand the girl's true identity and the reasons behind her apocalyptic prophecy.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/11/44522l.jpg" alt="Unlimited Psychic Squad">
                </div>
                <div class="details">
                    <a href="unlimited-psychic-squad"><h3>Unlimited Psychic Squad</h3></a>
                    <p>Action</p>
                    <p>2013</p>
                    <br>
                    <p>In a world where individuals possess extraordinary psychic abilities, a special squad is formed to maintain peace and order. The squad consists of talented psychics, each with unique powers and strengths. As they take on various missions and face powerful enemies, they must navigate complex moral dilemmas and personal challenges. Together, they must uncover dark secrets and protect humanity from looming threats. With their powers and bonds tested, the squad must learn to trust each other in order to succeed.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">2</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 55%;"></span>
                            </div>
                            <p>55% Similarity</p>
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
                        <div class="rank">3</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 45%;"></span>
                            </div>
                            <p>45% Similarity</p>
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
                        <div class="rank">4</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 45%;"></span>
                            </div>
                            <p>45% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/13/21898l.webp" alt="Earl and Fairy">
                </div>
                <div class="details">
                    <a href="earl-and-fairy"><h3>Earl and Fairy</h3></a>
                    <p>Romance</p>
                    <p>2008</p>
                    <br>
                    <p>In Earl and Fairy, Lydia Carlton, a young woman with the ability to communicate with fairies, embarks on a journey to Scotland. There, she meets Edgar Ashenbert, a charming and enigmatic earl who enlists her help in finding a legendary sword. As Lydia and Edgar traverse the Scottish countryside, they encounter both friends and foes in their quest, all while unraveling mysteries of the past and forging a deeper connection with each other.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">5</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 45%;"></span>
                            </div>
                            <p>45% Similarity</p>
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
                                <span style="width: 41%;"></span>
                            </div>
                            <p>41% Similarity</p>
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
                        <div class="rank">7</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 41%;"></span>
                            </div>
                            <p>41% Similarity</p>
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
                        <div class="rank">8</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 41%;"></span>
                            </div>
                            <p>41% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1485/108385l.jpg" alt="22/7">
                </div>
                <div class="details">
                    <a href="227"><h3>22/7</h3></a>
                    <p>Other Genre</p>
                    <p>2020</p>
                    <br>
                    <p>22/7 follows the story of eight high school girls who are brought together by a mysterious entity called The Wall. They are tasked with becoming an idol group, despite their different personalities and backgrounds. As they navigate the challenges of stardom and personal growth, they must come to terms with their individual struggles while learning to work together as a group. Through music and friendship, the girls aim to discover the true purpose behind their unlikely collaboration.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">9</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 41%;"></span>
                            </div>
                            <p>41% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1449/117797l.jpg" alt="Takt Op. Destiny">
                </div>
                <div class="details">
                    <a href="takt-op.-destiny"><h3>Takt Op. Destiny</h3></a>
                    <p>Action</p>
                    <p>2021</p>
                    <br>
                    <p>In a world where music has the power to manipulate reality, a young conductor named Takt forms a bond with a mysterious girl named Destiny who wields a powerful weaponized musical instrument. Together, they must navigate a war-torn landscape and confront formidable adversaries known as D2 in order to protect the world from destruction. As they uncover the truth behind their intertwined destinies, Takt and Destiny must harness the power of music to save humanity.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">10</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 40%;"></span>
                            </div>
                            <p>40% Similarity</p>
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
                        <div class="rank">11</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 40%;"></span>
                            </div>
                            <p>40% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/4/42015l.jpg" alt="Love, Election and Chocolate">
                </div>
                <div class="details">
                    <a href="love%2C-election-and-chocolate"><h3>Love, Election and Chocolate</h3></a>
                    <p>Romance</p>
                    <p>2012</p>
                    <br>
                    <p>In Love, Election and Chocolate, the story follows Yuki Ojima, a high school student who becomes involved in a student council election filled with rivalry and drama. As the election heats up, secrets are revealed, friendships are tested, and unexpected relationships bloom. In the midst of political maneuvering and personal struggles, Yuki must navigate his feelings while trying to make a difference in his school and protect what he holds dear.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">12</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 40%;"></span>
                            </div>
                            <p>40% Similarity</p>
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
                        <div class="rank">13</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 40%;"></span>
                            </div>
                            <p>40% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1624/139672l.jpg" alt="Sasaki and Peeps">
                </div>
                <div class="details">
                    <a href="sasaki-and-peeps"><h3>Sasaki and Peeps</h3></a>
                    <p>Isekai</p>
                    <p>2024</p>
                    <br>
                    <p>In Sasaki and Peeps, high school student Sasaki discovers an abandoned, injured baby crow and decides to nurse it back to health. With the help of his classmates, they form a bond with the crow they name Peeps. As they care for Peeps and learn about the challenges of raising a wild animal, they also navigate their own personal struggles and form lasting friendships. The heartwarming story explores the themes of compassion, friendship, and the beauty of connecting with nature.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">14</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 40%;"></span>
                            </div>
                            <p>40% Similarity</p>
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
                        <div class="rank">15</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 40%;"></span>
                            </div>
                            <p>40% Similarity</p>
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
                        <div class="rank">16</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 40%;"></span>
                            </div>
                            <p>40% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1361/120706l.jpg" alt="Skeleton Knight in Another World">
                </div>
                <div class="details">
                    <a href="skeleton-knight-in-another-world"><h3>Skeleton Knight in Another World</h3></a>
                    <p>Isekai</p>
                    <p>2022</p>
                    <br>
                    <p>After mysteriously being transported to a medieval fantasy world, a young man named Arc decides to use his gaming skills to become the feared Skeleton Knight. With his powerful skeleton armor and newfound abilities, Arc embarks on a journey to uncover the truth behind his arrival in this world. Along the way, he forms alliances, battles formidable foes, and seeks to protect those in need, all while trying to find a way back home.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">17</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 40%;"></span>
                            </div>
                            <p>40% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1195/123948l.jpg" alt="Spriggan (ONA)">
                </div>
                <div class="details">
                    <a href="spriggan-%28ona%29"><h3>Spriggan (ONA)</h3></a>
                    <p>Action</p>
                    <p>2022</p>
                    <br>
                    <p>In Spriggan, a group of elite soldiers, known as Spriggans, are tasked with protecting ancient relics with mysterious powers from falling into the wrong hands. Yu Ominae, a young Spriggan, finds himself caught in a global conspiracy involving secret organizations and powerful individuals seeking to control these relics for their own nefarious purposes. With the fate of the world hanging in the balance, Yu must use his skills and abilities to prevent a catastrophe of unimaginable proportions.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">18</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 40%;"></span>
                            </div>
                            <p>40% Similarity</p>
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
                        <div class="rank">19</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 38%;"></span>
                            </div>
                            <p>38% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/5/85224l.webp" alt="Grimoire of Zero">
                </div>
                <div class="details">
                    <a href="grimoire-of-zero"><h3>Grimoire of Zero</h3></a>
                    <p>Action</p>
                    <p>2017</p>
                    <br>
                    <p>In a world where witches are feared and hunted, a young mercenary encounters a witch named Zero who is searching for a powerful grimoire. Despite his initial reservations, he agrees to help her in exchange for a cure for his curse. As they journey together, they face prejudice and persecution, gradually forming a deep bond as they navigate political intrigue and magical battles while trying to uncover the secrets of the grimoire.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">20</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 38%;"></span>
                            </div>
                            <p>38% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1533/94555l.jpg" alt="I'm glad I could keep running.">
                </div>
                <div class="details">
                    <a href="i%27m-glad-i-could-keep-running."><h3>I'm glad I could keep running.</h3></a>
                    <p>Drama</p>
                    <p>2018</p>
                    <br>
                    <p>In a world where humans coexist with powerful supernatural beings, a high school track runner discovers he possesses incredible speed. As he delves deeper into his newfound abilities, he uncovers a hidden society of runners who use their speed for various purposes. Facing challenges and adversaries along the way, our protagonist must make difficult choices to protect those he cares about and navigate the dangerous secrets of the runner world.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">21</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 38%;"></span>
                            </div>
                            <p>38% Similarity</p>
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
                        <div class="rank">22</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 38%;"></span>
                            </div>
                            <p>38% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/12/89979l.jpg" alt="The Ryuo's Work is Never Done!">
                </div>
                <div class="details">
                    <a href="the-ryuo%27s-work-is-never-done%21"><h3>The Ryuo's Work is Never Done!</h3></a>
                    <p>Comedy</p>
                    <p>2018</p>
                    <br>
                    <p>Sixteen-year-old Yaichi Kuzuryu is a professional shogi player who holds the title of Ryuo. When a nine-year-old girl named Ai Hinatsuru declares she wants to become his disciple, Yaichi reluctantly agrees. As they form an unlikely mentorship, Yaichi navigates the complexities of the shogi world while helping Ai grow as a player. Together, they face challenges, forge friendships, and strive to become stronger in the world of competitive shogi.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">23</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 38%;"></span>
                            </div>
                            <p>38% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1311/120270l.jpg" alt="Heroines Run the Show: The Unpopular Girl and the Secret Task">
                </div>
                <div class="details">
                    <a href="heroines-run-the-show%3A-the-unpopular-girl-and-the-secret-task"><h3>Heroines Run the Show: The Unpopular Girl and the Secret Task</h3></a>
                    <p>Other Genre</p>
                    <p>2022</p>
                    <br>
                    <p>In a world where magical girls reign supreme, an unnoticed high school girl is recruited to join their ranks. With a unique power she must keep hidden, she trains to fight dark forces threatening their city. As she struggles to balance her ordinary life with her newfound responsibilities, she discovers the true power of friendship and courage. Her journey will test her resolve, but she is determined to prove that even the most unassuming individual can become a hero.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">24</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 38%;"></span>
                            </div>
                            <p>38% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1934/122301l.jpg" alt="I'm Quitting Heroing">
                </div>
                <div class="details">
                    <a href="i%27m-quitting-heroing"><h3>I'm Quitting Heroing</h3></a>
                    <p>Action</p>
                    <p>2022</p>
                    <br>
                    <p>In a world where heroes protect the people from evil, a talented young hero decides to retire due to a traumatic incident. As they struggle to adjust to a normal life away from the constant battles and fame, they discover new friendships and challenges. Will they be able to leave their heroic past behind, or will the call to action prove too strong to resist? I'm Quitting Heroing is a heartfelt journey of self-discovery and personal growth.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">25</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 38%;"></span>
                            </div>
                            <p>38% Similarity</p>
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
                        <div class="rank">26</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 38%;"></span>
                            </div>
                            <p>38% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1285/120529l.jpg" alt="A Couple of Cuckoos">
                </div>
                <div class="details">
                    <a href="a-couple-of-cuckoos"><h3>A Couple of Cuckoos</h3></a>
                    <p>Romance</p>
                    <p>2022</p>
                    <br>
                    <p>When high school student Nagi meets Erika, they quickly become friends, but things take a turn when Nagi discovers Erika's secret. The two make a pact to help each other pursue their respective crushes, sparking a series of comical and heartwarming misadventures. As they navigate the ups and downs of teenage romance, their feelings towards each other begin to change. 'A Couple of Cuckoos' is a story of friendship, love, and the complexities of young relationships.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">27</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 38%;"></span>
                            </div>
                            <p>38% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1538/140687l.jpg" alt="Meiji Gekken: 1874">
                </div>
                <div class="details">
                    <a href="meiji-gekken%3A-1874"><h3>Meiji Gekken: 1874</h3></a>
                    <p>Action</p>
                    <p>2024</p>
                    <br>
                    <p>In Meiji Gekken: 1874, a young swordsman seeks revenge for his master's death during the tumultuous Meiji Restoration period in Japan. Fueled by a desire for justice, he hones his skills and navigates the dangerous political landscape to uncover the truth behind the betrayal. As tensions rise and loyalties are tested, the swordsman must decide between seeking vengeance or forging a new path towards peace and redemption.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">28</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 38%;"></span>
                            </div>
                            <p>38% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1626/108849l.jpg" alt="Iwa Kakeru! Sport Climbing Girls">
                </div>
                <div class="details">
                    <a href="iwa-kakeru%21-sport-climbing-girls"><h3>Iwa Kakeru! Sport Climbing Girls</h3></a>
                    <p>Sports</p>
                    <p>2020</p>
                    <br>
                    <p>Konomi Kasahara discovers her passion for sport climbing and joins Hanamiya Girls' High School's climbing team. Determined to reach new heights and face challenging routes, Konomi befriends her teammates and rivals, striving to compete in various tournaments. As she overcomes obstacles and pushes her limits, Konomi learns the importance of teamwork, dedication, and perseverance in the world of competitive sport climbing.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">29</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 36%;"></span>
                            </div>
                            <p>36% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1836/116060l.webp" alt="Seirei Gensouki: Spirit Chronicles">
                </div>
                <div class="details">
                    <a href="seirei-gensouki%3A-spirit-chronicles"><h3>Seirei Gensouki: Spirit Chronicles</h3></a>
                    <p>Isekai</p>
                    <p>2021</p>
                    <br>
                    <p>After dying in a tragic accident, Haruto is reborn in a magical world as Rio, with memories of his previous life intact. Raised in a noble family, Rio discovers his unique powers as he strives to uncover the secrets of his past. With a burning desire for revenge and a quest for redemption, Rio's journey intertwines with friendship, love, and a destiny that could change the fate of the world.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">30</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 36%;"></span>
                            </div>
                            <p>36% Similarity</p>
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

        </section>
    </main>
</body>
</html>
