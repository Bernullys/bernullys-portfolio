commit: ini header menu:
Header:
    I'm using untill now two states:
        1- Sets if the CgMenuGrido icon it's  been hovered.
            So its container is using React event handlers onMouseEnter to set it to true, and onMouseLeave to set it to false. Then with the class of TiArrowSortedDown icon, first is display none and the display inline-block to make the effect.
        2- Using a state and a function to toggle a class to display onClick of the  menu icons container.

commit: menu icon completed:
    I change the whole aproach. I defined a if statement to select the icon in each state. And using three states I could finally reach the goal.
    With this aproach I'm stop using the classes to display none the icons. Only to the ul element.