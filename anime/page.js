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

function updateNodeTextColor(color) {
    d3.selectAll(".nodes text").attr("fill", color);
}

async function fetchData(number) {
    const response = await fetch('page.json');
    const data = await response.json();
    return data[number];
}

const color = d3.scaleOrdinal(d3.schemeCategory10).domain(d3.range(1, 10));

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

    // D3.js node/edge graph
    const container = d3.select('#d3-container');
    const width = container.node().getBoundingClientRect().width;
    const height = width;

    const svg = d3.select('#d3-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    fetchData(number).then(data => {
        const nodes = data.nodes;
        const links = data.links;
    
        console.log(nodes);
        console.log(links);

        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links)
                .id(d => d.id)
                .distance(d => 125)
            )
            .force('charge', d3.forceManyBody().strength(-400))
            .force('center', d3.forceCenter(width / 2 - 30, height / 2));

        const link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(links)
            .enter().append("line")
            .attr("stroke-width", d => 3)
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.5);

        const node = svg.append('g')
            .attr('class', 'nodes')
            .selectAll('a')
            .data(nodes)
            .enter().append('a')
            .attr('xlink:href', d => d.url)
            .append('circle')
            .attr("fill", d => color(d.genre))
            .attr("r", d => d.size * 0.6)
            .call(d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended));

        const text = svg.append('g')
            .attr('class', 'texts')
            .selectAll('a')
            .data(nodes)
            .enter().append('a')
            .attr('xlink:href', d => d.url)
            .append('text')
            .attr("dx", d => d.size * 0.5 + 6)
            .attr("y", 0)
            .attr("dy", ".35em")
            .attr("text-anchor", "start")
            .attr("font-size", "16px")
            .text(d => d.id);
        
        const isDarkTheme = localStorage.getItem('themeToggle') === 'true';
        applyD3Theme(isDarkTheme)

        simulation
            .nodes(nodes)
            .on('tick', ticked);

        simulation.force('link')
            .links(links);

        function ticked() {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            node
                .attr('cx', d => d.x)
                .attr('cy', d => d.y);

            text
                .attr('x', d => d.x)
                .attr('y', d => d.y);
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
