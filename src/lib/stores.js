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

const storedListUsers = JSON.parse(browser && localStorage.getItem('listUsers')) || [];
export const listUsers = writable(browser && storedListUsers);
listUsers.subscribe((val) => browser && (localStorage.listUsers = JSON.stringify(val)));

const storedUserOrders = JSON.parse(browser && localStorage.getItem('userOrders')) || [];
export const userOrders = writable(browser && storedUserOrders);
userOrders.subscribe((val) => browser && (localStorage.userOrders = JSON.stringify(val)));

export let showCart = writable(false);
export let myOrders = writable([]);
export let myAddress = writable([]);
