function loadData() {

           $.ajax({
                        type: "GET",
                        url: "https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow",
                        success: function (data) {
                            var html="";
                             var tags="";
                             for (var i=0; i<data.items.length; i++) {
                   
                                for (var j=0; j<data.items[i].tags.length; j++) {
                                  tags += '<div class="badge badge-info tags-badge">' + data.items[i].tags[j] +'</div>';
                                }
                   
                                html += '<li data-tags=' + data.items[i].tags +' class="card mb-3">'
                                          +'<div class="row no-gutters">'
                                          +'<div class="col-md-4">'
                                              +'<img src="' + data.items[i].owner.profile_image + '" class="card-img" alt="Profile Pic">'
                                            +'</div>'
                                            +'<div class="col-md-8">'
                                              +'<div class="card-body">'
                                                +'<h5 class="card-text">' + data.items[i].owner.display_name +'</h5>'
                                                  + tags 
                                              +'</div>'
                                            +'</div>'
                                          +'</div>'
                                        +'</li>'
                                        
                                tags = "";
                             }
                   
                             $("#dataList").append(html);
                                  },
                        error: function() {
                          alert("error")
                        }
                    });
         
        
     }