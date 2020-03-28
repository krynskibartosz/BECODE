/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 
Your name : Krynski Bartosz
Starting Date : 12/11/2019
Contact information : krynskibartosz08@gmail.com
What does this script do ?
...
*/

// Premier Graphique
// récup diff noeuds pour inséré le tableau au dessus
let p = document.createElement("p");   // creation de l'element <p>
p.setAttribute("class","graphic");     // attribution de la classe "graph"
let h1Tag = document.getElementById("firstHeading");   // récuperation de l'id du H1
h1Tag.appendChild(p);               // Insertion du <p> dans <h1>

// Récupération des données, creation du graphique
    // function asynchrone
    async function first_graph(){ 
    // "try" instruction que je souhaite éxécuter
        try{
        // La méthode fetch() prend un argument & récupère une ressource --> donnée json
            let response = await fetch("https://inside.becode.org/api/v1/data/random.json"); 
            // Retourne une réponse de la requête
            let data = await response.json();
            //    Suppression du graph pour le refaire apparaitre
            let clear_graph = d3.select("p.graphic").select("svg").remove(); 

                //  Mise en forme du graphique
                let margin = {top: 20, right: 30, bottom: 40, left: 30}, 
                    width = 900 - margin.left - margin.right,
                    height = 600 - margin.top - margin.bottom;

                let x = d3.scaleLinear()
                    // accept des données de 0 à 600 p/taille map
                    .range([0, width]);

                let y = d3.scaleBand()
                    .rangeRound([0, height])
                    // espace entre les barres
                    .padding(0.3);

                let axe_x = d3.axisBottom(x);
                let axe_y = d3.axisLeft(y);
                            // récup p et rajoute svg
                let svg = d3.select("p.graphic").append("svg") 
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                            // groupes les svg
                    .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                        .attr("fill", "rgb(248, 228, 76)");

                        // Valeur de l'axe X du au JSon
                x.domain(d3.extent(data, function(d) { return d[1]; })).nice(); 
                        // Valeur de l'axe X du au JSon               
                y.domain(data.map(function(d) { return d[0]; }));

                 // creation des différentes  barres selon les valeur du JSon
                svg.selectAll(".bar").data(data).enter().append("rect") 
                    .attr("x", function(d) { return x(Math.min(0, d[1])); })
                    .attr("y", function(d) { return y(d[0]); })
                    .attr("width", function(d) { return Math.abs(x(d[1]) - x(0)); })
                    .attr("height", y.bandwidth());
                // groupe les barres x pour leur mettre les mêmes propriétés
                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    // rajoute de la méthode "axe_x"
                    .call(axe_x);
                // groupe les barres y pour leur mettre les mêmes propriétés
                svg.append("g")
                    .attr("class", "y axis")
                    .attr("transform", "translate(" + x(0) + ",0)")
                    // rajoute de la méthode "axe_y"
                    .call(axe_y);
            // "catch" instructions à exécuter si une exception est reperer dans le bloc try
            } catch(e){
                console.log(e);
            }
        }
        // Interval d'1 seconde Entre chaque appariton de graphique
        setInterval(function(d) { 
        first_graph();
        }, 1000);










                    // SECOND GRAPHIQUE










