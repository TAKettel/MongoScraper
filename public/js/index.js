axios.get('/articles')
.then(function (response) {
// handle success
    const articles = response.data;
    articles.forEach(article => {
        const newDiv = $("<div>", {"class": "card"});
        const newHeadline = $("<h3>");
        const buttonRow = $("<div>", {"class": "row"})
        const newLink = $("<a>", {"target": "_blank", "class": "col-2"});
        const newSynop = $("<p>");
        const comment = $("<button>", {"class": "col-4 btn btn-primary showModal", "data-toggle": "modal", "data-target": "#exampleModal", "data-whatever": article.title});
        newHeadline.text(article.title);
        newLink.text("Full article");
        newLink.attr("href", article.link);
        newSynop.text(article.synopsis);
        comment.text("Save a Note on this Article");
        newDiv.append(newHeadline);
        newDiv.append(newSynop);
        buttonRow.append(newLink);
        buttonRow.append(comment);
        newDiv.append(buttonRow);
        $("#articleSpace").append(newDiv);
        //container div, then an h3 for article title, p for the synopsis, and a for link. Also need an option to leave a comment.
        $(".showModal").click(function() {
            $("#exampleModal").addClass("show");
            $("#exampleModal").attr("style", "display: block");
        })
    })
    //for each loop to build each article
})
.catch(function (error) {
// handle error
console.log(error);
})
.finally(function () {

// always executed
});

$(".close").click(function() {
    $("#exampleModal").removeClass("show");
    $("#exampleModal").attr("style", "display: none");
})