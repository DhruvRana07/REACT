import ProductCard from "./ProductCard"

function ProductsTable({data}){
    return (
            <table border="1px"  cellPadding="3px" cellSpacing="5px">
                <thead>
                    <tr style={{backgroundColor:"#91DDCF",fontSize:"18px"}}>
                        <th>Sr.no</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {}
                    {data.map((item) => {
                    return < ProductCard id={item.id} brand={item.brand} category={item.category} price={item.price}/>
                    })}
                </tbody>
            </table>
    )
}

export default ProductsTable