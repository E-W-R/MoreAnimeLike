function switchStylesheet() {
    var stylesheet = document.getElementById('stylesheet');
    if (window.innerWidth <= 700) {
        stylesheet.href = 'about_mobile.css';
    } else {
        stylesheet.href = 'about.css';
    }
}

window.addEventListener('load', switchStylesheet);
window.addEventListener('resize', switchStylesheet);

async function getRandomPage() {
    const response = await fetch('pages.json');
    const data = await response.json();
    const pages = data.pages;

    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = randomPage;
}

document.getElementById('randomPageLink').onclick = getRandomPage;

function updateNodeTextColor(color) {
    d3.selectAll(".nodes text").attr("fill", color);
}

const applyD3Theme = (isDark) => {
    d3.selectAll("text").attr("fill", isDark ? "white" : "black");
};

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');

    // Function to apply the theme
    const applyTheme = (isDark) => {
        if (isDark) {
            document.body.style.backgroundColor = '#242526';
            document.body.style.color = 'white';
            d3.selectAll("text").attr("fill", "white");
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            d3.selectAll("text").attr("fill", "black");
        }
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

    autocomplete(document.getElementById('searchBox'));

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('change', function() {
        if (themeToggle.checked) {
            document.body.style.backgroundColor = '#262728';
            d3.selectAll("text").attr("fill", "white");
        } else {
            document.body.style.backgroundColor = 'white';
            d3.selectAll("text").attr("fill", "black");
        }
    });

    d3.json("graph.json").then(data => {
        const nodes = data.nodes;
        const edges = data.edges;

        const searchOptions = data.titles.map(title => ({ name: title.name, url: title.url }));
        const searchBox = document.getElementById('searchBox');
        autocomplete(searchBox, searchOptions);
        adjustSearchBoxWidth(searchBox);

        const svg = d3.select("svg");
        const width = window.innerWidth;
        const height = window.innerHeight - document.querySelector('h1').offsetHeight;
        const color = d3.scaleOrdinal(d3.schemeCategory10).domain(d3.range(1, 9));

        svg.attr("width", width)
        .attr("height", height);

        const container = svg.append("g");

        const zoom = d3.zoom()
            .scaleExtent([0.1, 10])
            .on("zoom", (event) => {
                container.attr("transform", event.transform);
            });

        svg.call(zoom);

        const initialScale = 0.13;
        const initialTranslateX = (width / 2) * (1 - initialScale);
        const initialTranslateY = (height / 2) * (1 - initialScale);
        const initialTransform = d3.zoomIdentity.translate(initialTranslateX, initialTranslateY).scale(initialScale);
        svg.call(zoom.transform, initialTransform);

        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(edges)
                .id(d => d.id)
                .distance(d => 1)
            )
            .force("charge", d3.forceManyBody().strength(-20000))
            .force("center", d3.forceCenter(width / 2, height / 2));

        const link = container.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(edges)
            .enter().append("line")
            .attr("stroke-width", d => d.weight ** 8 * 40)
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.1);

        const node = container.append("g")
            .attr("class", "nodes")
            .selectAll("g")
            .data(nodes)
            .enter().append("a")
            .attr("xlink:href", d => d.url)
            .append("g")
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        node.append("circle")
            .attr("r", d => d.size * 2)
            .attr("fill", d => color(d.genre));

        node.append("text")
            .attr("x", d => d.size * 2 + 5)
            .attr("y", 0)
            .attr("dy", ".35em")
            .attr("text-anchor", "start")
            .text(d => d.name)
            .attr("font-size", "48px");

        const isDarkTheme = localStorage.getItem('themeToggle') === 'true';
        applyD3Theme(isDarkTheme)

        simulation
            .nodes(nodes)
            .on("tick", ticked);

        simulation.force("link")
            .links(edges);

        function ticked() {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("transform", d => `translate(${d.x}, ${d.y})`);
        }

        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
    });
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
