
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like To Your Eternity</title>
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
        <script>const number = "41025";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/1880/118484l.jpg" alt="To Your Eternity">
                <div>
                    <h2 id="title">To Your Eternity</h2>
                    <p>Drama</p>
                    <p>2021</p>
                    <br>
                    <p>To Your Eternity follows an immortal being who can take on the form of things it encounters. It begins as a sphere and eventually learns more about the world through various experiences. The being embarks on an emotional journey that explores the essence of life, death, and human connections. Through encounters with different individuals, it learns the complexity of emotions and the impact of its existence on those it encounters.</p>
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
                                <span style="width: 76%;"></span>
                            </div>
                            <p>76% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1879/100467l.webp" alt="Dororo">
                </div>
                <div class="details">
                    <a href="dororo"><h3>Dororo</h3></a>
                    <p>Action</p>
                    <p>2019</p>
                    <br>
                    <p>In Dororo, a young ronin named Hyakkimaru embarks on a quest to reclaim his stolen body parts from demons in order to regain his humanity. Along the way, he is joined by a young thief named Dororo. Together, they journey through a war-torn land, facing off against various supernatural threats while uncovering the truth about Hyakkimaru's past and the demons responsible for his current condition.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">2</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 76%;"></span>
                            </div>
                            <p>76% Similarity</p>
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
                        <div class="rank">3</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 75%;"></span>
                            </div>
                            <p>75% Similarity</p>
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
                        <div class="rank">4</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 73%;"></span>
                            </div>
                            <p>73% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1613/102576l.jpg" alt="Dr. Stone">
                </div>
                <div class="details">
                    <a href="dr.-stone"><h3>Dr. Stone</h3></a>
                    <p>Comedy</p>
                    <p>2019</p>
                    <br>
                    <p>One day, a mysterious light turns all of humanity into stone statues. Thousands of years later, high school student Senku Ishigami manages to break free from his petrified state and vows to bring back civilization using his scientific knowledge. Alongside his friends, Senku sets out to rebuild the world and unlock the secrets of the petrification phenomenon, facing challenges from both nature and others who seek to control this new world order.</p>
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
                        <div class="rank">6</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 70%;"></span>
                            </div>
                            <p>70% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1637/115052l.jpg" alt="Vivy -Fluorite Eye's Song-">
                </div>
                <div class="details">
                    <a href="vivy--fluorite-eye%27s-song-"><h3>Vivy -Fluorite Eye's Song-</h3></a>
                    <p>Action</p>
                    <p>2021</p>
                    <br>
                    <p>In a future where AI and humans coexist, an AI named Vivy is tasked with preventing a war between the two. With the help of a time-traveling AI from the future, Vivy embarks on a journey through time to change the course of history. As she interacts with various characters and faces unpredictable challenges, she must navigate complex moral dilemmas and ultimately unravel the mysteries surrounding her own existence.</p>
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
                        <div class="rank">8</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
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
                        <div class="rank">9</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
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
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
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
                        <div class="rank">11</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
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
                        <div class="rank">12</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1075/131925l.jpg" alt="Hell's Paradise">
                </div>
                <div class="details">
                    <a href="hell%27s-paradise"><h3>Hell's Paradise</h3></a>
                    <p>Action</p>
                    <p>2023</p>
                    <br>
                    <p>Hell's Paradise follows a group of skilled warriors and criminals sent to a mysterious island in search of the legendary elixir of immortality. As they navigate the treacherous terrain filled with deadly creatures and deceitful inhabitants, they must rely on their abilities and wits to survive. Along the way, they uncover dark secrets and face moral dilemmas that test their resolve and humanity. With betrayal and alliances constantly shifting, the group must stay united to achieve their goal.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">13</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
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
                        <div class="rank">14</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 65%;"></span>
                            </div>
                            <p>65% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1121/133132l.jpg" alt="Heavenly Delusion">
                </div>
                <div class="details">
                    <a href="heavenly-delusion"><h3>Heavenly Delusion</h3></a>
                    <p>Mystery</p>
                    <p>2023</p>
                    <br>
                    <p>Heavenly Delusion follows Hikaru, a high school student who discovers a hidden ability to see supernatural creatures known as yokai. As Hikaru navigates his newfound powers, he becomes entangled in a world of mystery and danger. With the help of his friends, he must unravel the secrets surrounding the yokai and prevent a looming catastrophe that threatens both the human and supernatural realms.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">15</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1418/107954l.jpg" alt="Great Pretender">
                </div>
                <div class="details">
                    <a href="great-pretender"><h3>Great Pretender</h3></a>
                    <p>Mystery</p>
                    <p>2020</p>
                    <br>
                    <p>Great Pretender follows a group of con artists who specialize in scamming the wealthy and powerful. The charismatic leader, Makoto Edamura, and his team find themselves embroiled in high-stakes heists across the globe as they navigate between their cons and personal motivations. As they pull off elaborate schemes with style and wit, they must also confront the consequences of their deceptive actions.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">16</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 63%;"></span>
                            </div>
                            <p>63% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/8/80356l.webp" alt="Mob Psycho 100">
                </div>
                <div class="details">
                    <a href="mob-psycho-100"><h3>Mob Psycho 100</h3></a>
                    <p>Action</p>
                    <p>2016</p>
                    <br>
                    <p>Shigeo Kageyama, known as Mob, possesses immense psychic powers. Despite his abilities, he tries to live a normal life and suppress his emotions to prevent his powers from going out of control. Working as an assistant for a self-proclaimed psychic, Mob encounters various supernatural beings and learns valuable lessons about life, friendship, and power. As he navigates through challenges and battles other psychic users, Mob's journey of self-discovery and personal growth unfolds in a captivating and comedic way.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">17</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 61%;"></span>
                            </div>
                            <p>61% Similarity</p>
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

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">18</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 61%;"></span>
                            </div>
                            <p>61% Similarity</p>
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
                        <div class="rank">19</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 60%;"></span>
                            </div>
                            <p>60% Similarity</p>
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
                        <div class="rank">20</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 60%;"></span>
                            </div>
                            <p>60% Similarity</p>
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
                        <div class="rank">21</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 60%;"></span>
                            </div>
                            <p>60% Similarity</p>
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
                        <div class="rank">22</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 60%;"></span>
                            </div>
                            <p>60% Similarity</p>
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
                        <div class="rank">23</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 60%;"></span>
                            </div>
                            <p>60% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1987/117507l.jpg" alt="86 Eighty-Six">
                </div>
                <div class="details">
                    <a href="86-eighty-six"><h3>86 Eighty-Six</h3></a>
                    <p>Action</p>
                    <p>2021</p>
                    <br>
                    <p>In a futuristic world, a nation uses drones known as Juggernauts to fight against an enemy threat known as the Legion. The story follows a group of soldiers called the 86ers who pilot the Juggernauts, but are discriminated against and treated as expendable. The series focuses on the struggles and relationships of the 86ers as they fight for survival and dignity in a society that sees them as less than human.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">24</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 60%;"></span>
                            </div>
                            <p>60% Similarity</p>
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
                        <div class="rank">25</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 58%;"></span>
                            </div>
                            <p>58% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1370/140362l.jpg" alt="Kaiju No. 8">
                </div>
                <div class="details">
                    <a href="kaiju-no.-8"><h3>Kaiju No. 8</h3></a>
                    <p>Action</p>
                    <p>2024</p>
                    <br>
                    <p>Kaiju No. 8 is an action-packed anime set in a world plagued by kaiju attacks. Kafka Hibino, a member of the kaiju cleanup crew, dreams of joining the elite Defense Force. His life changes when he gains the ability to transform into a powerful kaiju, Kaiju No. 8. With his newfound powers, Kafka aims to fulfill his dream while keeping his secret. The series blends thrilling action, humor, and themes of determination, identity, and heroism.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">26</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 58%;"></span>
                            </div>
                            <p>58% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1500/139931l.jpg" alt="Shangri-La Frontier">
                </div>
                <div class="details">
                    <a href="shangri-la-frontier"><h3>Shangri-La Frontier</h3></a>
                    <p>Action</p>
                    <p>2023</p>
                    <br>
                    <p>In a virtual reality MMORPG world known as Shangri-La Frontier, players embark on an adventurous journey to explore a vast and mysterious land filled with dungeons, creatures, and hidden treasures. Follow the story of a young player who, alongside their friends, strives to become the strongest in the game by facing challenges, forming alliances, and uncovering the secrets of this fantastical realm. Discover the bonds forged and the excitement of epic battles in Shangri-La Frontier.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">27</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 58%;"></span>
                            </div>
                            <p>58% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/5/86739l.jpg" alt="Welcome to the Ballroom">
                </div>
                <div class="details">
                    <a href="welcome-to-the-ballroom"><h3>Welcome to the Ballroom</h3></a>
                    <p>Sports</p>
                    <p>2017</p>
                    <br>
                    <p>Fujita finds himself drawn into the world of competitive ballroom dancing after a chance encounter with professional dancer Sengoku. As he struggles to learn the intricate steps and techniques of dance, Fujita discovers a new passion and drive within himself. Along the way, he meets new friends and rivals, pushing himself to new heights in the exhilarating and demanding world of competitive dance.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">28</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 56%;"></span>
                            </div>
                            <p>56% Similarity</p>
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
                        <div class="rank">29</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 56%;"></span>
                            </div>
                            <p>56% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1958/93533l.jpg" alt="Megalobox">
                </div>
                <div class="details">
                    <a href="megalobox"><h3>Megalobox</h3></a>
                    <p>Sports</p>
                    <p>2018</p>
                    <br>
                    <p>In a gritty future where society is divided by class, underground fighters participate in high-stakes boxing matches using metal gear to enhance their abilities. Junk Dog, a talented but unknown fighter, aims to break free from his lower-class background and make a name for himself in the prestigious Megalonia tournament. With the help of his trainer Gansaku Nanbu and ambitious manager Sachio, Junk Dog confronts powerful opponents and personal demons on his journey to the top.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">30</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 56%;"></span>
                            </div>
                            <p>56% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1784/106428l.jpg" alt="Astra Lost in Space">
                </div>
                <div class="details">
                    <a href="astra-lost-in-space"><h3>Astra Lost in Space</h3></a>
                    <p>Mystery</p>
                    <p>2019</p>
                    <br>
                    <p>In the year 2063, a group of high schoolers embarks on a space camp adventure but suddenly gets transported to the other side of the universe. With limited supplies, they must work together to navigate through unknown planets and survive the journey back to Earth. As they uncover the mysteries of their unexpected circumstances, they realize that their being stranded may not have been a mere accident.</p>
                </div>
            </div>

        </section>
    </main>
</body>
</html>
