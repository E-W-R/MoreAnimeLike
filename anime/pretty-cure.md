
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>More Anime Like Pretty Cure</title>
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
        <script>const number = "603";</script>
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
                <img src="https://cdn.myanimelist.net/images/anime/1512/142456l.webp" alt="Pretty Cure">
                <div>
                    <h2 id="title">Pretty Cure</h2>
                    <p>Action</p>
                    <p>2004</p>
                    <br>
                    <p>Pretty Cure follows a group of young girls who possess magical abilities and must protect the world from evil forces. With the help of cute mascots and powerful transformations, they battle villains to save the day. As the girls learn to work together and overcome their own personal challenges, they discover the true power of friendship and courage. Join them on their colorful and exciting adventures to defeat darkness and bring light to the world.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/2/84858l.jpg" alt="Hinako Note">
                </div>
                <div class="details">
                    <a href="hinako-note"><h3>Hinako Note</h3></a>
                    <p>Other Genre</p>
                    <p>2017</p>
                    <br>
                    <p>Hinako Note follows Hinako Sakuragi, a shy girl with a fear of talking to strangers. She moves to the countryside to attend high school and decides to join a theater company to overcome her shyness. With the help of her eccentric new friends, Hinako navigates her fear of people while discovering the joy of performing on stage.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">2</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 66%;"></span>
                            </div>
                            <p>66% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/6/74783l.webp" alt="Aikatsu!">
                </div>
                <div class="details">
                    <a href="aikatsu%21"><h3>Aikatsu!</h3></a>
                    <p>Other Genre</p>
                    <p>2012</p>
                    <br>
                    <p>Aikatsu! follows the journey of aspiring idols as they attend Starlight Academy to pursue their dreams of becoming top idols. With intense training, fierce competitions, and the power of their special Aikatsu cards, the girls strive to shine on stage and win the coveted Diamond Friends. Join Ichigo and her friends as they overcome challenges, make new friends, and discover the true meaning of idolhood in this exciting and heartwarming series.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">3</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 60%;"></span>
                            </div>
                            <p>60% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1793/117610l.webp" alt="KINMOZA!">
                </div>
                <div class="details">
                    <a href="kinmoza%21"><h3>KINMOZA!</h3></a>
                    <p>Other Genre</p>
                    <p>2013</p>
                    <br>
                    <p>KINMOZA! follows the story of Shinobu Omiya, a Japanese high school girl who becomes close friends with Alice Cartelet, an English girl in her class. The anime explores the daily lives and adventures of Shinobu, Alice, and their friends as they navigate cultural differences and forge strong bonds of friendship through various heartwarming and humorous moments.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">4</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 56%;"></span>
                            </div>
                            <p>56% Similarity</p>
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
                        <div class="rank">5</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 53%;"></span>
                            </div>
                            <p>53% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1297/118764l.webp" alt="How a Realist Hero Rebuilt the Kingdom">
                </div>
                <div class="details">
                    <a href="how-a-realist-hero-rebuilt-the-kingdom"><h3>How a Realist Hero Rebuilt the Kingdom</h3></a>
                    <p>Isekai</p>
                    <p>2021</p>
                    <br>
                    <p>When the protagonist is summoned to another world to be the hero, he decides to use his knowledge of modern economics and politics to rebuild the kingdom instead. With his strategic thinking and innovative ideas, he sets out to improve the country's economy, infrastructure, and overall well-being. However, he faces challenges and opposition from different factions within the kingdom as he navigates the complex world of politics and governance. Will his efforts to reform the kingdom be successful?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">6</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 48%;"></span>
                            </div>
                            <p>48% Similarity</p>
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
                        <div class="rank">7</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 46%;"></span>
                            </div>
                            <p>46% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1440/92258l.jpg" alt="Sailor Moon">
                </div>
                <div class="details">
                    <a href="sailor-moon"><h3>Sailor Moon</h3></a>
                    <p>Romance</p>
                    <p>1992</p>
                    <br>
                    <p>Usagi Tsukino discovers she is the reincarnation of Sailor Moon, a magical warrior destined to protect the Earth from evil forces. Joined by other Sailor Guardians, she must find the Legendary Silver Crystal before the Dark Kingdom uses it to conquer the world. As she battles villains and uncovers her past, Usagi learns the importance of friendship and love in her mission to save the world from chaos.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">8</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 43%;"></span>
                            </div>
                            <p>43% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1/317l.jpg" alt="Final Fantasy VII: Advent Children">
                </div>
                <div class="details">
                    <a href="final-fantasy-vii%3A-advent-children"><h3>Final Fantasy VII: Advent Children</h3></a>
                    <p>Action</p>
                    <p>2005</p>
                    <br>
                    <p>In a world plagued by a new threat, Cloud Strife and his friends must once again band together to save the planet from destruction. Caught in a battle against a mysterious enemy seeking to revive an ancient evil, Cloud must confront his past and face his inner demons to protect his loved ones. As the fate of the world hangs in the balance, they must harness their strength and courage to overcome this ultimate challenge.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/4/82414l.jpg" alt="BanG Dream!">
                </div>
                <div class="details">
                    <a href="bang-dream%21"><h3>BanG Dream!</h3></a>
                    <p>Other Genre</p>
                    <p>2017</p>
                    <br>
                    <p>BanG Dream! follows the journey of Kasumi Toyama, a girl inspired by a star-shaped guitar, as she sets out to form a band and achieve her dream of performing on stage. Along the way, she recruits talented musicians to join her band, Poppin'Party, and navigates the challenges of friendship, rivalry, and pursuing her passion for music. Together, they strive to make their mark in the competitive world of bands and foster their bonds through the power of music.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/1787/140239l.webp" alt="Pokémon">
                </div>
                <div class="details">
                    <a href="pok%C3%A9mon"><h3>Pokémon</h3></a>
                    <p>Action</p>
                    <p>1997</p>
                    <br>
                    <p>In the world of Pokémon, young trainers embark on a journey to catch and train mysterious creatures known as Pokémon. The main character, Ash Ketchum, dreams of becoming a Pokémon Master and travels with his friends Pikachu, Misty, and Brock to compete in Pokémon battles and tournaments. Along the way, they face challenges from rival trainers and the nefarious Team Rocket, all while forging bonds with their Pokémon partners.</p>
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
                    <img src="https://cdn.myanimelist.net/images/anime/1300/111361l.webp" alt="ENDRO!">
                </div>
                <div class="details">
                    <a href="endro%21"><h3>ENDRO!</h3></a>
                    <p>Other Genre</p>
                    <p>2019</p>
                    <br>
                    <p>ENDRO! follows a group of young girls training to become heroes at a school for adventurers. The girls face various challenges in their quest to defeat the Demon Lord and bring peace to their land. With a mix of magic and friendship, they embark on whimsical and comedic adventures while learning important lessons along the way.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">12</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 38%;"></span>
                            </div>
                            <p>38% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1408/127129l.jpg" alt="Do It Yourself!!">
                </div>
                <div class="details">
                    <a href="do-it-yourself%21%21"><h3>Do It Yourself!!</h3></a>
                    <p>Other Genre</p>
                    <p>2022</p>
                    <br>
                    <p>Do It Yourself!! follows the story of a group of high school students who come together to revive their school's outdated and neglected crafting club. As they work on various DIY projects and face challenges along the way, the club members develop their skills, deepen their friendships, and learn valuable lessons about teamwork and perseverance. With a mix of comedy, heartwarming moments, and creative inspiration, Do It Yourself!! celebrates the joy of creativity and collaboration.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">13</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 36%;"></span>
                            </div>
                            <p>36% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1743/125204l.jpg" alt="Uncle from Another World">
                </div>
                <div class="details">
                    <a href="uncle-from-another-world"><h3>Uncle from Another World</h3></a>
                    <p>Isekai</p>
                    <p>2022</p>
                    <br>
                    <p>When a young man named Hiro loses his job and feels directionless in life, he receives an unexpected inheritance from his late uncle: a mysterious amulet. To his surprise, the amulet transports him to a parallel fantasy world where his uncle is a legendary hero. As Hiro navigates this new world and learns about his uncle's past, he must decide whether to embrace his newfound destiny or find a way back home.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">14</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 35%;"></span>
                            </div>
                            <p>35% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1284/106945l.jpg" alt="Arte">
                </div>
                <div class="details">
                    <a href="arte"><h3>Arte</h3></a>
                    <p>Drama</p>
                    <p>2020</p>
                    <br>
                    <p>In a time where women are expected to conform to societal norms, Arte, a young noblewoman in 16th century Florence, Italy, dreams of becoming an artist. Despite her family's disapproval, she apprentices under a skilled master to pursue her passion for art. Through dedication and perseverance, Arte navigates the challenges of a male-dominated field, forging her path as a professional artist. Will she prove that talent knows no gender boundaries in the Renaissance art world?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">15</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 33%;"></span>
                            </div>
                            <p>33% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1591/95091l.webp" alt="Teasing Master Takagi-san">
                </div>
                <div class="details">
                    <a href="teasing-master-takagi-san"><h3>Teasing Master Takagi-san</h3></a>
                    <p>Comedy</p>
                    <p>2018</p>
                    <br>
                    <p>Middle schooler Nishikata is constantly teased by his classmate Takagi. Determined to get his revenge, he comes up with various schemes to outsmart her, but Takagi always seems to be one step ahead. As their playful rivalry continues, Nishikata starts to develop feelings for Takagi. Will he ever be able to outwit her and confess his true feelings?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">16</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 31%;"></span>
                            </div>
                            <p>31% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/6/80546l.webp" alt="Sweetness & Lightning">
                </div>
                <div class="details">
                    <a href="sweetness-%26-lightning"><h3>Sweetness & Lightning</h3></a>
                    <p>Other Genre</p>
                    <p>2016</p>
                    <br>
                    <p>After the death of his wife, a single father decides to improve his cooking skills in order to properly feed his daughter. With the help of one of his students, they begin to learn how to cook delicious meals together and form a heartwarming bond. Through their culinary adventures, they also become closer as a family. The anime follows their journey of healing, growth, and the joy of good food.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">17</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 31%;"></span>
                            </div>
                            <p>31% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/11/56849l.jpg" alt="Love Live! School Idol Project">
                </div>
                <div class="details">
                    <a href="love-live%21-school-idol-project"><h3>Love Live! School Idol Project</h3></a>
                    <p>Other Genre</p>
                    <p>2013</p>
                    <br>
                    <p>Love Live! School Idol Project follows a group of high school girls who form an idol group to save their school from shutting down. They face challenges and competitions as they strive to become top idols, working hard to balance their personal lives with their music career. Together, they learn the true meaning of friendship and determination as they chase their dream of bringing glory to their school through music.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">18</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 30%;"></span>
                            </div>
                            <p>30% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/6/80810l.jpg" alt="Amanchu!">
                </div>
                <div class="details">
                    <a href="amanchu%21"><h3>Amanchu!</h3></a>
                    <p>Other Genre</p>
                    <p>2016</p>
                    <br>
                    <p>Following the story of Hikari Kohinata, a high school girl who moves to a coastal town, Amanchu! explores her journey of making new friends, particularly her relationship with the introverted Futaba Ooki. Through their shared love of scuba diving, the two girls learn to navigate the challenges of adolescence and discover the beauty of the underwater world. The series highlights themes of friendship, self-discovery, and the importance of pursuing one's passions.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">19</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 30%;"></span>
                            </div>
                            <p>30% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/13/75587l.jpg" alt="Nisekoi: False Love">
                </div>
                <div class="details">
                    <a href="nisekoi%3A-false-love"><h3>Nisekoi: False Love</h3></a>
                    <p>Romance</p>
                    <p>2014</p>
                    <br>
                    <p>Raku Ichijou, the heir to a yakuza family, is forced into a fake relationship with Chitoge Kirisaki, a rival gang leader's daughter, to maintain peace between their families. Despite their initial animosity, they must pretend to be in love while navigating high school life. Complicating matters, Raku carries a locket that can only be opened by the key Chitoge wears as a keepsake. As they navigate fake relationships and hidden feelings, secrets from the past threaten to unravel their delicate facade.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">20</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 30%;"></span>
                            </div>
                            <p>30% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/7/75287l.jpg" alt="I Can't Understand What My Husband Is Saying">
                </div>
                <div class="details">
                    <a href="i-can%27t-understand-what-my-husband-is-saying"><h3>I Can't Understand What My Husband Is Saying</h3></a>
                    <p>Romance</p>
                    <p>2014</p>
                    <br>
                    <p>Kaoru is a typical office worker married to Hajime, a hardcore otaku. Despite their differences, they navigate their contrasting lifestyles with love and humor, trying to understand each other's quirks and find common ground. From attending anime conventions to dealing with family gatherings, their daily lives are filled with laughter, challenges, and the realization that love can transcend even the most unexpected differences.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">21</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 30%;"></span>
                            </div>
                            <p>30% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/6/79600l.jpg" alt="Is the Order a Rabbit?">
                </div>
                <div class="details">
                    <a href="is-the-order-a-rabbit%3F"><h3>Is the Order a Rabbit?</h3></a>
                    <p>Other Genre</p>
                    <p>2014</p>
                    <br>
                    <p>Is the Order a Rabbit? follows Cocoa Hoto, a cheerful and energetic girl who moves to a new town for high school. She begins working at the Rabbit House café, where she meets the quiet and mysterious Chino Kafuu. Alongside their eccentric coworkers, including Rize Tedeza and Chiya Ujimatsu, Cocoa navigates her new job and forms special bonds with her friends. The series explores the everyday adventures and heartwarming moments that occur in their quaint little town.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">22</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 28%;"></span>
                            </div>
                            <p>28% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/4/79468l.webp" alt="Haven't You Heard? I'm Sakamoto">
                </div>
                <div class="details">
                    <a href="haven%27t-you-heard%3F-i%27m-sakamoto"><h3>Haven't You Heard? I'm Sakamoto</h3></a>
                    <p>Comedy</p>
                    <p>2016</p>
                    <br>
                    <p>Sakamoto is the epitome of perfection in his high school - he's cool, stylish, and can handle any situation with finesse. His talents make him the target of envy and admiration from his classmates. As they try to trip him up, Sakamoto responds in unexpected and entertaining ways, leaving everyone in awe of his remarkable abilities. Follow Sakamoto as he navigates the challenges of high school life with unmatched grace and flair.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">23</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 28%;"></span>
                            </div>
                            <p>28% Similarity</p>
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
                        <div class="rank">24</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 28%;"></span>
                            </div>
                            <p>28% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1052/136283l.jpg" alt="Magical Girl Lyrical Nanoha">
                </div>
                <div class="details">
                    <a href="magical-girl-lyrical-nanoha"><h3>Magical Girl Lyrical Nanoha</h3></a>
                    <p>Action</p>
                    <p>2004</p>
                    <br>
                    <p>Magical Girl Lyrical Nanoha follows Nanoha Takamachi, a young girl who gains magical powers after encountering a mysterious ferret-like creature. Tasked with collecting powerful artifacts known as Jewel Seeds, Nanoha finds herself in the middle of a battle against other magical girls seeking the same goal. As she navigates the dangerous world of magic, Nanoha discovers the true strength of her powers and forms heartwarming bonds with new friends along the way.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">25</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 28%;"></span>
                            </div>
                            <p>28% Similarity</p>
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
                        <div class="rank">26</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 26%;"></span>
                            </div>
                            <p>26% Similarity</p>
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
                        <div class="rank">27</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 26%;"></span>
                            </div>
                            <p>26% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1566/129181l.webp" alt="Aggretsuko (ONA)">
                </div>
                <div class="details">
                    <a href="aggretsuko-%28ona%29"><h3>Aggretsuko (ONA)</h3></a>
                    <p>Comedy</p>
                    <p>2018</p>
                    <br>
                    <p>Meet Retsuko, a mild-mannered red panda who navigates the struggles of office life. To cope with her demanding boss and gossipy coworkers, she unleashes her frustrations through death metal karaoke. Follow Retsuko as she balances work, friendship, and romance while discovering her own strength and independence in this charming comedy series.</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">28</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 25%;"></span>
                            </div>
                            <p>25% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/1662/112108l.jpg" alt="D-Frag!">
                </div>
                <div class="details">
                    <a href="d-frag%21"><h3>D-Frag!</h3></a>
                    <p>Comedy</p>
                    <p>2014</p>
                    <br>
                    <p>Kazama is forcibly recruited into the Game Development Club, run by four eccentric girls. Despite his attempts to regain control, Kazama finds himself entangled in their crazy antics and bizarre games. As the club faces off against other clubs in strange challenges, Kazama navigates through friendships, rivalries, and unexpected twists. Will Kazama survive the chaos of the Game Development Club, or will he be forever changed by his new quirky companions?</p>
                </div>
            </div>

            <div class="recommendation">
                <div class="graphics">
                    <div class="rank-container">
                        <div class="rank">29</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 25%;"></span>
                            </div>
                            <p>25% Similarity</p>
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
                        <div class="rank">30</div>
                        <div class="similarity-meter">
                            <div class="meter">
                                <span style="width: 23%;"></span>
                            </div>
                            <p>23% Similarity</p>
                        </div>
                    </div>
                    <img src="https://cdn.myanimelist.net/images/anime/3/86666l.jpg" alt="Restaurant to Another World">
                </div>
                <div class="details">
                    <a href="restaurant-to-another-world"><h3>Restaurant to Another World</h3></a>
                    <p>Isekai</p>
                    <p>2017</p>
                    <br>
                    <p>Restaurant to Another World follows the story of a seemingly ordinary restaurant in contemporary Tokyo that mysteriously opens its doors to a fantasy world every seven days. Various creatures and beings from different realms visit the restaurant to enjoy its delicious meals and find comfort in familiar dishes. As the series progresses, viewers learn more about the customers' backgrounds and the heartwarming connections they form with the restaurant staff.</p>
                </div>
            </div>

        </section>
    </main>
</body>
</html>
