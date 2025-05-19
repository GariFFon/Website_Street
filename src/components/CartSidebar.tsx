import React, { useState } from 'react';
import { Sheet, SheetHeader, SheetTitle, SheetFooter, SheetPortal, SheetOverlay } from "@/components/ui/sheet";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Minus, Plus, X, ShoppingBag, CreditCard, Truck, ArrowRight } from 'lucide-react';
import Button from '@/components/Button';
import { useCart, CartItem } from '@/lib/cart-context';
import { cn } from '@/lib/utils';

// Custom SheetContent without automatic close button
const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-md", 
      className)}
      {...props}
    >
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const CartSidebar = () => {
  const { 
    cartItems, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart
  } = useCart();
  
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'payment' | 'confirmation'>('cart');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  
  const handleCheckout = () => {
    setCheckoutStep('shipping');
  };
  
  const handleProceedToPayment = () => {
    setCheckoutStep('payment');
  };
  
  const handleCompleteOrder = () => {
    setIsProcessingPayment(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessingPayment(false);
      setCheckoutStep('confirmation');
      clearCart();
    }, 2000);
  };
  
  const handleBackToShopping = () => {
    setCheckoutStep('cart');
    closeCart();
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={(isOpen) => {
      if (!isOpen) {
        // Handle the close button click based on current checkout step
        if (checkoutStep === 'shipping') {
          setCheckoutStep('cart');
          return; // Prevent closing the sheet
        } else if (checkoutStep === 'payment') {
          setCheckoutStep('shipping');
          return; // Prevent closing the sheet
        } else if (checkoutStep === 'cart' || checkoutStep === 'confirmation') {
          closeCart();
          // Reset to cart view when closing after confirmation
          if (checkoutStep === 'confirmation') {
            setTimeout(() => setCheckoutStep('cart'), 300);
          }
        }
      }
    }}>
      <SheetContent className="flex flex-col w-full sm:max-w-md">
        {/* Cart View */}
        {checkoutStep === 'cart' && (
          <>
            <SheetHeader className="space-y-2 mb-4">
              <SheetTitle className="flex items-center">
                <ShoppingBag className="inline mr-2" size={20} />
                Your Cart ({totalItems})
              </SheetTitle>
            </SheetHeader>
            
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                <ShoppingBag size={64} className="mb-4 text-gray-300" />
                <h3 className="text-lg font-medium mb-1">Your cart is empty</h3>
                <p className="text-sm text-gray-500 mb-6">Add some products to your cart</p>
                <Button variant="primary" onClick={closeCart}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <>
                <ScrollArea className="flex-1 -mx-6 px-6">
                  {/* Recently added section */}
                  {cartItems.some(item => item.addedAt && Date.now() - item.addedAt < 60000) && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-500 mb-3">RECENTLY ADDED</h4>
                      <ul className="space-y-3">
                        {cartItems
                          .filter(item => item.addedAt && Date.now() - item.addedAt < 60000)
                          .sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0))
                          .slice(0, 2)
                          .map((item) => (
                            <li key={`recent-${item.id}`} className="bg-gray-50 rounded-lg p-2 flex gap-3 animate-pulse">
                              <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden">
                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-sm">{item.name}</p>
                                <p className="text-gray-500 text-xs">Just added</p>
                              </div>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )}
                  
                  {/* All items */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-3">YOUR CART</h4>
                    <ul className="divide-y">
                      {cartItems.map((item) => (
                        <CartItemRow 
                          key={item.id} 
                          item={item} 
                          onRemove={removeFromCart} 
                          onUpdateQuantity={updateQuantity}
                        />
                      ))}
                    </ul>
                  </div>
                </ScrollArea>
                
                <div className="mt-auto pt-4 border-t">
                  <div className="flex justify-between mb-2 text-sm text-gray-500">
                    <span>Subtotal</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2 text-sm text-gray-500">
                    <span>Shipping</span>
                    <span>FREE</span>
                  </div>
                  <div className="flex justify-between mb-4 font-medium">
                    <span>Total</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                
                <SheetFooter className="flex-col gap-2 sm:gap-2">
                  <Button variant="primary" className="w-full" onClick={handleCheckout}>
                    Checkout ({totalItems} {totalItems === 1 ? 'item' : 'items'})
                  </Button>
                  <Button variant="outline" className="w-full" onClick={closeCart}>
                    Continue Shopping
                  </Button>
                </SheetFooter>
              </>
            )}
          </>
        )}
        
        {/* Shipping View */}
        {checkoutStep === 'shipping' && (
          <>
            <SheetHeader className="space-y-2 mb-6">
              <SheetTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Truck className="inline mr-2" size={20} />
                  Shipping Information
                </div>
                <button
                  onClick={() => setCheckoutStep('cart')}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Close shipping form"
                >
                  <X size={20} />
                </button>
              </SheetTitle>
            </SheetHeader>
            
            <div className="flex-1">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium mb-1 block">First Name</label>
                    <input className="w-full border rounded p-2" placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Last Name</label>
                    <input className="w-full border rounded p-2" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Address</label>
                  <input className="w-full border rounded p-2" placeholder="123 Main St" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1">
                    <label className="text-sm font-medium mb-1 block">City</label>
                    <input className="w-full border rounded p-2" placeholder="New York" />
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium mb-1 block">State</label>
                    <input className="w-full border rounded p-2" placeholder="NY" />
                  </div>
                  <div className="col-span-1">
                    <label className="text-sm font-medium mb-1 block">ZIP</label>
                    <input className="w-full border rounded p-2" placeholder="10001" />
                  </div>
                </div>
              </div>
              
              <div className="border-t mt-6 pt-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Items ({totalItems})</span>
                  <span className="text-sm font-medium">₹{totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <SheetFooter className="flex-col gap-2 sm:gap-2 mt-6">
              <Button variant="primary" className="w-full" onClick={handleProceedToPayment}>
                Payment
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" className="w-full" onClick={() => setCheckoutStep('cart')}>
                Back to Cart
              </Button>
            </SheetFooter>
          </>
        )}
        
        {/* Payment View */}
        {checkoutStep === 'payment' && (
          <>
            <SheetHeader className="space-y-2 mb-6">
              <SheetTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <CreditCard className="inline mr-2" size={20} />
                  Payment Method
                </div>
                <button
                  onClick={() => setCheckoutStep('shipping')}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Close payment form"
                >
                  <X size={20} />
                </button>
              </SheetTitle>
            </SheetHeader>
            
            <div className="flex-1">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Card Number</label>
                  <input className="w-full border rounded p-2" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Expiry Date</label>
                    <input className="w-full border rounded p-2" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">CVV</label>
                    <input className="w-full border rounded p-2" placeholder="123" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Name on Card</label>
                  <input className="w-full border rounded p-2" placeholder="John Doe" />
                </div>
              </div>
              
              <div className="border-t mt-6 pt-4">
                <div className="flex justify-between mb-4 font-medium">
                  <span>Total</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <SheetFooter className="flex-col gap-2 sm:gap-2 mt-6">
              <Button 
                variant="primary" 
                className="w-full" 
                onClick={handleCompleteOrder}
                disabled={isProcessingPayment}
              >
                {isProcessingPayment ? 'Processing...' : 'Complete Order'}
              </Button>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => setCheckoutStep('shipping')}
                disabled={isProcessingPayment}
              >
                Back to Shipping
              </Button>
            </SheetFooter>
          </>
        )}
        
        {/* Confirmation View */}
        {checkoutStep === 'confirmation' && (
          <>
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Order Confirmed!</h3>
              <p className="text-gray-500 mb-6 max-w-xs">Thank you for your purchase! Your order will be shipped soon.</p>
              <Button variant="primary" onClick={handleBackToShopping}>
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

interface CartItemRowProps {
  item: CartItem;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItemRow: React.FC<CartItemRowProps> = ({ item, onRemove, onUpdateQuantity }) => {
  // Make sure we have a numeric price
  const price = typeof item.price === 'number' ? item.price : 0;
    
  const totalPrice = price * item.quantity;
  
  return (
    <li className="py-4 flex gap-4">
      <div className="h-20 w-20 bg-gray-100 rounded overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between">
          <h4 className="font-medium">{item.name}</h4>
          <button 
            onClick={() => onRemove(item.id)} 
            className="text-gray-400 hover:text-gray-600"
            aria-label="Remove item"
          >
            <X size={16} />
          </button>
        </div>
        
        <span className="text-gray-500 mt-1">₹{price.toFixed(2)}</span>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center border rounded">
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className={cn(
                "p-1 text-gray-500 hover:text-gray-700",
                item.quantity <= 1 && "opacity-50"
              )}
              disabled={item.quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className="px-2 py-1 text-sm">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="p-1 text-gray-500 hover:text-gray-700"
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>
          
          <span className="font-medium">₹{totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </li>
  );
};

export default CartSidebar;
