# Toykam Query Builder

This query builder module is a query builder that can used for easy and simple database connection and access.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
npm install toykam/query-builder --save
```

## Usage
Basic Way To Connect To Database

```node
const db = require('toykam/query-builder')

const dbm = new db({
    host: 'localhost',
    user: 'root',
    password: '',
})

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)