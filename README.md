# JS Lightbox
Single JavaScript File LightBox

---
### What you need
* Requirements:
    * jQuery

### How to get started
1. **To run the Lightbox function**, all you have to do is add the class "lb-js" to the HTML element you wish to be a trigger. *This can be anything from an anchor tag to an img element*

2. **Themes**:
    * Available themes
        * Dark (default)
        * Light
        * Cool
        * Warm
        * Custom (with the custom theme, you can use a primary and secondary color, or you can use an image along with a secondary color)

Global Theme is created by using a data-theme="yourTheme" on the body element.
Themes applied to individual elements will override the Global theme.


Supported Content Types: Embed, Image, Video

Content type is called using data-type="yourContentType" on your Lightbox element.


Supported Hosts: Youtube, Vimeo

Hosts are called using data-host="yourHost" on your Lightbox element (only required for embeds).

Lightbox Path: written as data-path="yourPath", this is the path to the image or video you wish to appear in the Lightbox. data-path="auto" is only available for images and works for both the img element and background images; it removes the need to write out the full path to the image along with data-type="img"
