$(document).ready(function() {
     var $gallery = $('#FlickrImages');                                            
    //Flickr Integration
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?", function(data){
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
