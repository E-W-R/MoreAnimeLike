function switchStylesheet() {
    var stylesheet = document.getElementById('stylesheet');
    if (window.innerWidth <= 700) {
        stylesheet.href = 'page_mobile.css';
    } else if (window.innerWidth <= 1000) {
        stylesheet.href = 'page_tablet.css';
    } else {
        stylesheet.href = 'page.css';
    }
}

window.addEventListener('load', switchStylesheet);
window.addEventListener('resize', switchStylesheet);

function adjustFontSize() {
    const textElement = document.getElementById('title');
    const textLength = textElement.innerText.length;
    const baseFontSize = 20;
    const maxFontSize = 48;
    const minFontSize = 28;

    let newFontSize = baseFontSize * (50 / textLength);

    newFontSize = Math.max(minFontSize, Math.min(maxFontSize, newFontSize));

    textElement.style.fontSize = newFontSize + 'px';
}
window.onload = adjustFontSize;
window.onresize = adjustFontSize;

const applyD3Theme = (isDark) => {
    d3.selectAll("text").attr("fill", isDark ? "white" : "black");
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('randomPageLink').addEventListener('click', async function() {
        const response = await fetch('../pages.json');
        const data = await response.json();
        const pages = data.pages;
    
        const randomPage = pages[Math.floor(Math.random() * pages.length)];
        window.location.href = randomPage;
    })

    const themeToggle = document.getElementById('themeToggle');
    const image = document.querySelector('.anime-details img');
    const images = document.querySelectorAll('.recommendation img');
    const meters = document.querySelectorAll('.meter');

    // Function to apply the theme
    const applyTheme = (isDark) => {
        if (isDark) {
            document.body.style.backgroundColor = '#262728';
            document.body.style.color = 'white';
            d3.selectAll("text").attr("fill", "white");
            image.style.border = '4px solid white';
            images.forEach(img => img.style.border = '2px solid white');
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            d3.selectAll("text").attr("fill", "black");
            image.style.border = '4px solid black';
            images.forEach(img => img.style.border = '2px solid black');
        }
        applyD3Theme(isDark)
    };

    // Load the stored theme state from localStorage
    const isDarkTheme = localStorage.getItem('themeToggle') === 'true';
    themeToggle.checked = isDarkTheme;
    applyTheme(isDarkTheme);

    // Save the theme state to localStorage and apply theme when it changes
    themeToggle.addEventListener('change', () => {
        const isChecked = themeToggle.checked;
        localStorage.setItem('themeToggle', isChecked);
        applyTheme(isChecked);
    });
});


