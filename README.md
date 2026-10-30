## Требования

### 1. Git

Git необходим для работы с репозиторием.

**Windows:**
- Скачать с: https://git-scm.com/download/win
- Запустить установщик и следовать мастеру установки

**macOS:**
- Установить через Homebrew: `brew install git`
- Или скачать с: https://git-scm.com/download/mac
- Или установить Xcode Command Line Tools: `xcode-select --install`

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install git
```

### 2. Node.js (версия 18 или выше)

**Windows:**
1. Скачать с: https://nodejs.org/
2. Выбрать версию "LTS" (Long Term Support)
3. Запустить установщик (.msi файл)
4. Во время установки убедиться, что отмечено "Add to PATH"

**macOS:**
1. Скачать с: https://nodejs.org/
2. Выбрать версию "LTS"
3. Запустить установщик (.pkg файл)
4. Или установить через Homebrew: `brew install node`

**Linux (Ubuntu/Debian):**
```bash
# Установить nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Перезагрузить оболочку (или перезапустить терминал)
source ~/.bashrc

# Установить последнюю LTS версию
nvm install --lts

# Установить последнюю версию
nvm install node
```

### Проверка установки

```bash
git --version
node --version
npm --version
```

## Сборка

### Шаг 1: Клонирование репозитория

Открыть терминал/командную строку и выполнить:

```bash
git clone git@github.com:km-pro/website.git
```

Или если у вас не настроены SSH ключи:

```bash
git clone https://github.com/km-pro/website.git
```

Это создаст папку `website` с файлами проекта.

### Шаг 2: Переход в директорию проекта

```bash
cd website
```

### Шаг 3: Установка pnpm

```bash
npm install -g pnpm
```

Проверить установку pnpm:
```bash
pnpm --version
```

### Шаг 4: Установка зависимостей

В директории проекта выполнить:

```bash
pnpm install
```

Это загрузит все необходимые пакеты.

## Разработка

### Запуск сервера разработки

```bash
pnpm dev
```

Это запустит локальный сервер разработки. Вы увидите что-то вроде:

```
🚀 astro dev
  Local:    http://localhost:4321/
  Network:  http://192.168.1.xxx:4321/
```

Откройте URL в браузере, чтобы увидеть сайт.

## Структура проекта

```
km-pro-website/
├── public/                # Статические ресурсы (изображения, иконки и т.д.)
│   ├── images/            # Изображения сайта
│   └── ...                # Другие статические файлы
├── src/
│   ├── components/        # Переиспользуемые UI компоненты
│   │   ├── Header.astro   # Шапка сайта с навигацией
│   │   ├── Footer.astro   # Подвал сайта
│   │   ├── Navigation.tsx # Главное меню навигации
│   │   └── ...            # Другие компоненты
│   ├── layouts/           # Шаблоны макетов страниц
│   │   ├── MainLayout.astro     # Основной макет сайта
│   │   ├── ProductLayout.astro  # Макет страниц продуктов
│   │   └── ...                  # Другие макеты
│   ├── pages/             # Страницы сайта
│   │   ├── index.astro    # Главная страница
│   │   ├── products/      # Страницы продуктов
│   │   ├── contact_us.astro # Страница контактов
│   │   └── api/           # API endpoints
│   ├── styles/            # CSS файлы
│   └── utils/             # Вспомогательные функции
├── package.json           # Зависимости проекта
├── astro.config.mjs      # Конфигурация Astro
└── tailwind.config.mjs   # Конфигурация Tailwind CSS
```

## Справочник команд

| Команда | Описание |
|---------|----------|
| `pnpm dev` | Запустить сервер разработки |
| `pnpm build` | Собрать для продакшена |
| `pnpm preview` | Предварительный просмотр продакшен сборки |
| `pnpm format` | Форматировать код |
| `pnpm format:check` | Проверить форматирование без изменений |
| `pnpm astro` | Выполнить команды Astro CLI |

---