## Project Idea
Sneaker API that collects sneaker data detailing upcoming and previous releases.

## Models
### Branding
```
const BrandSchema = new Schema({
    name: String,
    founded: Number,
    site: String,
    shoes: [{
        ref: 'Sneaker',
        //grab entire schema object
        type: Schema.Types.Mixed
    }]

});
```

### Category 

```
const CategorySchema = new Schema({
    type: String,
    style: String
});
```

### Sneaker 

```
const SneakerSchema = new Schema({
    name: String,
    releaseDate: String,
    specifics: {
        ref: 'Category',
        //grab entire schema object
        type: Schema.Types.Mixed
    },
    cost: Number,
    links: {
        original: String,
        resalePrice: String
    }
});
```