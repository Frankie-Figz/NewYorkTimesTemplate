$(document).ready(function(){
    
    queryHome = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

    function displayNewsOnViewArea(){
        event.preventDefault();
        //Empties the viewing area
        //TO_DO : Change to the name of the corresponding div.
        $("#News-view").empty();
        console.log("I am here");
        console.log($("#pageNumber").val().trim());

        // Select the params from list
        params = {q:$("#title").val().trim(), "api-key":"4gmZpMgFcFKIruk7U3KWXMXoTCm4dLRi", page: $("#pageNumber").val().trim()}

        // , begin_date: $("#start").val().trim(), end_date: $("#end").val().trim(), page: $("#pageNumber").val().trim()};

        console.log(jQuery.param(params));

        // Insert here the param logic to extract the queryURL
        queryURL = queryHome + jQuery.param(params);
        console.log(queryURL);

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
            console.log(response.response.docs);

            var NewsRowDiv = $("<div>");
                NewsRowDiv.addClass("row");
            
            for(i in response.response.docs){
                var titleColDiv = $("<div>");
                titleColDiv.addClass("col-10");
    
                //TODO : Change the response.data[i].id
                // titleColDiv.attr("news-id", response.data[i].id);
                //TODO : Change the response structure to accomodate for the API structure
                var textHeadline = response.response.docs[i].headline.main;
                titleColDiv.text(textHeadline);
                NewsRowDiv.append(titleColDiv);
            }
    
            // TODO : Change to the name of the corresponding Div w
            $(".article").append(NewsRowDiv);
        });
    
    };
    
    $(document).on("click", ".btn-submit", displayNewsOnViewArea);
    
});
