import "../styles/orders.css"
import OrderCard from "./orderCard";
import OrderHome from "./OrderHome";

function Orders() {
    const data = {
      order :     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio recusandae iusto reiciendis dolorum doloribus inventore? Eveniet ipsum repellat dicta quo veniam vitae voluptate, molestiae cumque, cupiditate accusantium incidunt, sunt obcaecati eius. Laboriosam, voluptatum excepturi soluta obcaecati voluptatem nam voluptas vel facilis suscipit atque assumenda sed deserunt qui repellat totam eveniet perferendis esse fuga ipsa necessitatibus, ipsam eum odio autem odit. Non earum vel iure, distinctio, maxime facilis ullam a dolorum cumque, quam perspiciatis sequi possimus quis omnis doloremque quas recusandae blanditiis. Sapiente illum, porro dolorem explicabo accusamus ipsum cum eum fugiat voluptatum, dolores quae et nobis iure minus reprehenderit. Deleniti?',
      username : 'full name '
    }

  return (
    <div className="order-cards-container">
      { data ? <OrderCard username ={data.username} order={data.order}/> : <OrderHome/>}
    </div>
  )
}

export default Orders;