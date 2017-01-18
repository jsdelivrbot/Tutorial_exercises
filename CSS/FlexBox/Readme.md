### Flex Shortcuts
-----

#### Parent containers

###### <u>Initial config settings</u>

```css

 display: flex;

flex-wrap: <value>

flex-direction: <value>

flex-flow: <value>

```
<ol>
  <li>
    <b>Flex Wrap</b>:<u> nowrap | wrap | wrap-reverse </u>
    <p>Controls whether the flex container is a single-line or multi-line
    when there is not enough space to accommodate all elements</p>
  </li>
  <li>
    <b>Flex Direction</b>:<u> row | row-reverse | column | column-reverse </u>
    <p>Define the main axis for the flex container</p>
  </li>
  <li>
    <b>Flex Flow</b>:<u> nowrap column | wrap row | ..... </u>
    <p>Shorthand for flex-wrap and flex-flow above</p>
  </li>
</ol>



-----
#### Child elements

```css
order: <value>

.someClass:nth-child(<value>){
  order: -1;
}

```
<ol>
  <li>
    <b>Order</b>:<u> -1 | 2 | 10 </u>
    <p>Controls the order of display that the flex items are shown , allowing
       you to manipulate the display without changing the HTML </p>
  </li>
</ol>  

###### <u>Sizing settings</u>

```css

flex-grow: 1;

flex-shrink: 1;

flex-basis: 0;

flex: <flex-grow> <flex-shrink> <flex-basis>

```
<ol>
  <li>
    <b>Flex Grow</b>:<u> 1 | 2 | 3 </u>
    <p>Defines how much the flex items grows, relative to the other flex items
    in the same flex container</p>
  </li>
  <li>
    <b>Flex Shrink</b>:<u> 1 | 2 | 1 </u>
    <p>Determines how much space is allocated when flex items are shrinking to fit
    inside the container</p>
</li>
<li>
  <b>Flex Basis</b>:<u> 0 | auto | 1 </u>
  <p>Sets the initial width for a flex item</p>
</li>
</ol>    

###### <u>Content</u>

```css

margin: auto

justify-content: flex-start;

```

<ol>
<li><b> Margin </b>
<p>
  <i>Exerpt: Pro CSS3 layouts | Sam Smith </i>. Margins work on flex items in a very similar way to how CSS 2.1 margins operate on block-level elements.
  If you set an auto margin, any free space inside the flex container is assigned to that margin along that axis.
  So, by specifying margin-left: auto to a flex item, you push it to the right of the container,
  whereas margin-right: auto pushes the item to the left. Using margin this way also prevents items from
  growing to fill the available space, because all the space is consumed by the margin. Listing 5-9 borrows an
  example from the W3C Candidate Recommendation specification to illustrate how margins can be used to
  push one list item to the right of a navigation bar.</p>
</li>
<li><b>Justify Content : </b> flex-start | flex-end | center | space-between | space-around
<p>
  <ul>
    <li> flex-start : Aligns items from the main start edge of the flex container</li>
    <li> flex-end: Aligns items from the main end edge of the container</li>
  </ul>
</p>

</ol>
