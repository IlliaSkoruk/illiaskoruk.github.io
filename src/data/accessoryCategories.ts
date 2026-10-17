/**
 * Довідник категорій аксесуарів, оптики та спорядження для Firearms Explorer 3.0.
 *
 * Примітка щодо архітектури:
 * Категорії представляють функціональні класи додаткового обладнання,
 * оптичних та електронних приладів, інтерфейсів монтажу та захисного спорядження.
 */

export interface AccessoryCategoryItem {
  readonly id: AccessoryCategoryId;
  readonly name: string;
  readonly description: string;
  readonly order: number;
  readonly note?: string;
}

export const ACCESSORY_CATEGORY_IDS = [
  'red-dot-sights',
  'riflescopes',
  'lights-and-lasers',
  'mounts',
  'magazines',
  'muzzle-devices',
  'protective-equipment',
  'storage-and-transport',
] as const;

export type AccessoryCategoryId = (typeof ACCESSORY_CATEGORY_IDS)[number];

export const ACCESSORY_CATEGORIES = [
  {
    id: 'red-dot-sights',
    name: 'Коліматорні та голографічні приціли',
    description:
      'Компактні електронні прицільні системи та їхні конструктивні особливості.',
    order: 1,
    note: 'Відкриті й закриті коліматори, голографічні приціли, пістолетна оптика (footprints).',
  },
  {
    id: 'riflescopes',
    name: 'Оптичні приціли',
    description:
      'Оптичні системи, LPVO, призматичні приціли та інші відповідні види оптики.',
    order: 2,
    note: 'Приціли змінної кратності LPVO, високоточна оптика для середніх і дальніх дистанцій.',
  },
  {
    id: 'lights-and-lasers',
    name: 'Ліхтарі та лазерні модулі',
    description:
      'Освітлювальні пристрої, лазерні модулі та їхні загальні технічні характеристики.',
    order: 3,
    note: 'Тактичні ліхтарі, видимі та інфрачервоні лазерні цілевказівники для нічної роботи.',
  },
  {
    id: 'mounts',
    name: 'Кріплення та інтерфейси',
    description:
      'Стандарти кріплень, монтажні інтерфейси та документація виробників.',
    order: 4,
    note: 'Планки Picatinny, інтерфейси M-LOK, швидкознімні QD-кронштейни та перехідні пластини.',
  },
  {
    id: 'magazines',
    name: 'Магазини',
    description:
      'Заводські магазини різних систем, їхня класифікація та конструктивні особливості.',
    order: 5,
    note: 'Стандарти STANAG, коробчасті та барабанні полімерні магазини, розширювачі ємності.',
  },
  {
    id: 'muzzle-devices',
    name: 'Дульні пристрої',
    description:
      'Типи заводських дульних пристроїв та загальні відомості про їхнє призначення й класифікацію.',
    order: 6,
    note: 'Саундмодератори (глушники), дульні гальма-компенсатори (ДГК) та полум’ягасники.',
  },
  {
    id: 'protective-equipment',
    name: 'Захисне спорядження',
    description:
      'Засоби захисту слуху й очей, сертифікаційні стандарти та спорядження для тиру.',
    order: 7,
    note: 'Активні балістичні навушники, захисні окуляри стандартів ANSI/MIL-PRF, захисні беруші.',
  },
  {
    id: 'storage-and-transport',
    name: 'Зберігання і транспортування',
    description:
      'Кейси, сейфи, захисні футляри та обладнання для відповідального зберігання.',
    order: 8,
    note: 'Ударостійкі вологозахисні кейси, збройові чохли, сейфи та замки безпеки.',
  },
] as const satisfies readonly AccessoryCategoryItem[];

/**
 * Отримати категорію аксесуара за її ідентифікатором
 */
export function getAccessoryCategoryById(
  id: string
): AccessoryCategoryItem | undefined {
  return ACCESSORY_CATEGORIES.find((cat) => cat.id === id);
}
