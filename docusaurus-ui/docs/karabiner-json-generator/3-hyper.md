---
sidebar_position: 3
---

# Hyper

Make your `capslock` finally little useful key! (If you don't undersand what and
why - immediatelly read next chapter)

```json
{
  "title": "🔥 Hyper from CapsLock 🔥",
  "rules": [
    {
      "description": "default for 🔥 Hyper from CapsLock 🔥",
      "manipulators": [
        {
          "type": "basic",
          "description": "caps_lock = esc(click) | hyper(hold)",
          "from": {
            "key_code": "caps_lock",
            "modifiers": {
              "optional": [
                "any"
              ]
            }
          },
          "to": {
            "key_code": "right_shift",
            "modifiers": [
              "right_command"
            ]
          },
          "to_if_alone": {
            "key_code": "escape"
          }
        }
      ]
    },
    {
      "description": "CapsLock from shifts",
      "manipulators": [
        {
          "type": "basic",
          "description": "left_shift + right_shift = caps_lock",
          "from": {
            "key_code": "left_shift",
            "modifiers": {
              "mandatory": [
                "right_shift"
              ],
              "optional": [
                "caps_lock"
              ]
            }
          },
          "to": {
            "key_code": "caps_lock"
          },
          "to_if_alone": {
            "key_code": "left_shift"
          }
        },
        {
          "type": "basic",
          "description": "right_shift + left_shift = caps_lock",
          "from": {
            "key_code": "right_shift",
            "modifiers": {
              "mandatory": [
                "left_shift"
              ],
              "optional": [
                "caps_lock"
              ]
            }
          },
          "to": {
            "key_code": "caps_lock"
          },
          "to_if_alone": {
            "key_code": "right_shift"
          }
        }
      ]
    }
  ]
}
```
