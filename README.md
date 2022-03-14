# Use GIF as a favicon
1. explode you gifs into different images using the 3rd link in references.
2. use js code mentioned in the "GIF as a favicon" region in index.js file
3. to create an js array of all image names
    1. select all the image files in vscode
    2. right click and copy the relative paths
    3. paste the paths in a new vscode empty file
    4. then replace all '\' with '/'
    5. then add ./ in start of all paths
    6. then copy all lines and convert lines to json using the website using 4th link in references
    7. paste the json in the variable "favicon_images"

## Reference
1. https://stackoverflow.com/questions/1837261/how-to-animate-a-favicon
2. https://usefulangle.com/post/45/animate-favicon-gif-javascript
3. https://ezgif.com/split
4. http://static.decontextualize.com/lines-to-json/

-----------------------------------------------------------------------------------------------------------------------

# Bubble and capture event concept
1. Bubble -> events go from child to parents
2. Capture -> events go from parent to children
3. addEventListener() -> addEventListener(event, callback, useCapture)
    1. useCapture -> true -> capture, false -> bubble
    2. default value is false
4. code example is in the "Bubble and capture event" region in index.js file
