commit: ini header menu:
Header: (Header commponent contains Presentation commponent and the "signal_to_keep_down" arrow)
    I'm using untill now two states:
        1- Sets if the CgMenuGrido icon it's  been hovered.
            So its container is using React event handlers onMouseEnter to set it to true, and onMouseLeave to set it to false. Then with the class of TiArrowSortedDown icon, first is display none and the display inline-block to make the effect.
        2- Using a state and a function to toggle a class to display onClick of the  menu icons container.

commit: menu icon completed:
    I change the whole aproach. I defined a if statement to select the icon in each state. And using three states I could finally reach the goal.
    With this aproach I'm stop using the classes to display none the icons. Only to the ul element.

commit: Presentation commponent:
    I made a commponent that recives a name as a prop. Is a strait forward commponent but in this commit it really was about the section that add envolving the menu and the class added that make a transition of the menu.

commit: Add the arrow with a little animation:
    I add an arrow with a class that make a move with position fixed to the botton and centered.