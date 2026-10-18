import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { CATEGORY_IDS } from './data/categories';
import { ACCESSORY_CATEGORY_IDS } from './data/accessoryCategories';

const sourceSchema = z.object({
  title: z.string().min(1, 'Назва джерела обов’язкова'),
  url: z.url().optional(),
  author: z.string().optional(),
  year: z.number().int().optional(),
});

const imageSchema = z.object({
  src: z.string().min(1, 'Шлях до зображення є обов’язковим'),
  alt: z.string().min(1, 'Описовий alt-текст є обов’язковим для доступності'),
  author: z.string().min(1, 'Автор або правовласник є обов’язковим'),
  license: z.string().min(1, 'Тип ліцензії або правовий статус обов’язковий'),
  sourceUrl: z.url().optional(),
  licenseUrl: z.url().optional(),
  caption: z.string().optional(),
  modifications: z.string().optional(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
});

const firearms = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/firearms' }),
  schema: z.object({
    title: z.string().min(1, 'Українська назва моделі обов’язкова'),
    originalName: z.string().optional(),
    category: z.enum(CATEGORY_IDS),
    manufacturer: z.string().optional(),
    countryOfOrigin: z.string().optional(),
    introducedYear: z.number().int().optional(),
    summary: z.string().min(1, 'Короткий опис є обов’язковим'),
    sources: z.array(sourceSchema).min(1, 'Опублікований запис повинен мати хоча б одне перевірене джерело'),
    lastReviewedAt: z.coerce.date(),
    draft: z.boolean().default(false),
    image: imageSchema.optional(),
  }),
});

const accessories = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/accessories' }),
  schema: z.object({
    title: z.string().min(1, 'Назва аксесуара обов’язкова'),
    brand: z.string().min(1, 'Виробник або бренд обов’язковий'),
    category: z.enum(ACCESSORY_CATEGORY_IDS),
    summary: z.string().min(1, 'Короткий опис є обов’язковим'),
    model: z.string().optional(),
    countryOfOrigin: z.string().optional(),
    introducedYear: z.number().int().optional(),
    sources: z.array(sourceSchema).min(1, 'Опублікований запис повинен мати хоча б одне перевірене джерело'),
    lastReviewedAt: z.coerce.date(),
    draft: z.boolean().default(false),
    image: imageSchema.optional(),
  }),
});

export const collections = { firearms, accessories };