document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('searchBox').addEventListener('input', adjustSearchBoxWidth);

    d3.json("../graph.json").then(data => {
        const searchOptions = data.titles.map(title => ({ name: title.name, url: title.url }));
        const searchBox = document.getElementById('searchBox');
        autocomplete(searchBox, searchOptions);
        adjustSearchBoxWidth(searchBox);
    });

    // Fetch the JSON data
    fetch('better_page.json')
        .then(response => response.json())
        .then(data => {
            const labels = ["Adventure", "Romance", "Sports", "Drama", "Fantasy", "Supernatural", "Psychological", "Comedy", "Action", "Isekai", "Mystery", "Slice of Life"];
            const dataset1 = {
                label: 'Genre Similarity',
                data: data[number],
                backgroundColor: [
                    'rgba(200, 0, 0, 0.3)',
                    'rgba(200, 100, 0, 0.3)',
                    'rgba(200, 200, 0, 0.3)',
                    'rgba(100, 200, 0, 0.3)',
                    'rgba(0, 200, 0, 0.3)',
                    'rgba(0, 200, 100, 0.3)',
                    'rgba(0, 200, 200, 0.3)',
                    'rgba(0, 100, 200, 0.3)',
                    'rgba(0, 0, 200, 0.3)',
                    'rgba(100, 0, 200, 0.3)',
                    'rgba(200, 0, 200, 0.3)',
                    'rgba(200, 0, 100, 0.3)'
                ],
                borderColor: [
                    'rgba(200, 0, 0, 1)',
                    'rgba(200, 100, 0, 1)',
                    'rgba(200, 200, 0, 1)',
                    'rgba(100, 200, 0, 1)',
                    'rgba(0, 200, 0, 1)',
                    'rgba(0, 200, 100, 1)',
                    'rgba(0, 200, 200, 1)',
                    'rgba(0, 100, 200, 1)',
                    'rgba(0, 0, 200, 1)',
                    'rgba(100, 0, 200, 1)',
                    'rgba(200, 0, 200, 1)',
                    'rgba(200, 0, 100, 1)'
                ],
                borderWidth: 1
            };

            // Create Polar Area Chart
            const ctx = document.getElementById('myPolarAreaChart').getContext('2d');
            new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: labels,
                    datasets: [dataset1]
                },
                options: {
                    hover: {
                        mode: null
                    },
                    animation: {
                        duration: 0 // Disable label animation
                    },
                    layout: {
                        padding: {
                            top: 0,
                            bottom: 0,
                            left: 50,
                            right: 50
                        }
                    },
                    scales: {
                        r: {
                            beginAtZero: true,
                            pointLabels: {
                                display: false // Disable point labels to avoid overlap
                            },
                            ticks: {
                                display: false // Disable the ticks on the rings
                            },
                            angleLines: {
                                display: true,
                                color: 'rgba(189, 189, 189, 0.5)', // Set the color of the angle lines
                                lineWidth: 1 // Set the width of the angle lines
                            },
                            grid: {
                                color: 'rgba(189, 189, 189, 0.5)', // Ensure this matches the angle line color
                            },
                        }
                    },
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false // Hide the legend
                        },
                        tooltip: {
                            enabled: false
                        },
                        datalabels: {
                            font: {
                                family: 'Nunito',
                                size: 12,
                                weight: 'bold',
                            },
                            align: function(context) {
                                const angle = context.startAngle + (context.endAngle - context.startAngle) / 2;
                                // Correcting the logic for align
                                const align = angle < Math.PI ? 'start' : 'end';
                                return align;
                            },
                            anchor: function(context) {
                                const angle = context.startAngle + (context.endAngle - context.startAngle) / 2;
                                // Correcting the logic for anchor
                                const anchor = angle < Math.PI ? 'end' : 'start';
                                return anchor;
                            },
                            color: '#eb345e',
                            formatter: function(value, context) {
                                return context.chart.data.labels[context.dataIndex];
                            },
                            offset: 150, // Adjust the offset to move the labels outside the chart
                            textAlign: 'center',
                            clip: false,
                        }                        
                    }
                },
                plugins: [ChartDataLabels]
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

document.getElementById('searchBox').addEventListener('input', adjustSearchBoxWidth);

function autocomplete(inp, searchOptions) {
    let currentFocus;
    inp.addEventListener("input", function(e) {
        adjustSearchBoxWidth(inp); // Adjust width on input
        let a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        const parent = inp.parentNode;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        parent.appendChild(a); // Append to the parent container

        const filteredOptions = searchOptions.filter(option => 
            option.name.toUpperCase().startsWith(val.toUpperCase())
        ).slice(0, 5); // Limit to 5 results

        for (i = 0; i < filteredOptions.length; i++) {
            b = document.createElement("DIV");
            const matchStart = filteredOptions[i].name.toUpperCase().indexOf(val.toUpperCase());
            const matchEnd = matchStart + val.length;
            b.innerHTML = "<strong>" + filteredOptions[i].name.substr(0, matchEnd) + "</strong>";
            b.innerHTML += filteredOptions[i].name.substr(matchEnd);
            b.innerHTML += "<input type='hidden' value='" + filteredOptions[i].url + "'>";
            b.addEventListener("click", function(e) {
                window.location.href = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
        }
    });
    inp.addEventListener("keydown", function(e) {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            } else if (x && x.length > 0) {
                x[0].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        const x = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });

    adjustSearchBoxWidth(inp);
}

function adjustSearchBoxWidth(inp) {
    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.style.whiteSpace = 'nowrap';
    tempSpan.style.font = window.getComputedStyle(inp).font;
    document.body.appendChild(tempSpan);
    tempSpan.textContent = inp.value || inp.placeholder;
    inp.style.width = tempSpan.offsetWidth + 20 + 'px'; // Adjust padding/margin as needed
    document.body.removeChild(tempSpan);
}
