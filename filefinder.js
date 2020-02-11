/* Takes file type and str and creates custom google search query as link
@input fileType = <DIV> select specified file type
@input str = <DIV> input specified string (name of item to search)
@out html link.
*/
function createQuery(fileType, str){
    var extensions = "";
    if(fileType === "eBook"){
        extensions = 'MOBI|EPUB|PDF|DOC|DOCX';
        var finalQuery = str+" +("+extensions+") -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";
    } else if (fileType === "music"){
        extensions = 'mp3|wav|ogg|flac|wma|m4a';
        var finalQuery = str+" +("+extensions+") -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";
    } else {
        //TV Show or Movie
        extensions = 'mkv|mp4|avi|mov|mpg|wmv';
        var finalQuery = str+" +("+extensions+") -inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|wallywashis)";
    }
    var url = "https://www.google.com/search?q="+encodeURIComponent(finalQuery);
    console.log(url);
    window.open(url, '_blank');
};

/* takes search and puts it in quotes that's all
@input str = input string
@output string = string but with quotes around it
*/
function  hardSearch(str){
    var hardString = '"'+ str + '"';
    return hardString;
}

/* Everything to be called on window load */
window.onload = function(){

    document.getElementById('submit-string').addEventListener(
        'click', function(){
            var fileType = document.getElementById('file-type').value;
            var str = document.getElementById('search-string').value;
            var checked = document.getElementById('hard-or-not').checked;

            //If user wants a hard search then we give it to them
            if (checked){
                createQuery(fileType, hardSearch(str));
            } else {
                createQuery(fileType, str);
            }
        }
    );
}