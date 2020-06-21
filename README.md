# Knex-Rightsfilter

Simple rightsfilter for Knex. It adds the .with_rights() function to knex's query builder.

## How to set up

To use this rightsfilter, first you will have to install it:

```
npm i jetspeed-knex-rightsfilter --save
```

Then, simply add the following lines to your Knex set up:

```javascript
const knex = require('knex')(config);

const setupRightsfilter = require('jetspeed-knex-rightsfilter');
setupRightsfilter(knex);
```

## Function definition

```javascript
with_rights(user_filed, userid, org_filed, orgcode)
```

| Argument | Description |
| --- | --- |
| perPage (`integer`, defaults to `10`) | Items to show per page. |
| page (`integer`, defaults to `1`) | Current page. |

## How to use

### Example with callback
```javascript
knex('products')
    .where('price', '<', 20)
    .paginate(15, 1, true)
    .then(paginator => {
        console.log(paginator.current_page);
        console.log(paginator.data);
    });
```

### Example with async/await
```javascript
const paginator = await knex('products')
    .where('price', '<', 20)
    .paginate(15, 1);

console.log(paginator.paginate_meta);
console.log(paginator.data);
```

## The paginator object

The function returns an object that contains the following data:

**Always returned paginate_meta:**

| Key | Value |
| --- | --- |
| per_page  | Items per page. |
| current_page | Current page number. |
| prev_page | Prev page number. |
| next_page | Next page number. |
| from | ID of the first item of the current page. |
| to | ID of the last item of the current page. |
| data | The actual data of the current page. |
