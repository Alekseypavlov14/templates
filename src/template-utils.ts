export interface Attributes {
  [key: string]: string | undefined
}

export class TemplateUtils {
  static fillTemplate(selector: string, content: string): void {
    return this.hydrateTemplates(selector, (element) => {
      element.innerHTML = content || ''
    })
  }

  static mountTemplate(root: Element, template: string): void {
    if (!root) return
    root.innerHTML = template || '';
  }

  static replaceTemplate(selector: string, content: string): void {
    return this.hydrateTemplates(selector, (element) => {
      element.replaceWith(content || '')
    })
  }

  static concatTemplates(templates: string[]): string {
    return templates.join('');
  }

  static hydrateTemplates(selector: string, callback: (element: Element, index: number, array: Element[]) => void): void {
    const elements = this.getElements(selector);
    elements.forEach(callback);
  }

  static getElements(selector: string): Element[] {
    return Array.from(document.querySelectorAll(selector));
  } 

  static getElementsByAttributes(attributes: Attributes): Element[] {
    const selector = this.createSelectorByAttributes(attributes);
    return this.getElements(selector);
  }

  static createSelectorByAttributes(attributes: Attributes) {
    const attributesRows = Object.keys(attributes)
      .filter(attributeName => attributes[attributeName] !== undefined)
      .map(attributeName => `[${attributeName}="${attributes[attributeName]}"]`)
  
    return TemplateUtils.concatTemplates(attributesRows)
  }

  static mapAttributesToHTMLString(attributes: Attributes) {
    const attributesRows = Object.keys(attributes)
      .filter(attributeName => attributes[attributeName] !== undefined)
      .map(attributeName => `${attributeName}="${attributes[attributeName]}"`)
  
    return TemplateUtils.concatTemplates(attributesRows)
  }
}
