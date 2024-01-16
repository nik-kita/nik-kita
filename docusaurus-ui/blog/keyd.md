---
title: Keyd
tags: ['hacks', 'config', 'notes', 'my']
slug: 'keyd-config'
date: '12-24-2023'
---

[See Keyd README.md for more details](https://github.com/rvaiya/keyd)

:::info

For example this is my config. It enable:

- hjkl-arrow moving
- double-shift = capslock
- capslock + enter = reload page in browser

<!-- truncate -->

And all this stuff is enable across my operation system. So no matter where I
use my keyboard, in vscode or in terminal or even in browser -- these rules are
working.

:::

```toml title='/etc/keyd/default.conf'
[ids]
*
[main]
capslock = overload(capslock_layer, esc)

[shift]

leftshift = capslock
rightshift = capslock



[capslock_layer]
h = left
j = down
k = up
l = right
enter = macro(C-r)
a = overload(a_capslock_layer, esc)
    [a_capslock_layer]
l = tab
h = macro(S-tab)
```
