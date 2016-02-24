$(document).ready(function() {
     var $gallery = $('#FlickrImages');                                            
    //Flickr Integration
    $.getJSON("https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=c7164eb5743c0f064666cdb4856e0a11&user_id=aaron.shenette&format=json", function(data){
        $.each(data.items, function(i,item){
            if(i<=9999){
                $("<img/>").attr("src", item.media.m).appendTo($gallery)
                .wrap("<a class='gallery-image' href='" + item.link + "' target='_blank' title='Flickr'></a>");
            }
        });
       $gallery.imagesLoaded( function() {
         $gallery.masonry();
        });            
    });                     
});
