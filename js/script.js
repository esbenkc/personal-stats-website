fetch("https://kran.ai/stats/data/stats.tsv")
  .then((response) => response.text())
  .then((data) => {
    let parsedData = d3.tsvParse(data);

    parsedData.forEach((row, index) => {
      let htmlText = `
                <div class="skill">
                    <h2> ${row.value} / 99 | ${row.name}</h2>
                    <img src="${row.image_url}" alt="${row.name}">
                    <p>${row.description}</p>
                </div>
            `;
      console.log(htmlText);
    });
  });
