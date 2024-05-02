# TemplateUtils

TemplateUtils is a utility class for working with HTML templates in JavaScript or TypeScript projects.

## Installation

To install TemplateUtils, you can use npm or yarn:

```bash
npm install @oleksii-pavlov/templates
# or
yarn add @oleksii-pavlov/templates
```

## Usage

Import TemplateUtils in your TypeScript or JavaScript file:

```typescript
import { TemplateUtils } from '@oleksii-pavlov/templates';
```

### Methods

#### `fillTemplate(selector: string, content: string): void`

Fills the innerHTML of elements matching the selector with the provided content.

#### `mountTemplate(root: Element, template: string): void`

Mounts the template string into the specified root element.

#### `replaceTemplate(selector: string, content: string): void`

Replaces elements matching the selector with the provided content.

#### `concatTemplates(templates: string[]): string`

Concatenates an array of template strings into a single string.

#### `hydrateTemplates(selector: string, callback: (element: Element, index: number, array: Element[]) => void): void`

Hydrates templates matching the given selector with a callback function.

#### `getElements(selector: string): Element[]`

Returns an array of elements matching the given selector.

#### `getElementsByAttributes(attributes: Attributes): Element[]`

Returns an array of elements matching the given attributes.

#### `mapAttributesToHTMLString(attributes: Attributes): string`

Maps attributes to an HTML string.

### Example

```typescript
import { TemplateUtils } from '@oleksii-pavlov/templates';

// Example usage
TemplateUtils.fillTemplate('.container', '<h1>Hello, world!</h1>');

const root = document.getElementById('root');
const template = '<div><p>This is a template</p></div>';

TemplateUtils.mountTemplate(root, template);
```