# Modelo

```json
{
  "name": "themeName",
  "link": "themeURL",
  "colors": [ "brackets", "html_element", "html_attribute", "html_equalsign", "html_value", "html_comment", "site_bg", "plain_text" ]
}
```

## html_value
Pode receber um objeto, sendo o segund valor para diferenciar a cor das aspas.
Exemplo (night owl):
```json
{
  "name": "night owl",
  "link": "https://github.com/sdras/night-owl-vscode-theme",
  "colors": [ "#5BDEC9", "#C1EDE6", "#BCE666", "#5BDEC9", ["#F3C384", "#D2F6DB"], "#5E7877", "#031628", "#D4DEEC" ]
}
```

## html_comment

Pode receber um objeto, sendo o segund valor para diferenciar a cor do texto do comentário.
Exemplo (firefox theme):
```json
{
  ...
  "colors": [ "#767578", "#5EBFFF", "#F570EF", "#D7D7DB", "#C289FF", ["#939393", "#52A654"], "#2A2A2E", "#B1B1B3" ]
}
```