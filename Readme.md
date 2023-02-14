# Popup Js

## Img Popup
If you only want the images to be displayed in the window that opens, it is sufficient to enter the image path in the src. Also, alt attribute can be added to img object. The src attribute is not required externally. If we want the image to go to an address when clicked, we can specify the address under the url name when calling our function.

> src | required

> alt | not required

> url | not required

```Javascript
popup({
    img : {
        src : 'img/popup.jpg',
        alt : 'alt',
        url : '#'
    }
})
```

## Text Popup
If you want the title and text to appear in the popup, it is sufficient to value the head and body in the text object.

> head | required

> body | required

```Javascript
popup({
    text : {
        head : 'Lorem Ipsum',
        body : `Lorem Ipsum is simply dummy text of the printin and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br><br> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br><br> Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',<br><br>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text.<br><br> It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"<br><br> (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
    }
})
```