import { derived, writable } from 'svelte/store';
import { browser } from '$app/env';

const storedUserSession = JSON.parse(browser && localStorage.getItem('userSession')) || null;
export let userSession = writable(browser && storedUserSession);
userSession.subscribe((val) => browser && (localStorage.userSession = JSON.stringify(val)));

const storedCartItems = JSON.parse(browser && localStorage.getItem('cart')) || [];
export const cart = writable(browser && storedCartItems);
cart.subscribe((val) => browser && (localStorage.cart = JSON.stringify(val)));

export let totalAmountCart = derived(cart, (cart) =>
	cart.reduce((acc, obj) => acc + obj.price * obj.quantity, 0)
);

export let showCart = writable(false);
// export let userDetails = writable();
// export let cart = writable([]);
// export let userSession = writable();
export let myOrders = writable([]);
export let myAddress = writable([]);
