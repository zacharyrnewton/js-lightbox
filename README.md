# JS Lightbox
Single JavaScript File LightBox

---
### What you need
* Requirements:
    * jQuery

### How to get started
1. **To run the Lightbox function**, all you have to do is add the class `lb-js` to the HTML element you wish to be a trigger. *This can be anything from an anchor tag to an img element*

2. **Themes**:
    * To set a *Global Theme*, all you need to do is add `data-theme="yourTheme"` to the body element.
        * Available themes
            * Dark (default) *written as* `data-theme="dark"`
            * Light *written as* `data-theme="light"`
            * Cool *written as* `data-theme="cool"`
            * Warm *written as* `data-theme="warm"`
            * Custom (with the custom theme, you can use a primary and secondary color, or you can use an image along with a secondary color)
    * Any theme added to an element with the `lb-js` class will override the *Global Theme* for that element only.
    * For a custom theme, add `data-theme="custom"` along with `data-custom-theme="yourColorOrImagePath"` for the primary color, and `data-custom-theme-close="yourColor"` for the secondary color to your element.

Global Theme is created by using a data-theme="yourTheme" on the body element.
Themes applied to individual elements will override the Global theme.


Supported Content Types: Embed, Image, Video

Content type is called using data-type="yourContentType" on your Lightbox element.


Supported Hosts: Youtube, Vimeo

Hosts are called using data-host="yourHost" on your Lightbox element (only required for embeds).

Lightbox Path: written as data-path="yourPath", this is the path to the image or video you wish to appear in the Lightbox. data-path="auto" is only available for images and works for both the img element and background images; it removes the need to write out the full path to the image along with data-type="img"
