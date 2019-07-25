return(
  <Table responsive="md">
    <thead>
      <tr>
        <th className="cart-label"><strong>My Cart</strong></th>
        <th className="cart-label"><strong>Item</strong></th>
        <th className="cart-label"><strong>Quantity</strong></th>
        <th className="cart-label"><strong>Price</strong></th>
        <th className="cart-label"><strong>Total</strong></th>
      </tr>
    </thead>

    { // if there's no line_items in the cart
     !lineItems.length
     ?
     noLineItemsToShow
     :
    (
      <tbody>
        {lineItems.map(li => (
          <tr>
            <td>
              <Link to={`/product/${li.product_id}`}>
                <Image className="cart-thumbnail" src={process.env.PUBLIC_URL +`/images/${li.product.image}`} thumbnail />
              </Link>
            </td>
            <td><strong>{li.product.name}</strong></td>
            <td>{li.quantity}</td>
            <td>${li.product.price}</td>
            <td>${li.quantity * li.product.price}</td>
          </tr>
         ))
        }
        <tr>
          <td> </td>
          <td> </td>
          <td> </td>
          <td className="cart-label"><strong>Subtotal</strong></td>
          <td> </td>
        </tr>
        <tr>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
          <td>checkout button</td>
        </tr>
      </tbody>
    )}
  </Table>
);
