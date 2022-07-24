import { derived, writable } from 'svelte/store';
import { browser } from '$app/env';

const storedUserSession = JSON.parse(browser && localStorage.getItem('userSession')) || null;
export let userSession = writable(browser && storedUserSession);
userSession.subscribe((val) => browser && (localStorage.userSession = JSON.stringify(val)));

const storedCartItems = JSON.parse(browser && localStorage.getItem('cartItems')) || [];
export const cartItems = writable(browser && storedCartItems);
cartItems.subscribe((val) => browser && (localStorage.cartItems = JSON.stringify(val)));

export let totalAmountCart = derived(cartItems, (cartItems) =>
	cartItems.reduce((acc, obj) => acc + obj.price * 50 * obj.quantity, 0)
);

// export let userDetails = writable();
// export let cartItems = writable([]);
// export let userSession = writable();
export let myOrders = writable([]);
export let myAddress = writable([]);
