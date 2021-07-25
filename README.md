# JSON obfuscator
JSON obfuscator tool which replaces all the strings in a file with unicode escape sequences, making it more difficult for a human reader to analyse it. Output JSON is valid and equivalent to the input file.

Example input:
```json
{
    "name": "John",
    "someInt": 1,
    "someBool": true,
    "cars": [
        {
            "name": "Ford",
            "models": [
                "Fiesta",
                "Focus",
                "Mustang"
            ]
        },
        {
            "name": "BMW",
            "models": [
                "320",
                "X3",
                "X5"
            ]
        },
        {
            "name": "Fiat",
            "models": [
                "500",
                "Panda"
            ]
        }
    ]
}
```
Example output:
```json
{
    "\u006e\u0061\u006d\u0065": "\u004a\u006f\u0068\u006e",
    "\u0073\u006f\u006d\u0065\u0049\u006e\u0074": 1,
    "\u0073\u006f\u006d\u0065\u0042\u006f\u006f\u006c": true,
    "\u0063\u0061\u0072\u0073": [
        {
            "\u006e\u0061\u006d\u0065": "\u0046\u006f\u0072\u0064",
            "\u006d\u006f\u0064\u0065\u006c\u0073": [
                "\u0046\u0069\u0065\u0073\u0074\u0061",
                "\u0046\u006f\u0063\u0075\u0073",
                "\u004d\u0075\u0073\u0074\u0061\u006e\u0067"
            ]
        },
        {
            "\u006e\u0061\u006d\u0065": "\u0042\u004d\u0057",
            "\u006d\u006f\u0064\u0065\u006c\u0073": [
                "\u0033\u0032\u0030",
                "\u0058\u0033",
                "\u0058\u0035"
            ]
        },
        {
            "\u006e\u0061\u006d\u0065": "\u0046\u0069\u0061\u0074",
            "\u006d\u006f\u0064\u0065\u006c\u0073": [
                "\u0035\u0030\u0030",
                "\u0050\u0061\u006e\u0064\u0061"
            ]
        }
    ]
}
```
In addition to the main functionality, process generates a replacement mapping file:
```txt
"name" -> "\u006e\u0061\u006d\u0065"
"John" -> "\u004a\u006f\u0068\u006e"
"someInt" -> "\u0073\u006f\u006d\u0065\u0049\u006e\u0074"
"someBool" -> "\u0073\u006f\u006d\u0065\u0042\u006f\u006f\u006c"
"cars" -> "\u0063\u0061\u0072\u0073"
"Ford" -> "\u0046\u006f\u0072\u0064"
"models" -> "\u006d\u006f\u0064\u0065\u006c\u0073"
"Fiesta" -> "\u0046\u0069\u0065\u0073\u0074\u0061"
"Focus" -> "\u0046\u006f\u0063\u0075\u0073"
"Mustang" -> "\u004d\u0075\u0073\u0074\u0061\u006e\u0067"
"BMW" -> "\u0042\u004d\u0057"
"320" -> "\u0033\u0032\u0030"
"X3" -> "\u0058\u0033"
"X5" -> "\u0058\u0035"
"Fiat" -> "\u0046\u0069\u0061\u0074"
"500" -> "\u0035\u0030\u0030"
"Panda" -> "\u0050\u0061\u006e\u0064\u0061"
```
___
## How to run
To run application type npm start with input file path, for example:
```bash
npm start example/example.json
```
To run application with custom mapper name, add mapper name as next parameter:
```bash
npm start example/example.json mapperCustomName
```
To save result as file ( default is console.log ) add next parameter as path to output file:
```bash
npm start example/example.json mapperCustomName output/result.json
```
To save result as file and skip mapper file naming, use - instead of mapper name param to skip it:
```bash
npm start example/example.json - output/result.json
```