Add to Cart Task Using Modal

  Add to cart using Fake Store API.. There are several components on this project. Let explain on the Components 
      1.  Navbar Component
      2.  Homepage Component 
      3.  Products Component
      4.  ProductDetails Component
      5.  Cart Component
      6.  Footer Component

**Navbar Component:**
       * The Navbar displays the cart count and opens the cart modal when the cart button is clicked. 
       * The Navbar displays Welcome text shows also.
       * Pass the cart count as a prop to display the number of items in the cart.

 **Homepage Component:**
        *  The Homepage shows on online shopping related image.
        * Then shows on shopping related quoates also.

  **Porducts Component and ProductDetails Component**
       * ProductList maps over the list of products fetched from the API and renders each product as a ProductItem.
       * ProductItem displays the product's image, title, price, and an "Add to Cart" button.
       * The addToCart function is passed as a prop to the ProductItem to handle adding items to the cart.            

**  Cart Component:**
      *  The modal shows all the products added to the cart. 
      *  Each product in the modal has a "Remove from Cart" button that allows the user to remove it from the cart.
      *  The product shows also quantity, and Increment & Decrement button also.
      *  The cart component calculate the total price also
      *  The cart modal will be displayed conditionally based on whether the cart is open.
      *  The removeFromCart function updates the cart state by removing the product from the array.
        
**Handle Modal Opening and Closing:**
       * The isCartOpen state manages whether the cart modal is visible or not.
       *  When the user clicks on the "Cart" button in the Navbar, set the isCartOpen state to true to display the modal.

 **Footer:**
        * The footer component shows a thank for visiting the webpage message.

** Styling with Tailwind CSS:**
        Use Tailwind's utility classes to style components. For example:

          *  Grid layout for product list: grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4
          *  Padding, margin, and button styles: p-4, bg-blue-500, rounded
          *  Tailwind's responsive design utilities ensure the application works well on both mobile and desktop devices.    **
Conclusion:
This step-by-step guide outlines how to build a simple e-commerce-like React application using the Fake Store API. By breaking the app into components, using state management, and passing data via props, the app remains modular and maintainable. Tailwind CSS ensures that the app is responsive and easy to style.
        
