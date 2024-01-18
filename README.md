commit: ini header menu:
Header:
    I'm using untill now two states:
        1- Sets if the CgMenuGrido icon it's  been hovered.
            So its container is using React event handlers onMouseEnter to set it to true, and onMouseLeave to set it to false. Then with the class of TiArrowSortedDown icon, first is display none and the display inline-block to make the effect.
        2- Using a state and a function to toggle a class to display onClick of the  menu icons container.

commit:
    We add 3th state to change the icon when onClick appears the menu. Is isUpMenuIcon.
    I have to add a 4th state to change to a fourth icon when the display onClick of the menu is being showed and the upArrow icon is not hovered.