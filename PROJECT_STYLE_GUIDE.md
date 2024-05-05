# Project Style Guide

## Introduction

This guide outlines our UI development standards using Tailwind CSS to ensure consistency, maintainability, and high-quality user interfaces.

## Typography

Defined text sizes adjust responsively to screen size:

- **H1**: `text-7xl max-[1200px]:text-5xl max-[750px]:text-3xl max-[450px]:text-xl`
- **H2**: `text-5xl max-[1200px]:text-4xl max-[750px]:text-2xl max-[450px]:text-lg`
- **H3, H4, etc.**: Adjust sizes accordingly depending on needs.

## Color Palette

Standard colors used throughout the application are defined below and implemented through Tailwind's utility classes.

- **Primary**: `text-primary`
- **Secondary**: `text-secondary`
- **Accent**: `text-accent`
  
## Border Radius

Use these settings for rounding corners:

- **Fully Rounded**: `rounded-full` (e.g., buttons, avatars)
- **Slightly Rounded**: `rounded-xl` (e.g., cards, input fields)

## Responsive Design

Components are designed to be fully responsive:

- **Minimum Screen Size**: 250px
- **Maximum Component Width**: `max-w-screen-2xl`

## Placeholder Images

Use this API to generate placeholder images during development:

```html
<img src="https://via.placeholder.com/120x200.png?text=Placeholder" alt="Placeholder">
```

## Component Properties

- **Non-required Props**: All component properties should have sensible defaults to ensure components render usefully out of the box.
- Utilize placeholders for optional props to ensure thorough initial functionality.

## React Component Structure and Naming Conventions

Ensuring consistency in component structure and naming is crucial for maintainability and clarity within our codebase. Follow these guidelines when developing components for the project:

### 1. Component Naming and Structure

- **Component Naming**: The name of the main component should match the filename to avoid confusion. For example, `ExampleComponent.jsx` should contain the main export `export default ExampleComponent`.
  
- **Subcomponents**:
  - Define subcomponents within the same file as the main component if they are closely related and not reused elsewhere.
  - Use PascalCase for naming subcomponents (e.g., `SubComponent`).

- **Utility Functions**:
  - Name utility functions using camelCase (e.g., `utilityFunction`).
  - Place shared utility functions in `Utiles` folder if they are used by multiple components.

### 2. className Prop

- **Mandatory Prop**: The `className` prop should be included in every component to allow custom styling. This prop should be applied to the outermost container of the component for maximum flexibility in CSS customization.

```jsx
function ExampleComponent({ className = '' }) {
    return <div className={`default-styles ${className}`}>Content goes here.</div>;
}
```

### 3. PropTypes

- **Define PropTypes**: Always define PropTypes for components to ensure proper usage and to provide automatic documentation within the code. This step helps validate props and avoid runtime errors caused by incorrect prop types.

```jsx
import PropTypes from 'prop-types';

function ExampleComponent({ title }) {
    return <h1>{title}</h1>;
}

ExampleComponent.propTypes = {
    title: PropTypes.string
};
```

### 4. Default Exports

- Use `export default` for exporting main components. This makes it clear which component is primarily intended for use from each file.

```jsx
// In ExampleComponent.jsx
export default function ExampleComponent() {
    return <div>...</div>;
}
```

### 5. File and Folder Structure

- **File Structure**: Each component should reside in its own file, and the filename should reflect the component name.
- **Folder Structure**: Organize related components within the same folder to improve discoverability.

After completing the development of your component, please follow these steps to ensure proper integration within the project's module system:

1. **Create an `index.js` File in the Component Folder:**
   - Navigate to the folder of the newly created component.
   - Create an `index.js` file.
   - Inside this file, import the component and immediately export it. This practice facilitates a more streamlined import path elsewhere in the application.

   Example:
   ```javascript
   // In src/components/YourComponent/index.js
   import YourComponent1 from './YourComponent1';
   import YourComponent2 from './YourComponent2';

   export {
     YourComponent1,
     YourComponent2
   };
   ```
2. **Update the Main Index File `/index.js`:**
   - Go to the main project index file, typically located at the root of the src directory.
   - Import the component from its directory and export it again. This step is crucial for making the component globally available and for easier imports in other parts of the application.
   Example:
  ```javascript
  // In src/index.js
  import {
    YourComponent1,
    YourComponent2
  } from './components/YourComponent';

  export {
    YourComponent1,
    YourComponent2
  };
  ```
## Example Component Usage

- `className` is main prop you have to provide for all components
- Don't forget `propType`
- Always use `export default ExampleComponent`
- Main component name should be same with file name, like: `ExampleComponent.jsx` contain `export default ExampleComponent`, for subCompnents, should write using PascalCase inside main component file, not in seprated file, for util func use camleCase to name the func.

```jsx
// ExampleComponent.js
import PropTypes from 'prop-types';

function SubComponent() {
    return <h1>Hi, I am a sub component...</h1>
}

export default function ExampleComponent({ title = "Default Title", imageSrc = "https://via.placeholder.com/120x200.png?text=Default", className = '' }) {
    const utilityFunction = () => {
        console.log("Utility Function Executed");
    };

    return (
        <div className={`max-w-screen-2xl text-primary bg-light rounded-xl p-4 ${className}`}>
            <h1 className="text-7xl">{title}</h1>
            <img src={imageSrc} alt="Description" />
        </div>
    );
}

// Define prop types for better validation and documentation
ExampleComponent.propTypes = {
    title: PropTypes.string,
    imageSrc: PropTypes.string,
    className: PropTypes.string
};
```

## Review and Updates

Continually review and update the style guide as the project evolves. This is crucial to adapt to new requirements or design changes. By enforcing these guidelines and standards and documenting them clearly, your project will maintain consistency and high usability across all interfaces, and developers will have a clear reference to produce cohesive and maintainable code.
