# common_design_system
Component library for Common Design

---
This currently consists of Header with OCHA services, user menu, language switcher, logo, and main menu as assembled Header (complete), and as separate pieces where relevant.
This means code duplication because HTML has no way to include other html pages.

I've created a CSS file for each and have linked to the common_design scss file equivalent where relevant.

Each HTML file is getting the CSS from the demo site.

Also present is the cd-dropdown.js without any Drupal behaviours, and cd-menu.js and cd-user-menu.js to set the element selectors the dropdown should act upon.

The footer is currently in one piece as cd-footer.html

And the SVG sprite icon is being attached (copy and pasted) into each HTML file.

This process is an interesting one because it identifies where the context is being relied upon for a component to function well.

Eg:
### **How we want it to look**, User menu in all of its divs
![cd-user-menu-w-context](https://user-images.githubusercontent.com/1835923/75886715-f62bf480-5e28-11ea-9263-e4901beae241.png)

### **How it looks**, User menu as a component
![cd-user-menu](https://user-images.githubusercontent.com/1835923/75886761-0b088800-5e29-11ea-9b06-b79aa01081c8.png)

Typically, I have kept the context, so we have the user menu inside this markup in these cases.
We will also find this markup in the cd-header and other components because most CD components, at the moment, rely on the context.
```
<div class="cd-layout-container">
    <div class="cd-container">
      <header class="cd-header">
        <div class="cd-global-header">
          <div class="cd-container cd-global-header__inner">

            <div class="region region-header-top cd-global-header__actions">
              <!-- user menu here -->
```

Moving away from this reliance is a goal.
