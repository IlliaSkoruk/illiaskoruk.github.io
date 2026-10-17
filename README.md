# Firearms Explorer

Сучасний інформаційно-освітній вебсайт та енциклопедія про історію, моделі та технології вогнепальної зброї.

- **Адреса вебсайту**: [https://illiaskoruk.github.io/](https://illiaskoruk.github.io/)
- **Репозиторій**: [https://github.com/IlliaSkoruk/illiaskoruk.github.io](https://github.com/IlliaSkoruk/illiaskoruk.github.io)

## Вимоги до середовища

- **Node.js**: `v22.12.0` або новіша (перевірено на `v22.21.0`)
- **npm**: `10.x` або новіша

## Встановлення залежностей

```bash
npm install
```

## Доступні команди (npm scripts)

- `npm run dev` — запуск локального сервера розробки (за замовчуванням: `http://localhost:4321`)
- `npm run check` — перевірка типів та діагностика проєкту через Astro / TypeScript
- `npm run build` — статична збірка для production (результат у директорії `dist/`)
- `npm run preview` — локальний попередній перегляд зібраної статичної версії

## Розгортання (Deployment)

Розгортання здійснюється автоматично на **GitHub Pages** за допомогою workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) після кожного пушу в основну гілку `main`.

## Структура проєкту

```text
├── .github/
│   └── workflows/
│       └── deploy.yml   # Автоматичний деплой на GitHub Pages
├── public/              # Статичні ресурси (favicon тощо)
├── src/
│   ├── components/      # Перевикористовувані компоненти (готується)
│   ├── layouts/         # Макети сторінок (BaseLayout.astro)
│   ├── pages/           # Маршрути та сторінки (index.astro)
│   └── styles/          # Базові глобальні стилі (global.css)
├── astro.config.mjs     # Конфігурація Astro (режим static, site URL)
├── tsconfig.json        # Налаштування TypeScript (strict mode)
└── package.json         # Маніфест залежностей та npm-скриптів
```
