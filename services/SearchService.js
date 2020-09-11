
         
        
         function searchByTags() {
             var input, filter, tagsList, i, txtValue;
             input = document.getElementById("search-bar");
             filter = input.value.toUpperCase().trim();
         
             $("#dataList li").each(function() {
              tagsList = $(this).data("tags").toUpperCase().split(",");

              var search_result = tagsList.find(element => element.trim().indexOf(filter) > -1)
              $(this).toggle(search_result != undefined || filter.trim() === "");

             });
         
         }