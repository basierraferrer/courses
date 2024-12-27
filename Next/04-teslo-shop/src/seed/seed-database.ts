import { initialData } from "./seed";
import prisma from '../lib/prisma';

async function main(){
    // 1. Borrar registros previos
    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();

    const {categories, products} = initialData;

    // 2. Insertar categorias
    const categoriesData = categories.map(categoryName=>({
        name: categoryName
    }));
    
    const categoriesDB = await prisma.category.createManyAndReturn({data: categoriesData});

    
    const categoriesMapped = categoriesDB.reduce((map,category)=>{
        map[category.name.toLowerCase()] = category.id;
        return map;
    }, {} as Record<string,string>)
    
    products.forEach(async ({type, images, ...rest}) => {
        // 3. Insertar Producto
        const productDB = await prisma.product.create({
            data:{
                ...rest,
                categoryId: categoriesMapped[type]
            }
        });

        // 4. Insertar imagenes de producto
        const imageData = images.map(image=>({
            url: image,
            productId: productDB.id,
        }));

        await prisma.productImage.createMany({data: imageData});
    });

    console.log('Seed ejecutado correctamente');
}

(()=>{

    if(process.env.NODE_ENV === 'production') return;

    

    main();
})();