function second_graph(){
    const table_data = (Select_rows) => {
        // Tableau vide p/données
        let data = [];
        // Collect d'information sur chaque ligne
        let table_row = d3.selectAll(Select_rows); 
        table_row = [...table_row.nodes()];

        // Tableau vide p/en-tête données
        let table_tête = [];
                // Collect d'information sur chaque ligne
        let cells_tête = [...table_row[0].cells];

        // Récuperation de l'entete pour les dates
        for(let h=0; h<cells_tête.length;h++){     
            if(h>1){
                // Injection des données dans le tableau
                table_tête.push(cells_tête[h].innerHTML); 
            }
        }
        // Récuperation des données pour les rajouter au tableau
        for (let i = 1; i < table_row.length; i++) {
            // cellules
            let cells_ligne = [...table_row[i].cells];
            // tableau vides pour les pays
            let donne_pays = [];

            // Recherche sur chaque cellule
            for (let j = 1; j < cells_ligne.length; j++) { 
                if(j > 1){                
                // Recherche suite
                    if(cells_ligne[j].innerText == ":"){
                    // Replacement des cellules sans données par 0
                        donne_pays.push(0)
                    }else{
                        // push,converti les nombres et remplace le txt
                        donne_pays.push(parseFloat((cells_ligne[j].innerText).replace(",",".")));
                    }
                }
            }
            data[i-1] = {}; 
            data[i-1].dates = table_tête;
            data[i-1].country = cells_ligne[1].innerHTML;
            data[i-1].data = donne_pays;
        }
        return data;
    }
    


    let data_firstT = table_data("#table1 > tbody > tr")
    console.log(data_firstT);


    // Définition de la structure du svg
    let margin = {top: 20, right: 20, bottom: 50, left: 50};
    let width = 800 - margin.left - margin.right;
    let height = 600 - margin.top - margin.bottom;

    // Creation du Graphique(design)
    function second_graph(country_data) {
    // Creation du svg   
    let svg_two = d3.select('#mw-content-text').insert('svg','#table1')
                                    .attr('width', 900)
                                    .attr('height', 600)
                                    .style('background', '#fff')
                                    .attr('id','svg_two')
    // Creation du graphique et englope d/groupe
    const graph_two = svg_two.append('g')
                        .attr('width', width)
                        .attr('height', height)
                        .attr('transform', "translate(" + margin.left + ", " + margin.top + ")");

    const sec_x = graph_two.append('g')
                        .attr('transform', `translate(0, ${height})`);
    const sec_y = graph_two.append('g');
    
    const x = d3.scaleBand()
                .domain(data_firstT[country_data].dates)
                .range([0, width])
                .paddingInner(0.2)
                .paddingOuter(0.1)
    
    const y = d3.scaleLinear()
                .domain([0, (Math.max(...data_firstT[country_data].data)*1.2)])
                .range([height, 0]);
    
    
    // Définition de l'axe x
    const axeX = d3.axisBottom(x)
    sec_x.call(axeX)
            .style('font-size', '14px')
    sec_x.selectAll('text')
            .attr('transform', 'rotate(-60) translate(0,5)')
            .attr('text-anchor', 'end');

    
    // Définition de l'axe Y
    const axeY = d3.axisLeft(y)
                    .ticks(20);
    sec_y.call(axeY)
            .style('font-size', '13px');

        // Définition de la fonction Hover du graphique
    function mouse_hover(d, i) {
        d3.select(this).style("opacity", 0.8).attr('fill', 'rgb(24, 21, 24)')
            // txt Titre
        graph_two.append('text')
            .attr('id', `data${d}${i}`)
            .style('font-weight', 'bold')
            .style('font-size', '1.7rem')
            .attr('fill', 'rgb(24, 21, 24)')
            .attr('x', function(){return x(d)+7})
            .attr('y', this.y.animVal.value-15)
            // rajout txt lors hover
            .text(data_firstT[country_data].data[i])
    }

      // définition de la fonction Hover leave(pars) du graphique
    function mouse_leave(d, i) {
        d3.select(this).style("opacity", 1).attr('fill', 'rgb(248, 228, 76)')
        // Retire le titre après être sorti du hover
        d3.select(`#data${d}${i}`).remove();
    } 

      // Ajout des différents éléments(méth,funct°) dans le graphique
    const rects = graph_two.selectAll("rect")
                        .data(data_firstT[country_data].data)
                        .enter()
                        .append('rect')
                        .on("mouseover", mouse_hover)
                        .on("mouseleave", mouse_leave)
                        .attr('width', x.bandwidth())
                        .attr('height', function(d){return height - y(d)})
                        .attr('fill', 'rgb(248, 228, 76)')
                        .attr('y', function(d){return y(d)})
                        .data(data_firstT[country_data].dates)
                        .attr('x', function(d){return x(d)});
    }
    // rappel fonction du graph p/que cela fonctionne
second_graph(0);    
    
    
    // Creation du btn pays
    let btn_select = d3.select('#mw-content-text')
    .insert("select","#svg_two")
    .attr('name','countries')
    .attr('id','selectCountry')
    .on('change', chg_country)
// Rajout des pays
    btn_select.selectAll("option")
            .data(data_firstT)
            .enter()
            .append("option")
            .attr("value", function(d,i){return i})
            .text(function(d){return d.country})                                                    

    function chg_country(){
    d3.select("#svg_two").remove();
    second_graph(this.value);
    }
}
// Rappel du graphique pour que cela fonctionne
second_graph();
