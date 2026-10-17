export interface CategoryItem {
  id: CategoryId;
  name: string;
  description: string;
}

export const CATEGORIES = [
  {
    id: 'pistols',
    name: 'Пістолети',
    description:
      'Короткоствольна ручна зброя для стрільби на ближніх дистанціях, переважно самозарядної конструкції з живленням з магазина.',
  },
  {
    id: 'revolvers',
    name: 'Револьвери',
    description:
      'Багатозарядна короткоствольна зброя з обертовим барабаном, камори якого слугують патронниками.',
  },
  {
    id: 'rifles',
    name: 'Гвинтівки',
    description:
      'Довгоствольна нарізна зброя для прицільної стрільби на середніх та дальніх відстанях із високою балістичною кучністю.',
  },
  {
    id: 'shotguns',
    name: 'Рушниці',
    description:
      'Гладкоствольна або комбінована зброя, призначена переважно для стрільби шротом, картеччю або спеціальними кулями.',
  },
  {
    id: 'submachine-guns',
    name: 'Пістолети-кулемети',
    description:
      'Автоматична індивідуальна зброя під пістолетний набій для маневреної стрільби на близьких відстанях.',
  },
  {
    id: 'machine-guns',
    name: 'Кулемети',
    description:
      'Автоматична зброя тривалого вогню та високої вогневої потужності, розроблена для ведення стрільби з сошок, станка або техніки.',
  },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];

export const CATEGORY_IDS = CATEGORIES.map((c) => c.id) as [CategoryId, ...CategoryId[]];
