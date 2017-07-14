# JS Lightbox
Single JavaScript File LightBox
<a href="" class="btn"></a>
---
### What you need
* Requirements:
    * jQuery

### How to get started
1. **To run the Lightbox function**, all you have to do is add the class `lb-js` to the HTML element you wish to be a trigger. *This can be anything from an anchor tag to an img element*

2. **Themes**: JS Lightbox supports a Global Theme, and the ability to apply a theme to any element independent of the Global Theme.
    * To set a *Global Theme*, all you need to do is add `data-theme="yourTheme"` to the body element.
        * Available themes
            * Dark (*default*) *written as* `data-theme="dark"`
            * Light *written as* `data-theme="light"`
            * Cool *written as* `data-theme="cool"`
            * Warm *written as* `data-theme="warm"`
            * Custom (with the custom theme, you can use a primary and secondary color, or you can use an image along with a secondary color)
    * Any theme added to an element with the `lb-js` class will override the *Global Theme* for that element only.
    * For a custom theme, add `data-theme="custom"` along with `data-custom-theme="yourColorOrImgPath"` for the primary color, and `data-custom-theme-close="yourColor"` for the secondary color to your element.

3. **Content Types**: JS Lightbox has three different supported content types at this time. The content type is set by adding `data-type="yourContentType"` to your JS Lightbox element.
    * Supported Content Types
        * image (*See Step 4.*)
        * video (*See Step 4.*)
        * embed (*See Step 4.*)
    * Any JS Lightbox element with *embed* as the *content type*, a host must be declared. Supported hosts are as follows.
        * `data-host="youtube"`
        * `data-host="vimeo"`

4. **Lightbox Path**: all content types require a path to be declared. Path declarations are written as `data-path="yourPath"`.
    * A path can be either relative or absolute.
    * For embeds, the path should be the embed src link.
    * `data-path="auto"` can be declared on an \<img\> element, or any element using a background image. This removes the need to declare a content type as it is only available for images. This path declaration will also figure out the path automatically, just as the name implies lol.
