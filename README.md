### Hexlet tests and linter status:
[![Actions Status](https://github.com/Sattturday/fullstack-javascript-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Sattturday/fullstack-javascript-project-44/actions)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Sattturday_fullstack-javascript-project-44&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=Sattturday_fullstack-javascript-project-44)

## Описание проекта

**Brain Games** — это набор консольных мини-игр, направленных на тренировку логики и базовых математических навыков.

Пользователь запускает игру из консоли, отвечает на вопросы и проходит 3 раунда. Один неправильный ответ — и игра заканчивается. Если три ответа верные — поздравляем!

## Минимальные требования

* Node.js ≥ 20
* npm ≥ 9

## Установка

Склонируйте репозиторий и установите зависимости:

```
git clone git@github.com:Sattturday/fullstack-javascript-project-44.git
cd fullstack-javascript-project-44
make install
npm link
```

Теперь команды будут доступны глобально:

```
brain-even        # игра "Проверка на четность"
brain-calc        # игра "Калькулятор"
brain-gcd         # игра "НОД"
brain-progression # игра "Арифметическая прогрессия"
brain-prime       # игра "Простое число"
```

## Правила

1. Каждая игра состоит из 3 раундов.
2. Пользователь должен дать правильный ответ на все раунды, чтобы выиграть.
3. Любой неверный ответ завершает игру с соответствующим сообщением:

   ```
   '<ответ>' is wrong answer ;(. Correct answer was '<правильный>'.
   Let's try again, <имя>!
   ```
4. После успешного завершения 3 раундов выводится:

   ```
   Congratulations, <имя>!
   ```

## Демонстрация работы игры brain-even

[![asciicast](https://asciinema.org/a/ZHb3n6B0v8v4V0u0Pr18uNY2M.svg)](https://asciinema.org/a/ZHb3n6B0v8v4V0u0Pr18uNY2M)

## Демонстрация работы игры brain-calc

[![asciicast](https://asciinema.org/a/5ZCM8yPshx4fin7CWkZhTE9HX.svg)](https://asciinema.org/a/5ZCM8yPshx4fin7CWkZhTE9HX)

## Демонстрация работы игры brain-gcd

[![asciicast](https://asciinema.org/a/WCdYZ8uLnL0CzKERJiMuSgXxU.svg)](https://asciinema.org/a/WCdYZ8uLnL0CzKERJiMuSgXxU)

## Демонстрация работы игры brain-progression

[![asciicast](https://asciinema.org/a/e3JIZ15gIKm64J7FlxDcOoIXS.svg)](https://asciinema.org/a/e3JIZ15gIKm64J7FlxDcOoIXS)

## Демонстрация работы игры brain-prime

[![asciicast](https://asciinema.org/a/x6dtKuXhrARbonNnyVNWDvEz0.svg)](https://asciinema.org/a/x6dtKuXhrARbonNnyVNWDvEz0)
