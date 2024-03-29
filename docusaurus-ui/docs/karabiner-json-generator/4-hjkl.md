---
sidebar_position: 4
---

# hjkl Navigation

Cool men know how awesome to use vim-like navigation. So your `hjkl` letters
become arrows. But in vim you should switch between modes. This config allow you
to use `capslock` as `hyper` key. So `capslock + h = left`,
`capslock + k = down` and so on including selections and etc.. If you don't
realize how it cool and handy and speedy and enjoyble you never try it!

```json
{
  "title": "🔥 HJKL navigation etc. 🔥",
  "rules": [
    {
      "description": "arrows from HJKL",
      "manipulators": [
        {
          "type": "basic",
          "description": "hyper + h = left_arrow",
          "from": {
            "key_code": "h",
            "modifiers": {
              "mandatory": [
                "right_shift",
                "right_command"
              ]
            }
          },
          "to": {
            "key_code": "left_arrow"
          }
        },
        {
          "type": "basic",
          "description": "hyper + l = right_arrow",
          "from": {
            "key_code": "l",
            "modifiers": {
              "mandatory": [
                "right_shift",
                "right_command"
              ]
            }
          },
          "to": {
            "key_code": "right_arrow"
          }
        },
        {
          "type": "basic",
          "description": "hyper + j = down_arrow",
          "from": {
            "key_code": "j",
            "modifiers": {
              "mandatory": [
                "right_shift",
                "right_command"
              ]
            }
          },
          "to": {
            "key_code": "down_arrow"
          }
        },
        {
          "type": "basic",
          "description": "hyper + k = left_arrow",
          "from": {
            "key_code": "k",
            "modifiers": {
              "mandatory": [
                "right_shift",
                "right_command"
              ]
            }
          },
          "to": {
            "key_code": "up_arrow"
          }
        }
      ]
    },
    {
      "description": "arrows with selection from HJKL",
      "manipulators": [
        {
          "type": "basic",
          "description": "hype + left_shift + h = left_arrow + left_shift",
          "from": {
            "key_code": "h",
            "modifiers": {
              "mandatory": [
                "right_shift",
                "right_command",
                "left_shift"
              ]
            }
          },
          "to": {
            "key_code": "left_arrow",
            "modifiers": [
              "left_shift"
            ]
          }
        },
        {
          "type": "basic",
          "description": "hyper + left_shift + l = right_arrow + left_shift",
          "from": {
            "key_code": "l",
            "modifiers": {
              "mandatory": [
                "right_shift",
                "right_command",
                "left_shift"
              ]
            }
          },
          "to": {
            "key_code": "right_arrow",
            "modifiers": [
              "left_shift"
            ]
          }
        },
        {
          "type": "basic",
          "description": "hyper + left_shift + j = down_arrow + left_shift",
          "from": {
            "key_code": "j",
            "modifiers": {
              "mandatory": [
                "right_shift",
                "right_command",
                "left_shift"
              ]
            }
          },
          "to": {
            "key_code": "down_arrow",
            "modifiers": [
              "left_shift"
            ]
          }
        },
        {
          "type": "basic",
          "description": "hyper + left_shift + k = left_arrow + left_shift",
          "from": {
            "key_code": "k",
            "modifiers": {
              "mandatory": [
                "right_shift",
                "right_command",
                "left_shift"
              ]
            }
          },
          "to": {
            "key_code": "up_arrow",
            "modifiers": [
              "left_shift"
            ]
          }
        }
      ]
    }
  ]
}
```
