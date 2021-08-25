## Model

```json
{
  "name": "themeName",
  "link": "themeURL",
  "colors": [ "brackets", "html_element", "html_attribute", "html_equalsign", "html_value", "html_comment", "site_bg", "plain_text" ]
}
```

### html_comment

Pode receber um objeto para diferenciar a color do texto do comentário.
Exemplo (firefox theme):
```json
{
  ...
  "colors": [ "#767578", "#5EBFFF", "#F570EF", "#D7D7DB", "#C289FF", ["#939393", "#52A654"], "#2A2A2E", "#B1B1B3" ]
}
```