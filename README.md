Commit: Initializing Header Menu

Header: (The Header component contains a Presentation component and the "signal_to_keep_down" arrow)

I'm currently using two states:

Determines if the CgMenuGrido icon is being hovered over. Its container uses React event handlers onMouseEnter to set it to true and onMouseLeave to set it to false. Then, with the class of TiArrowSortedDown icon, it is first displayed as none and then displayed inline-block to create the effect.

Using a state and a function to toggle a class to display onClick of the menu icons container.

Commit: Completed Menu Icon

I changed the whole approach. I defined an if statement to select the icon in each state. By using three states, I was finally able to reach the goal. With this approach, I stopped using classes to display none of the icons, only for the ul element.

Commit: Presentation Component

I created a component that receives a name as a prop. It's a straightforward component, but in this commit, it really was about the section that involves the menu and the class added that makes a transition of the menu. This was done with the useState menuVisible.

Commit: Added Arrow with Animation

I added an arrow with a class that creates movement with position fixed to the bottom and centered. However, after working on other sections, I had to change the display to position absolute.

Commit: Footer

I added a straightforward footer component, very simple.

Commit: Toolkit Component

I added a Toolkit component which is a container of ToolCards components. In Toolkit, I have an array of objects that contain the info of the technologies I have. In ToolCards, I have two props: iconImage and techName. So, I used a map to iterate over the techInfo array and output the cards.

Commit: Contact and Layout Components

I made both components. The contact is a form and the Layout is a container in which I included all the other components giving a prop of children.

Commit: About and Projects

Here I created About and started making Projects.

Commit: ProjectCards Mapping and Conditional Rendering

ProjectCards is inside Projects. In Projects, I put an array of objects with several properties of each project. And this is the key of this code to render if the key tools has the property or not:

{
    Object.entries(tools).map(([key, value]) => (
        value && <h5 key={key}>{value}</h5>
    ))
}
Other commits are quite straightforward.

Then I uploaded to GitHub Pages in this commit:

I set the base in vite.config, created a folder named .github, created a folder named workflows, created a file named deploy.yml, then pasted the code given in vite site. Then committed changes. Then went to GitHub - settings and set up the workflows permissions to Read and write - Watch the action until it's working, then set up gh-pages and watch the deploy in action.

Here also, I put deploy from GitHub Actions.

There is a YouTube video where I got this info.